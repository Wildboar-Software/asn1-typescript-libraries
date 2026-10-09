import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./lib/modules/PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
import { SubjectPublicKeyInfo } from "./lib/modules/PKIX1Explicit88/SubjectPublicKeyInfo.ta.mjs";
import {
    AuthPack,
    _decode_AuthPack,
    _encode_AuthPack,
} from "./lib/modules/KerberosV5-PK-INIT-SPEC/AuthPack.ta.mjs";
import { DHNonce } from "./lib/modules/KerberosV5-PK-INIT-SPEC/DHNonce.ta.mjs";
import { id_pkinit_kdf_ah_sha256 } from "./lib/modules/KerberosV5-PK-INIT-SPEC/id-pkinit-kdf-ah-sha256.va.mjs";
import { KDFAlgorithmId } from "./lib/modules/KerberosV5-PK-INIT-SPEC/KDFAlgorithmId.ta.mjs";
import { PAChecksum2 } from "./lib/modules/KerberosV5-PK-INIT-SPEC/PAChecksum2.ta.mjs";
import { PKAuthenticator } from "./lib/modules/KerberosV5-PK-INIT-SPEC/PKAuthenticator.ta.mjs";

describe("AuthPack", () => {
    test("round-trips a DH AuthPack with checksum, CMS algorithms, and KDFs", () => {
        const digest = ObjectIdentifier.fromParts([1, 3, 14, 3, 2, 26]);
        const original = new AuthPack(
            new PKAuthenticator(
                123456,
                new Date(Date.UTC(2026, 0, 2, 3, 4, 5)),
                42,
                new Uint8Array([1, 2, 3, 4]),
                undefined,
                new PAChecksum2(
                    new Uint8Array([9, 8, 7]),
                    new AlgorithmIdentifier(digest),
                ),
            ),
            new SubjectPublicKeyInfo(
                new AlgorithmIdentifier(digest),
                new Uint8ClampedArray([1, 0, 1, 1, 0, 0, 0, 1]),
            ),
            [new AlgorithmIdentifier(digest)],
            new Uint8Array([5, 6, 7, 8]) as DHNonce,
            [new KDFAlgorithmId(id_pkinit_kdf_ah_sha256)],
        );
        const decoded = _decode_AuthPack(_encode_AuthPack(original, $.BER));
        expect(decoded.pkAuthenticator.cusec).toBe(original.pkAuthenticator.cusec);
        expect(decoded.pkAuthenticator.ctime.getTime()).toBe(original.pkAuthenticator.ctime.getTime());
        expect(decoded.pkAuthenticator.nonce).toBe(original.pkAuthenticator.nonce);
        expect(Array.from(decoded.pkAuthenticator.paChecksum!)).toEqual(Array.from(original.pkAuthenticator.paChecksum!));
        expect(decoded.pkAuthenticator.freshnessToken).toBeUndefined();
        expect(Array.from(decoded.pkAuthenticator.paChecksum2!.checksum)).toEqual(
            Array.from(original.pkAuthenticator.paChecksum2!.checksum),
        );
        expect(decoded.pkAuthenticator.paChecksum2!.algorithmIdentifier.algorithm.toString()).toBe(digest.toString());
        expect(decoded.pkAuthenticator.paChecksum2!.algorithmIdentifier.parameters).toBeUndefined();
        expect(decoded.clientPublicValue!.algorithm.algorithm.toString()).toBe(digest.toString());
        expect(Array.from(decoded.clientPublicValue!.subjectPublicKey)).toEqual(
            Array.from(original.clientPublicValue!.subjectPublicKey),
        );
        expect(decoded.supportedCMSTypes).toHaveLength(1);
        expect(decoded.supportedCMSTypes![0]!.algorithm.toString()).toBe(digest.toString());
        expect(Array.from(decoded.clientDHNonce!)).toEqual(Array.from(original.clientDHNonce!));
        expect(decoded.supportedKDFs).toHaveLength(1);
        expect(decoded.supportedKDFs![0]!.kdf_id.toString()).toBe(id_pkinit_kdf_ah_sha256.toString());
        expect(decoded._unrecognizedExtensionsList).toEqual([]);
    });
});
