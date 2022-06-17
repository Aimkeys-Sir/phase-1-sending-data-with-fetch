// Add your code here
const form = document.querySelector("form")
const userName = document.getElementById('userName')
const email = document.getElementById('email')

const names=document.getElementById("name")
const mail=document.getElementById("mail")
const id=document.getElementById("id")

form.addEventListener("submit", e => {
    e.preventDefault()
    submitData(userName.value,email.value)
})

function submitData(userName, email) {
    const jsonObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name: userName, email: email })
    }

    return fetch("http://localhost:3000/users", jsonObj)
        .then(response => response.json())
        .then(jsonData=>{
            names.textContent=`Name: ${jsonData.name}`
            mail.textContent=`Email: ${jsonData.email}`
            id.textContent=`Id: ${jsonData.id}`
        })
        .catch(error=> {
        alert("Bad things have happened Mr. Poodle!")
        console.log(error.message)
    })
}





