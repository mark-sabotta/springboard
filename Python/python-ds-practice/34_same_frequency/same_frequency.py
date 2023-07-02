def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    num1Str = str(num1)
    num2Str = str(num2)

    num1Dict = {}
    num2Dict = {}

    for char in num1Str:
        num1Dict[char] = num1Str.count(char)

    for char in num2Str:
        num2Dict[char] = num2Str.count(char)

    return num1Dict == num2Dict


print(same_frequency(551122, 221515))

print(same_frequency(321142, 3212215))

print(same_frequency(1212, 2211))