# Example variables
"""
This script demonstrates the use of various data types in Python and how to check their types.
Variables:
    a (int): An example integer variable.
    b (float): An example floating point number variable.
    c (str): An example string variable.
    d (list): An example list variable.
    e (dict): An example dictionary variable.
Functions:
    my_func():
        Prints "Hello, World!" and demonstrates a list of all data types in Python.
        Also prints examples of each data type.
Notes:
    - int: Integer data type, e.g., 42
    - float: Floating point number data type, e.g., 3.14
    - str: String data type, e.g., "example"
    - list: List data type, e.g., [1, 2, 3]
    - dict: Dictionary data type, e.g., {'key': 'value'}
    - tuple: Tuple data type, e.g., (1, 2, 3)
    - set: Set data type, e.g., {1, 2, 3}
    - frozenset: Frozen set data type, e.g., frozenset([1, 2, 3])
    - bool: Boolean data type, e.g., True
    - bytes: Bytes data type, e.g., b'example'
    - bytearray: Byte array data type, e.g., bytearray(b'example')
    - memoryview: Memory view data type, e.g., memoryview(b'example')
    - complex: Complex number data type, e.g., 1 + 2j
"""
a = 10
b = 3.14
c = "Hello, World!"
d = [1, 2, 3]
e = {'key': 'value'}

# Checking the type of each variable
print(type(a))  # Output: <class 'int'>
print(type(b))  # Output: <class 'float'>
print(type(c))  # Output: <class 'str'>
print(type(d))  # Output: <class 'list'>
print(type(e))  # Output: <class 'dict'>

def my_func():
    print("Hello, World!")
    # List of all data types in Python
    data_types = [
        int,        # Integer
        float,      # Floating point number
        str,        # String
        list,       # List
        dict,       # Dictionary
        tuple,      # Tuple
        set,        # Set
        frozenset,  # Frozen set
        bool,       # Boolean
        bytes,      # Bytes
        bytearray,  # Byte array
        memoryview, # Memory view
        complex     # Complex number
    ]

    print(data_types)
    # Example of each data type
    example_data = [
        42,                 # int
        3.14,               # float
        "example",          # str
        [1, 2, 3],          # list
        {'key': 'value'},   # dict
        (1, 2, 3),          # tuple
        {1, 2, 3},          # set
        frozenset([1, 2, 3]), # frozenset
        True,               # bool
        b'example',         # bytes
        bytearray(b'example'), # bytearray
        memoryview(b'example'), # memoryview
        1 + 2j              # complex
    ]

    print(example_data)

    # Define an array (list in Python)
    array = [1, 2, 3, 4, 5]
    print(array)
    print(type(array))  # Output: <class 'list'>