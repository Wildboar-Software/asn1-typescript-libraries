/* eslint-disable */
import { ecdsa_with_SHA224 } from "../AlgorithmObjectIdentifiers/ecdsa-with-SHA224.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary ecdsa_with_SHA224_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA224-Algorithm ALGORITHM ::= { -- IETF RFC
 *   IDENTIFIED BY ecdsa-with-SHA224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA224_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
