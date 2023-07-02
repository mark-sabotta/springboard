def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """

    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


    
    if type(day_of_week) != int or day_of_week < 1 or day_of_week > 7:
        return "please choose a number between 1 and 7"

    return days[day_of_week-1]



print(weekday_name(4))

print(weekday_name('cheese'))

print(weekday_name(0))

print(weekday_name(1))