const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


        sendDataToServer(inputBox.value);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

async function sendDataToServer(task) {
    try {
        const response = await fetch('http://localhost:3001/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: task })
        });

        const data = await response.json();
        console.log(data); // Log the server's response if needed

    } catch (error) {
        console.error("Error sending data to server:", error);
    }
}

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3001/test');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
        console.log(data);
        document.getElementById('result').innerText = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
    }
}

