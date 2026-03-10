let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ol.appendChild(item);
  inp.value = "";

  let del = document.createElement("button");
  item.appendChild(del);
  del.innerText = "delete";
  del.classList.add("Del");

  ol.addEventListener("click", function(event){
    console.log(event.target);
    console.dir(event.target.nodeName);
    console.log("button clicked");

    if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    console.log(listItem);
    listItem.remove();
    console.log("delete")

  }else{
    console.log("dont delete");
  }
  })

  
  // let dels = document.querySelectorAll(".Del");

  // del.addEventListener("click", function () {
  //   let par = this.parentElement;
  //   par.remove();
  //   let p = document.createElement("p");
  //   p.classList.add("para");
  //   h1.appendChild(p);
  //   p.innerText = `Removed`;

  //   inp.addEventListener("click", function () {
  //     p.innerText = "";
  //   });
    
  // });
});
