import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import { onStoredValue } from "./onStoredValue.spec.mjs";
import uTCTimeMatch_, {
    uTCTimeMatchTyped,
} from "./uTCTimeMatch.mjs";

const uTCTimeMatch = onStoredValue(uTCTimeMatch_);

function utcTime (text: string): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = ASN1UniversalType.utcTime;
    el.value = new Uint8Array(Buffer.from(text, "ascii"));
    return el;
}

describe("uTCTimeMatch", () => {
    it("matches the same UTC instant across a time differential", () => {
        expect(uTCTimeMatch(
            utcTime("941216103200Z"),
            utcTime("941216053200-0500"),
        )).toBe(true);
    });

    it("treats absent seconds as zero", () => {
        expect(uTCTimeMatch(
            utcTime("9412161032Z"),
            utcTime("941216103200Z"),
        )).toBe(true);
    });

    it("ignores milliseconds on a Date, including before 1970", () => {
        const whole = new Date("2020-01-01T00:00:00.000Z");
        const fraction = new Date("2020-01-01T00:00:00.900Z");
        const next = new Date("2020-01-01T00:00:01.000Z");
        expect(uTCTimeMatchTyped(fraction, whole)).toBe(true);
        expect(uTCTimeMatchTyped(next, whole)).toBe(false);

        const earlyFraction = new Date(Date.UTC(1969, 11, 31, 23, 59, 58, 500));
        const earlyWhole = new Date(Date.UTC(1969, 11, 31, 23, 59, 58, 0));
        const earlyNext = new Date(Date.UTC(1969, 11, 31, 23, 59, 59, 0));
        expect(uTCTimeMatchTyped(earlyFraction, earlyWhole)).toBe(true);
        expect(uTCTimeMatchTyped(earlyFraction, earlyNext)).toBe(false);
    });
});
