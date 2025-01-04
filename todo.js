let input_box=document.querySelector('.input_box');
        let button=document.querySelector('#add_button');
        let list=document.querySelector('#todo_list');
        let todoarr;
        
        function savetodo(todo){
           if(localStorage.getItem('todoList')===null){
             todoarr=[];
           }
           else{
          JSON.parse( localStorage.getItem('todoList'));
           }
            todoarr.push(todo);
            console.log(todoarr);
            localStorage.setItem('todoList',JSON.stringify(todoarr));}

       function add(){
            console.log('chandana tume tara');
            const input_text=input_box.value;
            if(input_text.length ==0){
                alert('Write something..');
                return false;
            }
                const li=document.createElement("li");
                const p=document.createElement("p");
                p.innerText=input_text;
                li.appendChild(p);

                const edtbtn=document.createElement("button");
                edtbtn.innerText="Edit";
                li.appendChild(edtbtn);
                edtbtn.classList.add('edit');

                const dltbtn=document.createElement("button");
                dltbtn.innerText="Delete";
                li.appendChild(dltbtn);
                dltbtn.classList.add('deleteb');
                list.appendChild(li);
                input_box.value="";   
                savetodo(input_text);
        }
        function update_button(e){
            if(e.target.innerHTML === "Delete"){
               list.removeChild(e.target.parentElement);
                dltlocaltodo(e.target.parentElement);
            }
            if(e.target.innerHTML ==="Edit"){
                input_box.value =e.target.previousElementSibling.innerHTML;
            }
        }
      function getPriviousTodo(todo){
        if(localStorage.getItem('todoList')===null){
             todoarr=[];
           }
           else{
         todoarr= JSON.parse( localStorage.getItem('todoList'));
          todoarr.forEach(todo => {

            const li=document.createElement("li");
                const p=document.createElement("p");
                p.innerText=todo;
                li.appendChild(p);

                const edtbtn=document.createElement("button");
                edtbtn.innerText="Edit";
                li.appendChild(edtbtn);
                edtbtn.classList.add('edit');

                const dltbtn=document.createElement("button");
                dltbtn.innerText="Delete";
                li.appendChild(dltbtn);
                dltbtn.classList.add('deleteb');
                list.appendChild(li);
          });
           }
      }
     function dltlocaltodo(todo){
        let todoList;
        if(localStorage.getItem('todoList')===null){
           let  todoarr=[];
           }
         else{
            todoarr = JSON.parse( localStorage.getItem('todoList'));
           }
            let todotext=todo.children[0].innerHTML;
            let todoindex=todoarr.indexOf(todotext);
            todoarr.splice(todoindex,1);
            localStorage.setItem("todoList",JSON.stringify(todoarr));
      }
   document.addEventListener("DOMContentLoaded",getPriviousTodo);
   button. addEventListener('click',add);
   list.addEventListener('click',update_button);
   
    