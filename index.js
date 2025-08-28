let count=0;
let interval;

const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("reset");

function updatedisplay(){
    countLabel.innerHTML = count;
}

updatedisplay();

function startCounting(changeFn){
    changeFn(); // to run the code once
    interval = setInterval(changeFn, 100);
 }

 function stopCounting(){
    clearInterval(interval); 
    }

function buttonHoldUpdate(button, changeFn){
    // mouse events
    button.addEventListener("mousedown", () => startCounting(changeFn));
    button.addEventListener("mouseup", stopCounting);
    button.addEventListener("mouseleave", stopCounting);
 

 //touch start
    button.addEventListener("touchstart", (e) => {
        e.preventDefault(); // prevent mobile scroll
        startCounting(changeFn);
    });

    button.addEventListener("touchend", stopCounting);
}

buttonHoldUpdate(increaseBtn, () =>{
    count++;
    updatedisplay();
});

buttonHoldUpdate(decreasBtn, () =>{
    if (count > 0){
        count--;
        updatedisplay();
    }
  
});

resetBtn.addEventListener("click", () =>{
    count = 0;
    updatedisplay();
});
