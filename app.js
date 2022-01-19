var books = [
    {
        tittle: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyREadd: false
    }, {
        tittle: 'TheM Most Human Human',
        author: 'Brian Christian',
        alreadyREad: true
    }
];
//interate means for loop in this case the books lenght
for (var i=0; i < books.length; i++) {
    //to create a element is: document.createElement(p) porque es un paragraph
    var bookP = document.createElement('p');
    var bookDescription = document.createTextNode(books[i].tittle + ' by' + books[i].author);
    bookP.appendChild(bookDescription);
    document.body.appendChild(bookP);
}
