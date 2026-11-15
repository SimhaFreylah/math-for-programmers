---
title: Чётные и нечётные числа
description: Пошаговый урок по чётности целых чисел, доказательствам, разбиению на пары, интерактивной лаборатории и проверке чётности в Python.
---

# 01.02. Чётные и нечётные числа

*Раздел I. Арифметика · Урок 2 · Начальный уровень · Предварительные знания: урок 01.01 «Натуральные и целые числа»*

В первом уроке мы познакомились с натуральными числами $\mathbb N$ и целыми числами $\mathbb Z$. Теперь изучим **одно важное свойство целых чисел — чётность**. Сначала разберём математику, затем проверим числа в интерактивной лаборатории и только после этого запишем тот же алгоритм на Python.

!!! info "После урока вы сможете"
    Отличать чётные числа от нечётных, в том числе среди отрицательных; понимать формулы $n=2k$ и $n=2k+1$; объяснять, почему ноль чётный; определять чётность суммы и произведения; применять оператор `%`, сравнение `==` и конструкцию `if` / `else` в Python.

---

## 1. Назначение и практический смысл темы

Представим, что у нас **$12$ карандашей** и мы хотим разложить их попарно. Получится $6$ полных пар, и ни одного карандаша не останется:

$$
12=2\cdot 6.
$$

Если взять **$13$ карандашей**, получится $6$ полных пар и один лишний:

$$
13=2\cdot 6+1.
$$

Это и есть различие между чётным и нечётным количеством: **можно ли разделить предметы на пары без остатка?**

Но чётность — свойство не только положительных чисел. Целые числа могут быть отрицательными и равными нулю. Например, $-8$ — чётное число, а $-7$ — нечётное. Ниже докажем, почему это так.

Для программиста проверка чётности полезна, когда нужно чередовать действия, распределять элементы по двум группам, выбирать каждую вторую позицию или создавать повторяющиеся узоры.

## 2. Математические определения и обозначения

### 2.1. Чётные числа

**Чётным** называют целое число, которое можно представить в виде произведения двух целых чисел, одно из которых равно $2$:

$$
\boxed{n=2k,\qquad k\in\mathbb Z.}
$$

Здесь $n$ — изучаемое целое число, $k$ — некоторое целое число, а $\mathbb Z$ — множество целых чисел.

Примеры:

$$
\begin{aligned}
8&=2\cdot 4,\\
0&=2\cdot 0,\\
-6&=2\cdot(-3).
\end{aligned}
$$

Значит, **$8$, $0$ и $-6$ — чётные числа**.

Множество всех чётных целых чисел обозначим в этом уроке через $E$ (от английского *even*):

$$
E=\{\ldots,-6,-4,-2,0,2,4,6,\ldots\}.
$$

### 2.2. Нечётные числа

**Нечётным** называют целое число, которое можно представить в виде:

$$
\boxed{n=2k+1,\qquad k\in\mathbb Z.}
$$

Примеры:

$$
\begin{aligned}
9&=2\cdot4+1,\\
1&=2\cdot0+1,\\
-5&=2\cdot(-3)+1.
\end{aligned}
$$

Следовательно, **$9$, $1$ и $-5$ — нечётные числа**.

Множество всех нечётных целых чисел обозначим через $O$ (от английского *odd*):

$$
O=\{\ldots,-5,-3,-1,1,3,5,\ldots\}.
$$

!!! note "Обозначения $E$ и $O$"
    Это удобные обозначения для текущего урока, а не единственные общепринятые буквы. Главное — формулы $2k$ и $2k+1$.

### 2.3. Почему ноль — чётное число?

Чётность определяется **по формуле**, а не по тому, положительно ли число:

$$
0=2\cdot0.
$$

Число $0$ удовлетворяет определению чётного числа при $k=0$. Поэтому:

$$
\boxed{0\in E.}
$$

Ноль не является ни положительным, ни отрицательным числом, **но является чётным**. Это разные свойства.

### 2.4. Для каких чисел определена чётность?

В этом курсе понятия «чётное» и «нечётное» применяются **только к целым числам**:

$$
\boxed{n\in\mathbb Z.}
$$

Например, число $4$ можно назвать чётным, а $5$ — нечётным. Число $2{,}5$ не является целым, поэтому к нему не применяют классификацию «чётное или нечётное».

### 2.5. Математические обозначения

| Запись | Как читать | Что означает |
|---|---|---|
| $n\in\mathbb Z$ | $n$ принадлежит $\mathbb Z$ | $n$ — целое число |
| $n=2k$ | $n$ равно двум $k$ | $n$ чётное при целом $k$ |
| $n=2k+1$ | $n$ равно двум $k$ плюс один | $n$ нечётное при целом $k$ |
| $2\mid n$ | два делит $n$ | $n$ делится на $2$ без остатка |
| $2\nmid n$ | два не делит $n$ | $n$ не делится на $2$ без остатка |
| $n\in E$ | $n$ принадлежит $E$ | $n$ чётное |
| $n\in O$ | $n$ принадлежит $O$ | $n$ нечётное |

Знак $\mid$ в записи $2\mid n$ обозначает **делимость**: существует целое $k$, для которого $n=2k$.

## 3. Теория, свойства и доказательства

### 3.1. Любое целое число либо чётное, либо нечётное

Если разделить **целое число** $n$ на $2$ с остатком, остаток всегда будет равен **$0$ или $1$**. Для любого $n\in\mathbb Z$ существуют целые $q$ и $r$, такие что:

$$
\boxed{n=2q+r,\qquad r\in\{0,1\}.}
$$

- Если $r=0$, то $n=2q$ — чётное число.
- Если $r=1$, то $n=2q+1$ — нечётное число.

Например:

$$
12=2\cdot6+0,\qquad 13=2\cdot6+1.
$$

И для отрицательных чисел правило сохраняется:

$$
-6=2\cdot(-3)+0,\qquad -5=2\cdot(-3)+1.
$$

В частности, **каждое целое число попадает ровно в одну из двух групп**:

$$
\boxed{\mathbb Z=E\cup O,\qquad E\cap O=\varnothing.}
$$

Обозначение $\cup$ означает *объединение множеств*, а $\cap$ — *пересечение*. Символ $\varnothing$ означает пустое множество.

**Почему число не может одновременно быть чётным и нечётным?** Предположим, $n=2a$ и одновременно $n=2b+1$ при целых $a,b$. Тогда $2(a-b)=1$. Но левая часть делится на $2$, а $1$ — нет. Противоречие.

### 3.2. Прибавление единицы меняет чётность

Если число чётное, $n=2k$, то:

$$
n+1=2k+1,
$$

то есть следующее число нечётное.

Если число нечётное, $n=2k+1$, то:

$$
n+1=2k+2=2(k+1),
$$

то есть следующее число чётное.

**Вывод:** при движении по целым числам чётные и нечётные чередуются:

$$
\cdots,-4,-3,-2,-1,0,1,2,3,4,\cdots
$$

### 3.3. Чётность суммы

Рассмотрим все возможные сочетания.

**Чётное + чётное:** пусть $a=2k$, $b=2m$. Тогда:

$$
a+b=2k+2m=2(k+m).
$$

Сумма снова чётная.

**Чётное + нечётное:** пусть $a=2k$, $b=2m+1$. Тогда:

$$
a+b=2(k+m)+1.
$$

Сумма нечётная.

**Нечётное + нечётное:** пусть $a=2k+1$, $b=2m+1$. Тогда:

$$
a+b=2(k+m+1).
$$

Сумма чётная.

| Первое слагаемое | Второе слагаемое | Сумма | Пример |
|---|---|---|---|
| Чётное | Чётное | **Чётная** | $6+8=14$ |
| Чётное | Нечётное | **Нечётная** | $6+7=13$ |
| Нечётное | Чётное | **Нечётная** | $5+8=13$ |
| Нечётное | Нечётное | **Чётная** | $5+7=12$ |

### 3.4. Чётность произведения

Если хотя бы один множитель чётный, произведение чётное. Действительно, если $a=2k$, то для любого целого $b$:

$$
ab=(2k)b=2(kb).
$$

Если оба множителя нечётные, то:

$$
\begin{aligned}
a&=2k+1,\quad b=2m+1,\\
ab&=(2k+1)(2m+1)\\
  &=4km+2k+2m+1\\
  &=2(2km+k+m)+1.
\end{aligned}
$$

Произведение нечётное.

**Правило:** произведение нечётно только тогда, когда **все множители нечётны**.

### 3.5. Отрицательное число имеет ту же чётность

Если $n=2k$, то $-n=2(-k)$ — тоже чётное.

Если $n=2k+1$, то:

$$
-n=-2k-1=2(-k-1)+1,
$$

поэтому $-n$ тоже нечётное.

Например, $8$ и $-8$ чётные, а $7$ и $-7$ нечётные.

## 4. Пошаговые примеры вычислений

### Пример 1. Проверяем число $18$

**Шаг 1.** Пробуем представить $18$ как $2k$.

**Шаг 2.** Получаем $18=2\cdot9$.

**Шаг 3.** Число $9$ целое, поэтому условие определения выполняется.

**Ответ:** $18$ — чётное число.

### Пример 2. Проверяем число $17$

**Шаг 1.** При разделении $17$ на пары получаем $8$ полных пар.

**Шаг 2.** Остаётся ещё одна единица:

$$
17=2\cdot8+1.
$$

**Ответ:** $17$ — нечётное число.

### Пример 3. Проверяем отрицательное число $-7$

**Шаг 1.** Используем формулу нечётного числа $n=2k+1$.

**Шаг 2.** Выбираем целое $k=-4$:

$$
-7=2\cdot(-4)+1.
$$

**Шаг 3.** Равенство верно: $-8+1=-7$.

**Ответ:** $-7$ — нечётное число.

### Пример 4. Проверяем ноль

$$
0=2\cdot0.
$$

Следовательно, **$0$ — чётное число** независимо от того, что оно не является положительным или отрицательным.

### Пример 5. Определяем чётность суммы без вычисления

Нужно определить, чётно ли число $123+457$.

**Шаг 1.** $123$ нечётное.

**Шаг 2.** $457$ нечётное.

**Шаг 3.** Сумма двух нечётных чисел чётная.

Проверяем: $123+457=580=2\cdot290$.

**Ответ:** сумма чётная.

### Пример 6. Определяем чётность произведения

Рассмотрим $15\cdot24$.

**Шаг 1.** $15$ нечётное, а $24$ чётное.

**Шаг 2.** Если хотя бы один множитель чётный, произведение чётно.

Проверка: $15\cdot24=360=2\cdot180$.

**Ответ:** произведение чётное.

## 5. Графическая и интерактивная визуализация

### Лаборатория «Чётное или нечётное?»

Изменяйте целое число от $-20$ до $20$. Лаборатория покажет:

- принадлежность числа к чётным или нечётным;
- его положение на числовой прямой;
- разложение $n=2q+r$, где остаток $r$ равен $0$ или $1$;
- наглядное разбиение на пары и соответствующую программу Python.

<div class="parity-lab" data-parity-lab>
  <div class="parity-lab__top">
    <label for="parity-number">Выберите целое число <strong>n</strong></label>
    <div class="parity-lab__controls">
      <input type="range" min="-20" max="20" step="1" value="11" data-range aria-label="Число n">
      <input id="parity-number" type="number" min="-20" max="20" step="1" value="11" data-number aria-label="Значение n">
    </div>
  </div>
  <div class="parity-lab__answer" aria-live="polite">
    <div class="parity-lab__result" data-result>11 — нечётное число</div>
    <div class="parity-lab__formula" data-formula>11 = 2 · 5 + 1</div>
    <div class="parity-lab__explanation" data-explanation>Пять полных пар и один непарный элемент</div>
  </div>
  <div class="parity-lab__axis-holder">
    <svg viewBox="0 0 760 105" data-axis role="img" aria-label="Числовая прямая от минус двадцати до двадцати"></svg>
  </div>
  <div class="parity-lab__pairs-title">Разбиение на пары</div>
  <div class="parity-lab__pairs" data-pairs aria-live="polite"></div>
  <p class="parity-lab__caption">Для отрицательного числа показываем пары по его абсолютной величине: у числа и противоположного ему числа одинаковая чётность.</p>
  <div class="parity-lab__tools">
    <strong>Та же проверка на Python</strong>
    <button type="button" data-copy>Скопировать код</button>
  </div>
  <pre class="parity-lab__code" data-code>number = 11
remainder = number % 2
if remainder == 0:
    print("Чётное число")
else:
    print("Нечётное число")</pre>
  <div class="parity-lab__bottom">
    <button type="button" data-reset>Вернуть 11</button>
    <span data-output>Результат программы: Нечётное число</span>
  </div>
</div>

!!! question "Эксперимент"
    1. Установите $n=0$. Почему лаборатория показывает «чётное»?
    2. Сравните $n=7$ и $n=-7$. Изменилась ли чётность?
    3. Установите $n=-5$. Почему в разложении появляется $-3$: $-5=2\cdot(-3)+1$?
    4. Сравните соседние числа $10$ и $11$. Что произошло с остатком от деления на $2$?

## 6. Реализация математических операций на Python

В предыдущем уроке мы научились связывать имена переменных с целыми числами, использовать `=` для присваивания и `print()` для вывода результата. Теперь применим эти знания для проверки чётности.

### 6.1. Целое число и тип `int`

Числа $11$, $0$ и $-7$ принадлежат множеству целых чисел $\mathbb Z$. В Python обычные целые числа имеют тип **`int`**.

```python
number = -7
print(number)        # -7
print(type(number))  # <class 'int'>
```

**Пошагово:**

1. `number` — имя переменной.
2. `=` связывает имя со значением `-7`.
3. `print(number)` выводит число `-7`.
4. `type(number)` сообщает тип значения: `int`.

### 6.2. Оператор `%`: остаток от деления

В Python символ `%` означает **остаток от деления**. Для целого числа `number` выражение `number % 2` даёт остаток `0` или `1`.

```python
number = 18
remainder = number % 2
print(remainder)  # 0
```

**Объяснение:** $18=2\cdot9+0$. Поэтому результат `18 % 2` равен `0`, а число $18$ чётное.

Теперь самостоятельный пример с нечётным числом:

```python
number = 17
remainder = number % 2
print(remainder)  # 1
```

Поскольку $17=2\cdot8+1$, остаток равен единице.

!!! warning "Не путайте две разные операции"
    В математике **модуль числа** записывают $|n|$; в Python ему соответствует `abs(n)`. Оператор `%` **не вычисляет модуль числа** — он возвращает остаток от деления. В данном уроке используем `%` именно для проверки чётности.

### 6.3. Отрицательные числа и остаток

В Python при делении на положительное число $2$ остаток тоже принадлежит $\{0,1\}$:

```python
number = -5
remainder = number % 2
print(remainder)  # 1
```

Это соответствует математическому разложению:

$$
-5=2\cdot(-3)+1.
$$

А для отрицательного чётного числа:

```python
number = -6
remainder = number % 2
print(remainder)  # 0
```

Потому что $-6=2\cdot(-3)+0$.

### 6.4. Проверка равенства: `==`

Не следует путать **присваивание** `=` и **сравнение** `==`.

```python
remainder = 0
print(remainder == 0)  # True
print(remainder == 1)  # False
```

- `remainder = 0` присваивает значение.
- `remainder == 0` спрашивает: «Равно ли значение нулю?»
- `True` означает «истина», а `False` — «ложь».

Результат сравнения имеет тип `bool`. Его подробное изучение будет продолжено в разделе о логических выражениях.

### 6.5. Первая программа с условием `if` / `else`

Теперь объединим вычисление остатка и проверку условия:

```python
number = 11
remainder = number % 2

if remainder == 0:
    print("Чётное число")
else:
    print("Нечётное число")
```

**Результат:**

```text
Нечётное число
```

Разбираем программу **строка за строкой**.

**Строка 1 — `number = 11`.** Создаём привязку имени `number` к целому числу $11$.

**Строка 2 — `remainder = number % 2`.** Вычисляем остаток от деления $11$ на $2$. Он равен $1$, поэтому переменная `remainder` получает значение `1`.

**Строка 3 — `if remainder == 0:`.** Слово `if` читается «если». Python проверяет условие `remainder == 0`. Сейчас это ложь: $1\ne0$.

**Строка 4 — `print("Чётное число")`.** Эта команда выполняется **только если условие истинно**. В нашем случае она пропускается.

**Строка 5 — `else:`.** Слово `else` означает «иначе». Если условие `if` ложно, выполнение переходит сюда.

**Строка 6 — `print("Нечётное число")`.** Python выводит текст `Нечётное число`.

!!! tip "Почему важны двоеточие и отступы?"
    Двоеточие `:` начинает блок инструкций после `if` или `else`. Четыре пробела перед `print(...)` показывают, что команда принадлежит этому блоку. В Python отступы — **часть синтаксиса**, а не просто оформление.

### 6.6. Короткая запись проверки

Не обязательно сохранять остаток в отдельную переменную. Можно сравнить результат `%` с нулём прямо внутри `if`:

```python
number = -7

if number % 2 == 0:
    print("Чётное число")
else:
    print("Нечётное число")
```

Результат тот же: `Нечётное число`.

!!! note "Правило для учебника"
    Каждый самостоятельный блок Python в этом уроке содержит определения всех используемых переменных. Поэтому его можно скопировать и выполнить отдельно, без предыдущих примеров.

## 7. Особенности вычислений в компьютере

### 7.1. Математика и Python согласуются

Для любого **целого** значения типа `int` проверка:

```python
number = 0
print(number % 2 == 0)  # True
```

правильно определяет чётность — и для положительных, и для отрицательных чисел, и для нуля.

### 7.2. Почему `-5 % 2` возвращает `1`, а не `-1`?

Python использует частное, округлённое вниз при `//`. Поэтому при положительном делителе $2$ выполняется:

$$
n=2\left\lfloor\frac n2\right\rfloor+(n\bmod2).
$$

Для $n=-5$ частное равно $-3$, остаток равен $1$:

```python
number = -5
quotient = number // 2
remainder = number % 2
print(quotient)   # -3
print(remainder)  # 1
```

Пока достаточно помнить: **при делении целого числа на положительное $2$ остаток в Python равен $0$ или $1$**. Подробнее целочисленное деление разберём в отдельном уроке.

### 7.3. Не проверяйте чётность дробных измерений

Чётность относится к целым числам. Если программа хранит дробное значение, сначала нужно решить, имеет ли оно смысл как **целое количество**. Не стоит автоматически считать, что всякое значение типа `float` подходит для проверки чётности.

### 7.4. Ограничения памяти

Математическое множество $\mathbb Z$ бесконечно. Целые числа типа `int` в Python могут расти по размеру, но реальная программа ограничена доступной памятью. Для обычных учебных задач это не создаёт проблемы.

## 8. Практическое применение в программировании

### Пример А. Распределяем людей по парам

В группе $17$ человек. Поскольку число нечётное, после составления полных пар останется один человек:

```python
people = 17

if people % 2 == 0:
    print("Всех можно распределить по парам")
else:
    print("После составления пар останется один человек")
```

### Пример Б. Чередуем оформление строк

В программных таблицах иногда различают строки с чётными и нечётными номерами. Например, для строки номер $8$:

```python
row_number = 8

if row_number % 2 == 0:
    print("Оформление чётной строки")
else:
    print("Оформление нечётной строки")
```

При нумерации с нуля надо помнить: первая строка имеет индекс $0$, а **ноль чётный**.

### Пример В. Проверяем отрицательный номер позиции

Чётность можно определить и у отрицательного целого числа:

```python
position = -9

if position % 2 == 0:
    print("Чётная позиция")
else:
    print("Нечётная позиция")
```

Математически $-9=2\cdot(-5)+1$, поэтому результат — `Нечётная позиция`.

## 9. Типичные ошибки и ограничения

**Ошибка 1. «Ноль нечётный, потому что он не положительный».** Неверно: $0=2\cdot0$, поэтому ноль чётный.

**Ошибка 2. «Отрицательные числа не бывают чётными».** Неверно: $-8=2\cdot(-4)$, значит $-8$ чётное.

**Ошибка 3. «Любое число можно назвать чётным или нечётным».** В нашем курсе чётность определяем для целых чисел, $n\in\mathbb Z$.

**Ошибка 4. «Оператор `%` — это математический модуль числа».** Нет: `abs(-5)` возвращает $5$, а `-5 % 2` — $1$.

**Ошибка 5. «`=` и `==` взаимозаменяемы».** Нет: `=` присваивает значение, `==` сравнивает значения.

**Ошибка 6. «После `if` отступы необязательны».** Нет, отступы в Python определяют тело условной конструкции.

**Ошибка 7. «Для нечётного числа остаток всегда равен $-1$ или $1$».** При использовании положительного делителя `2` в Python возможные остатки — именно `0` и `1`.

## 10. Задачи и интерактивный практикум

### 10.1. Задачи по математике

**Задание 1.** Разделите числа на две группы — чётные и нечётные:

$$
-9,\ -8,\ -1,\ 0,\ 1,\ 6,\ 13,\ 24.
$$

**Задание 2.** Представьте числа $20$, $11$, $-12$ и $-7$ в виде $2k$ или $2k+1$, где $k\in\mathbb Z$.

**Задание 3.** Объясните, почему $0$ чётный.

**Задание 4.** Не вычисляя сумму, определите её чётность:

$$
14+27,\qquad 9+15,\qquad -8+(-12).
$$

**Задание 5.** Не вычисляя произведение, определите его чётность:

$$
7\cdot9,\qquad 8\cdot13,\qquad (-5)\cdot(-3).
$$

**Задание 6.** Может ли целое число быть одновременно чётным и нечётным? Обоснуйте ответ.

**Задание 7.** Докажите, что сумма трёх нечётных чисел нечётна.

### 10.2. Задания на Python

**Задание 8.** Запишите переменную `number = 24` и выведите результат `number % 2`.

**Задание 9.** Повторите проверку для `number = -7`, затем для `number = 0`. Объясните полученные остатки.

**Задание 10.** Создайте программу, которая выводит «Чётное число» или «Нечётное число» для `number = 13`. Используйте `if` и `else`.

**Задание 11.** Измените `number` в предыдущей программе на `-8`, `0` и `17`. Убедитесь, что условие работает во всех случаях.

**Задание 12.** Для `number = -5` выведите результат `number // 2` и `number % 2`. Проверьте равенство $-5=2\cdot(-3)+1$.

**Задание 13 (углублённо).** Пусть `a = 7`, `b = 11`. Без вычисления суммы предскажите, чётен ли результат `a + b`, а затем проверьте это в Python.

??? success "Ответы: математические задания"
    **1.** Чётные: $-8,0,6,24$. Нечётные: $-9,-1,1,13$.

    **2.** $20=2\cdot10$; $11=2\cdot5+1$; $-12=2\cdot(-6)$; $-7=2\cdot(-4)+1$.

    **3.** $0=2\cdot0$, а $0\in\mathbb Z$.

    **4.** Нечётная; чётная; чётная.

    **5.** Нечётное; чётное; нечётное.

    **6.** Нет. Равенство $2a=2b+1$ привело бы к невозможному $2(a-b)=1$.

    **7.** Для $a=2k+1$, $b=2m+1$, $c=2p+1$: $a+b+c=2(k+m+p+1)+1$, то есть сумма нечётна.

??? success "Ответы: задания на Python"
    **8.** `24 % 2` возвращает `0`.

    **9.** `-7 % 2` возвращает `1`; `0 % 2` возвращает `0`.

    **10.** Пример самостоятельной программы:

    ```python
    number = 13

    if number % 2 == 0:
        print("Чётное число")
    else:
        print("Нечётное число")
    ```

    **11.** `-8`: чётное; `0`: чётное; `17`: нечётное.

    **12.** Результаты: `-3` и `1`. Проверка: `2 * (-3) + 1 == -5` даёт `True`.

    **13.** Два нечётных числа дают чётную сумму: $7+11=18$; `18 % 2 == 0` даёт `True`.

## 11. Краткие выводы и справочник формул

### Математическая часть

| Понятие | Математическая запись | Смысл |
|---|---|---|
| Чётное целое | $n=2k$ | Делится на $2$ без остатка |
| Нечётное целое | $n=2k+1$ | На единицу больше некоторого чётного числа |
| Область определения | $n,k\in\mathbb Z$ | Чётность рассматриваем для целых чисел |
| Деление на $2$ с остатком | $n=2q+r$, $r\in\{0,1\}$ | Остаток $0$ либо $1$ |
| Число $0$ | $0=2\cdot0$ | Чётное |
| Чётность целых | $\mathbb Z=E\cup O$ | Каждое целое чётно или нечётно |
| Группы не пересекаются | $E\cap O=\varnothing$ | Одновременно двух свойств нет |

**Основные правила:**

$$
\begin{aligned}
\text{чётное}+\text{чётное}&=\text{чётное},\\
\text{чётное}+\text{нечётное}&=\text{нечётное},\\
\text{нечётное}+\text{нечётное}&=\text{чётное}.
\end{aligned}
$$

Произведение чётно, если хотя бы один множитель чётный.

### Программная часть

| Python | Значение |
|---|---|
| `number = 11` | Присвоить целое число переменной |
| `number % 2` | Остаток от деления на $2$ |
| `number % 2 == 0` | Проверить, чётно ли число |
| `if ...:` | Выполнить блок, если условие истинно |
| `else:` | Иначе выполнить другой блок |
| `print(...)` | Вывести сообщение |

**Минимальная полноценная программа:**

```python
number = 11

if number % 2 == 0:
    print("Чётное число")
else:
    print("Нечётное число")
```

## 12. Дополнительные материалы

- [Python Tutorial — Numbers](https://docs.python.org/3/tutorial/introduction.html#numbers) — числовые выражения, `%`, `//` и присваивание.
- [Python Tutorial — More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html#if-statements) — конструкция `if` / `else`.
- [Python Language Reference — Binary arithmetic operations](https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations) — формальные правила целочисленного деления и остатка.

**Что изучаем далее:** отдельный урок о сравнении целых чисел, числовой прямой и неравенствах. В нём мы продолжим развивать и математическую теорию, и умение записывать условия в Python.

---

**Итог урока.** Мы выяснили, что чётные числа имеют вид $2k$, а нечётные — $2k+1$ при целом $k$. Научились обосновывать свойства чётности и проверять их на примерах. Теперь мы можем перевести математическое правило в понятную программу на Python с оператором `%` и конструкцией `if` / `else`.

<!-- Стили и сценарий лаборатории вынесены в конец документа, чтобы не мешать разбору урока. -->
<style>
.parity-lab{--parity-blue:#60a5fa;--parity-green:#34d399;--parity-gold:#f5b84b;border:1px solid var(--md-default-fg-color--lightest,#77818e);border-radius:15px;padding:1.1rem;margin:1.2rem 0;background:var(--md-default-bg-color,transparent);color:var(--md-default-fg-color,inherit)}
.parity-lab *, .parity-lab *::before, .parity-lab *::after{box-sizing:border-box}
.parity-lab__top{display:grid;gap:.6rem}
.parity-lab__top label{font-weight:650}
.parity-lab__controls{display:flex;align-items:center;gap:.8rem}
.parity-lab__controls input[type=range]{flex:1;min-width:0;accent-color:var(--parity-blue)}
.parity-lab__controls input[type=number]{width:6rem;max-width:35%;padding:.45rem .5rem;border-radius:8px;border:1px solid var(--md-default-fg-color--lightest,#77818e);background:var(--md-default-bg-color,rgba(127,127,127,.09));color:inherit;text-align:center;font:inherit}
.parity-lab__answer{margin:1rem 0;padding:1rem .6rem;text-align:center;background:var(--md-code-bg-color,rgba(127,127,127,.08));border-radius:12px;display:grid;gap:.45rem}
.parity-lab__result{font-size:1.3rem;font-weight:750}
.parity-lab__formula{font-size:1.2rem;font-weight:650;font-variant-numeric:tabular-nums}
.parity-lab__explanation{font-size:.9rem;opacity:.85}
.parity-lab__axis-holder{width:100%;margin:.7rem 0}
.parity-lab__axis-holder svg{width:100%;height:auto;display:block;overflow:visible}
.parity-lab__pairs-title{font-weight:700;margin:.8rem 0 .5rem}
.parity-lab__pairs{display:flex;flex-wrap:wrap;gap:.45rem;min-height:2.35rem;align-items:center}
.parity-lab__pair{display:inline-flex;gap:.2rem;padding:.38rem;border-radius:10px;border:1px solid var(--md-default-fg-color--lightest,#77818e);background:var(--md-code-bg-color,rgba(127,127,127,.07))}
.parity-lab__single{display:inline-flex;gap:.2rem;padding:.38rem;border-radius:10px;border:1px dashed var(--parity-gold)}
.parity-lab__dot{width:.75rem;height:.75rem;display:block;border-radius:100%;background:var(--parity-blue)}
.parity-lab__single .parity-lab__dot{background:var(--parity-gold)}
.parity-lab__caption{font-size:.83rem;opacity:.82;margin:.65rem 0}
.parity-lab__tools{display:flex;gap:1rem;flex-wrap:wrap;align-items:center;justify-content:space-between;margin:.9rem 0 .45rem}
.parity-lab__tools button,.parity-lab__bottom button{border:1px solid var(--md-default-fg-color--lightest,#77818e);padding:.4rem .7rem;border-radius:8px;background:transparent;color:inherit;cursor:pointer;font:inherit}
.parity-lab__code{white-space:pre;overflow:auto;background:#172032;color:#e5edf7;border-radius:10px;padding:.9rem;line-height:1.55;font:.87rem/1.6 ui-monospace,SFMono-Regular,Consolas,monospace}
.parity-lab__bottom{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;font-size:.88rem}
.parity-lab__bottom span{opacity:.9}
@media(max-width:620px){.parity-lab{padding:.8rem}.parity-lab__result{font-size:1.13rem}.parity-lab__formula{font-size:1.05rem}}
</style>
<script>
(function () {
  function initParityLabs() {
    document.querySelectorAll('[data-parity-lab]').forEach(function (lab) {
      if (lab.dataset.ready === '1') return;
      lab.dataset.ready = '1';
      const range = lab.querySelector('[data-range]');
      const numberInput = lab.querySelector('[data-number]');
      const result = lab.querySelector('[data-result]');
      const formula = lab.querySelector('[data-formula]');
      const explanation = lab.querySelector('[data-explanation]');
      const axis = lab.querySelector('[data-axis]');
      const pairs = lab.querySelector('[data-pairs]');
      const code = lab.querySelector('[data-code]');
      const output = lab.querySelector('[data-output]');
      const copy = lab.querySelector('[data-copy]');
      const reset = lab.querySelector('[data-reset]');
      const NS = 'http://www.w3.org/2000/svg';
      let n = 11;
      function svg(tag, attrs, txt) {
        const element = document.createElementNS(NS, tag);
        Object.keys(attrs).forEach(function (key) { element.setAttribute(key, String(attrs[key])); });
        if (txt !== undefined) element.textContent = String(txt);
        axis.appendChild(element);
      }
      function x(value) { return 32 + (value + 20) * 696 / 40; }
      function drawAxis() {
        axis.replaceChildren();
        svg('line', {x1:32,y1:55,x2:728,y2:55,stroke:'currentColor','stroke-width':2});
        svg('polygon', {points:'21,55 34,49 34,61',fill:'currentColor'});
        svg('polygon', {points:'739,55 726,49 726,61',fill:'currentColor'});
        for (let i = -20; i <= 20; i += 5) {
          svg('line', {x1:x(i),y1:49,x2:x(i),y2:61,stroke:'currentColor'});
          svg('text', {x:x(i),y:78,'text-anchor':'middle',fill:'currentColor','font-size':13},i);
        }
        svg('line',{x1:x(n),y1:17,x2:x(n),y2:55,stroke:'#60a5fa','stroke-width':2});
        svg('circle',{cx:x(n),cy:55,r:7,fill:'#60a5fa',stroke:'#172032','stroke-width':1});
        svg('text',{x:x(n),y:14,'text-anchor':'middle',fill:'#60a5fa','font-size':15,'font-weight':700},'n = '+n);
        axis.setAttribute('aria-label', 'Число '+n+' на числовой прямой от -20 до 20');
      }
      function drawPairs() {
        pairs.replaceChildren();
        const count = Math.abs(n);
        const fullPairs = Math.floor(count / 2);
        const unpaired = count % 2;
        for (let i = 0; i < fullPairs; i++) {
          const group = document.createElement('span');
          group.className = 'parity-lab__pair';
          group.setAttribute('aria-label','Пара '+(i+1));
          for (let j = 0; j < 2; j++) {
            const dot = document.createElement('span');
            dot.className = 'parity-lab__dot';
            group.appendChild(dot);
          }
          pairs.appendChild(group);
        }
        if (unpaired) {
          const single = document.createElement('span');
          single.className = 'parity-lab__single';
          single.setAttribute('aria-label','Один непарный элемент');
          const dot = document.createElement('span');
          dot.className = 'parity-lab__dot';
          single.appendChild(dot);
          pairs.appendChild(single);
        }
        if (count === 0) {
          const empty = document.createElement('span');
          empty.textContent = 'Нет элементов — и нет неполной пары.';
          pairs.appendChild(empty);
        }
        const pairWord = fullPairs === 1 ? 'полная пара' : (fullPairs >= 2 && fullPairs <= 4 ? 'полные пары' : 'полных пар');
        explanation.textContent = fullPairs + ' ' + pairWord + (unpaired ? ' и один непарный элемент' : ', непарных элементов нет');
      }
      function update() {
        range.value = n;
        numberInput.value = n;
        const q = Math.floor(n / 2);
        const r = n - 2 * q;
        const even = r === 0;
        result.textContent = n + (even ? ' — чётное число' : ' — нечётное число');
        formula.textContent = n + ' = 2 · (' + q + ') + ' + r;
        code.textContent = 'number = ' + n + '\nremainder = number % 2\nif remainder == 0:\n    print("Чётное число")\nelse:\n    print("Нечётное число")';
        output.textContent = 'Результат программы: ' + (even ? 'Чётное число' : 'Нечётное число');
        drawAxis();
        drawPairs();
      }
      function bounded(value, fallback) {
        if (String(value).trim() === '') return fallback;
        const parsed = Number(value);
        return Number.isFinite(parsed) ? Math.max(-20,Math.min(20,Math.round(parsed))) : fallback;
      }
      range.addEventListener('input', function () { n = bounded(range.value,n);update(); });
      numberInput.addEventListener('change', function () { n = bounded(numberInput.value,n);update(); });
      reset.addEventListener('click', function () { n=11;update(); });
      copy.addEventListener('click', function () {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
          copy.textContent = 'Выделите код для копирования';return;
        }
        navigator.clipboard.writeText(code.textContent).then(function () {
          copy.textContent='Скопировано';
        }).catch(function () {copy.textContent='Выделите код для копирования';});
      });
      update();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initParityLabs);
  else initParityLabs();
  if (typeof document$ !== 'undefined' && document$ && typeof document$.subscribe === 'function') document$.subscribe(initParityLabs);
}());
</script>
