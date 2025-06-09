/* eslint-disable */
import {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.js";
import { id_mr_acceptableCertPoliciesMatch } from "../AttributeCertificateDefinitions/id-mr-acceptableCertPoliciesMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.js";
export { id_mr_acceptableCertPoliciesMatch } from "../AttributeCertificateDefinitions/id-mr-acceptableCertPoliciesMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION acceptableCertPoliciesMatch */
/**
 * @summary acceptableCertPoliciesMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptableCertPoliciesMatch MATCHING-RULE ::= {
 *   SYNTAX  AcceptableCertPoliciesSyntax
 *   ID      id-mr-acceptableCertPoliciesMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AcceptableCertPoliciesSyntax>}
 * @implements {MATCHING_RULE<AcceptableCertPoliciesSyntax>}
 */
export const acceptableCertPoliciesMatch: MATCHING_RULE<AcceptableCertPoliciesSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AcceptableCertPoliciesSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AcceptableCertPoliciesSyntax,
    },
    "&id": id_mr_acceptableCertPoliciesMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acceptableCertPoliciesMatch */

/* eslint-enable */
