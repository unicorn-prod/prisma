const users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@export.com',
    age: 30
},
    {
        id: '2',
        name: 'Sarah',
        email: 'sarah@mail.ua'
    }, {
        id: '3',
        name: 'Michael',
        email: 'michael@zep.ua'
    }
];

let posts = [{
    id: '1',
    title: 'My first post',
    body: 'This is post about absolution',
    published: true,
    author: '1'
}, {
    id: '2',
    title: 'My second post',
    body: 'This post is about pollution...',
    published: false,
    author: '1'
}, {
    id: '3',
    title: 'My third post',
    body: 'This is my second post about absolution...',
    published: true,
    author: '2'
}]

let comments = [{
    id: '1',
    text: 'My first comment',
    author: '2',
    post: '1'
}, {
    id: '2',
    text: 'My second comment',
    author: '3',
    post: '2'
}, {
    id: '3',
    text: 'My third comment',
    author: '3',
    post: '3'
}, {
    id: '4',
    text: 'My fourth comment',
    author: '1',
    post: '3'
}]

const db = {
    users,
    posts,
    comments
}

export {db as default}