/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_storedPrefixMatch } from "../SelectedAttributeTypes/id-mr-storedPrefixMatch.va.js";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_storedPrefixMatch } from "../SelectedAttributeTypes/id-mr-storedPrefixMatch.va.js";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.js";

/* START_OF_SYMBOL_DEFINITION storedPrefixMatch */
/**
 * @summary storedPrefixMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * storedPrefixMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   ID           id-mr-storedPrefixMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UnboundedDirectoryString>}
 * @implements {MATCHING_RULE<UnboundedDirectoryString>}
 */
export const storedPrefixMatch: MATCHING_RULE<UnboundedDirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&id": id_mr_storedPrefixMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION storedPrefixMatch */

/* eslint-enable */
