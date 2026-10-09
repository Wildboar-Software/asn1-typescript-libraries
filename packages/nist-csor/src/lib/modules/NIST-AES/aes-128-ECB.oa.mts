/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { id_aes128_ECB } from "../NIST-AES/id-aes128-ECB.va.mjs";

/**
 * @summary aes_128_ECB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes-128-ECB ALGORITHM ::= { OID id-aes128-ECB }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const aes_128_ECB: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {},
    encoderFor: {},
    "&id": id_aes128_ECB /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
