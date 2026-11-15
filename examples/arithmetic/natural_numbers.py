"""Пример урока 01.01: сложение неотрицательных целых чисел."""


def add_nonnegative(a: int, b: int) -> int:
    """Вернуть сумму двух целых неотрицательных чисел.

    Для учебного примера явно исключаем bool, float и отрицательные числа.
    """
    if type(a) is not int or type(b) is not int:
        raise TypeError("Аргументы должны иметь тип int, но не bool")
    if a < 0 or b < 0:
        raise ValueError("Аргументы должны быть неотрицательными")
    return a + b


if __name__ == "__main__":
    print(add_nonnegative(12, 8))  # 20
