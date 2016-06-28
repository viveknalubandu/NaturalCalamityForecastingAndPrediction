
import MySQLdb

conn = MySQLdb.connect(host= "localhost",
                  user="root",
                  passwd="Vinay1989",
                  db="mydb")
x = conn.cursor()

print conn

print x


select_query = """SELECT * FROM python_test"""

x.execute(select_query)

print x.fetchall()

'''
people = x.query(select_query)

print people

for person in people:
    print "Found %s " % person['pydata']
'''
try:
    x.execute("INSERT INTO python_test(pydata) VALUES('Jack London')")
    conn.commit()
except:
   conn.rollback()

conn.close()