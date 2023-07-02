def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """

    return word.count(letter.lower()) + word.count(letter.upper())
    #I believe this goes over each element twice which should be the same as making word and letter all lowercase then searching

print(single_letter_count('Hello World', 'h'))
        
print(single_letter_count('Hello World', 'z'))
        
print(single_letter_count("Hello World", 'l'))

print(single_letter_count('HEhEheHE', 'H'))