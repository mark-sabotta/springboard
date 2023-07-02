def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """

    reversed = ''
    for idx in range(len(phrase)-1, -1, -1):
        reversed = reversed + phrase[idx]
   
    return reversed


print(reverse_string('tacocat'))

print(reverse_string('mark'))

print(reverse_string('cup'))