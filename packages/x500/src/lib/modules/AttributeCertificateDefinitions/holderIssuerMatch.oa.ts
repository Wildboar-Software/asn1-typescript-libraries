/* eslint-disable */
import {
    HolderIssuerAssertion,
    _decode_HolderIssuerAssertion,
    _encode_HolderIssuerAssertion,
} from "../AttributeCertificateDefinitions/HolderIssuerAssertion.ta.js";
import { id_mr_holderIssuerMatch } from "../AttributeCertificateDefinitions/id-mr-holderIssuerMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    HolderIssuerAssertion,
    _decode_HolderIssuerAssertion,
    _encode_HolderIssuerAssertion,
} from "../AttributeCertificateDefinitions/HolderIssuerAssertion.ta.js";
export { id_mr_holderIssuerMatch } from "../AttributeCertificateDefinitions/id-mr-holderIssuerMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

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
