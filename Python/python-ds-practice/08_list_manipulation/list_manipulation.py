def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """

    if command == 'add' or command == 'remove':
        if location == 'beginning' or 'end':
            if command == 'remove':
                if location == 'end':
                    return lst.pop()
                else: 
                    x = lst[0]
                    del lst[0]
                    return x
            elif location == 'end':
                return lst + [value]
            else:
                return [value] + lst
        else: return None
    else: return None
lst = [1, 2, 3]

print(list_manipulation(lst, 'remove', 'end'))

print(list_manipulation(lst, 'add', 'beginning', 5))

print(list_manipulation(lst, 'add', 'end', 20))

print(list_manipulation(lst, 'remove', 'beginning'))

