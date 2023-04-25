const firstName="krishna"
const lastName="Sheelvanth"
const age=27

const person={
    firstName,
    lastName,
    age
}




const x=person


const todo={
    id:1,
    title:'take out trash',
    user:{
        name:"krishna"
    }
}

const {id,title,user:{name}}=todo
console.log(id,title,name)