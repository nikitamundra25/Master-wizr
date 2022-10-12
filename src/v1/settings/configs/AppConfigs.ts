let mode: string = process.env.NODE_ENV;

if (!mode || mode === 'development') {
	mode = 'dev';
} else if (mode === 'production') {
	mode = 'live';
} else {
	mode = 'stage';
}

let data: any extends string
	? { [key: string]: string }
	: { [key: string]: any };
switch (mode) {
	case 'live':
		data = {
			API_ENDPOINT: '/',
			API_VERSION: 'api',
		};
		break;
	case 'stage':
		data = {
			API_ENDPOINT: '/',
			API_VERSION: 'api',
		};
		break;
	case 'dev':
		data = {
			API_ENDPOINT: 'http://192.168.2.110:4000/',
			API_VERSION: 'api',
		};
		break;
	default:
		data = {};
		break;
}

data['itemsPerPage'] = 10;
data['defaultDateFormat'] = 'ddd, Do MMMM YYYY';
data['defaultActivityDateFormat'] = 'YYYY-MM-DD HH:mm:s';

export const isProd = mode === 'live';
export const AppConfig = data;
export const UserTypeEnum = {
	ADMIN: 'admin',
};
export const AcceptedImageFormat = [
	'image/jpg',
	'image/png',
	'image/bmp',
	'image/jpeg',
	'image/tiff',
	'image/gif',
];
