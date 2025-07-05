/* eslint-disable */
import { id_sha3_512 } from "../AlgorithmObjectIdentifiers/id-sha3-512.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary sha3_512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-512 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_512: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
