"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=100):
        """Make a new generator, starting at start"""
        self.start = start
        self.val = start-1

    def generate(self):
        """Increase serial value and return it"""
        self.val += 1
        return self.val

    def reset(self):
        """Resets number to original start value"""
        self.val = self.start
        

    def __repr__(self):
        """Show representation"""
        return f"<SerialGenerator started at {self.start} and the next will be {self.val+1}>"
