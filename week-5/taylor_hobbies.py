#    Title: taylor_hobbies.py
#    Author: anita taylor
#    Date: 09 30 2022
#    Description: Work/Off Day List


# Array of Hobbies
hobbies = ["horsing", "gardening", "cooking", "sewing", "writing"]

# For loop that iterates over hobby list & prints in console
for hobby in hobbies:
    print(hobby)

# List of Days
    days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

def output(day, hobbies):
    return "Today is {0}! Enjoy {1}!".format(day, hobbies)

# For loop that iterates over days 
for day in days:
# if/else statement displays what day it is and whether a work or off day.
    if day == "Sunday":
        print(output("Sunday", hobbies))
    elif day == "Saturday":
        print(output("Saturday", hobbies))
    else:
        print(output(day, "that grind"))
