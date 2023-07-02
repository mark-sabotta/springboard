def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    phrase = phrase.replace(" ", "")
    phrase = phrase.lower()
    a = 0
    b = len(phrase) - 1

    while(b > a):
        if phrase[a] != phrase[b]:
            return False
        b= b-1
        a= a+1
    return True

print(is_palindrome("tacocat"))

print(is_palindrome("ta coc at"))

print(is_palindrome(""))

print(is_palindrome("t"))

print(is_palindrome("tacocat"))

print(is_palindrome("norm"))