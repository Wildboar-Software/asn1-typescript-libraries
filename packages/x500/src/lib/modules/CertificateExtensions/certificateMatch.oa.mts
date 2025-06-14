/* eslint-disable */
import { certAssertion } from "../CertificateExtensions/certAssertion.oa.mjs";
import {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from "../CertificateExtensions/CertificateAssertion.ta.mjs";
import { id_mr_certificateMatch } from "../CertificateExtensions/id-mr-certificateMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/* START_OF_SYMBOL_DEFINITION certificateMatch */
/**
 * @summary certificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateAssertion
 *   LDAP-SYNTAX  certAssertion.&id
 *   LDAP-NAME    {"certificateMatch"}
 *   LDAP-DESC    "X.509 Certificate Match"
 *   ID           id-mr-certificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificateAssertion>}
 * @implements {MATCHING_RULE<CertificateAssertion>}
 */
export const certificateMatch: MATCHING_RULE<CertificateAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateAssertion,
    },
    "&ldapSyntax": certAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificateMatch"],
    "&ldapDesc": "X.509 Certificate Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateMatch */

/* eslint-enable */
