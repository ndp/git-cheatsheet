describe('git cheatsheet', function () {
  describe('next()', function () {
    it('returns first item in list if nothing selected', function () {
      expect(next(['A','B','C'], null)).toEqual('A');
    });
    it('returns second item in list if first item sent', function () {
      expect(next(['A','B','C'], 'A')).toEqual('B');
    });
    it('returns next item in list if middle item sent', function () {
      expect(next(['A','B','C'], 'B')).toEqual('C');
    });
    it('returns first item in list if last item sent', function () {
      expect(next(['A','B','C'], 'C')).toEqual('A');
    });
  });

  describe('prev()', function () {
    it('returns last item in list if nothing selected', function () {
      expect(prev(['A','B','C'], null)).toEqual('C');
    });
    it('returns penultimate item in list if last item sent', function () {
      expect(prev(['A','B','C'], 'C')).toEqual('B');
    });
    it('returns prev item in list if middle item sent', function () {
      expect(prev(['A','B','C'], 'B')).toEqual('A');
    });
    it('returns last item in list if first item sent', function () {
      expect(prev(['A','B','C'], 'A')).toEqual('C');
    });
  });

});