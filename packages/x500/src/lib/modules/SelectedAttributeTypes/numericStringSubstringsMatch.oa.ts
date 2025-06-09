/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_numericStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-numericStringSubstringsMatch.va.js";
import { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.js";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_numericStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-numericStringSubstringsMatch.va.js";
export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.js";
export {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta.js";

/* START_OF_SYMBOL_DEFINITION numericStringSubstringsMatch */
/**
 * @summary numericStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"numericStringSubstringsMatch"}
 *   ID           id-mr-numericStringSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SubstringAssertion>}
 * @implements {MATCHING_RULE<SubstringAssertion>}
 */
export const numericStringSubstringsMatch: MATCHING_RULE<SubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["numericStringSubstringsMatch"],
    "&id": id_mr_numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION numericStringSubstringsMatch */

/* eslint-enable */
