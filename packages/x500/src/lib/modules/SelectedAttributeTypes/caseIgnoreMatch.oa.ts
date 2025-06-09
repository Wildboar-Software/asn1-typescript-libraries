/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
import { id_mr_caseIgnoreMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreMatch.va.js";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
export { id_mr_caseIgnoreMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreMatch.va.js";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.js";

/* START_OF_SYMBOL_DEFINITION caseIgnoreMatch */
/**
 * @summary caseIgnoreMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseIgnoreMatch"}
 *   ID           id-mr-caseIgnoreMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UnboundedDirectoryString>}
 * @implements {MATCHING_RULE<UnboundedDirectoryString>}
 */
export const caseIgnoreMatch: MATCHING_RULE<UnboundedDirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseIgnoreMatch"],
    "&id": id_mr_caseIgnoreMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION caseIgnoreMatch */

/* eslint-enable */
