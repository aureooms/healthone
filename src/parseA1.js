import validateLineLength from './validateLineLength';
import validateRequiredField from './validateRequiredField';

export default function parseA1(parts, options) {
	validateLineLength(parts, 'A1', 3, options.trailing.A1);

	validateRequiredField(parts, 'reference', 1);

	const [descriptor, reference, identifier] = parts;

	return {
		descriptor,
		reference,
		identifier
	};
}
