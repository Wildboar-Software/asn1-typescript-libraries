/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_generalWordMatch } from "../SelectedAttributeTypes/id-mr-generalWordMatch.va.mjs";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
/**
 * @summary generalWordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalWordMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   ID           id-mr-generalWordMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SubstringAssertion>}
 * @implements {MATCHING_RULE<SubstringAssertion>}
 */
export const generalWordMatch: MATCHING_RULE<SubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&id": id_mr_generalWordMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
