// on crée notre tableau d'objet todos, chaque objet estune tache
const todos = [
    {
      tache:"Acheter du pain",
      etat : false
    },
    {
      tache:"Acheter des pommes",
      etat : false
    },
    {
      tache:"Acheter des poires",
      etat : false
    }
  ]
  
  /* on va commençons par créer des références, on va  utiliser la méthode querySelector et en passant le type d'élément :*/
  let ul = document.querySelector("ul");
  let button = document.querySelector("button")
  let input = document.querySelector("input")
  
  // on creer une fonction qui va nous permettre d'afficher les taches. Je peux utiliser la methode map ou la boucle for of
  function afficher (){

    // ici nous iterons le tableau todos et qui va retourner un nouvel élément HTML pour chaque todo de notre tableau. 
    const mesTaches = todos.map((todo) => {
      return creerTache(todo);
    });
    // je vide le tableau sinon à chaque cration il va afficher le tableau en plusieurs fois
    ul.innerHTML = "";
    //l'operateur spreed permet de copier mes taches donc le tableau passer par map dans le ul
    ul.append(...mesTaches);
   
  }
  

  // cette fonction permet de créer l'element li et lui affecter la tache 
  function creerTache(todo){
    let li = document.createElement("li");
    li.innerHTML = todo.tache;
  return li;
  }
  
  // ici la fonction permet de rajouter la valeur saisie dans le input dans le tableau d'objet
  function ajouter(){
   let todo = input.value;
   // comme dans mon tableau d'objet j'ai 2 clés je les utilise comme ca {tache:todo, etat:false}
   todos.push({tache:todo, etat:false})
   afficher();

   input.value = "";
  
  }
  
  // l'venement qui va etre decleché à chaque clique
  button.addEventListener("click", ajouter)
  
  afficher();
  