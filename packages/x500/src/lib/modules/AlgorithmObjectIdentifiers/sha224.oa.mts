/* eslint-disable */
import { id_sha224 } from "../AlgorithmObjectIdentifiers/id-sha224.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
