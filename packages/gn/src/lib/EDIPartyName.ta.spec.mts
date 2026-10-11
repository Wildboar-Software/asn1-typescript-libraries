import { DER } from "@wildboar/asn1/functional";
import { prepString } from "@wildboar/dn";
import { describe, expect, it } from "vitest";
import {
    EDIPartyName,
    _encode_EDIPartyName,
} from "./EDIPartyName.ta.mjs";

describe("EDIPartyName", () => {
    it("prints with and without a name assigner", () => {
        const party = new EDIPartyName(undefined, { printableString: "Acme" });
        expect(party.toString()).toBe('{ partyName:"Acme" }');
        const assigned = new EDIPartyName(
            { uTF8String: "X.400" },
            { printableString: 'A"B' },
        );
        expect(assigned.toString()).toBe('{ nameAssigner:"X.400", partyName:"A\\"B" }');
    });

    it("quotes ASN.1 strings and names the string type", () => {
        const party = new EDIPartyName(
            { uTF8String: 'say "hi"' },
            { printableString: "Acme" },
        );
        expect(party.toASN1String()).toBe(
            '{ nameAssigner uTF8String : "say ""hi""", partyName printableString : "Acme" }',
        );
    });

    it("encodes TeletexString as text and restores only ASCII as Teletex bytes", () => {
        const ascii = new EDIPartyName(undefined, {
            teletexString: Uint8Array.from([0x41, 0x63, 0x6D, 0x65]),
        });
        expect(ascii.toJSON()).toEqual({ partyName: { teletexString: "Acme" } });
        expect(EDIPartyName.fromJSON(ascii.toJSON()).partyName).toEqual({
            teletexString: Uint8Array.from([0x41, 0x63, 0x6D, 0x65]),
        });
        const mapped = new EDIPartyName(undefined, {
            teletexString: Uint8Array.from([0xE1]),
        });
        expect(mapped.toJSON()).toEqual({ partyName: { teletexString: "Æ" } });
        expect(EDIPartyName.fromJSON(mapped.toJSON()).partyName).toEqual({ uTF8String: "Æ" });
    });

    it("round-trips JSON", () => {
        const party = new EDIPartyName(
            { uTF8String: "Assigner" },
            { printableString: "Acme" },
        );
        expect(EDIPartyName.fromJSON(party.toJSON()).toJSON()).toEqual(party.toJSON());
        expect(() => EDIPartyName.fromJSON({ partyName: { nope: "x" } })).toThrow(SyntaxError);
    });

    it("folds case and spaces in toKey and isEqualTo, and keeps a missing assigner distinct", () => {
        const a = new EDIPartyName(undefined, { printableString: "  Acme   Corp " });
        const b = new EDIPartyName(undefined, { uTF8String: "acme corp" });
        const c = new EDIPartyName({ printableString: "X" }, { printableString: "acme corp" });
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.toKey()).toBe(b.toKey());
        expect(a.isEqualTo(c)).toBe(false);
        expect(a.toKey()).not.toBe(c.toKey());
        expect(a.isEqualTo(b)).toBe(a.toKey() === b.toKey());
    });

    it("does not treat two different deleted control strings as equal", () => {
        const a = new EDIPartyName(undefined, { printableString: "\u0001" });
        const b = new EDIPartyName(undefined, { printableString: "\u0002" });
        expect(a.isEqualTo(b)).toBe(false);
        expect(a.toKey()).not.toBe(b.toKey());
    });

    it("matches prepString for ASCII case folding", () => {
        const samples = ["Acme", "  ACME  ", "A  C", "a\tc", "   ", "\u0001", ""];
        for (const sample of samples) {
            const party = new EDIPartyName(undefined, { printableString: sample });
            const other = new EDIPartyName(undefined, { uTF8String: sample.toLowerCase() });
            const prepared = prepString(sample, { caseFold: true });
            const preparedLower = prepString(sample.toLowerCase(), { caseFold: true });
            const same = prepared === preparedLower
                || (prepared === undefined && preparedLower === undefined && sample === sample.toLowerCase());
            expect(party.isEqualTo(other)).toBe(same);
        }
    });

    it("compares TeletexString through string preparation", () => {
        const a = new EDIPartyName(undefined, { teletexString: new Uint8Array([0x41, 0x63, 0x6D, 0x65]) });
        const b = new EDIPartyName(undefined, { teletexString: new Uint8Array([0x61, 0x63, 0x6D, 0x65]) });
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.toKey()).toBe(b.toKey());
    });

    it("reports the same length as the real encoding", () => {
        const party = new EDIPartyName(
            { uTF8String: "Assigner" },
            { printableString: "Acme" },
        );
        const encoded = _encode_EDIPartyName(party, DER);
        expect(party.getEncodedLength()).toBe(encoded.toBytes().length);
    });
});
