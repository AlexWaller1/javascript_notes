/* console.log allows us to see things in
the console, this allows us to check what variables are
in various parts of our program 

// this.
// The behavior of this. in classes and functions is similar, since classes are functions
// under the hood
// winthin a class constructor, this. is a regualr object. All non-static methods within the 
// class are added to the prototype of this.
// the JavaScript this. keyword refers to the object it belongs to
// It has different values depending on where it is used:
// In a method, this refers to the owner object
// Alone, this refers to the global object
// In a function, this refers to the global object.
// In an event, this refers to the element that received the event.
// In an object method, this refers to the owner of the method.
// In the example on top of this page, this refers to the hybrid object.

// the bind method
// the bind() method returns a new function, when invoked, has its this. sets to a specific value.
// the bind method needs an argument.

// innerhtml
// The element property innerHTML gets or sets the HTML markup contained within that element.
// To insert the HTML into the document rather than replace the contents of an element, 
// use the method insertAdjacentHTML()

// .target method
// the target property of the event interface is a reference to the object onto which the
// event was dispatched. 
// e.target refers to the clicked <li> element

// .contentEditable
// the contentEditable property of the HTMLElement interface specifies whether or not the
// element is editable. This enumerated attribute can have the following values:
// 'true' indicates that the element is contentEditable
// 'false' indicates that the element cannot be edited.
// 'inherit' indicates that the element inherits its parent's editable status.

// preventDefault()

/*

  const BASE_URL = "http://localhost:3000"
// let USERS = []
    
// read - fetch users index

function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        // we do something withthe data fetched, the data is still composed of Ruby Objects
        // clear existing list
        //USERS = [];
        for (const user of users){
            // this will convert them to JavaScript Objects
            let u = new User(user.id, user.name, user.username, user.email)
            // push u on to list
            //USERS.push(u);
            u.renderUser()
        } 



        function filterArray(users){
let USERNAMES = [];
for (const user of users) {
    USERNAMES.push(user.name)

}
 return USERNAMES
} */
