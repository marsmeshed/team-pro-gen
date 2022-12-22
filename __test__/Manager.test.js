const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jennifer', 90, 'meek2004@live.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Jennifer', 90, 'meek2004@live.com');

    expect(manager.getRole()).toEqual("Manager");
});