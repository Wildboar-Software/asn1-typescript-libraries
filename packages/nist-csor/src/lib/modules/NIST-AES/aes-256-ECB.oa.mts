/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { id_aes256_ECB } from "../NIST-AES/id-aes256-ECB.va.mjs";

/**
 * @summary aes_256_ECB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes-256-ECB ALGORITHM ::= { OID id-aes256-ECB }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const aes_256_ECB: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {},
    encoderFor: {},
    "&id": id_aes256_ECB /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
