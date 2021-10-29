# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional components do not have access to the lifecycle methods that class components have access to. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

ComponentWillMount is called before the page renders. ComponentWillUpdate triggers when state is changed right before the render.

3. Define stateful logic.

 Any code that uses or sets state.

4. What are the three step of creating a successful test? What is done in each phase?

//Arrange: Establish where you wil be testing using render.

//Act: Find elements on the page and pass an action to that element.

//Assert: set a condition for the test to check if it exists or not.