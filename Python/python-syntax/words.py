def print_upper_words(words, starts = None):
    """takes lists of lowercase words and makes them uppercase
    users may include a list of allowable first letters for the printed words"""
    okay = []
    if starts != None:
        for letter in starts:
            if type(letter) != str or len(letter) != 1:
                return f"Invalid letter {letter}"
            okay.append(letter.upper())
    for word in words:
        word = word.upper()
        if starts == None:
            print(word)
        if word[0] in okay:
            print(word)


print_upper_words(["gleeok", "Zelda", "enteRtain", "witness"])

print_upper_words(["gleeok", "Zelda", "enteRtain", "witness"], ["e"])

print_upper_words(["gleeok", "Zelda", "enteRtain", "witness"], ["g", "w"])