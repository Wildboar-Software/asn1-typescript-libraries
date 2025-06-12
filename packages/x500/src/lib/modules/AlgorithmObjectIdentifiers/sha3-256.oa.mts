/* eslint-disable */
import { id_sha3_256 } from "../AlgorithmObjectIdentifiers/id-sha3-256.va.mjs";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
export { id_sha3_256 } from "../AlgorithmObjectIdentifiers/id-sha3-256.va.mjs";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";

/* START_OF_SYMBOL_DEFINITION sha3_256 */
/**
 * @summary sha3_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-256 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha3_256 */

/* eslint-enable */
