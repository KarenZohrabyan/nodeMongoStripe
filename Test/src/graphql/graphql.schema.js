const  graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime' },
    { id: '2', name: 'Flan Fstan', genre: 'Es shat gitem inch' },
    { id: '3', name: 'Saving Ryan', genre: 'War' },
    { id: '4', name: 'Avatar', genre: 'Fantasy' },
];

const directors = [
    { id: '1', name: 'Quentin', age: 55 },
    { id: '2', name: 'Michael', age: 33 },
    { id: '3', name: 'James', age: 48 },
    { id: '4', name: 'Guy', age: 67 },
]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id);
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args) {
                return directors.find(director => director.id == args.id);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
})