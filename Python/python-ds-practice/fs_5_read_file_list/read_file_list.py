def read_file_list(filename):
    """Read file and print out each line separately with a "-" before it.

    For example, if we have a file, `dogs`, containing:
        Fido
        Whiskey
        Dr. Sniffle

    This should work:

        >>> read_file_list("dogs")
        - Fido
        - Whiskey
        - Dr. Sniffle

    It will raise an error if the file cannot be found.
    """



    with open(filename) as f:
        for line in f:
            newline = line.strip()
            print(f"-{newline}")


print(read_file_list("/Users/puff/Documents/c0d3/Springboard/Python/python-ds-practice/fs_5_read_file_list/cats"))