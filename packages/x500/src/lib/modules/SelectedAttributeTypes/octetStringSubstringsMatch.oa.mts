/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_octetStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-octetStringSubstringsMatch.va.mjs";
import {
    OctetSubstringAssertion,
    _decode_OctetSubstringAssertion,
    _encode_OctetSubstringAssertion,
} from "../SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
/**
 * @summary octetStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX  OctetSubstringAssertion
 *   ID      id-mr-octetStringSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OctetSubstringAssertion>}
 * @implements {MATCHING_RULE<OctetSubstringAssertion>}
 */
export const octetStringSubstringsMatch: MATCHING_RULE<OctetSubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_OctetSubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_OctetSubstringAssertion,
    },
    "&id": id_mr_octetStringSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
