import { isSubstringSubset } from "./oRAddressSubstringElementsMatch.js";

describe("isSubstringSubset()", () => {
    test("#1", () => {
        const value = {
            asdf: "zxcv",
            qwer: "yuiop",
        };
        const assertion = {
            asdf: "xc",
            qwer: "op",
        };
        expect(isSubstringSubset(value, assertion)).toBe(true);
    });
    test("#2", () => {
        const value = {
            asdf: "zxcv",
            qwer: "yuiop",
        };
        const assertion = {
            asdf: "xc",
            qwer: "yugioh... am I right???",
        };
        expect(isSubstringSubset(value, assertion)).toBe(false);
    });
    test("#3", () => {
        const value = {
            asdf: "zxcv",
            qwer: {
                big: "boi",
            },
        };
        const assertion = {
            asdf: "xc",
            qwer: {
                big: "oi",
            },
        };
        expect(isSubstringSubset(value, assertion)).toBe(true);
    });
    test("#4", () => {
        const value = {
            asdf: "zxcv",
            qwer: {
                big: "boi",
            },
        };
        const assertion = {
            asdf: "xc",
            qwer: {
                big: "chungus",
            },
        };
        expect(isSubstringSubset(value, assertion)).toBe(false);
    });
    test("#5", () => {
        const value = {
            asdf: "zxcv",
            qwer: {
                big: "boi",
            },
        };
        const assertion = {
            asdf: "zxcv",
            qwer: {
                big: "boi",
            },
        };
        expect(isSubstringSubset(value, assertion)).toBe(true);
    });
    test("#6", () => {
        const value = {
            asdf: "zxcv",
            qwer: {
                big: "boi",
            },
        };
        const assertion = {
            asdf: "zxcv",
            qwer: [ "big", "boi" ],
        };
        expect(isSubstringSubset(value, assertion)).toBe(false);
    });
    test("compares integers with loose equality", () => {
        expect(isSubstringSubset(5, 5n)).toBe(true);
        expect(isSubstringSubset(5n, 6)).toBe(false);
        expect(isSubstringSubset({ terminalType: 3 }, { terminalType: 3n })).toBe(true);
        expect(isSubstringSubset({ terminalType: 3 }, { terminalType: 4 })).toBe(false);
    });
});
