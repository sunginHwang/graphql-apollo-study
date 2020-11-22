const resolvers = {
    Query: {
        book: (_) => {
            return {
                title: '제목',
                author: 'sungin',
            };
        }
    },
};

export default resolvers;