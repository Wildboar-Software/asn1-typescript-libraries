/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { type SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
// export { SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
// export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
import { id_mr_numericStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-numericStringSubstringsMatch.va.mjs";
// export { id_mr_numericStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-numericStringSubstringsMatch.va.mjs";


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
export
const numericStringSubstringsMatch: MATCHING_RULE<SubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "numericStringSubstringsMatch" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_numericStringSubstringsMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
