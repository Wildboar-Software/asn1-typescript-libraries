/* eslint-disable */
import {
    HolderIssuerAssertion,
    _decode_HolderIssuerAssertion,
    _encode_HolderIssuerAssertion,
} from "../AttributeCertificateDefinitions/HolderIssuerAssertion.ta.mjs";
import { id_mr_holderIssuerMatch } from "../AttributeCertificateDefinitions/id-mr-holderIssuerMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/* START_OF_SYMBOL_DEFINITION holderIssuerMatch */
/**
 * @summary holderIssuerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holderIssuerMatch MATCHING-RULE ::= {
 *   SYNTAX  HolderIssuerAssertion
 *   ID      id-mr-holderIssuerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<HolderIssuerAssertion>}
 * @implements {MATCHING_RULE<HolderIssuerAssertion>}
 */
export const holderIssuerMatch: MATCHING_RULE<HolderIssuerAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_HolderIssuerAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_HolderIssuerAssertion,
    },
    "&id": id_mr_holderIssuerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION holderIssuerMatch */

/* eslint-enable */
