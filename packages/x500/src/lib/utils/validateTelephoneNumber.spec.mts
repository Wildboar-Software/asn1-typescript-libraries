import { validateTelephoneNumber } from "./validateTelephoneNumber.mjs";

describe("validateTelephoneNumber", () => {
    it("accepts E.123 international notation", () => {
        expect(validateTelephoneNumber("+ 44 582 10101")).toBe(true);
        expect(validateTelephoneNumber("+1-512-315-0280")).toBe(true);
        expect(validateTelephoneNumber("+61 3 9896 7830")).toBe(true);
        expect(validateTelephoneNumber("+1")).toBe(true);
        expect(validateTelephoneNumber("+44  582 10101")).toBe(true);
        expect(validateTelephoneNumber("+" + "1".repeat(31))).toBe(true);
    });

    it("rejects other printable characters, a missing plus, and overlong values", () => {
        expect(validateTelephoneNumber("+")).toBe(false);
        expect(validateTelephoneNumber("+---")).toBe(false);
        expect(validateTelephoneNumber("+1--512")).toBe(false);
        expect(validateTelephoneNumber("+1-512--315")).toBe(false);
        expect(validateTelephoneNumber("4458210101")).toBe(false);
        expect(validateTelephoneNumber(" +1")).toBe(false);
        expect(validateTelephoneNumber("+1(703)555-1212")).toBe(false);
        expect(validateTelephoneNumber("+1.703.555.1212")).toBe(false);
        expect(validateTelephoneNumber("+" + "1".repeat(32))).toBe(false);
        expect(validateTelephoneNumber("")).toBe(false);
    });
});
