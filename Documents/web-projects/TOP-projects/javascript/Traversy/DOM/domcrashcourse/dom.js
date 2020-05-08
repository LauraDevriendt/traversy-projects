// /* Examine the document object ==> 
// all information concerning doc */

// console.dir(document); 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// //console.log(document.all[10]); // dont select this way from the DOM
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);





// /* SELECTORS */

// //GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// //headerTitle.textContent = 'hello'; 
// //headerTitle.textContent ='goodbye'; // doesn't take styling into account
// //headerTitle.innerHTML = '<h3>Hello</h3>';
// //header.style.borderBottom='solid 3px #000';





// //GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent ='hello 2';
// items[1].style.backgroundColor= 'yellow';

// for(var i=0; i <items.length; i++){
//     items[i].style.backgroundColor ='#f4f4f4';
// };




// //GETELEMENTSBYTAGENAME//

// // var li = document.getElementsByTagName('LI');
// // console.log(li);
// // li[1].textContent ='hello 2';
// // li[1].style.backgroundColor= 'yellow';

// // for(var i=0; i <li.length; i++){
// // li[i].style.backgroundColor ='#f4f4f4';
// // };






// //QUERYSELECTOR (grabs one thing)//

// var header = document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc';

// var input= document.querySelector('input');
// input.value ='hello world';

// var submit= document.querySelector("input[type='submit']");
// submit.value="SEND"

// var item = document.querySelector('.list-group-item:last-child');
// item.style.color='red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='blue';






// //QUERYSELECTOR ALL //

// var titles= document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i <odd.length; i++){
//     odd[i].style.backgroundColor ='#f4f4f4';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i <even.length; i++){
//     odd[i].style.backgroundColor ='#ccc';
// }

//--------------------------------------------------------------------------------------



// /* TRAVERSING THE DOM */
// var itemList = document.querySelector('#items');

// //ParentNode//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);




// //ParentElement (is like parentNode//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);




// // ChildNodes (text you see is linebreak so dont use) //
// console.log(itemList.childNodes);

// //Children
// console.log(itemList.children);

// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor ='yellow';





// //FirstChild (don't use due to text for linebreak)
// console.log(itemList.firstChild);

// //FirstElemenetChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor='blue';






// //LastChild (don't use due to text for linebreak)
// console.log(itemList.lastChild);

// //LastElemenetChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor='blue';




// //NextSibling (don't use due to text for linebreak)
// console.log(itemList.nextSibling);

// //NextElementSibling 
// console.log(itemList.nextElementSibling);






// //PreviousSibling (don't use due to text for linebreak)
// console.log(itemList.previousSibling);

// //PreviousElementSibling 
// console.log(itemList.previousElementSibling);





// // CreateElement
// var newDiv = document.createElement('div');
// console.log(newDiv);



// //add class
// newDiv.className ='hello';



// // add id 
// newDiv.id='hello1';




// // add attribute
// newDiv.setAttribute('title','Hello Div');



// //Create text node 
// var newDivText = document.createTextNode('Hello World');


// // Add text to div 
// newDiv.appendChild(newDivText);
// console.log(newDiv);


// // Add to DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize ='30px';

//--------------------------------------------------------------------------------------

// EVENTS//

// var button = document.getElementById('button').addEventListener('click',buttonClick);
// function buttonClick(e){
//     console.log('button clicked');
//     document.getElementById('header-title').textContent ='Changed';
//     document.querySelector('#main').style.backgroundCOlor ='#f4f4f4';
// 




//console.log(e);//

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classLis)
//var output = document.getElementById('output');
// output.innerHTML ='<h3>'+e.target.id+'</h3>';

// console.log(e.type);
// console.log(e.clientX); //position mouse from window
// console.log(e.clientY); //position mouse from window
// console.log(e.offsetX); //position mouse from element it's in
// console.log(e.offsetY); //position mouse from element it's in

// console.log(e.ctrlKey);
// console.log(e.altKey);
// console.log(e.shiftKey);
// }




//Eventtypes //
// var button = document.getElementById('button');

//click 
// button.addEventListener('click',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }

// double click
// button.addEventListener('dblclick',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);

// }

// Mousedown
// button.addEventListener('mousedown',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);

// }


// Mouseup
// button.addEventListener('mouseup',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);

// }

// var box = document.getElementById('box');

//Mouseenter (is concerning parent en child )
// box.addEventListener('mouseenter',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }


//Mouseleave (is concerning parent en child )
// box.addEventListener('mouseleave',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }

//mouseover (concerning child)
// box.addEventListener('mouseover',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }

//mouseout (concerning child)
// box.addEventListener('mouseout',runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }

//mousemove
// box.addEventListener('mousemove',runEvent);
// var output = document.getElementById('output');
// function runEvent(e){
// console.log('EVENT TYPE: '+e.type)

//output.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';
// box.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)';

// document.body.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)';
// 
// };




//Keyboard

//keydown
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }




//keyup 
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('keyup', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }




//keypress
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('keyup', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }




//focus (click in)
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('focus', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }

//blur (click out)
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('blur', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }


//cut 
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('cut', runEvent);

// function runEvent(e){
//    console.log('EVENT TYPE: '+e.type)
//    console.log(e.target.value);
//    document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }

//paste 
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('paste', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }


//input (cut and paste and type select is also input)
// var itemInput = document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('input', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

// }




//change
// var select= document.querySelector('select');
// select.addEventListener('change',runEvent);


// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     console.log(e.target.value);
// }


//submit
// form.addEventListener('submit',runEvent)
// function runEvent(e){
//        e.preventDefault(); //to make sure submit can work (and not works like regular html form)
//        console.log('EVENT TYPE: '+e.type);
   
// }

//----------------------------------------------------------------------------

/* FINAL PROJECT */


/* ADD ITEMS */
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event to add an item
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    
//get input value and append to the list
var newItem = document.getElementById('item').value;
var li = document.createElement('li');
li.className='list-group-item';

li.appendChild(document.createTextNode(newItem));
itemList.appendChild(li);

//creat delete button element and add to li element
var deleteBtn = document.createElement('button');
deleteBtn.className ='btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn)

}

/* Remove items */
itemList.addEventListener('click',removeItem);
function removeItem(e){
if(e.target.classList.contains('delete')){
    console.log(1);
};
if (confirm('are you sure')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
}
};


/* filter items */
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
function filterItems (e){
    var text= e.target.value.toLowerCase();
    var items =  itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent
        if(itemName.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display ='none'
        }
    })
}


