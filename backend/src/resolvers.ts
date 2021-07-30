const resolvers = {
    Query: {
        book: (_) => {
            return {
                title: '제목',
                author: 'sungin',
            };
        }
    },
    Mutation: {
        updateBook: (_, {title, author}) => {
            console.log(title);
            return {
                title,
                author
            }
        },
    },
};

export default resolvers;
