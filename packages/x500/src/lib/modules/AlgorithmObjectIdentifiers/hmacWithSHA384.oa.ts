/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_hmacWithSHA384 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA384.va.js";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";
export { id_hmacWithSHA384 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA384.va.js";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";

/* START_OF_SYMBOL_DEFINITION hmacWithSHA384 */
/**
 * @summary hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA384 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const hmacWithSHA384: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hmacWithSHA384 */

/* eslint-enable */
