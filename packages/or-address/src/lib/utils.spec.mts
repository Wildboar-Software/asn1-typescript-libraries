import { describe, expect, it } from "vitest";
import {
    findRFC1685LabelValueSeparator,
    findRFC2156LabelValueSeparator,
    rfc1685LabelValuePairs,
    rfc2156LabelValuePairs,
    splitRFC1685AddressComponents,
    splitRFC2156AddressComponents,
} from "./utils.mjs";

describe("findRFC1685LabelValueSeparator", () => {
    it("should return the index of the first equals sign", () => {
        expect(findRFC1685LabelValueSeparator("name=value")).toBe(4);
    });

    it("should skip a doubled equals sign in a DDA type", () => {
        expect(findRFC1685LabelValueSeparator("deadb==f=value")).toBe(8);
    });

    it("should skip doubled equals signs in the label and ignore them in the value", () => {
        expect(findRFC1685LabelValueSeparator("b==fb==f=b==f")).toBe(8);
    });

    it("should treat a literal equals in the value as part of the value", () => {
        expect(findRFC1685LabelValueSeparator("O=foo=bar")).toBe(1);
    });
});

describe("findRFC2156LabelValueSeparator", () => {
    it("should return the index of the first equals sign", () => {
        expect(findRFC2156LabelValueSeparator("ADMD=ATT")).toBe(4);
    });

    it("should skip an equals sign quoted by $", () => {
        expect(findRFC2156LabelValueSeparator("DD.a$=b=c")).toBe(7);
    });

    it("should return -1 when every equals sign is quoted", () => {
        expect(findRFC2156LabelValueSeparator("a$=b")).toBe(-1);
    });
});

describe("splitRFC1685AddressComponents", () => {
    const semicolon = ";".codePointAt(0)!;
    const slash = "/".codePointAt(0)!;

    it("should split on a semicolon", () => {
        expect(Array.from(splitRFC1685AddressComponents("G=John;S=Smith", semicolon)))
            .toEqual(["G=John", "S=Smith"]);
    });

    it("should not split on a doubled delimiter", () => {
        expect(Array.from(splitRFC1685AddressComponents("O=a;;bank;S=b", semicolon)))
            .toEqual(["O=a;;bank", "S=b"]);
    });

    it("should skip a leading slash", () => {
        expect(Array.from(splitRFC1685AddressComponents("/O=a//b/C=US/", slash)))
            .toEqual(["O=a//b", "C=US"]);
    });

    it("should trim a space after a delimiter", () => {
        expect(Array.from(splitRFC1685AddressComponents("G=Andy; S=Wharol", semicolon)))
            .toEqual(["G=Andy", "S=Wharol"]);
    });
});

describe("splitRFC2156AddressComponents", () => {
    it("should split on mixed slashes and semicolons", () => {
        expect(Array.from(splitRFC2156AddressComponents("/G=Andy;S=Wharol/O=MMNY/")))
            .toEqual(["G=Andy", "S=Wharol", "O=MMNY"]);
    });

    it("should not split on a $-quoted delimiter", () => {
        expect(Array.from(splitRFC2156AddressComponents("/O=a$/b/C=US/")))
            .toEqual(["O=a$/b", "C=US"]);
    });

    it("should treat $$/ as an escaped dollar then a real separator", () => {
        expect(Array.from(splitRFC2156AddressComponents("/O=a$$/S=b/")))
            .toEqual(["O=a$$", "S=b"]);
    });
});

describe("rfc1685LabelValuePairs", () => {
    it("should unescape a doubled delimiter only in the value", () => {
        expect(Array.from(rfc1685LabelValuePairs("O=a;;bank;S=b")))
            .toEqual([["O", "a;bank"], ["S", "b"]]);
    });

    it("should unescape == only in a DDA type", () => {
        expect(Array.from(rfc1685LabelValuePairs("DDA:foo==bar=value")))
            .toEqual([["DDA:foo=bar", "value"]]);
    });

    it("should leave a literal equals in a value", () => {
        expect(Array.from(rfc1685LabelValuePairs("O=foo=bar")))
            .toEqual([["O", "foo=bar"]]);
    });

    it("should unescape doubled slashes in a value", () => {
        expect(Array.from(rfc1685LabelValuePairs("/O=a//b/C=US/")))
            .toEqual([["O", "a/b"], ["C", "US"]]);
    });

    it("should treat a third semicolon as a real separator", () => {
        expect(Array.from(rfc1685LabelValuePairs("O=a;;;S=b")))
            .toEqual([["O", "a;"], ["S", "b"]]);
    });
});

describe("rfc2156LabelValuePairs", () => {
    it("should unescape $/, $=, and $$", () => {
        expect(Array.from(rfc2156LabelValuePairs("/O=a$/b$=c$$d/C=US/")))
            .toEqual([["O", "a/b=c$d"], ["C", "US"]]);
    });

    it("should unescape $= in a DDA type", () => {
        expect(Array.from(rfc2156LabelValuePairs("/DD.a$=b=c/C=US/")))
            .toEqual([["DD.a=b", "c"], ["C", "US"]]);
    });

    it("should unescape $$$ as $ plus the next character", () => {
        expect(Array.from(rfc2156LabelValuePairs("/O=a$$$b/C=US/")))
            .toEqual([["O", "a$b"], ["C", "US"]]);
    });

    it("should unescape $$$$ as two dollars", () => {
        expect(Array.from(rfc2156LabelValuePairs("/O=a$$$$b/C=US/")))
            .toEqual([["O", "a$$b"], ["C", "US"]]);
    });

    it("should yield null for a trailing $", () => {
        expect(Array.from(rfc2156LabelValuePairs("/O=a$")))
            .toContain(null);
    });
});
