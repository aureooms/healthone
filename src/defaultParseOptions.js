/**
 * True means always
 * false means never
 * undefined means optional or all
 * any other type is used as a value
 */
const options = {
	newline: /[^\r\n]+/g,
	separator: '\\',
	dateFormat: undefined,
	timeFormat: undefined,
	timeZone: undefined,
	lang: undefined,
	end: 'END', // Specified but optional
	nnInA2: undefined,
	trailing: undefined
};

export default options;
