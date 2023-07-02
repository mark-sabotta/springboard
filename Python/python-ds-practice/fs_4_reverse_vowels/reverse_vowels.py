def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    result = ''
    end = ''
    a = 0
    b = len(s) -1
    vowels = ('a', 'e', 'i', 'o', 'u')
    while a < b:
        if s[a].lower() in vowels:
            while b > -1 and s[b].lower() not in vowels:
                end = s[b] + end
                b -= 1
            if s[b].lower() in vowels:
                result += s[b]
                b -= 1
                end = s[a] + end
                a += 1
        else:
            while a < len(s) and s[a].lower() not in vowels:
                result += s[a]
                a += 1
    if a == b:
        return result + s[a] + end

    return result + end
        

print(reverse_vowels("Hello!"))

print(reverse_vowels("Tomatoes"))

print(reverse_vowels("Reverse Vowels In A String"))

print(reverse_vowels("aeiou"))

print(reverse_vowels("why try, shy fly?"))