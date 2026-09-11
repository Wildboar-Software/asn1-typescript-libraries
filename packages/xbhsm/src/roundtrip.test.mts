import * as $ from "@wildboar/asn1/functional";
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { AlgorithmIdentifier } from "./lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    DataSetForEncryptedPSID,
    _encode_DataSetForEncryptedPSID,
    _decode_DataSetForEncryptedPSID,
} from "./lib/modules/XBHSM/DataSetForEncryptedPSID.ta.mjs";
import {
    PSID,
    _encode_PSID,
    _decode_PSID,
} from "./lib/modules/XBHSM/PSID.ta.mjs";
import { HashContent } from "./lib/modules/XBHSM/HashContent.ta.mjs";

describe("XBHSM DataSetForEncryptedPSID", () => {
    test("round-trips an encrypted PSID dataset", () => {
        const original = new DataSetForEncryptedPSID(
            1,
            new AlgorithmIdentifier(_OID.fromParts([1, 2, 840, 113549, 3, 7])),
            new Uint8Array([0xde, 0xad, 0xbe, 0xef])
        );
        const el = _encode_DataSetForEncryptedPSID(original, $.BER);
        const decoded = _decode_DataSetForEncryptedPSID(el);
        expect(decoded.version).toBe(1);
        expect(decoded.psidEncAlg.algorithm.isEqualTo(original.psidEncAlg.algorithm)).toBe(true);
        expect(decoded.encryptedPsid).toEqual(original.encryptedPsid);
    });

    test("applies the default version when it is omitted", () => {
        const original = new DataSetForEncryptedPSID(
            undefined,
            new AlgorithmIdentifier(_OID.fromParts([1, 2, 840, 113549, 3, 7])),
            new Uint8Array([1, 2, 3])
        );
        const el = _encode_DataSetForEncryptedPSID(original, $.BER);
        const decoded = _decode_DataSetForEncryptedPSID(el);
        expect(decoded.version).toBe(0);
        expect(decoded.encryptedPsid).toEqual(original.encryptedPsid);
    });
});

describe("XBHSM PSID", () => {
    test("round-trips a PSID", () => {
        const original = new PSID(
            new AlgorithmIdentifier(_OID.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1])),
            new HashContent("BR01", new Uint8ClampedArray([1, 0, 1, 1]))
        );
        const el = _encode_PSID(original, $.BER);
        const decoded = _decode_PSID(el);
        expect(decoded.hashAlg.algorithm.isEqualTo(original.hashAlg.algorithm)).toBe(true);
        expect(decoded.hashContent.bR).toBe("BR01");
        expect(decoded.hashContent.randomNum).toEqual(original.hashContent.randomNum);
    });
});
