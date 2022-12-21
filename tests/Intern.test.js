const Intern = require('../lib/intern-class')


describe("Intern", () => {
    const name = "taylor";
    const id = 1;
    const email = 'email@example.com';
    const school = 'UTSA';

    const checkObj = {
        name: 'taylor',
        employeeID: 1,
        email: 'email@example.com',
        school: 'UTSA',
        role: 'Intern',
    };

    it('Should return truthy that it is a object constructor', () => {
        expect(typeof new Intern).toBe('object');
    });

    it('Should return an object containing a passed in name, id, email and school with a constant role of Intern when called with the new keyword', () => {
        const obj = new Intern(name, id, email, school);

        expect(obj).toMatchObject(checkObj);
    });

    it('Should have a getName method that is a function', () => {
        const obj = new Intern(name, id, email);
        expect(typeof obj.getName).toBe('function');
    });

    it('Should have a getID method that is a function', () => {
        const obj = new Intern(name, id, email);
        expect(typeof obj.getId).toBe('function');
    });

    it('Should have a getEmail method that is a function', () => {
        const obj = new Intern(name, id, email);
        expect(typeof obj.getEmail).toBe('function');
    });

    it('Should have a getRole method that is a function', () => {
        const obj = new Intern(name, id, email);
        expect(typeof obj.getRole).toBe('function');
    });

    it('Should have a getGithub method that is a function', () => {
        const obj = new Intern(name, id, email);
        expect(typeof obj.getSchool).toBe('function');
    });
})
