/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { sha1WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha1WithRSAEncryption.va.js";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";
export { sha1WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha1WithRSAEncryption.va.js";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";

/* START_OF_SYMBOL_DEFINITION sha1WithRSAEncryptionAlgorithm */
/**
 * @summary sha1WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha1WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const sha1WithRSAEncryptionAlgorithm: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha1WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha1WithRSAEncryptionAlgorithm */

/* eslint-enable */
