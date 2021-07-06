const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () =>
{
    const engineer = new Engineer('Nathan', 123, 'natepfau@yahoo.com', 'bobswiftfoot');

    expect(engineer.getName()).toBe('Nathan');
    expect(engineer.getId()).toBe(123);
    expect(engineer.getEmail()).toBe('natepfau@yahoo.com');
    expect(engineer.getGithub()).toBe('bobswiftfoot');
    expect(engineer.getRole()).toBe('Engineer');
});