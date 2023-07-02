def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """

    open = 0
    for paren in parens:
        if paren == "(":
            open+= 1
        elif paren == ")":
            open-= 1
            if open < 0:
                return False
        else:
            return f"{paren} is not a valid symbol"
    if open == 0:
        return True

    return False


print(valid_parentheses("()"))

print(valid_parentheses("()()"))

print(valid_parentheses("(()())"))

print(valid_parentheses(")()"))

print(valid_parentheses("())"))

print(valid_parentheses("((())"))

print(valid_parentheses(")()("))