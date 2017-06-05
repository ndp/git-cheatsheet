describe('git cheatsheet / base', function () {
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

  describe('esc', function() {
    it('replaces cr with <br>', function() {
      expect(esc('foo\rbar')).toEqual('foo<br>bar')
    })
    it('replaces <x> with <ems>', function() {
      expect(esc('foo <bar> baz')).toEqual('foo <em>bar</em> baz')
    })
    it('replaces [x] with <span>', function() {
      expect(esc('foo [bar] baz')).toEqual('foo <span class="optional">bar</span> baz')
    })
    it('replaces `x=3` with <code>', function() {
      expect(esc('foo `x=3` baz')).toEqual('foo <code>x=3</code> baz')
      expect(esc('foo `x=3` baz `y=5`')).toEqual('foo <code>x=3</code> baz <code>y=5</code>')
    })
  });

  describe('detectLanguage', function() {
    const navigator = {}
    it('looks at navigation', function() {
      navigator.language = 'fr-FR'
      expect(detectLanguage(navigator)).toEqual('fr')
    })
    it('cookie can override', function() {
      navigator.language = 'fr-FR'
      global.cookies.read = () => 'de'
      try {
        expect(detectLanguage(navigator)).toEqual('de')
      } finally {
        global.cookies.read = () => null
      }
    })
    it('works for IE', function() {
      navigator.language = undefined
      navigator.userLanguage = 'fr-FR'
      expect(detectLanguage(navigator)).toEqual('fr')
    })
    it('works with nil', function() {
      navigator.language = undefined
      navigator.userLanguage = undefined
      expect(detectLanguage(navigator)).toEqual('en')
    })
  })

});
