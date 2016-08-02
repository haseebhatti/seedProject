describe("converting numbers to strings", function() {
    it('should be defined', function() {
        expect(RomanNumerals).toBeDefined();
    })
    it('should have a convert method', function() {
        expect(RomanNumerals.convert).toBeDefined();
    });
    it('should return I for 1', function() {
        expect(RomanNumerals.convert(1)).toEqual("I");
    });
    it('should return II for 2', function() {
        expect(RomanNumerals.convert(2)).toEqual("II");
    });
    it('should return III for 3', function() {
        expect(RomanNumerals.convert(3)).toEqual("III");
    });
    it('should return 0 for 0', function() {
        expect(RomanNumerals.convert(0)).toEqual("0");
    });
    it('should return V for 5', function() {
        expect(RomanNumerals.convert(5)).toEqual("V");
    });
});
