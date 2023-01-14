from psycopg2 import Error

from python.connection import get_db_connection
from python.utils import get_abs_filepath_from_module

conn = get_db_connection()


def get_all_users():
    try:
        cur = conn.cursor()
        with open(get_abs_filepath_from_module(__file__, 'queries/get/get_all_users.sql'), 'r') as file:
            cur.execute(file.read())
            conn.commit()
            return cur.fetchall()

    except Exception as error:
        raise Error('ERROR while fetching all users') from error
