# Asynchronous-JavaScript---Promise-callbacks-Async-Await-
Asynchronous operations in JavaScript can be achieved through callbacks and Using a callback is a powerful way of doing asynchronous in JS. 

In this repo I tried to cover the asynchronous javascript concepts in an understandable example.

I defined an ordering process for hamburger in 7 different steps and each step has its own waiting time.
After finishing each waiting time you can see the comment explaining the details of each step.

Here is the tasks and waiting time for each steps:

#1 Place an order                -> 2
#2 Choose the meat               -> 2
#3 Grill the meat                -> 1
#4 Add prefred sauce on top      -> 1
#5 Pick the bread                -> 2
#6 pick the fries and drink      -> 3
#7 Serve the hamburger           -> 2 



In file named "Order-Hamburger-callback.js" you can clearly see callback hell. If you are not aware of callbacks hell,check the code in this file and you can see the relations between parents, chilrdren This is happen when working with a lot of dependent asynchronous operations, you quickly end up in callback hell. It really can be a hell because:

- Inversion of control which means we gave the control of our program to the another function.
- You'll have a hard time changing one of your many layers of callbacks.
- Debugging can be a pain.
- It isn't readable anymore once you reach three or four levels of nesting.
- It is very unmaintainable.


Remember that callbacks are okay for single asynchronous operations but they certainly aren't perfect.
For sure you may need asynchronous process into your code but with callback hells?!

This is where another feature named "promise" plays a role. Promise has a cycle and you must stick to this cysle if you have a plan to use promise in your code.
