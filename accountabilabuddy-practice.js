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
  // type of problem:
    // language/api knowledge, data organization
  // pseudocode:
    // classes:
      // Telephone
        // properties
          // callDetails: { callId, customerNumber, callTime } - initially null
        // methods
          // answerCall(call)
            // set Telephone.callDetails
          // dispatchCall
            // check if Respondent.isAvailable is true
              // if yes: trigger Respondent.receiveCall(this.callDetails)

      // Respondent
        // properties
          // isAvailable: true
          // callDetails: null --> call object
        // methods
          // receiveCall()
            // pass callDetails to Respondent, toggle isAvailable to false
          // reset/endCall()
      // Manager
        // properties
          // isAvailable: true
          // callDetails: null --> call object
        // methods
      // Director
        // properties
          // isAvailable: true
          // callDetails: null --> call object
        // methods
    
    // inherit some things from parent class (maybe "Employee" --> different level employees with basic props/methods)

