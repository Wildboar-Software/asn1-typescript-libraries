import { ObjectIdentifier, type INTEGER } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { _decode_Code, _encode_Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";
import { compareCode } from "./compareCode.mjs";

describe("compareCode numeric representations (L1)", () => {
    it.each<INTEGER>([0, 5, -5, Number.MAX_SAFE_INTEGER])("compares number/bigint representations of %s symmetrically", (value) => {
        const numeric = { local: Number(value) };
        const bigint = { local: BigInt(value) };
        expect(compareCode(numeric, bigint)).toBe(true);
        expect(compareCode(bigint, numeric)).toBe(true);
        expect(compareCode(bigint, _decode_Code(_encode_Code(numeric, DER)))).toBe(true);
        expect(compareCode(numeric, { local: BigInt(value) + 1n })).toBe(false);
    });

    it("does not round large bigint codes through Number", () => {
        const value = 9007199254740992n;
        expect(compareCode({ local: value }, { local: value })).toBe(true);
        expect(compareCode({ local: value }, { local: value + 1n })).toBe(false);
    });

    it("retains global-OID equality and rejects incompatible alternatives", () => {
        const oid = ObjectIdentifier.fromString("1.2.3.4");
        expect(compareCode({ global: oid }, { global: ObjectIdentifier.fromString("1.2.3.4") })).toBe(true);
        expect(compareCode({ global: oid }, { global: ObjectIdentifier.fromString("1.2.3.5") })).toBe(false);
        expect(compareCode({ local: 5n }, { global: oid })).toBe(false);
        expect(compareCode({ global: oid }, { local: 5 })).toBe(false);
    });
});
