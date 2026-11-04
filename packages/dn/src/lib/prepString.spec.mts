import { prepString } from "./prepString.mjs";

describe("prepString()", () => {
    it("maps TAB/LF/CR to space and collapses insignificant spaces", () => {
        const input: string = "  \r\n \t HEy there  big\r\nboi\u00AD, \x00\x01watchu up 2???";
        const expectedOutput: string = "HEy there big boi, watchu up 2???";
        expect(prepString(input)).toBe(expectedOutput);
        expect(prepString(input)).toBe(expectedOutput);
    });

    it("works with a string containing 'F'", () => {
        const input: string = "F";
        const expectedOutput: string = "F";
        expect(prepString(input)).toBe(expectedOutput);
        expect(prepString(input)).toBe(expectedOutput);
    });

    it("does not transform a string that is already normal", () => {
        const input: string = "Wildboar Software";
        const expectedOutput: string = input;
        expect(prepString(input)).toBe(expectedOutput);
        expect(prepString(input)).toBe(expectedOutput);
    });

    it("rejects unpaired surrogates", () => {
        const input: string = "HEy there \uDFFF big oi";
        expect(prepString(input)).toBeUndefined();
        expect(prepString(input)).toBeUndefined();
    });

    it("treats a string of only spaces as a single space", () => {
        expect(prepString("   ")).toBe(" ");
        expect(prepString("\t\n")).toBe(" ");
    });

    it("rejects empty strings and strings that map to nothing", () => {
        expect(prepString("")).toBeUndefined();
        expect(prepString("\u00AD")).toBeUndefined();
    });

    it("does not strip CJK compatibility forms or Arabic presentation forms", () => {
        expect(prepString("\uFE30")).toBe("\uFE30".normalize("NFKC"));
        expect(prepString("\uFE80")).toBe("\uFE80".normalize("NFKC"));
    });

    it("maps variation selectors U+FE00..U+FE0F to nothing", () => {
        expect(prepString("a\uFE00b")).toBe("ab");
        expect(prepString("a\uFE0Fb")).toBe("ab");
    });

    it("maps Cf characters such as ZWNJ to nothing", () => {
        expect(prepString("a\u200Cb")).toBe("ab");
    });

    it("case-folds sharp s when requested", () => {
        expect(prepString("STRASSE", { caseFold: true }))
            .toBe(prepString("Straße", { caseFold: true }));
    });

    it("case-folds printable ASCII and collapses its spaces", () => {
        expect(prepString("  AbC  DeF ", { caseFold: true })).toBe("abc def");
        expect(prepString("already fine")).toBe("already fine");
        expect(prepString("Already Fine", { caseFold: true })).toBe("already fine");
    });

    it("maps the clause 7.2 space controls, including NEL and VT", () => {
        for (const ch of [ "\t", "\n", "\v", "\f", "\r", "\u0085" ]) {
            expect(prepString(`a${ch}b`)).toBe("a b");
            expect(prepString(ch)).toBe(" ");
        }
    });

    it("maps clause 7.2 deletions to nothing and drops other controls", () => {
        const deleted: string[] = [
            "\u00AD", "\u1806", "\u034F", "\u180B", "\u180C", "\u180D",
            "\uFE00", "\uFE0F", "\uFFFC", "\u200B", "\u200C", "\u200D",
            "\u2060", "\uFEFF", "\u08E2", "\u0000", "\u0001", "\u007F", "\u009F",
        ];
        for (const ch of deleted) {
            expect(prepString(`a${ch}b`)).toBe("ab");
            expect(prepString(ch)).toBeUndefined();
        }
        expect(prepString("\u0001 \u0001 \u0001")).toBe(" ");
    });

    it("prepares long printable strings and long strings with a mapped character", () => {
        const long = "Organizational Unit for the North American Sales Region covering enterprise accounts";
        expect(long.length).toBeGreaterThan(64);
        expect(prepString(long)).toBe(long);
        expect(prepString(long, { caseFold: true })).toBe(long.toLowerCase());
        expect(prepString(`${"A".repeat(70)}  B`, { caseFold: true })).toBe(`${"a".repeat(70)} b`);
        expect(prepString(`${"a".repeat(80)}\u00AD`)).toBe("a".repeat(80));
        expect(prepString(`${"a".repeat(80)}\u00A0b`)).toBe(`${"a".repeat(80)} b`);
    });

    it("still normalizes compatibility characters and no-break spaces", () => {
        expect(prepString("\uFB01le")).toBe("file");
        expect(prepString("\uFF21", { caseFold: true })).toBe("a");
        expect(prepString("\u00A0\u00A0")).toBe(" ");
        expect(prepString("Jos\u00E9 Garc\u00EDa", { caseFold: true })).toBe("jos\u00E9 garc\u00EDa");
    });
});
