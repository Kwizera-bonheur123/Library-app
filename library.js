    // import {v4 as uuid4} from "./"

    // const id = uuid4();
    // console.log(id);
    var book = [
        {
            id:1,
            author:"k dot",
            title:"Best programming languages",
            number:"50"
        },
        {
            id:2,
            author:"kwizera",
            title:"Best programming languages",
            number:"50"
        }
    ];

    function addItem(element){
        localStorage.setItem("books",JSON.stringify(element));
    }
    function getItems(){
        return JSON.parse(localStorage.getItem("books"));
    }
    const books = getItems();
    console.log(books);
    var display_wrapper = document.getElementById("display_wrapper");

    for(let i = 0; i < books.length; i++){
        let id = i + 1;
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class = "display">
                    <div class="content">
                        <div id="nomero">${id}</div>
                        <p id="title1">${books[i].title}</p>
                        <p id="aunthor">${books[i].author}</p>
                        <p id="page">${books[i].number}</p>
                    </div>
                    <div class="icons">
                        <div id="edit" onclick(editBook(${i}))>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                        <button id="delete" onclick="deleteBook(${i})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            <div>
        `
        display_wrapper.appendChild(newDiv);
    }

    document.getElementById("send").addEventListener("click",(e)=>{
        e.preventDefault();
        const author = document.getElementById("anthor").value;
        const title = document.getElementById("title").value;
        const number = document.getElementById("number").value;
        let books = getItems();
        console.log(books.length);
        const newBook = {
            id:books.length,
            author:author,
            title:title,
            number:number
        }
        books.push(newBook);
        addItem(books)
        window.location.reload();
    })
function deleteBook(id){
    const books = getItems();
    const newArray = books.filter((book) => book.id !== id);
    addItem(newArray)
    window.location.reload();
}