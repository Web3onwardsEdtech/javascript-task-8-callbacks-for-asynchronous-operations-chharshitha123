
function delayedExecution(callback, delay, ...params) {

    setTimeout(() => {
        callback(...params); 
    }, delay);
}


const logDelayedMessage = () => {
    console.log("This is a delayed message.");
};

delayedExecution(logDelayedMessage, 1000);


const logSum = (a, b) => {
    console.log(a + b);
};

delayedExecution(logSum, 3000, 5, 10);


const logCurrentTime = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString(); 
    console.log(currentTime);
};

delayedExecution(logCurrentTime, 5000);

