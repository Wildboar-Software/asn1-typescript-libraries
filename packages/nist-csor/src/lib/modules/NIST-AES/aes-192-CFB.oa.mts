/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { id_aes192_CFB } from "../NIST-AES/id-aes192-CFB.va.mjs";
import { CFBParameters, _decode_CFBParameters, _encode_CFBParameters } from "../NIST-AES/CFBParameters.ta.mjs";

/**
 * @summary aes_192_CFB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes-192-CFB ALGORITHM ::= { OID id-aes192-CFB PARMS CFBParameters }
 * ```
 *
 * @constant
 * @type {ALGORITHM<CFBParameters>}
 * @implements {ALGORITHM<CFBParameters>}
 */
export const aes_192_CFB: ALGORITHM<CFBParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_CFBParameters,
    },
    encoderFor: {
        "&Type": _encode_CFBParameters,
    },
    "&id": id_aes192_CFB /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
