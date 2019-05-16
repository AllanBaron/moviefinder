export const title = 'Movie Finder';
export const description = 'Encontre o cinema mais perto de você pelo menor preço.';

export const menu = [
  {
    id: 0,
    title: 'Home',
    optionalTitle: 'Home',
    url: '/',
    props: {},
  },
  {
    id: 1,
    title: 'Em Cartaz',
    optionalTitle: 'Filmes em Cartaz',
    url: '/filmes/em-cartaz',
    props: {
      movieStatus: 'released',
    },
  },
  {
    id: 2,
    title: 'Em Breve',
    optionalTitle: 'Filmes em Breve',
    url: '/filmes/em-breve',
    props: {
      movieStatus: 'comming-soon',
    },
  },
];
