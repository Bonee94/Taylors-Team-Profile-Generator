const Employee = require('../lib/employee-class')


describe("Employee", () => {
    const name = "taylor";
    const id = 1;
    const email = 'email@example.com';

    const checkObj = {
        name: 'taylor',
        employeeID: 1,
        email: 'email@example.com',
        role: 'Employee',
    };

    it('Should return truthy that it is a object constructor', () => {
        expect(typeof new Employee).toBe('object');});

    it('Should return an object containing a passed in name, id and email with a constant role of employee when called with the new keyword', () => {
        const obj = new Employee(name, id, email);

        expect(obj).toMatchObject(checkObj);
    });

    it('Should have a getName method that is a function', () => {
        const obj = new Employee(name, id, email);
        expect(typeof obj.getName).toBe('function');
    });

    it('Should have a getID method that is a function', () => {
        const obj = new Employee(name, id, email);
        expect(typeof obj.getId).toBe('function');
    });

    it('Should have a getEmail method that is a function', () => {
        const obj = new Employee(name, id, email);
        expect(typeof obj.getEmail).toBe('function');
    });

    it('Should have a getRole method that is a function', () => {
        const obj = new Employee(name, id, email);
        expect(typeof obj.getRole).toBe('function');
    });
})


