/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_presentationAddressMatch } from "../SelectedAttributeTypes/id-mr-presentationAddressMatch.va.js";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_presentationAddressMatch } from "../SelectedAttributeTypes/id-mr-presentationAddressMatch.va.js";
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta.js";

/* START_OF_SYMBOL_DEFINITION presentationAddressMatch */
/**
 * @summary presentationAddressMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddressMatch MATCHING-RULE ::= {
 *   SYNTAX       PresentationAddress
 *   ID           id-mr-presentationAddressMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<PresentationAddress>}
 * @implements {MATCHING_RULE<PresentationAddress>}
 */
export const presentationAddressMatch: MATCHING_RULE<PresentationAddress> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PresentationAddress,
    },
    encoderFor: {
        "&AssertionType": _encode_PresentationAddress,
    },
    "&id": id_mr_presentationAddressMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION presentationAddressMatch */

/* eslint-enable */
