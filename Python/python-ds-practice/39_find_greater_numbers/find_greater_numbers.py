def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """
    total = 0
    afterMe = {}
    if len(nums) < 2:
        return 0
    for idx in range(len(nums)-1, -1, -1):
        for key in afterMe:
            if key > nums[idx]:
                total+=afterMe[key]
        if nums[idx] in afterMe:
            afterMe[nums[idx]]+=1
        else:
            afterMe[nums[idx]] = 1

    return total



print(find_greater_numbers([1, 2, 3]))

print(find_greater_numbers([6, 1, 2, 7]))

print(find_greater_numbers([5, 4, 3, 2, 1]))

print(find_greater_numbers([]))