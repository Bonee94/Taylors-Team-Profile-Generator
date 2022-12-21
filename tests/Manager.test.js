const Manager = require('../lib/manager-class')


describe("Manager", () => {
    const name = "taylor";
    const id = 1;
    const email = 'email@example.com';
    const officeNumber = '22';

    const checkObj = {
        name: 'taylor',
        employeeID: 1,
        email: 'email@example.com',
        officeNumber: '22',
        role: 'Manager',
    };

    it('Should return truthy that it is a object constructor', () => {
        expect(typeof new Manager).toBe('object');
    });

    it('Should return an object containing a passed in name, id, email and office number with a constant role of Manager when called with the new keyword', () => {
        const obj = new Manager(name, id, email, officeNumber);

        expect(obj).toMatchObject(checkObj);
    });

    it('Should have a getName method that is a function', () => {
        const obj = new Manager(name, id, email);
        expect(typeof obj.getName).toBe('function');
    });

    it('Should have a getID method that is a function', () => {
        const obj = new Manager(name, id, email);
        expect(typeof obj.getId).toBe('function');
    });

    it('Should have a getEmail method that is a function', () => {
        const obj = new Manager(name, id, email);
        expect(typeof obj.getEmail).toBe('function');
    });

    it('Should have a getRole method that is a function', () => {
        const obj = new Manager(name, id, email);
        expect(typeof obj.getRole).toBe('function');
    });
})
