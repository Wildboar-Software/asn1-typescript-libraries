/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListSubstringsMatch.va";
import { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListSubstringsMatch.va";
export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa";
export {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";

/* START_OF_SYMBOL_DEFINITION caseIgnoreListSubstringsMatch */
/**
 * @summary caseIgnoreListSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreListSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreListSubstringsMatch"}
 *   ID           id-mr-caseIgnoreListSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SubstringAssertion>}
 * @implements {MATCHING_RULE<SubstringAssertion>}
 */
export const caseIgnoreListSubstringsMatch: MATCHING_RULE<SubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseIgnoreListSubstringsMatch"],
    "&id": id_mr_caseIgnoreListSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION caseIgnoreListSubstringsMatch */

/* eslint-enable */
