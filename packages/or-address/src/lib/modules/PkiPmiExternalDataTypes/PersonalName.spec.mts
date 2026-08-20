import { describe, expect, it } from "vitest";
import { PersonalName } from "./PersonalName.ta.mjs";

describe("PersonalName.fromRFC2156String", () => {
    it("should parse a given name and surname", () => {
        const name = PersonalName.fromRFC2156String("Marshall.Rose");
        expect(name.given_name).toBe("Marshall");
        expect(name.initials).toBeUndefined();
        expect(name.surname).toBe("Rose");
        expect(name.generation_qualifier).toBeUndefined();
    });

    it("should parse initials and a surname", () => {
        const name = PersonalName.fromRFC2156String("M.T.Rose");
        expect(name.given_name).toBeUndefined();
        expect(name.initials).toBe("MT");
        expect(name.surname).toBe("Rose");
        expect(name.generation_qualifier).toBeUndefined();
    });

    it("should parse a given name, initials, and a surname", () => {
        const name = PersonalName.fromRFC2156String("Marshall.M.T.Rose");
        expect(name.given_name).toBe("Marshall");
        expect(name.initials).toBe("MT");
        expect(name.surname).toBe("Rose");
        expect(name.generation_qualifier).toBeUndefined();
    });

    it("should parse a surname-only personal name", () => {
        const name = PersonalName.fromRFC2156String("Rose");
        expect(name.given_name).toBeUndefined();
        expect(name.initials).toBeUndefined();
        expect(name.surname).toBe("Rose");
        expect(name.generation_qualifier).toBeUndefined();
    });

    it("should parse a single initial and a surname", () => {
        const name = PersonalName.fromRFC2156String("J.Linnimouth");
        expect(name.given_name).toBeUndefined();
        expect(name.initials).toBe("J");
        expect(name.surname).toBe("Linnimouth");
        expect(name.generation_qualifier).toBeUndefined();
    });

    it("should reject a string that is not a printable string", () => {
        expect(() => PersonalName.fromRFC2156String("Marshall.Rosé")).toThrow();
    });

    it("should reject an empty string", () => {
        expect(() => PersonalName.fromRFC2156String("")).toThrow();
    });
});
