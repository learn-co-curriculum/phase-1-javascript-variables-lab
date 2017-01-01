const expect = chai.expect;

describe('Using Variables', function() {
  describe('companyName', function() {
    it('is set as Scuber', () => {
      expect(companyName).to.equal('Scuber')
    })

    it('raises error if the companyName is changed', () => {
      expect(() => { companyName = 'specialCompany'}).to.throw(TypeError)
    })
  })

  describe('mostProfitableNeighborhood', function() {
    it('is declared as equal to Chelsea', function() {
      expect(mostProfitableNeighborhood).to.equal('Chelsea')
    })

    it('does not raise error if the mostProfitableNeighborhood is changed', function(){
      expect(() => { mostProfitableNeighborhood = 'Upper West Side'}).to.not.throw(TypeError)
    })
  })

  describe('companyCeo', function() {
    it('is declared as equal to Chelsea', function() {
      expect(companyCeo).to.equal('Susan Smith')
    })

    it('does not raise error if the companyCeo is changed', function(){
      expect(() => { companyCeo = 'Lauren Hart'}).to.not.throw(TypeError)
    })
  })
})
