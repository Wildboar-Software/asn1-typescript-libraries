import { describe, expect, it } from "vitest";
import { TeletexPersonalName } from "./TeletexPersonalName.ta.mjs";

function teletex(s: string): Uint8Array {
    return Uint8Array.from(Buffer.from(s, "ascii"));
}

describe("TeletexPersonalName.isEqualTo", () => {
    it("should treat identical names as equal even when the octets are different objects", () => {
        const a = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            teletex("MT"),
            teletex("Jr"),
        );
        const b = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            teletex("MT"),
            teletex("Jr"),
        );
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("should treat surname-only names as equal when the surnames match", () => {
        expect(new TeletexPersonalName(teletex("Rose"))
            .isEqualTo(new TeletexPersonalName(teletex("Rose"))))
            .toBe(true);
    });

    it("should treat names as unequal when a surname octet differs", () => {
        expect(new TeletexPersonalName(teletex("Rose"))
            .isEqualTo(new TeletexPersonalName(teletex("Rosa"))))
            .toBe(false);
    });

    it("should treat names as unequal when a non-ASCII surname octet differs", () => {
        const yen = new TeletexPersonalName(Uint8Array.from([0x52, 0xa5]));
        const ascii = new TeletexPersonalName(teletex("RY"));
        expect(yen.isEqualTo(ascii)).toBe(false);
    });

    it("should treat a missing given name as unequal to a present one", () => {
        const a = new TeletexPersonalName(teletex("Rose"), teletex("Marshall"));
        const b = new TeletexPersonalName(teletex("Rose"));
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(false);
    });

    it("should treat names as unequal when the generation qualifier differs", () => {
        const a = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            undefined,
            teletex("Jr"),
        );
        const b = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            undefined,
            teletex("Sr"),
        );
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(false);
    });

    it("should treat missing initials as unequal unless they are tolerated", () => {
        const withInitials = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            teletex("MT"),
        );
        const withoutInitials = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
        );
        expect(withInitials.isEqualTo(withoutInitials)).toBe(false);
        expect(withInitials.isEqualTo(withoutInitials, true)).toBe(true);
    });

    it("should ignore differing initials when they are tolerated", () => {
        const a = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            teletex("MT"),
        );
        const b = new TeletexPersonalName(
            teletex("Rose"),
            teletex("Marshall"),
            teletex("M"),
        );
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.isEqualTo(b, true)).toBe(true);
    });
});
