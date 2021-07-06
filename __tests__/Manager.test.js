const Manager = require('../lib/Manager.js');

test('creates an Manager object', () =>
{
    const manager = new Manager('Nathan', 123, 'natepfau@yahoo.com', 18001234567);

    expect(manager.getName()).toBe('Nathan');
    expect(manager.getId()).toBe(123);
    expect(manager.getEmail()).toBe('natepfau@yahoo.com');
    expect(manager.getOfficeNumber()).toBe(18001234567);
    expect(manager.getRole()).toBe('Manager');
});