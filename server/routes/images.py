import os
import uuid

from flask import Blueprint, current_app, jsonify, request
from werkzeug.utils import secure_filename

from db import connect_to_database
from helpers import auth_required

bp = Blueprint('images', __name__)

# Check if the file extension is allowed


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ['png', 'jpg', 'jpeg']

@bp.route('/announces/images', methods=['POST'])
def uploadImages():
    app = current_app
    data = request.get_json()
    conn = connect_to_database()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO images (announce_id,image) VALUES (%s, %s)", (data['announce_id'],data['image']))
    conn.commit()
    return jsonify({"message":"images Succefully Added"})


@bp.route('/announces/<announce_id>/images/<image_id>', methods=['DELETE'])

def delete_announce_image(current_user, announce_id, image_id):
    app = current_app
    conn = connect_to_database()
    cursor = conn.cursor()
    # check if the user is an admin or the owner of the announce
    if not current_user[6]:
        # get the announce from the database
        cursor.execute(
            "SELECT user_id FROM announces WHERE id = %s", (announce_id,))
        announce = cursor.fetchone()
        # if the announce doesn't exist or the user is not the owner, return an error
        if not announce or announce[0] != current_user[0]:
            return jsonify({'message': 'You are not authorized to delete images for this announce'}), 401
    # get the image from the database
    cursor.execute(
        "SELECT image FROM images WHERE id = %s", (image_id,))
    image = cursor.fetchone()
    # if the image doesn't exist, return an error
    if not image:
        return jsonify({'message': 'Image not found'}), 404
    # delete the image from the database
    cursor.execute(
        "DELETE FROM images WHERE id = %s", (image_id,))
    conn.commit()
    # delete the image from the server
    os.remove(os.path.join(app.config['UPLOAD_FOLDER'], image[0]))
    return jsonify({'message': 'Image deleted successfully'}), 200
