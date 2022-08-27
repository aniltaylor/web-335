Python 3.10.4 (tags/v3.10.4:9d38120, Mar 23 2022, 23:13:41) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
#    Title: taylor_calculator.py
#    Author: Anita Taylor
#    Date: AUG 27 2022
#    Description: Python Calculator

# Functions with 2 params
def add (x, y):
    return x + y

def subtract (x, y):
    return x - y

def divide (x, y):
    return x / y

def multiply (x, y):
    return x * y

#Variables to test functions
num1 = 4
num2 = 10
num3 = 6
num4 = 8
num5 = 2

#Variables that hold the values 
add_total = add(num1, num1)
sub_total = subtract(num2, num3)
div_total = divide(num4, num5)
mul_total = multiply(num2, num5)

#Variable that hold string output
output = "4 + 4 is {0}".format(add_total)
output = "10 - 6 is {0}".format(sub_total)
output = "8 / 2 is {0}".format(div_total)
output = "10 * 2 is {0}".format(mul_total)

print(output)

