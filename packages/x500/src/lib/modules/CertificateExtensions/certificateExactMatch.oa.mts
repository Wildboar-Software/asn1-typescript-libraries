/* eslint-disable */
import { certExactAssertion } from "../CertificateExtensions/certExactAssertion.oa.mjs";
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta.mjs";
import { id_mr_certificateExactMatch } from "../CertificateExtensions/id-mr-certificateExactMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { certExactAssertion } from "../CertificateExtensions/certExactAssertion.oa.mjs";
export {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta.mjs";
export { id_mr_certificateExactMatch } from "../CertificateExtensions/id-mr-certificateExactMatch.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";

/* START_OF_SYMBOL_DEFINITION certificateExactMatch */
/**
 * @summary certificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateExactAssertion
 *   LDAP-SYNTAX  certExactAssertion.&id
 *   LDAP-NAME    {"certificateExactMatch"}
 *   LDAP-DESC    "X.509 Certificate Exact Match"
 *   ID           id-mr-certificateExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificateExactAssertion>}
 * @implements {MATCHING_RULE<CertificateExactAssertion>}
 */
export const certificateExactMatch: MATCHING_RULE<CertificateExactAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateExactAssertion,
    },
    "&ldapSyntax": certExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificateExactMatch"],
    "&ldapDesc": "X.509 Certificate Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateExactMatch */

/* eslint-enable */
