def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """

    strippedPhrase = phrase.strip()
    result = ''
    result = result + strippedPhrase[0].upper()
    for idx in range(len(phrase)):
        if idx == 0:
            continue
        if strippedPhrase[idx-1] == ' ':
            result = result + strippedPhrase[idx].upper()
        else:
            result = result + strippedPhrase[idx].lower()
    return result

print(titleize('this is awesome'))

print(titleize('oNLy cAPITALIZe fIRSt'))
