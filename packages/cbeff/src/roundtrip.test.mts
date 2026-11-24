import { ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BDBFormat } from "./lib/modules/CBEFF-DATA-ELEMENTS/BDBFormat.ta.mjs";
import { BiometricSubtype_left } from "./lib/modules/CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { BiometricType_face } from "./lib/modules/CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { RegistryID } from "./lib/modules/CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";
import { ValidityPeriod } from "./lib/modules/CBEFF-DATA-ELEMENTS/ValidityPeriod.ta.mjs";
import { Version } from "./lib/modules/CBEFF-DATA-ELEMENTS/Version.ta.mjs";
import { AllElementsWithDefaultsBitOriented_fieldPresence } from "./lib/modules/CBEFF-PRESENCE-BIT-ORIENTED/AllElementsWithDefaultsBitOriented-fieldPresence.ta.mjs";
import {
    AllElementsWithDefaultsBitOriented,
    _decode_AllElementsWithDefaultsBitOriented,
    _encode_AllElementsWithDefaultsBitOriented,
} from "./lib/modules/CBEFF-PRESENCE-BIT-ORIENTED/AllElementsWithDefaultsBitOriented.ta.mjs";
import {
    Any_sub_type_left,
    BiometricType_face as BiometricType_faceFromRoot,
    CBEFFVersion,
} from "./index.mjs";

const created = new Date(Date.UTC(2024, 2, 15, 12, 30, 0));
const notBefore = new Date(Date.UTC(2024, 0, 1));
const notAfter = new Date(Date.UTC(2026, 11, 31));

function sample(): AllElementsWithDefaultsBitOriented {
    return new AllElementsWithDefaultsBitOriented(
        new BDBFormat(257, 8),
        new AllElementsWithDefaultsBitOriented_fieldPresence(
            true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true,
            true, true, true, true, true, true, true, true,
        ),
        true,
        true,
        3,
        4,
        BiometricType_face,
        BiometricSubtype_left,
        new Uint8Array([0x0a, 0x0b]),
        created,
        new Uint8Array([1, 2, 3, 4]),
        undefined,
        new RegistryID(257, 9),
        undefined,
        80,
        new ValidityPeriod(notBefore, notAfter),
        created,
        "lab",
        new Uint8Array([9, 8, 7]),
        new RegistryID(257, 1),
        new Uint8Array([0x70]),
        new ValidityPeriod(notBefore, notAfter),
        new Version(1, 1),
        new RegistryID(257, 2),
        new Version(4, 1),
        new Uint8Array([0x10, 0x20, 0x30, 0x40]),
        new Uint8Array([0xaa]),
    );
}

describe("CBEFF encode/decode round-trips", () => {
    test("round-trips the bit-oriented patron format with its nested fields", () => {
        const original = sample();
        const encoded = _encode_AllElementsWithDefaultsBitOriented(original, $.BER);
        const decoded = _decode_AllElementsWithDefaultsBitOriented(encoded);
        expect(decoded.format.organization).toBe(257);
        expect(decoded.format.id).toBe(8);
        expect(decoded.fieldPresence.bioType).toBe(true);
        expect(decoded.fieldPresence.sb).toBe(true);
        expect(decoded.encryptOpts).toBe(true);
        expect(decoded.subHeaderCount).toBe(3);
        expect(decoded.bdbLength).toBe(4);
        expect(decoded.bioType).toBe(BiometricType_face);
        expect(decoded.bioSubtype).toBe(BiometricSubtype_left);
        expect(Array.from(decoded.chaResp ?? [])).toEqual([0x0a, 0x0b]);
        expect(decoded.bdbCreation?.toISOString()).toBe(created.toISOString());
        expect(decoded.product?.organization).toBe(257);
        expect(decoded.quality).toBe(80);
        expect(decoded.birCreator).toBe("lab");
        expect(decoded.patronHdrVersion?.major).toBe(1);
        expect(decoded.patronHdrVersion?.minor).toBe(1);
        expect(decoded.cbeffVers?.major).toBe(4);
        expect(Array.from(decoded.bdb)).toEqual([0x10, 0x20, 0x30, 0x40]);
        expect(Array.from(decoded.sb ?? [])).toEqual([0xaa]);
        const reencoded = _encode_AllElementsWithDefaultsBitOriented(decoded, $.BER);
        expect(Array.from(reencoded.toBytes())).toEqual(Array.from(encoded.toBytes()));
    });

    test("rejects a bdbLength outside its integer range", () => {
        const original = sample();
        expect(() => new AllElementsWithDefaultsBitOriented(
            original.format,
            original.fieldPresence,
            original.encryptOpts,
            original.integOpts,
            original.subHeaderCount,
            4294967296,
            original.bioType,
            original.bioSubtype,
            original.chaResp,
            original.bdbCreation,
            original.bdbIndex,
            original.procLevel,
            original.product,
            original.purpose,
            original.quality,
            original.bdbValidity,
            original.birCreation,
            original.birCreator,
            original.birIndex,
            original.patronFormat,
            original.payload,
            original.birValidity,
            original.patronHdrVersion,
            original.sbFormat,
            original.cbeffVers,
            original.bdb,
            original.sb,
        )).toThrow(ASN1OverflowError);
    });

    test("keeps the 2007-only names on the package root", () => {
        expect(BiometricType_faceFromRoot).toBe(2);
        expect(Any_sub_type_left).toBe(6);
        expect(new CBEFFVersion(2, 0).cbeff_major).toBe(2);
    });
});
