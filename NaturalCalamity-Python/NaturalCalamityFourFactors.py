
import os
import matplotlib.pyplot as plt
import subprocess
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




os.chdir("/Users/anupdudani/Desktop/others/SJSUcoursework/CMPE239/Project")
weather_df=pd.read_csv("weather_test_3.csv")
modified_weather_df = encode_feature(weather_df,"Target")
#print weather_df.head()
#print weather_df.tail()
#print modified_weather_df
#print modified_weather_df.columns.values

modified_weather_df["AirPressure"].fillna(0)
modified_weather_df["WindSpeed"].fillna(0)
modified_weather_df["Moisture"].fillna(0)
modified_weather_df["Moisure Density"].fillna(0)


modified_weather_df.info()

target= modified_weather_df["Target_param"]
y = target
#print "target", y
y=y.tolist()
print "target list", y
feature_list=[]
for a,b,c,d in modified_weather_df[["AirPressure","WindSpeed", "Moisture" ,"Moisure Density"]].itertuples(index=False):
    feature_list.append([a,b,c, d])
print feature_list[1:100]
X=feature_list
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

"""
Decision Tree Classifier
"""
clfDT = DecisionTreeClassifier(random_state=0)
clfDT.fit(X_train, y_train)
predict_values=clfDT.predict(X_test)
dt_score=r2_score(y_test,predict_values)
print dt_score

"""
SVM

"""
clfSVC = svm.SVC()
clfSVC.fit(X_train, y_train)
predict_values=clfSVC.predict(X_test)
svm_score=r2_score(y_test,predict_values)
print svm_score

"""
svm.LinearSVC()
"""
clfLSVC = svm.LinearSVC()
clfLSVC.fit(X_train, y_train)
predict_values=clfLSVC.predict(X_test)
svmlc_score=r2_score(y_test,predict_values)
print svmlc_score

"""
naive bayes

"""
clfNB=GaussianNB()
clfNB.fit(X_train, y_train)
predict_values=clfNB.predict(X_test)
nb_score=r2_score(y_test,predict_values)
print nb_score

"""
Knn classifier
"""

clfKNN=KNeighborsClassifier(n_neighbors=5)
clfKNN.fit(X_train, y_train)
predict_values=clfKNN.predict(X_test)
KNN_score=r2_score(y_test,predict_values)
print KNN_score



















