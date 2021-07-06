const Employee = require('../lib/Employee.js');

test('creates an Employee object', () =>
{
    const employee = new Employee('Nathan', 123, 'natepfau@yahoo.com');

    expect(employee.getName()).toBe('Nathan');
    expect(employee.getId()).toBe(123);
    expect(employee.getEmail()).toBe('natepfau@yahoo.com');
    expect(employee.getRole()).toBe('Employee');
});