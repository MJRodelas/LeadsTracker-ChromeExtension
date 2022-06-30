let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //Template string - much easier to read like what you see on HTML page
        listItems += `
        <li> 
            <a target='_blank' href='${myLeads[i]}'> 
            ${myLeads[i]}
            </a>
        </li>`       
    }
    ulEl.innerHTML = listItems  
}