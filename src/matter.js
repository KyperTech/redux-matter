/** Matter Singleton
 */

import Matter from 'kyper-matter';

//Default configuration options
let defaultOptions = {
	logLevel: 'trace'
};

let instance = null;
class MatterInstance {
	constructor(appName, options) {
		if (!instance) {
      instance = new Matter(appName, options);
    }
		return instance;
	}
}

//Create singleton instance of Matter using project name
export default MatterInstance;
