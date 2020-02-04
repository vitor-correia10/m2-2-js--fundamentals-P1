const max = require('../../workshop/8-functions/8-exercise-1');
//import * as ex1 from '../../workshop/8-functions/8-exercise-1';

test('Test max()', () => {
	expect(max(10, 3)).toBe(10);
	expect(max(1, 3)).toBe(3);
	expect(max(-3, 3)).toBe(3);
	expect(max(0, 3)).toBe(3);
	expect(max(1, 1)).toBe(1);
});
