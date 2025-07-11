/* eslint-disable */
import {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
} from "../CertificateExtensions/CertificateListExactAssertion.ta.mjs";
import { certListExactAssertion } from "../CertificateExtensions/certListExactAssertion.oa.mjs";
import { id_mr_certificateListExactMatch } from "../CertificateExtensions/id-mr-certificateListExactMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary certificateListExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateListExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateListExactAssertion
 *   LDAP-SYNTAX  certListExactAssertion.&id
 *   LDAP-NAME    {"certificateListExactMatch"}
 *   LDAP-DESC    "X.509 Certificate List Exact Match"
 *   ID           id-mr-certificateListExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificateListExactAssertion>}
 * @implements {MATCHING_RULE<CertificateListExactAssertion>}
 */
export const certificateListExactMatch: MATCHING_RULE<CertificateListExactAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateListExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateListExactAssertion,
    },
    "&ldapSyntax": certListExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificateListExactMatch"],
    "&ldapDesc":
        "X.509 Certificate List Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateListExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
