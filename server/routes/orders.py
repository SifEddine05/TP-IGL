from flask import Blueprint, jsonify,current_app,request
from db import connect_to_database
from helpers import auth_required

bp = Blueprint('orders', __name__)


@bp.route('/orders', methods=['GET'])
@auth_required
def get_orders(current_user):
    conn = connect_to_database()
    cursor = conn.cursor()
    # get the orders from the database
    cursor.execute("SELECT * FROM orders WHERE user_id = %s",
                   (current_user[0],))
    rows = cursor.fetchall()
    # converting the query objects to list of jsons
    output = []
    for row in rows:
        # appending the user data json to the response list
        output.append({
            'id': row[0],
            'user_id': row[1],
            'announce_id': row[2],
            'created_at': row[3],
        })
    return jsonify({'orders': output})





@bp.route('/announces/<announce_id>/place-order', methods=['POST'])
def place_order(announce_id):
 
    app = current_app
    data = request.get_json()

    conn = connect_to_database()
    cursor = conn.cursor()
    # check if the announce exists
    cursor.execute("SELECT * FROM announces WHERE id = %s", (announce_id,))
    announce = cursor.fetchone()
    if not announce:
        return jsonify({'message': 'Announce not found'}), 404
    # check if the user is the owner of the announce
    if announce[1] == data['user_id']:
        return jsonify({'message': 'You are not allowed to place an order for this property'}), 401
    # check if the user already placed an order for the announce
    cursor.execute("SELECT * FROM orders WHERE user_id = %s AND announce_id = %s",
                   (data['user_id'], announce_id))
    order = cursor.fetchone()
    if order:
        return jsonify({'message': 'You already placed an order'}), 400
    # place the order
    cursor.execute("INSERT INTO orders (user_id, announce_id,message,type) VALUES (%s, %s, %s,%s)",
                   (data['user_id'], announce_id, data['message'],data['type']))
    conn.commit()
    return jsonify({'message': 'Order has been placed'}), 201





@bp.route('/orders/<order_id>/accept', methods=['POST'])
def accept_order(current_user, order_id):
    conn = connect_to_database()
    cursor = conn.cursor()
    # check if the order exists
    cursor.execute("SELECT * FROM orders WHERE id = %s", (order_id,))
    order = cursor.fetchone()
    if not order:
        return jsonify({'message': 'Order not found'}), 404
    # check if the user is the owner of the announce
    cursor.execute("SELECT * FROM announces WHERE id = %s", (order[2],))
    announce = cursor.fetchone()
    if announce[1] != current_user[0]:
        return jsonify({'message': 'You are not allowed to do this'}), 401
    # accept the order
    cursor.execute(
        "UPDATE orders SET status = %s WHERE id = %s", (1, order_id))
    conn.commit()
    # create a notification for the user and make sure it's not a notification for the user who created the announce and the user didn't place an order for his own announce before and the notification should be created only once
    cursor.execute("SELECT * FROM notifications WHERE user_id = %s AND announce_id = %s AND type = %s",
                   (order[1], order[2], 'accept'))
    notification = cursor.fetchone()
    if not notification and order[1] != current_user[0]:
        cursor.execute("INSERT INTO notifications (user_id, announce_id, type) VALUES (%s, %s, %s)",
                       (order[1], order[2], 'accept'))
        conn.commit()
        return jsonify({'message': 'Order has been accepted'}), 200
    return jsonify({'message': 'Order has been accepted'}), 200


@bp.route('/orders/<order_id>/reject', methods=['POST'])
def reject_order(current_user, order_id):
    conn = connect_to_database()
    cursor = conn.cursor()
    # check if the order exists
    cursor.execute("SELECT * FROM orders WHERE id = %s", (order_id,))
    order = cursor.fetchone()
    if not order:
        return jsonify({'message': 'Order not found'}), 404
    # check if the user is the owner of the announce
    cursor.execute("SELECT * FROM announces WHERE id = %s", (order[2],))
    announce = cursor.fetchone()
    if announce[1] != current_user[0]:
        return jsonify({'message': 'You are not allowed to do this'}), 401
    # reject the order
    cursor.execute(
        "UPDATE orders SET status = %s WHERE id = %s", (-1, order_id))
    conn.commit()
    # create a notification for the user and make sure it's not a notification for the user who created the announce and the user didn't place an order for his own announce before and the notification should be created only once
    cursor.execute("SELECT * FROM notifications WHERE user_id = %s AND announce_id = %s AND type = %s",
                   (order[1], order[2], 'reject'))
    notification = cursor.fetchone()
    if not notification and order[1] != current_user[0]:
        cursor.execute("INSERT INTO notifications (user_id, announce_id, type) VALUES (%s, %s, %s)",
                       (order[1], order[2], 'reject'))
        conn.commit()
        return jsonify({'message': 'Order has been rejected'}), 200
    return jsonify({'message': 'Order has been rejected'}), 200


@bp.route('/received-orders/<user_id>', methods=['GET'])
def get_received_orders(user_id):
    conn = connect_to_database()
    cursor = conn.cursor()
    # get the orders placed on the user's announces
    cursor.execute("SELECT * FROM announces WHERE user_id = %s", (user_id,))
    announces = cursor.fetchall()
    output = []
    for announce in announces:
        cursor.execute(
            "SELECT * FROM orders WHERE announce_id = %s", (announce[0],))
        orders = cursor.fetchall()
        for order in orders:
            # get the  information of the user who placed the order
            cursor.execute(
                "SELECT * FROM user WHERE id = %s", (order[1],))
            user = cursor.fetchone()
            order_data = {
                'id': order[0],
                'user_id': order[1],
                'announce_id': order[2],
                'status': order[3],
                'message': order[4],
                'user_name': user[2],
                'user_prenom': user[3],
                'user_email': user[4],
                'user_phone': user[5],
                'user_address': user[6],
            }
            output.append(order_data)
    return jsonify({'orders': output})