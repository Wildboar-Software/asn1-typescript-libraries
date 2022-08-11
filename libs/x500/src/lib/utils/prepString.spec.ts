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

    it("rejects prohibited characters", () => {
        const input: string = "HEy there big 🅱️oi";
        const expectedOutput = undefined;
        expect(prepString(input)).toBe(expectedOutput);
    });
});
