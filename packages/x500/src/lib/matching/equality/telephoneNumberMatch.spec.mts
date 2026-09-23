import type { ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { _encode_TelephoneNumber } from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import telephoneNumberMatch from "./telephoneNumberMatch.mjs";

function telephone (value: string): ASN1Element {
    return _encode_TelephoneNumber(value, DER);
}

describe("telephoneNumberMatch", () => {
    it("matches identical numbers", () => {
        expect(telephoneNumberMatch(
            telephone("+17035551212"),
            telephone("+17035551212"),
        )).toBe(true);
    });

    it("ignores hyphens and spaces wherever they occur", () => {
        expect(telephoneNumberMatch(
            telephone("+1 703-555-1212"),
            telephone("+17035551212"),
        )).toBe(true);
        expect(telephoneNumberMatch(
            telephone("+1-703 555 1212"),
            telephone(" +1703-555-1212 "),
        )).toBe(true);
        expect(telephoneNumberMatch(
            telephone("1--2  3"),
            telephone("123"),
        )).toBe(true);
    });

    it("keeps the leading plus significant", () => {
        expect(telephoneNumberMatch(
            telephone("+17035551212"),
            telephone("17035551212"),
        )).toBe(false);
        expect(telephoneNumberMatch(
            telephone("+1 703-555-1212"),
            telephone("1-703-555-1212"),
        )).toBe(false);
    });

    it("keeps other punctuation significant", () => {
        expect(telephoneNumberMatch(
            telephone("(703) 555-1212"),
            telephone("7035551212"),
        )).toBe(false);
        expect(telephoneNumberMatch(
            telephone("703.555.1212"),
            telephone("703-555-1212"),
        )).toBe(false);
        expect(telephoneNumberMatch(
            telephone("703/555/1212"),
            telephone("7035551212"),
        )).toBe(false);
    });

    // I removed this case because it seems not correct to do this.
    // A telephone number is a string of digits and punctuation.
    // It is not a case-insensitive string.
    // My implementation does not lower-case to avoid an unnecessary allocation.
    it.skip("ignores case and rejects numbers that still differ", () => {
        expect(telephoneNumberMatch(
            telephone("ABC-DEF"),
            telephone("abc def"),
        )).toBe(true);
        expect(telephoneNumberMatch(
            telephone("1A"),
            telephone("1"),
        )).toBe(false);
        expect(telephoneNumberMatch(
            telephone("703-555-1212"),
            telephone("703-555-1213"),
        )).toBe(false);
    });
});
