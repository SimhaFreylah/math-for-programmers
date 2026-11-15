"""Автоматические тесты для первого учебного примера."""

import pytest

from examples.arithmetic.natural_numbers import add_nonnegative


def test_addition() -> None:
    assert add_nonnegative(12, 8) == 20
    assert add_nonnegative(0, 0) == 0
    assert add_nonnegative(10**20, 5) == 10**20 + 5


@pytest.mark.parametrize("a,b", [(-1, 2), (1, -2)])
def test_negative_values(a: int, b: int) -> None:
    with pytest.raises(ValueError):
        add_nonnegative(a, b)


@pytest.mark.parametrize("a,b", [(True, 1), (1.5, 2), ("3", 4)])
def test_invalid_types(a: object, b: object) -> None:
    with pytest.raises(TypeError):
        add_nonnegative(a, b)
