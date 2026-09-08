/* eslint-disable */
import {
    NULL,
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ALGORITHM } from "../X9-84-CMS/ALGORITHM.oca.mjs";

/**
 * X9.84 / OASIS XCBF identifiers imported by `X9-84-CMS` but not present in
 * the compiler output. OID values are the public PKCS / X9 algorithm OIDs
 * named in the CMS module.
 */

export type NoIV = NULL;
export const _decode_NoIV = $._decodeNull;
export const _encode_NoIV = $._encodeNull;

export const id_data: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 113549, 1, 7, 1,
]);

export const rsaEncryption: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 113549, 1, 1, 1,
]);

export const sha1WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 113549, 1, 1, 5,
]);

export const dsa_with_sha1: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 10040, 4, 3,
]);

export const ecdsa_with_SHA1: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 10045, 4, 1,
]);

export const hmac_with_SHA1: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 113549, 2, 7,
]);

export const des_ede3_cbc: OBJECT_IDENTIFIER = _OID.fromParts([
    1, 2, 840, 113549, 3, 7,
]);

export const id_sha1: OBJECT_IDENTIFIER = _OID.fromParts([1, 3, 14, 3, 2, 26]);

export const sha1: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_sha1,
    "&Type": 0 as never,
};

export const SHA_Algorithms: ALGORITHM[] = [
    sha1,
];
