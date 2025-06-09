/* eslint-disable */
import {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
} from "../CertificateExtensions/CertificateListExactAssertion.ta.js";
import { certListExactAssertion } from "../CertificateExtensions/certListExactAssertion.oa.js";
import { id_mr_certificateListExactMatch } from "../CertificateExtensions/id-mr-certificateListExactMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
} from "../CertificateExtensions/CertificateListExactAssertion.ta.js";
export { certListExactAssertion } from "../CertificateExtensions/certListExactAssertion.oa.js";
export { id_mr_certificateListExactMatch } from "../CertificateExtensions/id-mr-certificateListExactMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION certificateListExactMatch */
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
/* END_OF_SYMBOL_DEFINITION certificateListExactMatch */

/* eslint-enable */
