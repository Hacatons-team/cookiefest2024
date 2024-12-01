import sqlite3


url = "database.db"


class Database:

    def __init__(self, url):
        self.url = url

    def create_tables(self):
        with sqlite3.connect(self.url) as connection:
            cursor = connection.cursor()
            with connection:
                query = """
                CREATE TABLE IF NOT EXISTS clients(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT
                )
                """

                cursor.execute(query)

                query = """
                CREATE TABLE IF NOT EXISTS employers(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                position TEXT,
                branch_id INTEGER
                )
                """

                cursor.execute(query)

                query = """
                CREATE TABLE IF NOT EXISTS branches(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT
                )
                """

                cursor.execute(query)

                query = """
                CREATE TABLE IF NOT EXISTS sales(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_id INTEGER,
                employer_id INTEGER,
                good TEXT,
                amount INTEGER,     
                sales_amount INTEGER,
                date TEXT
                )
                """

                cursor.execute(query)

    def get_employ_sales(self, employer_id):
        with sqlite3.connect(self.url) as connection:
            cursor = connection.cursor()
            with connection:
                query = """
                SELECT * FROM sales
                WHERE employer_id = ?
                """
                cursor.execute(query, (employer_id,))
                return cursor.fetchall()
    
    def employers_top(self, branch_name):
        with sqlite3.connect(self.url) as connection:
            cursor = connection.cursor()
            with connection:
                query = """
                SELECT
                    e.name,
                    COALESCE(SUM(s.sales_amount), 0) AS sales,
                    (COALESCE(SUM(s.sales_amount), 0) * 0.15) AS bonus,
                    e.id
                FROM employers e
                LEFT JOIN sales s ON s.employer_id = e.id
                JOIN branches b ON b.id = e.branch_id
                WHERE b.name = ?
                GROUP BY e.id, e.name
                ORDER BY sales DESC
                """
                cursor.execute(query, (branch_name,))
                return cursor.fetchall()
    
    def branches_top(self):
        with sqlite3.connect(self.url) as connection:
            cursor = connection.cursor()
            with connection:
                query = """
                SELECT
                    b.name,
                    COALESCE(SUM(s.sales_amount), 0) AS sales,
                    (COALESCE(SUM(s.sales_amount), 0) * 0.15) AS bonus,
                    b.id
                FROM branches b
                JOIN employers e ON e.branch_id = b.id
                LEFT JOIN sales s ON s.employer_id = e.id
                GROUP BY b.name
                ORDER BY sales DESC
                """
                cursor.execute(query)
                return cursor.fetchall()

    def add_sale(self, client_id, employer_id, good, amount, sales_amount):
        with sqlite3.connect(self.url) as connection:
            cursor = connection.cursor()
            with connection:
                query = """
                INSERT INTO sales(client_id, employer_id, good, amount, sales_amount, date)
                VALUES (?, ?, ?, ?, ?, DATETIME('now'))
                """
                cursor.execute(query, (client_id, employer_id, good, amount, sales_amount))
