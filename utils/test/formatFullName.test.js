const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error when no arg is given', () => {
        expect(formatFullname()).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    });

    it('should return an error if "fullName" arg format is not <firstname> <lastname>', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
    });

    it('should return correct full name when given proper arg', () => {
        expect(formatFullname('jOHn DOe')).to.equal('John Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
    });
});