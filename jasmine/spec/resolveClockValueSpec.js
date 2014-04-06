describe("resolveClockValue", function() {
  var time, sec;

  beforeEach(function() {
  });

  describe("入力パターン", function() {
      it("数字を入れた場合はそのまま秒数として返す(10)", function() {
        sec = resolveClockValue(10);
        expect( sec ).toEqual( 10 );
      });
      it("数字を入れた場合はそのまま秒数として返す(5.5)", function() {
        sec = resolveClockValue( 5.5 );
        expect( sec ).toEqual( 5.5 );
      });
      it("数字か文字列以外のオブジェクトを入れた場合は 0を返す", function() {
        sec = resolveClockValue( {'a':'b'} );
        expect( sec ).toEqual( 0 );
      });
  });

  describe("時間文字列のパース", function() {
      it("5:34:31.396 = 5 時 34 分 31 秒 396 ミリ秒 = 20071.396", function() {
        sec = resolveClockValue("5:34:31.396");
        expect( sec ).toEqual( 20071.396 );
      });
      it("124:59:36 = 124 時間 59 分 36 秒 = 449976", function() {
        sec = resolveClockValue("124:59:36");
        expect( sec ).toEqual( 449976 );
      });
      it("0:05:01.2 = 5 分 1 秒 200 ミリ秒 = 0:05:01.2", function() {
        sec = resolveClockValue("0:05:01.2");
        expect( sec ).toEqual( 301.2 );
      });
      it("0:00:04 = 4 秒 = 4", function() {
        sec = resolveClockValue("0:00:04");
        expect( sec ).toEqual( 4 );
      });
      it("09:58 = 9 分 58 秒 = 598", function() {
        sec = resolveClockValue("09:58");
        expect( sec ).toEqual( 598 );
      });
      it("00:56.78 = 56 秒 780 ミリ秒 = 56.78", function() {
        sec = resolveClockValue("00:56.78");
        expect( sec ).toEqual( 56.78 );
      });
      it("76.2s = 76.2 秒 = 76 秒 200 ミリ秒 = 76.2", function() {
        sec = resolveClockValue("76.2s");
        expect( sec ).toEqual( 76.2 );
      });
      it("7.75h = 7.75 時間 = 7 時間 45 分 = 27900", function() {
        sec = resolveClockValue("7.75h");
        expect( sec ).toEqual( 27900 );
      });
      it("13min = 13 分 = 780", function() {
        sec = resolveClockValue("13min");
        expect( sec ).toEqual( 780 );
      });
      it("2345ms = 2345 ミリ秒 = 2.345", function() {
        sec = resolveClockValue("2345ms");
        expect( sec ).toEqual( 2.345 );
      });
      it("12.345 = 12 秒 345 ミリ秒 = 12.345", function() {
        sec = resolveClockValue("12.345");
        expect( sec ).toEqual( 12.345 );
      });
  });

});
