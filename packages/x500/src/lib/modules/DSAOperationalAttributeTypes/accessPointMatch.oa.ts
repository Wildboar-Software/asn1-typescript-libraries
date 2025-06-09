/* eslint-disable */
import { id_kmr_accessPointMatch } from "../DSAOperationalAttributeTypes/id-kmr-accessPointMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.js";
export { id_kmr_accessPointMatch } from "../DSAOperationalAttributeTypes/id-kmr-accessPointMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION accessPointMatch */
/**
 * @summary accessPointMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessPointMatch MATCHING-RULE ::= {
 *   SYNTAX  Name
 *   ID      id-kmr-accessPointMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<Name>}
 * @implements {MATCHING_RULE<Name>}
 */
export const accessPointMatch: MATCHING_RULE<Name> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Name,
    },
    encoderFor: {
        "&AssertionType": _encode_Name,
    },
    "&id": id_kmr_accessPointMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION accessPointMatch */

/* eslint-enable */
