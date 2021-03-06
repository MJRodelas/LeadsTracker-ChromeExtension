let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("savetab-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads")) //Get Leads from the local storage of the browser


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //Template string - much easier to read like what you see on HTML page
        listItems += `
        <li> 
            <a target='_blank' href='${leads[i]}'> 
            ${leads[i]}
            </a>
        </li>`       
    }
    ulEl.innerHTML = listItems  
}


deleteBtn.addEventListener("dblclick", function()  {
    localStorage.clear() //clear localStorage
    myLeads = [] //clear Array
    render(myLeads) //clear DOM
})

saveTabBtn.addEventListener("click", function()  {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        let activeTab = tabs[0];
        let activeTabId = activeTab.id; // or do whatever you need
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify (myLeads)) //Save Leads to local storage on the browser
        render(myLeads)
     });


})


inputBtn.addEventListener("click", function() {



    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify (myLeads)) //Save Leads to local storage on the browser
    render(myLeads)
})

