const formatFullName = require('../formatFullName');
const expect = require('chai').expect;

describe('formatFullName', () => {
    it('should return an error when no arg is given', () => {
        expect(formatFullName()).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(function () { })).to.equal('Error');
    });

    it('should return an error if "fullName" arg format is not <firstname> <lastname>', () => {
        expect(formatFullName('John Doe Test')).to.equal('Error');
        expect(formatFullName('John')).to.equal('Error');
        expect(formatFullName('Doe')).to.equal('Error');
    });

    it('should return correct full name when given proper arg', () => {
        expect(formatFullName('jOHn DOe')).to.equal('John Doe');
        expect(formatFullName('JOHN DOE')).to.equal('John Doe');
        expect(formatFullName('john doe')).to.equal('John Doe');
    });
});