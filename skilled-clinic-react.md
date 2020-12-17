# React Skilled Cinic - Guarav Shrivastava - 12/16/20

## Why react?
### Component based organization
  - modular, atomic units
  - Reusable, scalable
  - Easier to test
### Easier way to update the DOM
  - **Virtual DOM**:
    - Performance benefits - manipulate virtual DOM instead of real DOM 
      - Whenever you write in JSX - user interactions to manipulate virtual DOM first
      - React manages bridge between JS + DOM; JSX interacts with virtual DOM
    - VS: crossing bridge between JS & DOM -> frequent = slower performance
- Thorough documentation/ lots of community support

## Interview problem:
### Create a generic table (no interaction yet) with names and ages - make the table as reusable and dynamic as possible
    | Name | Age |
    | Anna |	30 |
    | Benny|	20 |
    | Cass |	22 |
- Variables for categories and their contents
- Let names = [{name: Anna, age: 30}…]
- Depending of # of keys - change number of rows/columns
#### Solution:
- Data structure: 
    const data = [{name: ‘Anna’, age: 30}, {name: ‘Benny’, age: 20}]
    const headers = [{label: 'age in years', key: 'age'}, {label: 'name', label: 'name'}]
- <Table /> component passing data and headers as props
- if not using typescript - could be good to annotate what values are when you use an iterator
#### in a render, why should children in a list have **key**?
  - tells react what to asscociate with each item/DOM elem
  - more efficient for things like reordering children - **key to harnessing power of virtual DOM/performance abilities of react** 
    - without key: need to kill/recreate child elem when you want to shuffle things around
