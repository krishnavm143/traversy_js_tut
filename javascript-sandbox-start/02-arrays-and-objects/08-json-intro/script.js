// Json Javascript Object Notattion : Ligthweith data information

// receiving data as Api in JSon format

const post = {
    id: 1,
    titile: 'Post one',
    body: 'this is body'
}

//  convert to JSON
const str = JSON.stringify(post)

// parse JSON

const obj = JSON.parse(str)

console.log(str)


const posts = [
    {
        id: 1,
        titile: 'Post one',
        body: 'this is body'
    },
    {
        id: 1,
        titile: 'Post one',
        body: 'this is body'
    },
    {
        id: 1,
        titile: 'Post one',
        body: 'this is body'
    },
]

const strr=JSON.stringify(posts)
console.log(strr)