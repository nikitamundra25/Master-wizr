import { isProd } from '../configs/AppConfigs';

/**
 * logs the text only if the process mode is development
 */
export function logger(...args: any[]) {
	if (!isProd) {
		for (let index = 0; index < args.length; index++) {
			const data = args[index];
			console.log('LOG: -------------------------');
			console.log('LOG: Common -> logger -> data', data);
			console.log('LOG: -------------------------');
		}
	}
}
