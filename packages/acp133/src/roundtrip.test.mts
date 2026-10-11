import {
    ASN1Construction,
    ASN1SizeError,
    ASN1TagClass,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    Addressees,
    _decode_Addressees,
    _encode_Addressees,
} from "./lib/modules/ACP133CommonContent/Addressees.ta.mjs";
import {
    MLReceiptPolicy,
    _decode_MLReceiptPolicy,
    _encode_MLReceiptPolicy,
} from "./lib/modules/ACP133CommonContent/MLReceiptPolicy.ta.mjs";
import {
    MonthlyUKMs,
    _decode_MonthlyUKMs,
    _encode_MonthlyUKMs,
} from "./lib/modules/ACP133CommonContent/MonthlyUKMs.ta.mjs";
import { PairwiseTag } from "./lib/modules/ACP133CommonContent/PairwiseTag.ta.mjs";
import { UKMEntry } from "./lib/modules/ACP133CommonContent/UKMEntry.ta.mjs";

describe("ACP133CommonContent MonthlyUKMs", () => {
    test("round-trips a monthly UKM list", () => {
        const tag = new PairwiseTag(
            new Uint8Array([1, 2, 3, 4]),
            7,
            new Date(Date.UTC(2026, 9, 11, 12, 0, 0)),
        );
        const entry = new UKMEntry(tag, new Uint8Array([0x0a, 0x0b, 0x0c]));
        const algorithm = new AlgorithmIdentifier(
            ObjectIdentifier.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1]),
        );
        const original = new MonthlyUKMs(
            [entry],
            algorithm,
            new Uint8ClampedArray([1, 0, 1, 1]),
        );
        const decoded = _decode_MonthlyUKMs(_encode_MonthlyUKMs(original, $.BER));
        expect(decoded.ukm_entries).toHaveLength(1);
        expect(decoded.ukm_entries[0]?.ukm).toEqual(entry.ukm);
        expect(decoded.ukm_entries[0]?.tag.kmid).toEqual(tag.kmid);
        expect(decoded.ukm_entries[0]?.tag.edition).toBe(7);
        expect(decoded.ukm_entries[0]?.tag.date?.getTime()).toBe(tag.date?.getTime());
        expect(decoded.algorithm_identifier.algorithm.toString()).toBe(
            algorithm.algorithm.toString(),
        );
        expect(decoded.encrypted).toEqual(original.encrypted);
    });
});

describe("ACP133CommonContent MLReceiptPolicy", () => {
    test("round-trips an insteadOf policy with explicit context tags", () => {
        const original: MLReceiptPolicy = {
            insteadOf: [[{ rfc822Name: "ops@example.mil" }]],
        };
        const el = _encode_MLReceiptPolicy(original, $.BER);
        expect(el.tagClass).toBe(ASN1TagClass.context);
        expect(el.tagNumber).toBe(1);
        expect(el.construction).toBe(ASN1Construction.constructed);
        const decoded = _decode_MLReceiptPolicy(el);
        expect(decoded).toEqual(original);
    });

    test("rejects an empty insteadOf sequence", () => {
        const encoded = _encode_MLReceiptPolicy({ insteadOf: [] }, $.BER);
        expect(() => _decode_MLReceiptPolicy(encoded)).toThrow(ASN1SizeError);
    });
});

describe("ACP133CommonContent Addressees", () => {
    test("round-trips printable addresses within 1..55", () => {
        const original: Addressees = ["HQ", "OPS"];
        const decoded = _decode_Addressees(_encode_Addressees(original, $.BER));
        expect(decoded).toEqual(original);
    });

    test("rejects a printable string longer than 55 characters", () => {
        const encoded = _encode_Addressees(["A".repeat(56)], $.BER);
        expect(() => _decode_Addressees(encoded)).toThrow(ASN1SizeError);
    });
});
