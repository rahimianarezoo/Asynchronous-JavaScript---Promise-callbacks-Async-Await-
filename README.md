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

I am going to explain it in my example then it would be more understandable. After a promise is made means what promise do you to your customer, in my example I promise to serve a sandwitch, this is a promise cycle:

1- Pending stage -> nothing is happening here e.g. no hamburger order received yet! so I didn't start made hamburger.

2- Resolve / Reject stage -> when I recieved an order like chicken burger, then I can resolve (whether I have all ingredient) or reject (if I don't have chicken)

3- .Then process -> Here after resolve in step 2, my 7 steps come to play, each step run after each other here e.g. Choose the meat THEN grill the meat THEN Add prefred sauce on top THEN ...

4- .catch process -> Here after reject in step 2, I need to wrote a sorry note to my customer and in .catch I will do that

5- .Finally -> either step 2 will end with resolve / reject, .finally must be run. imagine that I receive 0 customer daily and at the end of the day I have to close my shop so .finally handler must run at the end.



I also provide file named "Order-Hamburger-Async-await.js" to understand Async-Await better in an example. For using Async-Await you must mention "async" keyword before createing function e.g. async function order() {}.

And you also need three thing inside the function:

- try
- catch
- finally


