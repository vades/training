import pandas as pd

file_path = 'py/datasets/personal_male.csv'
data = pd.read_csv(file_path)
data.describe()

print(data.columns)