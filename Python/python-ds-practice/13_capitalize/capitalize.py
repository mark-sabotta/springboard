def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """

    #return phrase.capitalize()

    return phrase[0].upper() + phrase[1:len(phrase)]

print(capitalize('python'))

print(capitalize('only first word'))