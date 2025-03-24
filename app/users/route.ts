export const User = [{
    id : 1,
    name: 'Zheeva',
    email: 'jieyra@outlook.com',
    stack: "Front End Developer",
} ,
 {
    id : 2,
    name: 'Adzashel',
    email: 'ver@gmail.com',
    stack: "Back End Developer",
 }
]


// get the data
export const GET = async() => {
   return Response.json(User);
}

// post the new data
export const POST = async (request : Request) => {
    const res = await request.json();

    const newData = {
        id: User.length + 1,
        name: res.name,
        email: res.email,
        stack: res.stack,
    }
    User.push(newData);

    return new Response(JSON.stringify(newData) , {
        headers : {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}