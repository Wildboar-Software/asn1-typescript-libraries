/* eslint-disable */
import {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.mjs";
import { id_mr_acceptableCertPoliciesMatch } from "../AttributeCertificateDefinitions/id-mr-acceptableCertPoliciesMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
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

/* eslint-enable */
