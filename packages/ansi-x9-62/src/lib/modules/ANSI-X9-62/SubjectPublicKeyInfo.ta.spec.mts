import { describe, expect, it } from "vitest";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./AlgorithmIdentifier.ta.mjs";
import { id_ecPublicKey } from "./id-ecPublicKey.va.mjs";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "./SubjectPublicKeyInfo.ta.mjs";

describe("SubjectPublicKeyInfo", () => {
    it("round-trips algorithm and subjectPublicKey", () => {
        const bits = new Uint8ClampedArray([0, 0, 0, 0, 0, 1, 0, 0]);
        const value = new SubjectPublicKeyInfo(
            new AlgorithmIdentifier(id_ecPublicKey),
            bits
        );
        const decoded = _decode_SubjectPublicKeyInfo(
            _encode_SubjectPublicKeyInfo(value, $.DER)
        );
        expect(decoded.algorithm.algorithm.toString()).toBe(
            id_ecPublicKey.toString()
        );
        expect(Array.from(decoded.subjectPublicKey)).toEqual(Array.from(bits));
    });

    it("throws when the SEQUENCE is truncated", () => {
        const incomplete = _encode_SubjectPublicKeyInfo(
            new SubjectPublicKeyInfo(
                new AlgorithmIdentifier(id_ecPublicKey),
                new Uint8ClampedArray([1])
            ),
            $.DER
        );
        incomplete.sequence = incomplete.sequence.slice(0, 1);
        expect(() => _decode_SubjectPublicKeyInfo(incomplete)).toThrow(
            /contained only 1 elements/
        );
    });
});
