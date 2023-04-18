### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.

- What is the signature portion of the JWT?  What does it do?
to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, a JWT is easily decoded by using the JWT decode() method. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
by signing a token for a user that often has a few relevant details about the user (like username and admin status) in the payload.



- What is continuous integration?
In object-oriented programming, mock objects are simulated objects that mimic the behaviour of real objects in controlled ways, most often as part of a software testing initiative.

- What is an environment variable and what are they used for?
 store data that's used by the operating system and other programs.

- What is TDD? What are some benefits and drawbacks?
helps you to develop the logic in your code

- What is the value of using JSONSchema for validation?
data encoded in JSON

- What are some ways to decide which code to test?
Unit Tests Integration/System TestsmFunctional Tests
 Regression Tests Acceptance Tests

- What does `RETURNING` do in SQL? When would you use it?
to unconditionally and immediately end an SQL procedure by returning the flow of control to the caller of the stored procedure

- What are some differences between Web Sockets and HTTP?
HTTP starts sending data as responses when a request is received, whereas Websockets send and receives data based on data availability.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
Flask is favored.