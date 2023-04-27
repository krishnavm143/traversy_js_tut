const library=[
    {
        title:"title one",
         author:"authort",
          status:{
            own:true,
            read:true,
            reading:true
          },
    },
    {
        title:"title twi",
         author:"authort",
          status:{
            own:true,
            read:true,
            reading:true
          },
    },
    {
        title:"title three",
         author:"authort",
          status:{
            own:true,
            read:true,
            reading:false
          },
    },
    {
        title:"title four",
         author:"authort",
          status:{
            own:true,
            read:false,
            reading:true
          },
    }
]

const newObj=library.map(item=>(
    {
        ...item,
        status:{
            ...item.status,
            read:true
        }
    }
))

console.log(newObj)

const {title:firstName}=library[0]

console.log(firstName)

const libStr=JSON.stringify(library)

console.log(libStr)