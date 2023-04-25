let x;

const todo={}

todo.id=1 
todo.name='Buy Milk' 
todo.completed=false

x=todo
x= person={
    address:{
        coords:{
            lat:42.32,
            lng:-71.45
        }
    }
}
// console.log(...x)

const obj1={a:1,b:2}
const obj2={c:3,d:4}

const obj3 ={...obj1,...obj2}
const obj4=Object.assign({},obj1,obj2)

const todos=[
    {
        id:1,
        name:'Buy Milk'
    },
    {
        id:2,
        name:'Pick up kids from school'
    },
    {
        id:3,
        name:'take out trash'
    },
]

x=todos

x=Object.keys(todos)
x=Object.values(todos)
x=Object.entries(todos)

console.log(x)