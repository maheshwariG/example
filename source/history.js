import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export default (typeof document !== 'undefined' &&
document.body &&
typeof window !== 'undefined'
  ? createBrowserHistory()
  : createMemoryHistory());