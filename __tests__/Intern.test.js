const Intern = require('../lib/Intern.js');

test('creates an Intern object', () =>
{
    const intern = new Intern('Nathan', 123, 'natepfau@yahoo.com', 'Full Sail');

    expect(intern.getName()).toBe('Nathan');
    expect(intern.getId()).toBe(123);
    expect(intern.getEmail()).toBe('natepfau@yahoo.com');
    expect(intern.getSchool()).toBe('Full Sail');
    expect(intern.getRole()).toBe('Intern');
});