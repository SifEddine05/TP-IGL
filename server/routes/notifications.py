from flask import Blueprint, jsonify,request

from db import connect_to_database
from helpers import auth_required

bp = Blueprint('notifications', __name__)


@bp.route('/notifications', methods=['GET'])
@auth_required
def get_notifications(current_user):
    conn = connect_to_database()
    cursor = conn.cursor()
    # get the notifications from the database
    cursor.execute(
        "SELECT * FROM notifications WHERE user_id = %s", (current_user[0],))
    rows = cursor.fetchall()
    # converting the query objects to list of jsons
    output = []
    for row in rows:
        # appending the user data json to the response list
        output.append({
            'id': row[0],
            'user_id': row[1],
            'announce_id': row[2],
            'type': row[3],
            'seen': row[4],
            'created_at': row[5],
        })
    return jsonify({'notifications': output})



@bp.route('/sendNotifications', methods=['POST'])
# @auth_required
def sendNotifications():
    data = request.get_json()
    print("*****************************")
    print("before data ")
    print("*****************************")
    
    # data = request.get_json()
    # print("*****************************")
    print(data['type'])
    # print("*****************************")
    # conn = connect_to_database()
    # cursor = conn.cursor()
    # check if the notification exists
    # cursor.execute("SELECT * FROM notifications WHERE id = %s",
    #                (notification_id,))
    # notification = cursor.fetchone()
    # if not notification:
    #     return jsonify({'message': 'Notification not found'}), 404
    # # check if the user is the owner of the notification
    # if notification[1] != current_user[0]:
    #     return jsonify({'message': 'You are not allowed to do this'}), 401
    # # change the seen status of the notification
    # cursor.execute(
    #     "UPDATE notifications SET seen = %s WHERE id = %s", (True, notification_id))
    # conn.commit()
    # cursor.execute("INSERT INTO notifications (user_id, announce_id, type, price,message,phone) VALUES (%s, %s, %s, %s, %s, %s)", (request.json['user_id'], request.json['announce_id'], request.json['type'],request.json['price'],request.json['message'],request.json['phone'],))
    # conn.commit()
    return jsonify({'message': 'Notification has been added'}), 200


        # cursor.execute("INSERT INTO notifications (user_id, announce_id, type) VALUES (%s, %s, %s)",
