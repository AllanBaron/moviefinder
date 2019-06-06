export const title = 'Movie Finder';
export const description = 'Encontre o cinema mais perto de você pelo menor preço.';

export const pages = [
  {
    id: 0,
    title: 'Home',
    url: '/',
  },
  {
    id: 1,
    title: 'Em Cartaz',
    optionalTitle: 'Filmes em Cartaz',
    url: '/filmes/em-cartaz',
    movieStatus: 'released',
  },
  {
    id: 2,
    title: 'Em Breve',
    optionalTitle: 'Filmes em Breve',
    url: '/filmes/em-breve',
    movieStatus: 'comming-soon',
  },
];

export const pageNotFound = {
  id: 0,
  title: 'Página 404',
  optionalTitle: 'Página não encontrada',
};
