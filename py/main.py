import pandas as pd
from sklearn.tree import DecisionTreeRegressor

#https://www.kaggle.com/neuromusic/avocado-prices
file_path = 'py/datasets/avocado.csv'
data = pd.read_csv(file_path)
data.describe()

print(data.columns)

# Prediction target
# By convention, the prediction target is called 'y'
y = data.AveragePrice
#print(y)

# Choosing "Features"
# By convention, this data is called 'X'.
data_features = ['AveragePrice', 'TotalVolume','LargeBags']
X = data[data_features]
print(X.describe())
#print(X.head())

# Define model. Specify a number for random_state to ensure same results each run
data_model = DecisionTreeRegressor(random_state=1)

# Fit model
data_model.fit(X, y)

print("Making predictions for the following 5 houses:")
print(X.head())
print("The predictions are")
print(data_model.predict(X.head()))