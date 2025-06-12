/* eslint-disable */
import {
    CertificateListAssertion,
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
} from "../CertificateExtensions/CertificateListAssertion.ta.mjs";
import { certListAssertion } from "../CertificateExtensions/certListAssertion.oa.mjs";
import { id_mr_certificateListMatch } from "../CertificateExtensions/id-mr-certificateListMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export {
    CertificateListAssertion,
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
} from "../CertificateExtensions/CertificateListAssertion.ta.mjs";
export { certListAssertion } from "../CertificateExtensions/certListAssertion.oa.mjs";
export { id_mr_certificateListMatch } from "../CertificateExtensions/id-mr-certificateListMatch.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";

/* START_OF_SYMBOL_DEFINITION certificateListMatch */
/**
 * @summary certificateListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateListMatch MATCHING-RULE ::= {
 *   SYNTAX  CertificateListAssertion
 *   LDAP-SYNTAX  certListAssertion.&id
 *   LDAP-NAME    {"certificateListMatch"}
 *   LDAP-DESC    "X.509 Certificate List Match"
 *   ID      id-mr-certificateListMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificateListAssertion>}
 * @implements {MATCHING_RULE<CertificateListAssertion>}
 */
export const certificateListMatch: MATCHING_RULE<CertificateListAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateListAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateListAssertion,
    },
    "&ldapSyntax": certListAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificateListMatch"],
    "&ldapDesc": "X.509 Certificate List Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateListMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateListMatch */

/* eslint-enable */
