import TodoApp from './TodoApp';
import TodoMain from './TodoMain';

export default { 
  path: '/todo',
  component: TodoApp,
  indexRoute: { component: TodoMain },
  childRoutes: []
};
