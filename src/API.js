export class API{
     constructor(namePJ){
          this.namePJ = namePJ;
     }
     async searchAPIRM(){
          const url = `https://rickandmortyapi.com/api/character/${this.namePJ}`;
          const res = await fetch(url);
          const data = await res.json();
          console.log(data.species)
          return{   
               data
          }    
     }
}
