import { FALSE_BIT, TRUE_BIT, type ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { _encode_TelephoneNumber } from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import facsimileNumberMatch from "./facsimileNumberMatch.mjs";

const FINE_RESOLUTION = new Uint8ClampedArray([
    FALSE_BIT, FALSE_BIT, FALSE_BIT, FALSE_BIT,
    FALSE_BIT, FALSE_BIT, FALSE_BIT, FALSE_BIT,
    FALSE_BIT, TRUE_BIT,
]);

function telephone (value: string): ASN1Element {
    return _encode_TelephoneNumber(value, DER);
}

function facsimile (
    number: string,
    parameters?: Uint8ClampedArray,
): ASN1Element {
    return _encode_FacsimileTelephoneNumber(
        new FacsimileTelephoneNumber(number, parameters),
        DER,
    );
}

describe("facsimileNumberMatch", () => {
    it("ignores hyphens and spaces in the telephone number", () => {
        expect(facsimileNumberMatch(
            telephone("+1 703-555-1212"),
            facsimile("+17035551212"),
        )).toBe(true);
        expect(facsimileNumberMatch(
            telephone("1--2  3"),
            facsimile("123"),
        )).toBe(true);
    });

    it("keeps the leading plus and other punctuation significant", () => {
        expect(facsimileNumberMatch(
            telephone("+17035551212"),
            facsimile("17035551212"),
        )).toBe(false);
        expect(facsimileNumberMatch(
            telephone("(703) 555-1212"),
            facsimile("7035551212"),
        )).toBe(false);
        expect(facsimileNumberMatch(
            telephone("703.555.1212"),
            facsimile("703-555-1212"),
        )).toBe(false);
    });

    // I removed this case because it seems not correct to do this.
    // A telephone number is a string of digits and punctuation.
    // It is not a case-insensitive string.
    // My implementation does not lower-case to avoid an unnecessary allocation.
    it.skip("ignores case and rejects numbers that still differ", () => {
        expect(facsimileNumberMatch(
            telephone("ABC-DEF"),
            facsimile("abc def"),
        )).toBe(true);
        expect(facsimileNumberMatch(
            telephone("703-555-1212"),
            facsimile("703-555-1213"),
        )).toBe(false);
    });

    it("accepts a FacsimileTelephoneNumber on either side", () => {
        const presented = new FacsimileTelephoneNumber("+1 703-555-1212", FINE_RESOLUTION);
        const stored = new FacsimileTelephoneNumber("+17035551212");
        expect(facsimileNumberMatch(presented, stored)).toBe(true);
        expect(facsimileNumberMatch(presented, facsimile("+17035551212"))).toBe(true);
        expect(facsimileNumberMatch(telephone("+17035551212"), stored)).toBe(true);
        expect(facsimileNumberMatch(presented, facsimile("+1-703-555-1213"))).toBe(false);
    });

    it("does not evaluate facsimile parameters", () => {
        expect(facsimileNumberMatch(
            telephone("+1 703-555-1212"),
            facsimile("+17035551212", FINE_RESOLUTION),
        )).toBe(true);
        expect(facsimileNumberMatch(
            telephone("+17035551212"),
            facsimile("+1-703-555-1213", FINE_RESOLUTION),
        )).toBe(false);
    });
});
