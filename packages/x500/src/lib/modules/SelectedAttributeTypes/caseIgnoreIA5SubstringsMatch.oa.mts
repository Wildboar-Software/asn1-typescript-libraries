/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { id_lmr_caseIgnoreIA5SubstringsMatch } from "../SelectedAttributeTypes/id-lmr-caseIgnoreIA5SubstringsMatch.va.mjs";

/**
 * @summary caseIgnoreIA5SubstringsMatch
 * @description
 *
 * IA5String + clause 7 prep with case-fold. Any step fail ⇒ UNDEFINED.
 * Empty after prohibit ⇒ UNDEFINED. All-spaces after space-removal ⇒
 * single SPACE. Prepared strings ephemeral.
 * Like caseIgnoreSubstringsMatch: at most one initial (first) and one
 * final (last). `control` ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreIA5SubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreIA5SubstringsMatch"}
 *   ID           id-lmr-caseIgnoreIA5Match }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SubstringAssertion>}
 * @implements {MATCHING_RULE<SubstringAssertion>}
 */
export const caseIgnoreIA5SubstringsMatch: MATCHING_RULE<SubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseIgnoreIA5SubstringsMatch"],
    "&id": id_lmr_caseIgnoreIA5SubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
