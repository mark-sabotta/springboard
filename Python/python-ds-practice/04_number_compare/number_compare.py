def number_compare(a, b):
    """Report on whether a>b, b>a, or b==a
    
        >>> number_compare(1, 1)
        'Numbers are equal'
        
        >>> number_compare(-1, 1)
        'Second is greater'
        
        >>> number_compare(1, -2)
        'First is greater'
    """

    if type(a) != int or type(b) != int:
        return "please choose two integers"

    if a > b:
        return "First is greater"

    if b > a:
        return "Second is greater"

    if a==b:
        return 'Numbers are equal'

    return "something went wrong"

print(number_compare(2, 3))

print(number_compare(5, 1))

print(number_compare(0, 0))