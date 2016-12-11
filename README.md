The main motive of project “Natural Calamities Forecasting, Prediction and Analysis” is to build predictive model application, which can help people know if they are safe in a particular area. Using the application, a person can see if he is safe in a particular area, when he shares his location with the application.
 
To start with, the application takes the location of the user and gives him prediction about what kind of natural calamities can occur around him with probability and intensity of each of the calamity.
 
At the backend, the applications has a following flow:
1) The application consumes the data from data sources, cleans it and stores in a data warehouse.
2) The Predictive model takes the data to predict the natural calamity.
3) The prediction is done in the form of visualization.
 
As we will be dealing with data from different sources as well as the possibility of growing the data (Big Data)  the best tool to compute and implement these various input formats from different sources is Spark.
 
For the predictive model, we used Python’s "scikit learn" machine learning library.  The data processed (cleaning and storing) on Spark will be passed on to Predictive model for prediction. Scikit learn works in very simple steps:
 
In Scikit learn we can implement every algorithm in 4 steps:
                  1) Import the class
                  2) Instantiate the model
                  3) Furnish the model with data
                  4) Predict the response for new observations

The above steps was followed for predictive model building.
 
For the visualization purpose, Google Charts API was used since Google charts supports external JavaScript’s libraries and it is easy to use. 
