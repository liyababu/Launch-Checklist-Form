// Write your JavaScript code here!
window.addEventListener("load", function() {
   
 
      fetch("https://handlers.education.launchcode.org/static/planets.json")
         .then(response => {
            return response.json(); 
         })
         .then(response => {
            const destination = response[0]
            const target = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${destination.name}</li>
               <li>Diameter: ${destination.diameter}</li>
               <li>Star: ${destination.star}</li>
               <li>Distance from Earth: ${destination.distance}</li>
               <li>Number of Moons: ${destination.moons}</li>
            </ol>
            <img src="${destination.image}"></img>`
            document.querySelector('#missionTarget').innerHTML = target
         })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
<<<<<<< HEAD
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel =  document.querySelector("input[name=fuelLevel]");
      let cargoMass =  document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
=======
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let copilotnameInput = document.querySelector("input[name=copilotName]");
      let fuellevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotnameInput.value === "") {
         alert("Pilot name required!");
>>>>>>> 106fe560098a80c7010ecf413f472d563e66f86d
         // stop the form submission
         event.preventDefault();
      }
      if((isNaN(fuelLevel.value)) || (isNaN(cargoMass.value))){
         alert("Please enter a valid number input");
         // stop the form submissionq
         event.preventDefault();
      }
<<<<<<< HEAD
      if((!isNaN(pilotName.value)) || (!isNaN(coPilotName.value))){
         alert("Please enter valid name in text");
         // stop the form submission 
         event.preventDefault();
      }
      if((fuelLevel.value < 10000) && (cargoMass.value > 10000)){
         alert("Not enough fuel for journey.");
=======
      if (fuellevelInput.value === "" ){  
         alert("Enter Fuel level");  
         event.preventDefault();
      }
           
      //  }else if(typeof cargoMassInput.value !== 'number'){  
      //    alert("Enter cargomass value only")  
      //    event.preventDefault();
      //    }  
       
>>>>>>> 106fe560098a80c7010ecf413f472d563e66f86d
         
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
            <h2 id="launchStatus" style="color:red;">Shuttle Not Ready for Launch</h2>
            <div  id="faultyItems" style="visibility: visible">
                <ol id="launchList">
                    <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                    <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                    <li id="fuelStatus">Fuel is too low for launch.</li>
                    <li id="cargoStatus">Cargo mass is too heavy for launch.</li>
                </ol>
                `
                event.preventDefault();
         } //End of 1st condition of launch
      if((fuelLevel.value > 10000) && (cargoMass.value < 10000)){
         alert("Shuttle is ready for journey.");
               
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
               <h2 id="launchStatus" style="color:green;">Shuttle Is Ready for Launch</h2>
               <div  id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                     <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                     <li id="fuelStatus">Fuel is sufficient for launch.</li>
                     <li id="cargoStatus">Cargo mass is sufficient for launch.</li>
                  </ol>
                  `
                  event.preventDefault();
         }//End of 2nd condition
      if((fuelLevel.value > 10000) && (cargoMass.value > 10000)){
         alert("Shuttle is not ready for journey.");
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
               <h2 id="launchStatus" style="color:red;">Shuttle Is Not Ready for Launch</h2>
               <div  id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                     <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                     <li id="fuelStatus">Fuel is sufficient for launch.</li>
                     <li id="cargoStatus">Cargo mass is insufficient for launch.</li>
                  </ol>
                  `
                  event.preventDefault();
          }//End of 3rd condition
      if((fuelLevel.value < 10000) && (cargoMass.value < 10000)){
         alert("Shuttle is not ready for journey.");
                                   
               const div = document.getElementById("launchStatusCheck");
                  div.innerHTML = `
                     <h2 id="launchStatus" style="color:red;">Shuttle Is Not Ready for Launch</h2>
                        <div  id="faultyItems" style="visibility: visible">
                           <ol id="launchList">
                              <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch.</li>
                              <li id="copilotStatus">Co-Pilot ${coPilotName.value} is ready for launch.</li>
                              <li id="fuelStatus">Fuel is insufficient for launch.</li>
                              <li id="cargoStatus">Cargo mass is sufficient for launch.</li>
                           </ol>
                           `
                           event.preventDefault();
         }//End of 4th condition
         
      });
   });
   
        
      
   
   

