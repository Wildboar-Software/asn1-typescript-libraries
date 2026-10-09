/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { id_aes192_ECB } from "../NIST-AES/id-aes192-ECB.va.mjs";

/**
 * @summary aes_192_ECB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes-192-ECB ALGORITHM ::= { OID id-aes192-ECB }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const aes_192_ECB: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_aes192_ECB /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
