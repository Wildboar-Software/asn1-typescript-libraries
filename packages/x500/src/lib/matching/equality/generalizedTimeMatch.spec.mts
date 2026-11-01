import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import { onStoredValue } from "./onStoredValue.spec.mjs";
import generalizedTimeMatch_, {
    generalizedTimeMatchTyped,
} from "./generalizedTimeMatch.mjs";

const generalizedTimeMatch = onStoredValue(generalizedTimeMatch_);

function generalizedTime (text: string): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = ASN1UniversalType.generalizedTime;
    el.value = new Uint8Array(Buffer.from(text, "ascii"));
    return el;
}

describe("generalizedTimeMatch", () => {
    it("matches the same UTC instant across a time differential", () => {
        expect(generalizedTimeMatch(
            generalizedTime("199412161032Z"),
            generalizedTime("199412160532-0500"),
        )).toBe(true);
    });

    it("treats absent minutes and seconds as zero", () => {
        expect(generalizedTimeMatch(
            generalizedTime("1994121610Z"),
            generalizedTime("19941216100000Z"),
        )).toBe(true);
    });

    it("applies a fraction to the least significant component that is present", () => {
        expect(generalizedTimeMatch(
            generalizedTime("199412161032.5Z"),
            generalizedTime("19941216103230Z"),
        )).toBe(true);
        expect(generalizedTimeMatch(
            generalizedTime("1994121610.5Z"),
            generalizedTime("19941216103000Z"),
        )).toBe(true);
    });

    it("ignores a fractional second", () => {
        expect(generalizedTimeMatch(
            generalizedTime("19941216103200.1Z"),
            generalizedTime("19941216103200.9Z"),
        )).toBe(true);
        expect(generalizedTimeMatch(
            generalizedTime("19941216103200.9Z"),
            generalizedTime("19941216103200Z"),
        )).toBe(true);
        expect(generalizedTimeMatch(
            generalizedTime("19941216103200.9Z"),
            generalizedTime("19941216103201Z"),
        )).toBe(false);
    });

    it("ignores milliseconds on a Date, including before 1970", () => {
        const whole = new Date("2020-01-01T00:00:00.000Z");
        const fraction = new Date("2020-01-01T00:00:00.900Z");
        const next = new Date("2020-01-01T00:00:01.000Z");
        expect(generalizedTimeMatchTyped(fraction, whole)).toBe(true);
        expect(generalizedTimeMatchTyped(next, whole)).toBe(false);

        const earlyFraction = new Date(Date.UTC(1969, 11, 31, 23, 59, 58, 500));
        const earlyWhole = new Date(Date.UTC(1969, 11, 31, 23, 59, 58, 0));
        const earlyNext = new Date(Date.UTC(1969, 11, 31, 23, 59, 59, 0));
        expect(generalizedTimeMatchTyped(earlyFraction, earlyWhole)).toBe(true);
        expect(generalizedTimeMatchTyped(earlyFraction, earlyNext)).toBe(false);
    });
});
