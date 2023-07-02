def two_oldest_ages(ages):
    """Return two distinct oldest ages as tuple (second-oldest, oldest)..

        >>> two_oldest_ages([1, 2, 10, 8])
        (8, 10)

        >>> two_oldest_ages([6, 1, 9, 10, 4])
        (9, 10)

    Even if more than one person has the same oldest age, this should return
    two *distinct* oldest ages:

        >>> two_oldest_ages([1, 5, 5, 2])
        (2, 5)
    """

    oldest = 0
    second = 0

    for num in ages:
        if num > oldest:
            second = oldest
            oldest = num
        elif num > second and num != oldest:
            second = num
    return (second, oldest)

print(two_oldest_ages([1, 2, 10, 8]))

print(two_oldest_ages([6, 1, 9, 10, 4]))

print(two_oldest_ages([1, 5, 5, 2]))