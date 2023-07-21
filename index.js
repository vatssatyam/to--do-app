
let backButtons1= document.getElementsByClassName(".backButtons1");
let AddingPopup =document.querySelector(".AddingPopup");
let head1 = document.querySelector('.head1');
let popup = document.querySelector(".addTask");
let popup2 = document.querySelector(".addItem");
let head2 = document.querySelector(".head2")
let head2Text = document.querySelector(".head2Text")
let  back12 = document.querySelector(".back")
let todo = document.querySelector('.todos')
let todo2 = document.querySelector('#todo2')
let todos2 = document.getElementsByClassName('todo2')

let cards;
let idCount =0;
let todoCardId = 0;
let child;
let headChild;
let childMainDiv;


function addTask(){
    idCount++;

    let cardTittle = document.querySelector(".cardText").value;
    if(idCount>0){
        let checkItems = document.querySelector(".checkItem");
        checkItems.style.display = "none"
    }
   
    if(cardTittle){
        
        createCard(idCount, cardTittle, idCount);
    }else{
        createCard(idCount, "No Name", idCount);
    }
    closeTask();
  
    back()  

}

function createCard( id ,cardTittle , count){
    let todoDiv = document.createElement("div");
    todoDiv.setAttribute('id',`${id}`)
    let heading = document.createElement("p")
    let button1 = document.createElement("img")
    let button2 = document.createElement("img")
    
    let mainDiv =document.createElement('div')
    mainDiv.setAttribute('id',`mainDiv${id}`);
    todo.appendChild(todoDiv);
    todoDiv.appendChild(heading)
    todoDiv.append(button1)
    todoDiv.append(button2)
    todoDiv.appendChild(mainDiv)
   
    heading.innerHTML = `${cardTittle}`
   
  button2.src = "./edit.png";

  button1.src = "./trash.png";

    mainDiv.classList.add("mainDiv")
    todoDiv.classList.add('todoscard')
    button1.classList.add('addCardBtn1')
    button2.classList.add('addCardBtn2')
    heading.classList.add('line') 

    heading.addEventListener("click",()=>{ 
        head2.style.display ="none"
        back12.style.display = "flex"
        head2Text.style.display ="block"

        head2Text.innerHTML = `${cardTittle}`
        todoCardId = todoDiv.getAttribute("id");
        // // console.log(todoCardId)
        headChild = document.getElementById(`${todoCardId}`)
        // // console.log(headChild)

        cards = document.querySelectorAll(".todoscard")
        console.log(cards)
        for(let i =0; i<cards.length; i++){
            cards[i].style.display = "none"
        }
        headChild.style.display = "block"
       todo.style.justifyContent = "center"        
    })

    button1.addEventListener("click",()=>{
        todoDiv.remove()
        count--;
        // console.log(todoDiv)
        if(count === 0){
            let checkItems = document.querySelector(".checkItem");
            checkItems.style.display = "block" 
        }
})

button2.addEventListener("click",()=>{
    head1.style.filter = "blur(20px)";
    popup2.style.display ="block"

    todoCardId = todoDiv.getAttribute("id");
      child = document.getElementById(`${todoCardId}`).children;
        childMainDiv = child[3];
})
}

function closeItem(){
    head1.style.filter = "blur(0px)";

    popup2.style.display ="none"
}

function addItem(){
    
    popup2.style.display="none"
    head1.style.filter = "blur(0px)"
 
    let itemDiv =document.createElement('div')
    let itemText =document.createElement('p')
    let itemButton =document.createElement('button')

    console.log(childMainDiv);
    childMainDiv.appendChild(itemDiv);
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemButton);

    itemDiv.classList.add("itemDiv")
    itemText.classList.add("itemText")
    itemButton.classList.add("itemButton")

    let itemInput = document.querySelector(".cardItem").value;
    itemText.innerHTML = itemInput;
        itemButton.innerHTML = "Done"

        itemButton.addEventListener("click", ()=>{
                        itemText.style.textDecoration ="line-through"
                        itemText.style.color ="orange"
                        itemButton.style.display = "none";
                        itemText.style.marginLeft = "55px"
            
                        itemText.addEventListener("click",()=>{
                            itemText.style.textDecoration ="none"
                            itemText.style.color ="black"
                            itemButton.style.display = "block";
                            itemText.style.marginLeft = "0px"
                        })
                    })
}

function back(){
    head2.style.display ="block"
    back12.style.display = "none"
    head2Text.style.display ="none"
    for(let i =0; i<cards.length; i++){
        cards[i].style.display = "block"
    }
    todo.style.justifyContent = "space-between"

     
  
}

function addPopup(){
    head1.style.filter = "blur(20px)";
    popup.style.display ="block"
}

function closeTask(){
    popup.style.display ="none"
    head1.style.filter = "blur(0px)";
    
}
