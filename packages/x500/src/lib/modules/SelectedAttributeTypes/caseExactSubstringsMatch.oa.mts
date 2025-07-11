/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_caseExactSubstringsMatch } from "../SelectedAttributeTypes/id-mr-caseExactSubstringsMatch.va.mjs";
import { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
/**
 * @summary caseExactSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion -- only the PrintableString choice
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseExactSubstringsMatch"}
 *   ID           id-mr-caseExactSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SubstringAssertion>}
 * @implements {MATCHING_RULE<SubstringAssertion>}
 */
export const caseExactSubstringsMatch: MATCHING_RULE<SubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseExactSubstringsMatch"],
    "&id": id_mr_caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
