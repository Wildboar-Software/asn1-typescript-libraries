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

    it("rejects empty strings", () => {
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

    it("removes all spaces for numeric ICR", () => {
        expect(prepString("1 2 3", { insignificant: "numeric" })).toBe("123");
    });

    it("removes hyphens and spaces for telephone ICR", () => {
        expect(prepString("+1-415 555 1212", {
            caseFold: true,
            insignificant: "telephone",
        })).toBe("+14155551212");
    });

    it("rejects a combining mark as the first character", () => {
        expect(prepString("\u0301e")).toBeUndefined();
    });
});
