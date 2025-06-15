/* eslint-disable */
import {
    PolicyID,
    _decode_PolicyID,
    _encode_PolicyID,
} from "../AuthenticationFramework/PolicyID.ta.mjs";
import { id_mr_policyMatch } from "../CertificateExtensions/id-mr-policyMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary policyMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMatch MATCHING-RULE ::= {
 *   SYNTAX  PolicyID
 *   ID      id-mr-policyMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<PolicyID>}
 * @implements {MATCHING_RULE<PolicyID>}
 */
export const policyMatch: MATCHING_RULE<PolicyID> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PolicyID,
    },
    encoderFor: {
        "&AssertionType": _encode_PolicyID,
    },
    "&id": id_mr_policyMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
