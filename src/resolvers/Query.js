const Query =  {
    users (parent, args, { db }, info) {
        if (!args.query) {
            return db.users 
        }
        return db.users.filter(user => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
        
    },
    posts (parent, args, { db }, info) {
        if (!args.query) {
            return db.posts;
        }
        return db.posts.filter(post => {
            return post.title.toLowerCase().includes(args.query.toLowerCase()) ||
            post.body.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    me () {
        return {
            id: '1234asd',
            name: 'Mike',
            email: 'mike@example.com',
            age: 30
        }
    },
    post () {
        return {
            id: '123a',
            title: 'How to kill somebody',
            body: 'Blah blah blah blah..',
            published: true
        }
    },
    comments (parent, args, { db }, info) {
        return db.comments;
    }
}

export {Query as default}