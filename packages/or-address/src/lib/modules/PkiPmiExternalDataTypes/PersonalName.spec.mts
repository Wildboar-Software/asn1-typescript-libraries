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

describe("PersonalName.toRFC2156String", () => {
    it("should encode a given name and surname", () => {
        const name = new PersonalName("Rose", "Marshall");
        expect(name.toRFC2156String()).toBe("Marshall.Rose");
    });

    it("should encode initials and a surname", () => {
        const name = new PersonalName("Rose", undefined, "MT");
        expect(name.toRFC2156String()).toBe("M.T.Rose");
    });

    it("should encode a given name, initials, and a surname", () => {
        const name = new PersonalName("Rose", "Marshall", "MT");
        expect(name.toRFC2156String()).toBe("Marshall.M.T.Rose");
    });

    it("should encode a surname-only personal name", () => {
        const name = new PersonalName("Rose");
        expect(name.toRFC2156String()).toBe("Rose");
    });

    it("should round-trip encoded-pn through fromRFC2156String", () => {
        const encoded = "Marshall.M.T.Rose";
        expect(PersonalName.fromRFC2156String(encoded).toRFC2156String())
            .toBe(encoded);
    });

    it("should emit GQ as a separate pair when a generation qualifier is present", () => {
        const name = new PersonalName("Rose", "Marshall", undefined, "Jr");
        expect(name.toRFC2156String()).toBe("G=Marshall/S=Rose/GQ=Jr");
    });

    it("should not use encoded-pn when the given name is a single character", () => {
        const name = new PersonalName("Smith", "J");
        expect(name.toRFC2156String()).toBe("G=J/S=Smith");
    });
});

describe("PersonalName.isEqualTo", () => {
    it("should treat identical names as equal", () => {
        const a = new PersonalName("Rose", "Marshall", "MT", "Jr");
        const b = new PersonalName("Rose", "Marshall", "MT", "Jr");
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("should treat surname-only names as equal when the surnames match", () => {
        expect(new PersonalName("Rose").isEqualTo(new PersonalName("Rose"))).toBe(true);
    });

    it("should treat names as unequal when the surname differs", () => {
        expect(new PersonalName("Rose").isEqualTo(new PersonalName("Smith"))).toBe(false);
    });

    it("should treat names as unequal when the given name differs", () => {
        const a = new PersonalName("Rose", "Marshall");
        const b = new PersonalName("Rose", "Andrew");
        expect(a.isEqualTo(b)).toBe(false);
    });

    it("should treat a missing given name as unequal to a present one", () => {
        const a = new PersonalName("Rose", "Marshall");
        const b = new PersonalName("Rose");
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(false);
    });

    it("should treat names as unequal when the generation qualifier differs", () => {
        const a = new PersonalName("Rose", "Marshall", undefined, "Jr");
        const b = new PersonalName("Rose", "Marshall", undefined, "Sr");
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(false);
    });

    it("should treat missing initials as unequal unless they are tolerated", () => {
        const withInitials = new PersonalName("Rose", "Marshall", "MT");
        const withoutInitials = new PersonalName("Rose", "Marshall");
        expect(withInitials.isEqualTo(withoutInitials)).toBe(false);
        expect(withInitials.isEqualTo(withoutInitials, true)).toBe(true);
    });

    it("should ignore differing initials when they are tolerated", () => {
        const a = new PersonalName("Rose", "Marshall", "MT");
        const b = new PersonalName("Rose", "Marshall", "M");
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(true);
    });
});
