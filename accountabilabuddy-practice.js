// Cracking the coding interview questions:

  // Question 1 (More math/logic): You have a 5-quart jug, a 3-quart jug, and an unlimited supply of water (no other measuring cups and you can't measure "Half" of the given jugs). How would you come up with exactly 4-quarts of water?

  // fill the five quart jug
  // use the five quart full -> fill three quart jug
    // now five quart has 2 qt left (assuming no spill :-P)
  // empty the three quart jug
  // empty five quart jug into three quart (now five has 0, three has 2)
  // fill the five quart again
    // fill three quart using the five quart until three is full
  // now 4qt left in five quart

  // Question 2: Imagine you have a call center with three levels of employees: Respondent, Manager, and Director. An incoming telephone call must be first allocated to a Respondent who is free. If the Respondent can't handle the call, they must escalate the call to the Manager. If the Manager is not able to handle it, then the call must be escalated to the Director.
  // Design the classes and data structures for this problem. Implement a method "dispatchCall()" which assigns a call to the first available employee.

  // assumptions:
    // each employee can only handle 1 call at a time (no "hold")
    // call is an object with relevant details (id, phone #, time eventually?)
    // missed this assumption: there's only one of each employee (book solution shows multiple instances of employee at different levels being created)
  // type of problem:
    // language/api knowledge, data organization
  // pseudocode:
    // classes:
      // CallCenter
        // properties
          // callDetails: { callId, customerNumber, callTime } - initially null (is this necessary?)
        // employee array to look through
        // methods
          // receiveCall(call)
            // set CallCenter.callDetails
          // dispatchCall
            // would need to iterate through array of employees instead of just the 3 employees
              // check employee.role

            // OLD CODE: if there were 3 specific employee classes
            // if Respondent.isAvailable is true
              // trigger Respondent.answerCall(this.callDetails) // if Respondent.isAvailable is false && Manager.isAvailable is true
              // trigger Manager.answerCall(this.callDetails) // if Respondent and Manager .isAvailable is false
              // trigger Director.answerCall
            // after dispatch -> set callDetails back to null
    class CallCenter {
      constructor(employees) {
        callDetails: null;
        employees: employees;
      }

      hireEmployee(employee) {
        this.employees.push(employee)
      }

      answerCall(call) {
        this.callDetails = call
      }

      dispatchCall() {
        // filter employees who are respondents
        // find through respondents and return first one that is available
        // refactor opp: have 3 different arrays of diff employee types
        let callAnswerer = null;
        const respondents = this.employees.filter(employee => employee.role === 'respondent');
        callAnswerer = respondents.find(employee => employee.isAvailable === true);
        if (callAnswerer) {
          // callanswerer.receiveCall()
        }
        if (callAnswerer === null) {
          const managers = this.employees.filter(employee => employee.role === 'manager');
          //find
        } else 
        // check for directors
        this.callDetails = null
      }
    }

    class Employee {
      constructor (role) {
        isAvailable: true;
        role: role;
      }

      receiveCall() {
        isAvailable: false;
        // when customer hangs up call -> isAvailable should be set back to true
      }
      hangUp() {
        //isAvailable = true
      }
    }

    // instantiate different employees and add to CallCenter.employees
    const respondent1 = new Employee('respondent')
    const respondent2 = new Employee('respondent')
    const respondent3 = new Employee('respondent')
    const respondent4 = new Employee('respondent')
    const manager1 = new Employee('manager')
    const manager2 = new Employee('manager')
    const director1 = new Employee('director')
    const employees = [director1, respondent1, manager1, respondent2, respondent3, manager2, respondent4]
    const callCenter1 = new CallCenter(employees)

      // Respondent
        // properties
          // isAvailable: true
          // calls: []
        // methods
          // answerCall()
            // pass callDetails to Respondent calls array, toggle isAvailable to false
          // reset/endCall()
      // Manager
        // properties
          // isAvailable: true
        // methods
      // Director
        // properties
          // isAvailable: true
        // methods
    
    // inherit some things from parent class (maybe "Employee" --> different level employees with basic props/methods needed for call handling - they may have different methods based on rank in the future)
    // for now it's just employee objects with different names (respondent, manager, director)

