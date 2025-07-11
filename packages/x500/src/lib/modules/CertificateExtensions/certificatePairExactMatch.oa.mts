/* eslint-disable */
import {
    CertificatePairExactAssertion,
    _decode_CertificatePairExactAssertion,
    _encode_CertificatePairExactAssertion,
} from "../CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import { certPairExactAssertion } from "../CertificateExtensions/certPairExactAssertion.oa.mjs";
import { id_mr_certificatePairExactMatch } from "../CertificateExtensions/id-mr-certificatePairExactMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary certificatePairExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePairExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificatePairExactAssertion
 *   LDAP-SYNTAX  certPairExactAssertion.&id
 *   LDAP-NAME    {"certificatePairExactMatch"}
 *   LDAP-DESC    "X.509 Certificate Pair Exact Match"
 *   ID           id-mr-certificatePairExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificatePairExactAssertion>}
 * @implements {MATCHING_RULE<CertificatePairExactAssertion>}
 */
export const certificatePairExactMatch: MATCHING_RULE<CertificatePairExactAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificatePairExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificatePairExactAssertion,
    },
    "&ldapSyntax": certPairExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificatePairExactMatch"],
    "&ldapDesc":
        "X.509 Certificate Pair Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificatePairExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
