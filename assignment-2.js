function Author(name,birthYear,nationality){
this.name=name
this.birthYear=birthYear
this.nationality=nationality
}

function Book(title,author,genre,price){
    this.title=title
    this.author=author
    this.genre=genre
    this.price=price

    this.getBookInfo=function(){
        console.log('title:'+this.title);
        console.log('author:'+this.author);
        console.log('genre:'+this.genre);
        console.log('price:'+this.price)
    }
}

let author1=new Author("priyanshu",2002,"indian");
let book1=new Book("XYZ","auther1","indian",500)


let author2 = new Author("ARUNDHATI ROY" , 1970 , "Indian");
let author3 = new Author("BHASKAR CHATTOPADHYAY" , 1950, "Indian");
let author4 = new Author("RABINDRANATH TAGOR" , 1890 , "Indian");
let author5 = new Author("MANU JOSEPH" , 1950 , "Indian");

let book2 = new Book("PATANG" , author2 , "Thriller and Mysetry" , 700);
let book3 = new Book("THE GOD OF SMALL THINGS" , author1 , "Literacy Fiction" , 560);
let book4 = new Book("GRAIN OF SAND" , author3 , "Generic Fiction" , 650);
let book5 = new Book("GOR" , author3, "Literacy" , 450);
let book6 = new Book("SERIOUS MEN" , author4 , "Humour" , 900);


let bookstore =[book1 , book2 , book3 , book4 , book5,book6];
console.log("Online Bookstore:");
console.log("-----------------------------------")
  bookstore.forEach((book) =>
   {
      book.getBookInfo();
  })
