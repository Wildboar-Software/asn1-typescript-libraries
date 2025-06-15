/* eslint-disable */
import {
    EnhancedCertificateAssertion,
    _decode_EnhancedCertificateAssertion,
    _encode_EnhancedCertificateAssertion,
} from "../CertificateExtensions/EnhancedCertificateAssertion.ta.mjs";
import { id_mr_enhancedCertificateMatch } from "../CertificateExtensions/id-mr-enhancedCertificateMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary enhancedCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedCertificateMatch MATCHING-RULE ::= {
 *   SYNTAX  EnhancedCertificateAssertion
 *   ID      id-mr-enhancedCertificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<EnhancedCertificateAssertion>}
 * @implements {MATCHING_RULE<EnhancedCertificateAssertion>}
 */
export const enhancedCertificateMatch: MATCHING_RULE<EnhancedCertificateAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_EnhancedCertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_EnhancedCertificateAssertion,
    },
    "&id": id_mr_enhancedCertificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
