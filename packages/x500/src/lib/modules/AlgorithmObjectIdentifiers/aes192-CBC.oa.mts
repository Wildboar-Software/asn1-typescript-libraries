/* eslint-disable */
import {
    AES_InitializationVector,
    _decode_AES_InitializationVector,
    _encode_AES_InitializationVector,
} from "../AlgorithmObjectIdentifiers/AES-InitializationVector.ta.mjs";
import { id_aes192_CBC } from "../AlgorithmObjectIdentifiers/id-aes192-CBC.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary aes192_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes192-CBC ALGORITHM ::= { -- CSOR
 *   PARMS         AES-InitializationVector
 *   IDENTIFIED BY id-aes192-CBC }
 * ```
 *
 * @constant
 * @type {ALGORITHM<AES_InitializationVector>}
 * @implements {ALGORITHM<AES_InitializationVector>}
 */
export const aes192_CBC: ALGORITHM<AES_InitializationVector> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_AES_InitializationVector,
    },
    encoderFor: {
        "&Type": _encode_AES_InitializationVector,
    },
    "&id": id_aes192_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
