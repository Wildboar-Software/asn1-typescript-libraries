import { describe, expect, it } from "vitest";
import { UniversalOrBMPString } from "./UniversalOrBMPString.ta.mjs";
import { UniversalPersonalName } from "./UniversalPersonalName.ta.mjs";

function universal(s: string, language?: string): UniversalOrBMPString {
    return new UniversalOrBMPString(
        { four_octets: s },
        language,
    );
}

function bmp(s: string, language?: string): UniversalOrBMPString {
    return new UniversalOrBMPString(
        { two_octets: s },
        language,
    );
}

describe("UniversalPersonalName.isEqualTo", () => {
    it("should treat identical names as equal", () => {
        const a = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            universal("MT"),
            universal("Jr"),
        );
        const b = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            universal("MT"),
            universal("Jr"),
        );
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("should treat BMPString and UniversalString as equal when the text matches", () => {
        const a = new UniversalPersonalName(universal("Rose"), universal("Marshall"));
        const b = new UniversalPersonalName(bmp("Rose"), bmp("Marshall"));
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("should treat surname-only names as equal when the surnames match", () => {
        expect(new UniversalPersonalName(universal("Rose"))
            .isEqualTo(new UniversalPersonalName(universal("Rose"))))
            .toBe(true);
    });

    it("should treat names as unequal when the surname differs", () => {
        expect(new UniversalPersonalName(universal("Rose"))
            .isEqualTo(new UniversalPersonalName(universal("Rosé"))))
            .toBe(false);
    });

    it("should treat names as equal when only the language code differs", () => {
        const a = new UniversalPersonalName(universal("Rose", "en"));
        const b = new UniversalPersonalName(universal("Rose", "fr"));
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("should treat a missing given name as unequal to a present one", () => {
        const a = new UniversalPersonalName(universal("Rose"), universal("Marshall"));
        const b = new UniversalPersonalName(universal("Rose"));
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(false);
    });

    it("should treat names as unequal when the generation qualifier differs", () => {
        const a = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            undefined,
            universal("Jr"),
        );
        const b = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            undefined,
            universal("Sr"),
        );
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(false);
    });

    it("should treat missing initials as unequal unless they are tolerated", () => {
        const withInitials = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            universal("MT"),
        );
        const withoutInitials = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
        );
        expect(withInitials.isEqualTo(withoutInitials)).toBe(false);
        expect(withInitials.isEqualTo(withoutInitials, true)).toBe(true);
    });

    it("should ignore differing initials when they are tolerated", () => {
        const a = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            universal("MT"),
        );
        const b = new UniversalPersonalName(
            universal("Rose"),
            universal("Marshall"),
            universal("M"),
        );
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(true);
    });
});
