import time

from psycopg2 import Error

from python.connection import get_db_connection
from python.utils import get_abs_filepath_from_module

conn = get_db_connection()


def create_user(first_name: str):
    try:

        cur = conn.cursor()
        with open(get_abs_filepath_from_module(__file__, 'queries/post/create_user.sql'), 'r') as file:
            file_read = file.read().format(first_name)
            cur.execute(file_read, None)
            conn.commit()

    except Exception as error:
        raise Error('ERROR: cant insert user') from error


def create_todo(priority: str, todoName: str, dueDate: time):
    try:
        cur = conn.cursor()
        with open(get_abs_filepath_from_module(__file__, 'queries/post/create_todo.sql'), 'r') as file:
            cur.execute(file.read(),
                        (priority, todoName, dueDate))
            conn.commit()

    except Exception as error:
        raise Error('ERROR: cant insert todo') from error
