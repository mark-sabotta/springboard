"""Word Finder: finds random words from a dictionary."""
from random import choice 

class WordFinder:
    def __init__(self, file):
        """"Creates a new list of words from a file to search through for random words"""
        dictfile = open(file)

        self.words = self.parse(dictfile)
        
        return f"{len(self.words)} words read."

    def parse(dictfile):
        """Parses lines of a file into a list, ignoring beginning and trailing whitespace"""
        return [line.strip() for line in dictfile]


    def random(self):
        """Returns a random word from the list of words"""
        return choice(self.words)

class RandomWordFinder(WordFinder):
    """Special word finder that removes commented and blank lines
    
    >>> rwf = RandomWordFinder("complex.txt")
    3 words read
    
    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    """
    
    def parse(self, dictfile):
        """Parses lines of a file into a list, ignoring beginning and trailing whitespace,
        as well as commented lines and empty lines"""
        return [line.strip() for line in dictfile if line.strip() and not line.startswith('#')]