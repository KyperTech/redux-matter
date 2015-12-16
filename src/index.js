/** Matter Singleton
 */

import Middleware from './middleware';
import MatterInstance from './matter';

let matter;
export function createMiddleware(matterName, matterOptions) {
  //Create singleton instance of Matter using provided project name and options
  matter = new MatterInstance(matterName, matterOptions);
  //Return middleware (which imports the new matter instance)
  return Middleware;
}
//Create new matter instance
export function createMatter(matterName, matterOptions) {
  //TODO: Handle being passed a matter instance
  return matter = new MatterInstance(matterName, matterOptions);
}
//Export matter instance
export function getMatter() {
  return matter;
}

export * as Reducers from './reducers';
export * as Actions from './actions';
