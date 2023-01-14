import psycopg2


def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='student',
                            user='postgres',
                            password='password')
    return conn