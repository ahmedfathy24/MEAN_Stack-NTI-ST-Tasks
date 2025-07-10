const http = require('http');
let users=[
    {id:1,name: "Ahmed", age: 20},
    {id:2,name: "Mohamed", age: 22},
    {id:3,name: "Ali", age: 21},
    {id:4,name: "Mahmoud", age: 23},
    {id:5,name: "Eyad", age: 25},
]
let Posts=[
    {id:1,text:"this is post 1"},
    {id:2,text:"this is post 2"},
    {id:3,text:"this is post 3"},
    {id:4,text:"this is post 4"},
    {id:5,text:"this is post 5"},
]
    
let nextUserId = users.length + 1;
let nextPostId = Posts.length + 1;

const server = http.createServer((req, res) => {
    if(req.url === '/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify(users));
    }
    else if(req.url === '/users' && req.method === 'POST'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            try{
                const newUser = JSON.parse(body);
                const errors = [];
                if (!newUser.name || typeof newUser.name !== 'string') {
                    errors.push("name is required and must be a string");
                }

                if (!newUser.age || typeof newUser.age !== 'number') {
                    errors.push("age is required and must be a number");
                }

                if (errors.length > 0) {
                    res.setHeader('Content-Type', 'text/plain');
                    return res.end(errors.join('\n'));
                }
                newUser.id = nextUserId;
                const orderedUser = {id: nextUserId++,name: newUser.name,age: newUser.age};                
                users.push(orderedUser);
                res.setHeader('Content-Type', 'text/plain');
                res.end(`User ${orderedUser.name} added successfully and has ID (${orderedUser.id}) (ID is auto generated)`);
            }
            catch{
                res.setHeader('Content-Type', 'text/plain');
                res.end('Invalid request body. Please provide a valid user object with the following properties: name (string), age (number)');
            
            }
        })
    }
    else if(req.url === '/users' && req.method === 'DELETE'){
        req.on('data', (chunk) => {
            try{
            const {id}=JSON.parse(chunk);
            if(!id){
                res.setHeader('Content-Type', 'text/plain');
                return res.end('id is required');
            }
            const FoundUser=users.find(user=>user.id===id);
            if(FoundUser===undefined){
                res.setHeader('Content-Type', 'text/plain');
                return res.end('User not exist');
            }
            users=users.filter(user=>user.id!==id);
            res.setHeader('Content-Type', 'text/plain');
            return res.end("deleted user successfully");
            }
            catch{
                res.setHeader('Content-Type', 'text/plain');
                res.end('Invalid id, please provide a valid id');
            }
        })
    }
    else if(req.url === '/users' && req.method === 'PUT'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            try{
            const {id,name,age}=JSON.parse(body);
            if (!id || typeof id !== 'number') {
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Invalid id, please provide a valid id');
            }
            const user = users.find(u => u.id === id);
            if (user===undefined) {
                res.setHeader('Content-Type', 'text/plain');
                return res.end('User not found');
            }
            if (name !== undefined && typeof name === 'string') {
                user.name = name;
            }
            if (age !== undefined && typeof age === 'number') {
                user.age = age;
            }
            res.setHeader('Content-Type', 'text/plain');
            res.end("User is updated successfully");
        }
        catch{
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error in updating user');
        }
        })
    }
   else if (req.url === '/Posts' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify(Posts));
    }
    else if(req.url === '/Posts' && req.method === 'POST'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const newPost = JSON.parse(body);
            try{
            if(!newPost.text){
                res.setHeader('Content-Type', 'text/plain');
                return res.end('text is required');
            }
            }
            catch{
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error in creating post');
            }
            newPost.id = nextPostId;
            const orderedPost = {id: nextPostId++,text: newPost.text};
            Posts.push(orderedPost);
            res.setHeader('Content-Type', 'text/plain');
            res.end('created post successfully and has ID ('+orderedPost.id+') (ID is auto generated)');
        });
    }
    else if(req.url === '/Posts' && req.method === 'DELETE'){
        req.on('data', (chunk) => {
            try{
            const {id}=JSON.parse(chunk);
            if(!id){
                res.setHeader('Content-Type', 'text/plain');
                return res.end('id is required');
            }
            const FoundPost=Posts.find(post=>post.id===id);
            if(FoundPost===undefined){
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Post not exist');
            }
            Posts=Posts.filter(post=>post.id!==id);
            res.setHeader('Content-Type', 'text/plain');
            return res.end("deleted post successfully");
            }
            catch{
                res.setHeader('Content-Type', 'text/plain');
                res.end('Invalid id, please provide a valid id');
            }
        })
    } 
    else if(req.url === '/Posts' && req.method === 'PUT'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            try{
            const {id,text}=JSON.parse(body);
            if (!id || typeof id !== 'number') {
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Invalid id, please provide a valid id');
            }
            const post = Posts.find(p => p.id === id);
            if (post===undefined) {
                res.setHeader('Content-Type', 'text/plain');
                return res.end('User not found');
            }
            if (text !== undefined && typeof text === 'string') {
                post.text = text;
            }
            res.setHeader('Content-Type', 'text/plain');
            res.end("User is updated successfully");
        }
        catch{
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error in updating user');
        }
        })
    }
    else {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
})
