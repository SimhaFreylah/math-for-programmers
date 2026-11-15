---
title: Натуральные и целые числа
description: Подробный первый урок по множествам натуральных и целых чисел, математическим обозначениям, числовой прямой и первым переменным Python.
---

# 01.01. Натуральные и целые числа

*Раздел I. Арифметика · Урок 1 · Начальный уровень · Предварительные знания не требуются*

В первом уроке изучим **только два множества чисел**: натуральные $\mathbb N$ и целые $\mathbb Z$. Мы выясним, чем они отличаются, почему одно множество содержится в другом и как записывать математические утверждения с помощью специальных символов. Затем поработаем с интерактивной числовой прямой и **с самого начала** разберём программу на Python: переменные, присваивание, вычисление суммы и вывод результата.

!!! info "После урока вы сможете"
    Объяснить смысл записи $\mathbb N\subsetneq\mathbb Z$; отличать натуральные числа от целых; понимать символы $\in$, $\notin$, $\forall$; располагать целые числа на прямой; написать и объяснить программу `a = 11`, `b = 13`, `result = a + b`, `print(result)`.

---

## 1. Назначение и практический смысл темы

Числа позволяют описывать **количество** и **изменение количества**.

**Первая ситуация — считаем предметы.** В коробке лежит $11$ деталей. Привезли ещё $13$ деталей. Всего:

$$
11+13=24.
$$

Все три числа — $11$, $13$ и $24$ — натуральные. Они подходят для счёта предметов.

**Вторая ситуация — учитываем изменение.** На улице было $3\,^{\circ}\mathrm C$, а температура понизилась на $5\,^{\circ}\mathrm C$:

$$
3-5=-2.
$$

Число $-2$ нельзя использовать как обычное количество физических предметов, но оно правильно описывает температуру относительно нуля. Для подобных ситуаций нам нужны **целые числа**, в том числе отрицательные.

Программист сталкивается с тем же различием: число пользователей не должно быть отрицательным, а изменение баланса, температуры или позиции может иметь знак минус.

## 2. Математические определения и обозначения

### 2.1. Что такое множество?

**Множество** — совокупность объектов, которые называют его *элементами*. Например, множество из трёх чисел записывается так:

$$
A=\{2,4,6\}.
$$

Число $4$ — элемент множества $A$, а число $5$ в него не входит:

$$
4\in A,\qquad 5\notin A.
$$

Символ $\in$ читают **«принадлежит»**, а $\notin$ — **«не принадлежит»**. Фигурные скобки $\{\ \}$ обозначают перечисление элементов множества.

### 2.2. Натуральные числа: $\mathbb N$

**Натуральные числа** — это числа, которыми мы считаем отдельные предметы:

$$
\boxed{\mathbb N=\{1,2,3,4,5,6,\ldots\}}.
$$

Знак $\mathbb N$ обозначает всё множество натуральных чисел, а многоточие $\ldots$ показывает, что счёт можно продолжать без конца.

Например:

$$
1\in\mathbb N,\qquad 11\in\mathbb N,\qquad 2026\in\mathbb N.
$$

У натуральных чисел есть **наименьший элемент** — единица. Самого большого натурального числа нет.

!!! note "Важное соглашение: ноль"
    В математике используются два соглашения: одни авторы включают $0$ в натуральные числа, другие — нет. **В нашем курсе** принимаем $\mathbb N=\{1,2,3,\ldots\}$, поэтому $0\notin\mathbb N$. Если нужно назвать натуральные числа вместе с нулём, можно записать $\mathbb N_0=\{0,1,2,3,\ldots\}$; это лишь уточнение принятого соглашения.

### 2.3. Целые числа: $\mathbb Z$

С помощью одних натуральных чисел нельзя выразить, например, результат $3-5=-2$. Поэтому рассматривают множество **целых чисел**:

$$
\boxed{\mathbb Z=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}}.
$$

Целые числа включают:

| Группа | Примеры | Особенность |
|---|---|---|
| Отрицательные целые | $-5,-2,-1$ | Меньше нуля |
| Ноль | $0$ | Ни положительное, ни отрицательное |
| Положительные целые | $1,2,5$ | Больше нуля |

Каждое целое число записывается без дробной части. В частности:

$$
-7\in\mathbb Z,\qquad 0\in\mathbb Z,\qquad 11\in\mathbb Z.
$$

Знак минус перед $-7$ показывает, что число отрицательное. **Ноль — целое число**, хотя по принятому соглашению он не является натуральным.

### 2.4. Главная связь двух множеств

$$
\boxed{\mathbb N\subsetneq\mathbb Z}.
$$

Эту запись читают так: **«множество натуральных чисел является собственным (строгим) подмножеством множества целых чисел»**.

Разберём смысл по частям:

1. **Каждое натуральное число — целое.** Например, $5\in\mathbb N$ и одновременно $5\in\mathbb Z$.
2. **Не каждое целое число — натуральное.** Например, $-5\in\mathbb Z$, но $-5\notin\mathbb N$.
3. Кроме того, $0\in\mathbb Z$, но $0\notin\mathbb N$ в соглашении нашего курса.

Именно поэтому используем знак **строгого включения** $\subsetneq$: множества не равны.

| Число | $\mathbb N$ | $\mathbb Z$ | Почему? |
|---|:---:|:---:|---|
| $1$ | ✓ | ✓ | Положительное целое |
| $11$ | ✓ | ✓ | Положительное целое |
| $0$ | — | ✓ | Целое, но не натуральное по соглашению курса |
| $-3$ | — | ✓ | Отрицательное целое |
| $-17$ | — | ✓ | Отрицательное целое |

### 2.5. Читаем математические символы

| Обозначение | Как читать | Пример |
|---|---|---|
| $\in$ | Принадлежит множеству | $3\in\mathbb N$ |
| $\notin$ | Не принадлежит множеству | $-3\notin\mathbb N$ |
| $\subseteq$ | Является подмножеством (возможно равным) | $\mathbb N\subseteq\mathbb Z$ |
| $\subsetneq$ | Является собственным подмножеством | $\mathbb N\subsetneq\mathbb Z$ |
| $\forall$ | Для любого | $\forall n\in\mathbb N$ |
| $\exists$ | Существует | $\exists z\in\mathbb Z$ |
| $>$, $<$ | Больше, меньше | $3>0$, $-3<0$ |

Не нужно запоминать всё сразу: дальше мы будем возвращаться к этим обозначениям в конкретных примерах.

## 3. Теория, свойства и доказательства

### 3.1. Следующее натуральное число

Для любого натурального числа $n$ существует следующее число $n+1$. Например, после $11$ идёт $12$.

Математически это записывают так:

$$
\forall n\in\mathbb N:\quad n+1\in\mathbb N.
$$

**Читаем:** «Для любого натурального $n$ число $n+1$ также натурально».

**Почему натуральных чисел бесконечно много?** Предположим, что самое большое натуральное число — $M$. Но $M+1$ натурально и больше $M$. Получили противоречие. Значит, последнего натурального числа не существует.

### 3.2. Соседние целые числа

У каждого целого числа $z$ есть сосед справа $z+1$ и сосед слева $z-1$:

$$
\forall z\in\mathbb Z:\quad z-1\in\mathbb Z,\qquad z+1\in\mathbb Z.
$$

Например, у числа $-3$ соседями являются $-4$ и $-2$:

$$
-4<-3<-2.
$$

Поэтому у целых чисел **нет ни наибольшего, ни наименьшего числа**.

### 3.3. Числовая прямая и сравнение

На числовой прямой отмечаем $0$, выбираем одинаковое расстояние между соседними целыми числами, а положительным направлением считаем движение вправо.

$$
\cdots<-3<-2<-1<0<1<2<3<\cdots
$$

Чем **правее** стоит число, тем оно **больше**. Например, $-2>-5$, поскольку $-2$ находится правее $-5$. Движение на один шаг вправо соответствует прибавлению $1$; на один шаг влево — вычитанию $1$.

### 3.4. Сложение и вычитание: какие результаты допустимы?

Если сложить два натуральных числа, снова получится натуральное:

$$
\forall a,b\in\mathbb N:\quad a+b\in\mathbb N.
$$

Это свойство называют **замкнутостью относительно сложения**. Например, $11+13=24\in\mathbb N$.

Но разность натуральных чисел не всегда натуральна:

$$
3-5=-2\notin\mathbb N.
$$

У целых чисел результат сложения или вычитания двух целых чисел **всегда целый**:

$$
\forall a,b\in\mathbb Z:\quad a+b\in\mathbb Z,\qquad a-b\in\mathbb Z.
$$

Это объясняет, почему переход от $\mathbb N$ к $\mathbb Z$ полезен: теперь можно выполнять любое вычитание целых чисел, не выходя за пределы множества целых.

### 3.5. Ноль и противоположные целые числа

Ноль не меняет число при сложении:

$$
\forall a\in\mathbb Z:\quad a+0=0+a=a.
$$

У каждого целого $a$ существует противоположное число $-a$, и их сумма равна нулю:

$$
\forall a\in\mathbb Z:\quad a+(-a)=0.
$$

Например, $5+(-5)=0$. Для нуля противоположное число — сам ноль: $-0=0$.

## 4. Пошаговые примеры вычислений

### Пример 1. Определяем множество числа $11$

**Шаг 1.** $11$ — положительное целое число, которым можно считать предметы.

**Шаг 2.** Следовательно, $11\in\mathbb N$.

**Шаг 3.** По включению $\mathbb N\subsetneq\mathbb Z$ также имеем $11\in\mathbb Z$.

**Ответ:** число $11$ принадлежит обоим изучаемым множествам.

### Пример 2. Проверяем число $-5$

**Шаг 1.** $-5$ — отрицательное целое число.

**Шаг 2.** Значит, $-5\in\mathbb Z$.

**Шаг 3.** Натуральные числа в нашем курсе начинаются с $1$. Поэтому $-5\notin\mathbb N$.

**Ответ:** число $-5$ целое, но не натуральное.

### Пример 3. Складываем натуральные числа

В первой коробке $11$ деталей, во второй — $13$.

**Шаг 1.** Обозначим количества буквами: $a=11$, $b=13$.

**Шаг 2.** Запишем сумму: $s=a+b$.

**Шаг 3.** Подставим значения: $s=11+13=24$.

**Шаг 4.** Так как оба слагаемых натуральные, сумма тоже натуральная: $24\in\mathbb N$.

$$
\boxed{11+13=24}.
$$

### Пример 4. Почему может потребоваться отрицательное число?

Температура была $3\,^{\circ}\mathrm C$, затем понизилась на $5\,^{\circ}\mathrm C$.

**Шаг 1.** Начальное значение: $3$.

**Шаг 2.** Уменьшаем на $5$: $3-5=-2$.

**Шаг 3.** Проверяем: $-2\in\mathbb Z$ и $-2\notin\mathbb N$.

**Ответ:** температура стала $-2\,^{\circ}\mathrm C$; значение целое, но не натуральное.

### Пример 5. Прибавляем положительное число к отрицательному

Начнём с $-5$ и прибавим $3$. Это три шага вправо по числовой прямой:

$$
-5\to-4\to-3\to-2.
$$

Поэтому:

$$
\boxed{-5+3=-2}.
$$

Подробные правила всех арифметических операций изучим в следующих уроках; пока важно увидеть, что результат остаётся **целым числом**.

## 5. Графическая и интерактивная визуализация

### Лаборатория: натуральные и целые числа

Выберите два **целых** числа $a$ и $b$ от $-20$ до $20$. Лаборатория автоматически вычислит их сумму, покажет принадлежность $\mathbb N$ и $\mathbb Z$, отметит три числа на числовой прямой и составит соответствующую программу на Python.

<div class="number-lab" data-nz-lab>
  <div class="number-lab__controls">
    <div class="number-lab__control">
      <label for="nz-lab-a">Первое число <strong>a</strong></label>
      <div class="number-lab__inputs"><input type="range" min="-20" max="20" step="1" value="11" data-a-slider aria-label="Изменить a"><input type="number" id="nz-lab-a" min="-20" max="20" step="1" value="11" data-a-number aria-label="Значение a"></div>
    </div>
    <div class="number-lab__control">
      <label for="nz-lab-b">Второе число <strong>b</strong></label>
      <div class="number-lab__inputs"><input type="range" min="-20" max="20" step="1" value="13" data-b-slider aria-label="Изменить b"><input type="number" id="nz-lab-b" min="-20" max="20" step="1" value="13" data-b-number aria-label="Значение b"></div>
    </div>
  </div>
  <div class="number-lab__answer" aria-live="polite">
    <strong class="number-lab__formula" data-formula>11 + 13 = 24</strong>
    <span data-membership>24 ∈ ℕ и 24 ∈ ℤ</span>
  </div>
  <div class="number-lab__legend"><span><i style="background:#60a5fa"></i> a</span><span><i style="background:#f5b84b"></i> b</span><span><i style="background:#34d399"></i> a + b</span></div>
  <svg data-axis viewBox="0 0 760 152" role="img" aria-label="Числовая прямая с отметками a, b и a плюс b"></svg>
  <table class="number-lab__table"><thead><tr><th>Число</th><th>Натуральное, ℕ</th><th>Целое, ℤ</th></tr></thead><tbody data-table><tr><th>a = 11</th><td>Да</td><td>Да</td></tr><tr><th>b = 13</th><td>Да</td><td>Да</td></tr><tr><th>a + b = 24</th><td>Да</td><td>Да</td></tr></tbody></table>
  <div class="number-lab__code-header"><strong>Тот же расчёт на Python</strong><button type="button" data-copy>Копировать код</button></div>
  <pre class="number-lab__code" data-code>a = 11
b = 13
result = a + b
print(result)  # 24</pre>
  <button type="button" class="number-lab__reset" data-reset>Вернуть 11 и 13</button>
  <p class="number-lab__error" data-error role="status"></p>
  <p class="number-lab__note">Расчёт в этой лаборатории выполняется JavaScript в браузере; показанный код Python — отдельный пример, который можно скопировать и запустить.</p>
</div>

!!! question "Проведите три опыта"
    1. Установите $a=11$, $b=13$. Почему сумма $24$ одновременно натуральная и целая?
    2. Установите $a=-5$, $b=3$. Почему $-2$ целое, но не натуральное?
    3. Установите $a=-4$, $b=4$. Почему $0\in\mathbb Z$, но $0\notin\mathbb N$ по соглашению нашего курса?

## 6. Реализация на Python: первая программа с нуля

В математике мы обозначаем числа буквами $a$ и $b$, а в Python можем использовать эти буквы как **имена переменных**. Наша задача — повторить вычисление $11+13=24$.

### 6.1. Что такое программа?

**Программа** — последовательность инструкций, которые выполняет компьютер. Python читает приведённые ниже команды сверху вниз.

```python
a = 11
b = 13
result = a + b
print(result)  # 24
```

Вводите строки без начальных отступов, как в примере: это четыре самостоятельные инструкции.

**Ожидаемый результат в консоли:**

```text
24
```

### 6.2. Строка 1: `a = 11` — имя и присваивание

```python
a = 11
```

- `11` — целое число; оно принадлежит и $\mathbb N$, и $\mathbb Z$.
- `a` — **имя переменной**, с помощью которого мы будем обращаться к значению.
- `=` — **оператор присваивания**: связывает имя `a` со значением `11`.

В Python не нужна отдельная команда объявления типа переменной. Первая инструкция присваивания создаёт привязку имени к значению. Это отличается от математического равенства: в математике $a=11$ — утверждение, а в Python `a = 11` — действие.

### 6.3. Строка 2: `b = 13` — вторая переменная

```python
b = 13
```

Теперь Python знает два имени: `a` связано с числом `11`, а `b` — с числом `13`.

### 6.4. Строка 3: `result = a + b` — вычисление выражения

```python
a = 11
b = 13
result = a + b
```

Разберём последовательность действий:

1. Python получает значение `a`, то есть `11`.
2. Получает значение `b`, то есть `13`.
3. Выполняет сложение: `11 + 13` → `24`.
4. Связывает имя `result` с результатом `24`.

То же самое математически:

$$
\begin{aligned}
a&=11,\\
b&=13,\\
s&=a+b=24.
\end{aligned}
$$

### 6.5. Строка 4: `print(result)` — вывод на экран

```python
result = 24
print(result)
```

- `print` — встроенная **функция** Python для вывода информации.
- Круглые скобки `(...)` содержат значение, которое нужно вывести.
- `result` — имя, значение которого равно `24`.
- `# 24` — **комментарий**, предназначенный для читателя кода. Python не выполняет текст после `#`.

Поэтому программа печатает только:

```text
24
```

### 6.6. Переменная может получить новое значение

```python
a = 11
a = 13
print(a)  # 13
```

Команды выполняются по очереди: сначала `a` связано с `11`, затем с `13`. Второе присваивание заменяет прежнюю привязку имени.

А запись:

```python
a = 11
a = a + 1
print(a)  # 12
```

означает «взять текущее значение `a`, прибавить `1` и присвоить результат имени `a`». **Это не уравнение** $a=a+1$; это инструкция изменить значение.

### 6.7. Как правильно называть переменные

Понятные имена помогают читать программу:

```python
first_box = 11
second_box = 13
total_items = first_box + second_box
print(total_items)  # 24
```

Имя может содержать буквы, цифры и подчёркивание `_`, но не должно начинаться с цифры и содержать пробелы. Имена `count` и `Count` различаются. Для нескольких слов удобно использовать `snake_case`, например `total_items`.

### 6.8. Присваивание и проверка равенства — не одно и то же

| Запись | Назначение | Пример |
|---|---|---|
| `=` | Присваивает значение | `a = 11` |
| `==` | Проверяет равенство значений | `11 == 13` → `False` |
| `+` | Складывает числа | `11 + 13` → `24` |
| `print(...)` | Выводит значение | `print(24)` |
| `#` | Начинает комментарий | `# ответ: 24` |

Результат сравнения `==` — `True` («истина») или `False` («ложь»). Пока достаточно понимать разницу между `=` и `==`; логические выражения изучим позднее.

## 7. Особенности вычислений в компьютере

### 7.1. Что такое `int`?

У каждого объекта Python есть **тип**. Положительные, отрицательные целые числа и ноль представлены числовым типом `int` (от английского *integer* — «целое число»).

```python
natural = 11
negative = -5
zero = 0

print(type(natural))   # <class 'int'>
print(type(negative))  # <class 'int'>
print(type(zero))      # <class 'int'>
```

Функция `type(...)` показывает тип объекта. Здесь все три значения имеют один и тот же тип — `int`.

**Важно:** специального встроенного типа только для натуральных чисел в Python нет. Число `11` натуральное **по математическому смыслу**, а тип его объекта в Python — `int`.

### 7.2. Математическая бесконечность и память компьютера

Множества $\mathbb N$ и $\mathbb Z$ бесконечны, но у компьютера конечная память. Тип `int` в Python позволяет работать с целыми числами очень большой длины; на практике размер ограничивается доступными ресурсами и особенностями реализации.

```python
large_number = 10 ** 30
print(large_number)  # 1000000000000000000000000000000
```

Здесь `**` означает возведение в степень. Подробно изучать эту операцию будем в отдельном уроке.

### 7.3. Число и строка — разные вещи

```python
print(11 + 13)      # 24
print("11" + "13")  # 1113
```

В первом случае Python складывает **целые числа**. Во втором — соединяет **строки текста** в кавычках. Не путайте значение числа с его текстовой записью.

## 8. Практическое применение в программировании

### Пример А. Счёт деталей

```python
first_box = 11
second_box = 13
total = first_box + second_box
print(total)  # 24
```

Математика: $11+13=24$, и все эти числа натуральные. Программа может считать детали, файлы, выполненные задачи, пользователей.

### Пример Б. Изменение баланса

```python
balance = -8
payment = 3
new_balance = balance + payment
print(new_balance)  # -5
```

Математика: $-8+3=-5$. Отрицательные целые числа позволяют обозначить условный долг или дефицит.

### Пример В. Изменяем счётчик

```python
completed = 11
completed = completed + 1
print(completed)  # 12
```

Вторая строка использует **старое значение** `completed` для вычисления нового. Так можно увеличивать счётчик на единицу при появлении очередного события.

## 9. Типичные ошибки и ограничения

| Распространённая ошибка | Как правильно |
|---|---|
| «Ноль — натуральное число». | Это зависит от соглашения; в нашем курсе $0\notin\mathbb N$, но $0\in\mathbb Z$. |
| «Число $11$ только натуральное, но не целое». | $11\in\mathbb N$ **и** $11\in\mathbb Z$. |
| «Отрицательные числа не входят в целые». | $-5\in\mathbb Z$. |
| «У натуральных чисел есть наибольшее число». | Для любого $n\in\mathbb N$ есть большее число $n+1$. |
| «`=` в Python проверяет равенство». | `=` присваивает, `==` сравнивает. |
| «`# 24` напечатается на экране». | После `#` расположен комментарий; вывод создаёт `print(result)`. |
| «`11` и `"11"` — одно и то же». | `11` — целое число; `"11"` — текстовая строка. |
| «Для натуральных чисел Python имеет особый тип». | Натуральные представлены положительными значениями `int`. |

## 10. Практикум: задания и самопроверка

### 10.1. Математические задания

**Задание 1.** Укажите, какие из чисел $-7,\ 0,\ 1,\ 9,\ -12$ принадлежат $\mathbb N$, а какие — $\mathbb Z$.

**Задание 2.** Вставьте $\in$ или $\notin$:

$$
0\ \square\ \mathbb N,\quad 0\ \square\ \mathbb Z,\quad -3\ \square\ \mathbb Z,\quad 17\ \square\ \mathbb N.
$$

**Задание 3.** Расположите по возрастанию: $3,\ -2,\ 0,\ -5,\ 1$.

**Задание 4.** Вычислите: $11+13$, $3-5$, $-5+3$, $-4+4$. Отметьте, какие результаты натуральные.

**Задание 5.** Объясните своими словами, почему $\mathbb N\subsetneq\mathbb Z$, а не $\mathbb N=\mathbb Z$.

**Задание 6 (со звёздочкой).** Докажите, что целые числа не имеют ни наибольшего, ни наименьшего элемента.

### 10.2. Упражнения на Python

**Задание 7.** Создайте переменные `a = 11`, `b = 13`; сохраните сумму в `result` и выведите результат через `print()`.

**Задание 8.** Измените `a` на `-5`, а `b` на `3`. Предскажите, что выведет программа, а затем проверьте себя.

**Задание 9.** Создайте переменные `natural = 7`, `zero = 0`, `negative = -4`. Выведите их значения и результаты `type(...)`.

**Задание 10.** Что напечатает код? Почему?

```python
x = 11
x = x + 13
print(x)
```

**Задание 11.** Напишите код, в котором `students = 11`, `new_students = 13`, после чего выведите их общее количество с понятным именем переменной.

**Задание 12 (со звёздочкой).** Что изменится, если заменить `print(11 + 13)` на `print("11" + "13")`? Объясните разницу, не запуская код.

??? success "Показать решения и ответы"
    **1.** Натуральные: $1,9$. Целые: все пять чисел.

    **2.** $0\notin\mathbb N$; $0\in\mathbb Z$; $-3\in\mathbb Z$; $17\in\mathbb N$.

    **3.** $-5,-2,0,1,3$.

    **4.** $24,-2,-2,0$. Натуральный результат только $24$; все результаты целые.

    **5.** Каждое натуральное число целое, но в $\mathbb Z$ дополнительно есть $0$ и отрицательные числа.

    **6.** Для любого $z\in\mathbb Z$ числа $z+1$ и $z-1$ тоже целые. Первое больше $z$, второе меньше.

    **7.** `a = 11`, `b = 13`, `result = a + b`, `print(result)`; вывод `24`.

    **8.** Вывод: `-2`.

    **9.** Значения `7`, `0`, `-4`; у каждого тип `<class 'int'>`.

    **10.** Вывод `24`: второе присваивание заменяет старую привязку `x` результатом сложения.

    **11.** Например: `total_students = students + new_students`; затем `print(total_students)` → `24`.

    **12.** `print(11 + 13)` выводит `24`; `print("11" + "13")` выводит `1113`, потому что строки соединяются.

## 11. Выводы и справочник формул

| Математическая запись | Значение | Связь с Python |
|---|---|---|
| $\mathbb N=\{1,2,3,\ldots\}$ | Натуральные числа | Положительные значения `int` |
| $\mathbb Z=\{\ldots,-1,0,1,\ldots\}$ | Целые числа | Тип `int` |
| $\mathbb N\subsetneq\mathbb Z$ | Натуральные — собственное подмножество целых | Оба множества представлены значениями `int` |
| $n\in\mathbb N$ | $n$ — натуральное число | Например, `n = 11` |
| $z\in\mathbb Z$ | $z$ — целое число | Например, `z = -5` |
| $a+b$ | Сумма чисел | `result = a + b` |
| $a+0=a$ | Ноль не меняет сумму | `a + 0` |
| $a+(-a)=0$ | Сумма противоположных | `a + (-a)` |

**Мини-справочник Python:** `=` — присваивание; `+` — сложение; `print(...)` — вывод; `#` — комментарий; `type(...)` — тип объекта; `int` — тип целых чисел.

**Главное математическое утверждение урока:**

$$
\boxed{\mathbb N\subsetneq\mathbb Z}.
$$

Натуральные числа нужны для счёта, а целые расширяют их нулём и отрицательными значениями. В Python и те и другие хранятся как объекты типа `int`.

## 12. Дополнительные материалы

- [Python Tutorial — An Informal Introduction to Python](https://docs.python.org/3/tutorial/introduction.html) — первые числа, переменные и арифметические выражения.
- [Python — Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex) — справочник по числовым типам; в этом уроке нужен только раздел про `int`.

**Следующий урок:** арифметические действия с натуральными и целыми числами. Другие числовые множества будем изучать отдельно, когда дойдём до соответствующих тем.

<!-- Стили и сценарий интерактивной лаборатории встроены в страницу. -->
<style>
.number-lab{border:1px solid var(--md-default-fg-color--lightest,#76808c);border-radius:14px;padding:1rem;margin:1.2rem 0;color:var(--md-default-fg-color,inherit)}
.number-lab *{box-sizing:border-box}
.number-lab__controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}
.number-lab__control{display:grid;gap:.4rem}
.number-lab__control label{font-weight:600}
.number-lab__inputs{display:flex;gap:.65rem;align-items:center}
.number-lab__inputs input[type=range]{flex:1;min-width:0;accent-color:#60a5fa}
.number-lab__inputs input[type=number]{width:5rem;max-width:40%;border:1px solid var(--md-default-fg-color--lightest,#76808c);border-radius:7px;padding:.35rem;background:var(--md-default-bg-color,transparent);color:inherit;font:inherit;text-align:center}
.number-lab__answer{border-radius:10px;background:var(--md-code-bg-color,rgba(120,120,120,.1));padding:.9rem;display:grid;justify-items:center;gap:.3rem;margin:1rem 0;text-align:center}
.number-lab__formula{font-size:1.65rem;line-height:1.4;font-variant-numeric:tabular-nums}
.number-lab__legend{display:flex;justify-content:center;gap:1.3rem;font-size:.85rem}
.number-lab__legend i{display:inline-block;width:.7em;height:.7em;border-radius:50%;margin-right:.35rem}
.number-lab svg{width:100%;height:auto;display:block;overflow:visible}
.number-lab__table{width:100%;border-collapse:collapse;font-size:.9rem;margin:.5rem 0}
.number-lab__table th,.number-lab__table td{padding:.5rem;border-bottom:1px solid var(--md-default-fg-color--lightest,#76808c);text-align:center}
.number-lab__table th:first-child{text-align:left}
.number-lab__code-header{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin:.75rem 0 .5rem}
.number-lab__code-header button,.number-lab__reset{border:1px solid var(--md-default-fg-color--lightest,#76808c);border-radius:7px;background:transparent;color:inherit;cursor:pointer;padding:.4rem .7rem;font:inherit}
.number-lab__code{font:.88rem/1.65 ui-monospace,SFMono-Regular,Consolas,monospace;white-space:pre;overflow:auto;background:#172032;color:#f1f5f9;border-radius:8px;padding:.85rem}
.number-lab__reset{margin-top:.6rem}
.number-lab__error{font-size:.85rem;color:#e08b42;margin:.4rem 0}
.number-lab__note{font-size:.83rem;opacity:.85;margin:.4rem 0 0}
@media(max-width:620px){.number-lab__controls{grid-template-columns:1fr}.number-lab{padding:.8rem}.number-lab__table{font-size:.78rem}.number-lab__formula{font-size:1.35rem}}
</style>
<script>
(function(){
  function initLabs(){
    document.querySelectorAll('[data-nz-lab]').forEach(function(lab){
      if(lab.dataset.initialized==='1')return;
      lab.dataset.initialized='1';
      const aSlider=lab.querySelector('[data-a-slider]');
      const bSlider=lab.querySelector('[data-b-slider]');
      const aNumber=lab.querySelector('[data-a-number]');
      const bNumber=lab.querySelector('[data-b-number]');
      const formula=lab.querySelector('[data-formula]');
      const membership=lab.querySelector('[data-membership]');
      const table=lab.querySelector('[data-table]');
      const axis=lab.querySelector('[data-axis]');
      const code=lab.querySelector('[data-code]');
      const error=lab.querySelector('[data-error]');
      const copy=lab.querySelector('[data-copy]');
      const reset=lab.querySelector('[data-reset]');
      const SVG_NS='http://www.w3.org/2000/svg';
      let a=11,b=13;
      function svgNode(tag,attrs,label){
        const el=document.createElementNS(SVG_NS,tag);
        Object.keys(attrs).forEach(key=>el.setAttribute(key,String(attrs[key])));
        if(label!==undefined)el.textContent=String(label);
        axis.appendChild(el);
      }
      function x(n){return 30+(n+40)*700/80;}
      function drawAxis(){
        axis.replaceChildren();
        svgNode('line',{x1:30,y1:67,x2:730,y2:67,stroke:'currentColor','stroke-width':2});
        svgNode('polygon',{points:'22,67 32,62 32,72',fill:'currentColor'});
        svgNode('polygon',{points:'738,67 728,62 728,72',fill:'currentColor'});
        for(let n=-40;n<=40;n+=10){
          svgNode('line',{x1:x(n),y1:61,x2:x(n),y2:73,stroke:'currentColor'});
          svgNode('text',{x:x(n),y:91,fill:'currentColor','text-anchor':'middle','font-size':13},n);
        }
        [
          {n:a,color:'#60a5fa',text:'a='+a,y:18},
          {n:b,color:'#f5b84b',text:'b='+b,y:40},
          {n:a+b,color:'#34d399',text:'a+b='+(a+b),y:132}
        ].forEach(p=>{
          svgNode('line',{x1:x(p.n),y1:55,x2:x(p.n),y2:79,stroke:p.color,'stroke-width':2});
          svgNode('circle',{cx:x(p.n),cy:67,r:5,fill:p.color});
          svgNode('text',{x:x(p.n),y:p.y,fill:p.color,'text-anchor':'middle','font-weight':600,'font-size':13},p.text);
        });
        axis.setAttribute('aria-label',`Числовая прямая. a = ${a}, b = ${b}, сумма = ${a+b}`);
      }
      function row(label,value){
        const tr=document.createElement('tr');
        const th=document.createElement('th');th.scope='row';th.textContent=label+' = '+value;tr.appendChild(th);
        [value>0,true].forEach(yes=>{const td=document.createElement('td');td.textContent=yes?'Да':'Нет';tr.appendChild(td);});
        table.appendChild(tr);
      }
      function update(){
        aSlider.value=aNumber.value=a;
        bSlider.value=bNumber.value=b;
        const sum=a+b;
        formula.textContent=`${a} + (${b}) = ${sum}`;
        membership.textContent=sum>0?`${sum} ∈ ℕ и ${sum} ∈ ℤ`:`${sum} ∈ ℤ, но ${sum} ∉ ℕ`;
        table.replaceChildren();row('a',a);row('b',b);row('a + b',sum);
        code.textContent=`a = ${a}\nb = ${b}\nresult = a + b\nprint(result)  # ${sum}`;
        drawAxis();
        error.textContent='';
      }
      function clamp(value,prev){
        if(String(value).trim()==='')return prev;
        const n=Number(value);
        return Number.isFinite(n)?Math.min(20,Math.max(-20,Math.round(n))):prev;
      }
      aSlider.addEventListener('input',()=>{a=clamp(aSlider.value,a);update();});
      bSlider.addEventListener('input',()=>{b=clamp(bSlider.value,b);update();});
      aNumber.addEventListener('change',()=>{a=clamp(aNumber.value,a);update();});
      bNumber.addEventListener('change',()=>{b=clamp(bNumber.value,b);update();});
      reset.addEventListener('click',()=>{a=11;b=13;update();});
      copy.addEventListener('click',()=>{
        if(!navigator.clipboard||!navigator.clipboard.writeText){copy.textContent='Выделите код для копирования';return;}
        navigator.clipboard.writeText(code.textContent)
          .then(()=>{copy.textContent='Скопировано';})
          .catch(()=>{copy.textContent='Выделите код для копирования';});
      });
      update();
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initLabs);
  else initLabs();
  if(typeof document$!=='undefined'&&document$&&typeof document$.subscribe==='function')document$.subscribe(initLabs);
})();
</script>
