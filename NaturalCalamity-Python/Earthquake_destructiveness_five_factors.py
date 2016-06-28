

import os
import matplotlib.pyplot as plt
import subprocess
import MySQLdb
import pandas as pd
from sklearn.metrics import r2_score
from sklearn import datasets, linear_model
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.cross_validation import train_test_split
from sklearn.metrics import accuracy_score
import math
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeRegressor
from sklearn.preprocessing import Imputer
from sklearn import linear_model
from encoder import encode_feature
import pylab
from sklearn.cross_validation import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn import svm
from sklearn.neighbors import KNeighborsClassifier

def insertSql(sql):                           
    try:
        # Execute the SQL command
        print "Inside try"
        #print type(str(KNN_score))
        cursor.execute(sql)   
        # Commit your changes in the database
        db.commit()
    except:
        print "Inside exception"
        # Rollback in case there is any error
        db.rollback()

db = MySQLdb.connect("localhost","root","Vinay1989","mydb" )
cursor = db.cursor()
os.chdir("C:/SparkTest/NaturalCalamity")


#os.chdir("/Users/anupdudani/Desktop/others/SJSUcoursework/CMPE239/Project")
earthQuakeDestructivenessDf=pd.read_csv("destructiveNessOfEarthQuake.csv")
modified_earthquake_destructiveness_df = encode_feature(earthQuakeDestructivenessDf,"destructiveness")
modified_earthquake_destructiveness_df = encode_feature(modified_earthquake_destructiveness_df,"Population")
modified_earthquake_destructiveness_df = encode_feature(modified_earthquake_destructiveness_df,"Secondary effects")
modified_earthquake_destructiveness_df = encode_feature(modified_earthquake_destructiveness_df,"Architechture")



print modified_earthquake_destructiveness_df.info()
#print weather_df.head()
#print weather_df.tail()
#print modified_weather_df
#print modified_weather_df.columns.values
print "Classification with six Factors"


modified_earthquake_destructiveness_df["Population_param"].fillna(0)
modified_earthquake_destructiveness_df["Secondary effects_param"].fillna(0)
modified_earthquake_destructiveness_df["Architechture_param"].fillna(0)
modified_earthquake_destructiveness_df["Magnitude"].fillna(0)
modified_earthquake_destructiveness_df["Depth"].fillna(0)



target= modified_earthquake_destructiveness_df["destructiveness_param"]
y = target
#print "target", y
y=y.tolist()
#print "target list", y
feature_list=[]
print "INFO:before for loop"
for a,b,c,d,e in modified_earthquake_destructiveness_df[["Secondary effects_param", "Magnitude", "Depth","Population_param", "Architechture_param" ]].itertuples(index=False):
    feature_list.append([a,b,c,d,e])

print "INFO: after for loop"
#print feature_list[1:100]
X=feature_list
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

"""
Decision Tree Classifier
"""
clfDT = DecisionTreeClassifier(random_state=0)
clfDT.fit(X_train, y_train)
predict_values=clfDT.predict(X_test)
dt_score=r2_score(y_test,predict_values)
print "Accuracy of DecisionTree Classifier", dt_score
sql = "INSERT INTO earthquakefive(Name,pydata) VALUES ('dt_score','"+str(dt_score)+"')"
"""print dt_score"""
insertSql(sql)

"""
SVM

"""
clfSVC = svm.SVC()
clfSVC.fit(X_train, y_train)
predict_values=clfSVC.predict(X_test)
svm_score=r2_score(y_test,predict_values)
print "Accuracy of SVM", svm_score
sql = "INSERT INTO earthquakefive(Name,pydata) VALUES ('svm_score','"+str(svm_score)+"')"
"""print dt_score"""
insertSql(sql)

"""
svm.LinearSVC()
"""

clfLSVC = svm.LinearSVC()
clfLSVC.fit(X_train, y_train)
predict_values=clfLSVC.predict(X_test)
svmlc_score=r2_score(y_test,predict_values)
print "Accuracy of Linear " , svmlc_score
sql = "INSERT INTO earthquakefive(Name,pydata) VALUES ('svmlc_score','"+str(svmlc_score)+"')"
"""print dt_score"""
insertSql(sql)

"""
naive bayes

"""

clfNB=GaussianNB()
clfNB.fit(X_train, y_train)
predict_values=clfNB.predict(X_test)
nb_score=r2_score(y_test,predict_values)
print "Accuracy of Naive Bayes", nb_score
sql = "INSERT INTO earthquakefive(Name,pydata) VALUES ('nb_score','"+str(nb_score)+"')"
"""print dt_score"""
insertSql(sql)

"""
Knn classifier
"""

clfKNN=KNeighborsClassifier(n_neighbors=5)
clfKNN.fit(X_train, y_train)
predict_values=clfKNN.predict(X_test)
KNN_score=r2_score(y_test,predict_values)
print "Accuracy of KNN", KNN_score
sql = "INSERT INTO earthquakefive(Name,pydata) VALUES ('KNN_score','"+str(KNN_score)+"')"
"""print dt_score"""
insertSql(sql)



















