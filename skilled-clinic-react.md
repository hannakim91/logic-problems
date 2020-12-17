React Skilled Cinic - Guarav Shrivastava - 12/16/20

Why react?
- Component based organization
    - modular, atomic units
    - Reusable, scalable
    - Easier to test
- Easier way to update the DOM
    - Virtual DOM:
        - Performance benefits - manipulate virtual DOM instead of real DOM 
            - Whenever you write in JSX - user interactions to manipulate virtual DOM first
            - React manages bridge between JS + DOM; JSX interacts with virtual DOM
        - VS: crossing bridge between JS & DOM -> frequent = slower performance
- Thorough documentation/ lots of community support
Interview problem:
Create a generic table (no interaction yet) with names and ages - make the table as reusable and dynamic as possible
Name	Age
Anna	30
Benny	20
Cass	22
- Variables for categories and their contents
- Let names = [{name: Anna, age: 30}…]
- Depending of # of keys - change number of rows/columns
Solution:
- Data structure: 
    - const data = [{name: ‘Anna’, age: 30}, {name: ‘Benny’, age: 20}]
- <Table /> component
- 
