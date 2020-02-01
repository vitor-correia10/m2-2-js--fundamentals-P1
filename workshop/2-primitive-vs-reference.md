# Types

### Question 1: Which of the following strings are valid? Add an 'x' between the [ ] to indicate that it's valid.

1. [ ] "I am a "Horse""
2. [ ] "I 'prefer' ducks'
3. [ ] 'Yes, duck is nice'
4. [ ] "Ah, but I\'m vegan!"
5. [ ] 'You'll eat salad then'
6. [ ] 'Yes I\'ll eat salad'
7. [ ] "I'm happy to hear that!"
8. [ ] "\"Happy to hear " + 'that" ' + "he says!"


### Question 2: Rewrite below all of the strings that are not valid, and correct them to make them valid. 



### Question 3: Which of the following expressions are true? Add an 'x' between the ( ) to indicate that it's true.

1. ( ) 7 == 2
2. ( ) 7 == 7
3. ( ) 7 == '7'
4. ( ) 7 != 0
5. ( ) 7 !== '7'
6. ( ) 7 != '7'
7. ( ) 7 != 7


### Question 4: Which of the following expressions is/are truthy?

1. ( ) !0
2. ( ) !1
3. ( ) -1
4. ( ) "
5. ( ) !"hello!"
6. ( ) null
7. ( ) !undefined
8. ( ) !NaN


### Question 5: Which of the following are valid objects?

1. ( ) {}
2. ( ) { 'hello' }
3. ( ) { name: 'I am fruit' }
4. ( ) {'brand-name': 'Dior' }
5. ( ) { brand-name: 'Channel' }
6. ( ) { cool_name: 'bob' + ' Dylan', age: 25 }


### Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']
    - number of elements: 
    - type of _each_ element:
        - 'cat': 
        - 'dog': 
        - 'bird': 
2. [[], 24, 'hello', true]

3. []

4. [['romeo', 'juliet'], false]

5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]


### Question 7: What is the type and value for each of the following variables?

1. let  name = 'bob';
    - type: 
    - value: 
2. let age = 45;

3. let isMarried = false;

4. let person = { name: name, age: age, isMarried: isMarried }

5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]


# Primitive values / Reference values

### Question 8: Given the following, evaluate each of the provided expressions.

let x = 24;
let y = 24;

1. true or false: x === y

--------------------------------------

let person = { name: 'bob', age: 24 };
let clone = { name: 'bob', age: 24 };

2. true or false: person === clone

--------------------------------------

let person = { name: 'bob', age: 24 };
let bob = person;

3. true or false: person === bob

person.age = 30;

4. What is the value of bob.age?

--------------------------------------

let person = { name: 'bob', age: 24 };
let bob = person;
bob.height = '180cm';

5. What is the value of person.height?

--------------------------------------