/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { id_aes128_OFB } from "../NIST-AES/id-aes128-OFB.va.mjs";
import { AES_IV, _decode_AES_IV, _encode_AES_IV } from "../NIST-AES/AES-IV.ta.mjs";

/**
 * @summary aes_128_OFB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes-128-OFB ALGORITHM ::= { OID id-aes128-OFB PARMS AES-IV }
 * ```
 *
 * @constant
 * @type {ALGORITHM<AES_IV>}
 * @implements {ALGORITHM<AES_IV>}
 */
export const aes_128_OFB: ALGORITHM<AES_IV> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_AES_IV,
    },
    encoderFor: {
        "&Type": _encode_AES_IV,
    },
    "&id": id_aes128_OFB /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
