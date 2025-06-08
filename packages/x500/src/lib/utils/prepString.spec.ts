import { prepString } from "./prepString";

describe("prepString()", () => {
    it("works", () => {
        const input: string = "  \r\n \t HEy there  big\r\nboi\u00AD, \x00\x01watchu up 2???";
        const expectedOutput: string = "HEy there bigboi, watchu up 2???";
        expect(prepString(input)).toBe(expectedOutput);

        // We check that it matches a second time for this reason:
        // https://stackoverflow.com/questions/18462784/why-is-javascript-regex-matching-every-second-time
        expect(prepString(input)).toBe(expectedOutput);
    });

    // This was a regression caused by me accidentally leaving in an extra 'F'
    // in the hexadecimal Unicode character in the `prohibitedCharacters`
    // regular expression (lol)
    it("works with a string containing 'F'", () => {
        const input: string = "F";
        const expectedOutput: string = "F";
        expect(prepString(input)).toBe(expectedOutput);

        // We check that it matches a second time for this reason:
        // https://stackoverflow.com/questions/18462784/why-is-javascript-regex-matching-every-second-time
        expect(prepString(input)).toBe(expectedOutput);
    });

    it("does not transform a string that is already normal", () => {
        const input: string = "Wildboar Software";
        const expectedOutput: string = input;
        expect(prepString(input)).toBe(expectedOutput);

        // We check that it matches a second time for this reason:
        // https://stackoverflow.com/questions/18462784/why-is-javascript-regex-matching-every-second-time
        expect(prepString(input)).toBe(expectedOutput);
    });

    it("rejects prohibited characters", () => {
        const input: string = "HEy there \uDFFF big 🅱️oi";
        const expectedOutput = undefined;
        expect(prepString(input)).toBe(expectedOutput);
        // We check that it matches a second time for this reason:
        // https://stackoverflow.com/questions/18462784/why-is-javascript-regex-matching-every-second-time
        expect(prepString(input)).toBe(expectedOutput);
    });
});
