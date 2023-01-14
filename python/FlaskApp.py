import psycopg2
from flask import Flask, render_template, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

from python.getters import get_all_users
from python.inserters import create_user

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/student'

db = SQLAlchemy(app)


def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='student',
                            user='postgres',
                            password='password')
    return conn


class user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)




'''class todo(db.Model):
    todo_priority = db.Column(db.String())
    todo_name = db.Column(db.String())
    todo_dueDate = db.Column(db.String())

    def __init__(self, todo_priority, todo_name, todo_dueDate):
        self.todo_priority = todo_priority
        self.todo_name = todo_name
        self.todo_dueDate = todo_dueDate'''


@app.route("/api")
def show_all():
    conn = get_db_connection()

    cur = conn.cursor()

    # Get
    users = get_all_users()

    # Post
    create_user(first_name='Denise')

    # create_todo("High", "Stuff", 'Thu, 28 Jun 2001 14:17:15 +0000')

    cur.close()
    conn.close()

    return render_template('base.html', Users=users)


@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    #person = user(name=request_data['name'])
    print()
    create_user(first_name=request_data['name'])

    return {'201': 'student created successfully'}


@app.route("/test", methods=['POST'])
def test():
    request_method = request.method
    return render_template('hello.html')


@app.route("/users")
def users():
    users = get_all_users()
    user_list = []

    for user in users:
        user_list.append({'name': user[1], 'id': user[0]})

    return jsonify({'users': user_list})


if __name__ == '__main__':
    app.debug = True
    app.run()
