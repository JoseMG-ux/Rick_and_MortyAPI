import { API } from "./API.js"; 
import * as ui from "./UI.js";

ui.formContainer.addEventListener('submit', (e) => {
     e.preventDefault();

     //Obtain data 
     const nameCharacter = document.querySelector('#name').value;

     if(nameCharacter === ""){
          ui.divMensajes.innerHTML = "Hay campos vacios";
          ui.divMensajes.classList.add('error')

          setTimeout(() => {
               ui.divMensajes.innerHTML = "";
               ui.divMensajes.classList.remove("error")
          }, 3000);
     }else{

          const api = new API(nameCharacter);
          api.searchAPIRM().then((data) =>{
               if (data.data.name) { 
                    
                    const nombre = JSON.stringify(data.data.name);
                    const specie = JSON.stringify(data.data.species);
                    const gender = JSON.stringify(data.data.gender);
                    const status = JSON.stringify(data.data.status);
                    ui.namePJ.textContent = nombre;
                    ui.specie.textContent = specie;
                    ui.gender.textContent = gender;
                    ui.status.textContent = status;
               }else{
                    ui.divMensajes.innerHTML = "El personaje no existe";
                    ui.divMensajes.classList.add('error');

                    setTimeout(() => {
                         ui.divMensajes.innerHTML = "";
                         ui.divMensajes.classList.remove('error');
                         ui.formContainer.reset();
                    }, 3000);
               }
          });
     }
});
