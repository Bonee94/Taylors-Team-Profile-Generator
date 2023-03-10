const Engineer = require('../lib/engineer-class')


describe("Engineer", () => {
    const name = "taylor";
    const id = 1;
    const email = 'email@example.com';
    const githubUsername = 'taylorGithub';

    const checkObj = {
        name: 'taylor',
        employeeID: 1,
        email: 'email@example.com',
        githubUsername: 'taylorGithub',
        role: 'Engineer',
    };

    it('Should return truthy that it is a object constructor', () => {
        expect(typeof new Engineer).toBe('object');
    });

    it('Should return an object containing a passed in name, id, email and github username with a constant role of Engineer when called with the new keyword', () => {
        const obj = new Engineer(name, id, email, githubUsername);

        expect(obj).toMatchObject(checkObj);
    });

    it('Should have a getName method that is a function', () => {
        const obj = new Engineer(name, id, email);
        expect(typeof obj.getName).toBe('function');
    });

    it('Should have a getID method that is a function', () => {
        const obj = new Engineer(name, id, email);
        expect(typeof obj.getId).toBe('function');
    });

    it('Should have a getEmail method that is a function', () => {
        const obj = new Engineer(name, id, email);
        expect(typeof obj.getEmail).toBe('function');
    });

    it('Should have a getRole method that is a function', () => {
        const obj = new Engineer(name, id, email);
        expect(typeof obj.getRole).toBe('function');
    });

    it('Should have a getGithub method that is a function', () => {
        const obj = new Engineer(name, id, email);
        expect(typeof obj.getGithub).toBe('function');
    });
})
