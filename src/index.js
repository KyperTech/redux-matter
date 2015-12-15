/** Matter Singleton
 */

import MatterInstance from 'kyper-matter';

//Create singleton instance of Matter using project name
let matter;
export default function(matterName, matterOptions) {
  //TODO: Handle being passed a matter instance
  matter = new MatterInstance(matterName, matterOptions);
}
export function getMatter() {
  return matter;
}
export const logger = matter.utils.logger;
export const dom = matter.utils.dom;
export const storage = matter.utils.envStorage;
