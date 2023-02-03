import re
import uuid
from datetime import datetime, timedelta

import jwt
from flask import Blueprint, current_app, jsonify, request
from werkzeug.security import check_password_hash, generate_password_hash

from db import connect_to_database

bp = Blueprint('auth', __name__)


def is_valid_email(email):
    # Regular expression to match email addresses
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if re.match(pattern, email):
        return True
    return False

def is_valid_phone_number(phone_number):
  if not isinstance(phone_number, str):
    return False
  if len(phone_number) != 10:
    return False
  if not phone_number[0] == '0':
    return False
  if not phone_number.isdigit():
    return False
  return True





@bp.route('/login', methods=['POST'])
def login():
    app = current_app
    data = request.get_json()
    conn = connect_to_database()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, public_id, nom, prenom, email, is_admin FROM user WHERE email = %s", (data['email'],))
    rows = cursor.fetchall()
    # Check if email exists in the database
    if len(rows) == 0:
        return jsonify({'message': 'Email does not exist'}), 400
    else:
        
        return  jsonify(rows)



#get the user with their ID 
@bp.route('/getUser/<user_id>', methods=['GET'])
# @auth_required
def getUserbytId(user_id):
    conn = connect_to_database()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM user WHERE id = %s", (user_id,))
    row = cursor.fetchall()
    row=row[0]
   
    if not row:
        return jsonify({'message': 'user not found '}), 404
    # output = []
    # output.append({
    #         'id': row[0],
    #         'public_id': row[1],
    #         'nom': row[2],
    #         'prenom': row[3],
    #         'email': row[4],
    #         'phone_number':row[5],
    #         'address': row[6],
    #         'is_admin': row[7],
    # })
    print(row)
    return jsonify({
            'id': row[0],
            'public_id': row[1],
            'nom': row[2],
            'prenom': row[3],
            'email': row[4],
            'phone_number':row[5],
            'address': row[6],
            'is_admin': row[7],
    })   



@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    # Check if email is valid
    if not is_valid_email(data['email']):
        return jsonify({'message': 'Invalid email address'}), 400

    # Check if email already exists in the database
    conn = connect_to_database()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM user WHERE email = %s", (data['email'],))
    rows = cursor.fetchall()
    if len(rows) > 0:
        return jsonify({'message': 'Email already exists'})

    
    cursor.execute("INSERT INTO user (public_id, nom, prenom, email,phone_number,address, is_admin) VALUES (%s, %s, %s, %s, %s, %s, %s)", (str(
        uuid.uuid4()), data['nom'], data['prenom'], data['email'],data['phone_number'],data['address'],False))
    conn.commit()
    return jsonify({'message': 'New user created'})





#a route that allows the user to edit his profile
@bp.route('/edit_profile', methods=['PUT'])
# @auth_required
def edit_profile(current_user):
    data = request.get_json()
    conn = connect_to_database()
    cursor = conn.cursor()

    # Check if email is valid
    if not is_valid_email(data['email']):
        return jsonify({'message': 'Invalid email address'}), 400

    # Check if email already exists in the database and it's not the current user's email
    cursor.execute("SELECT * FROM user WHERE email = %s", (data['email'],))
    rows = cursor.fetchall()
    if len(rows) > 0 and rows[0][0] != current_user[0]:
        return jsonify({'message': 'Email already exists'})
    
    # Check if phone number is valid
    if not is_valid_phone_number(data['phone_number']):
        return jsonify({'message': 'Invalid phone number'}), 400

    # Hash password and update user in the database
    hashed_password = generate_password_hash(data['password'], method='sha256')
    cursor.execute("UPDATE user SET nom = %s, prenom = %s,email= %s, phone_number= %s, address = %s, password = %s WHERE id = %s",(request.json['nom'], request.json['prenom'],request.json['email'], request.json['phone_number'], hashed_password, request.json['password'], current_user[0]))
    conn.commit()
    return jsonify({'message': 'Profile updated'})



