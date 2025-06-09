/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_uuidpairmatch } from "../SelectedAttributeTypes/id-mr-uuidpairmatch.va.js";
import {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_uuidpairmatch } from "../SelectedAttributeTypes/id-mr-uuidpairmatch.va.js";
export {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta.js";

/* START_OF_SYMBOL_DEFINITION uUIDPairMatch */
/**
 * @summary uUIDPairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPairMatch MATCHING-RULE ::= {
 *   SYNTAX       UUIDPair
 *   ID           id-mr-uuidpairmatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UUIDPair>}
 * @implements {MATCHING_RULE<UUIDPair>}
 */
export const uUIDPairMatch: MATCHING_RULE<UUIDPair> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UUIDPair,
    },
    encoderFor: {
        "&AssertionType": _encode_UUIDPair,
    },
    "&id": id_mr_uuidpairmatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uUIDPairMatch */

/* eslint-enable */
