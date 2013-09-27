/*global describe, it */
'use strict';

(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              expect(formatName("Eddie", "Lau")).toEqual("Hello Eddie Lau")
            });
        });
    });
})();
