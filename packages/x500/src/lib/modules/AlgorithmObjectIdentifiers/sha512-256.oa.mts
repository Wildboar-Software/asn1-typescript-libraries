/* eslint-disable */
import { id_sha512_256 } from "../AlgorithmObjectIdentifiers/id-sha512-256.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary sha512_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512-256 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha512-256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha512_256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha512_256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
