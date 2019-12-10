// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let copilotnameInput = document.querySelector("input[name=copilotName]");
      let fuellevelInput = document.querySelector("input[name=fuelLevel]");
      if (pilotnameInput.value === "") {
         alert("Pilot name required!");
         // stop the form submission
         event.preventDefault();
      }
      if (copilotnameInput.value === "") {
         alert("CoPilot name required!");
         // stop the form submission
         event.preventDefault();
      }
      if (typeof fuellevelInput.value === "" ){  
         alert("Enter Fuel level");  
         event.preventDefault();
           
       }else if(typeof fuellevelInput.value !== 'number'){  
         alert("Enter Numeric value only")  
         event.preventDefault();
         }  
       
         
      
      
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
