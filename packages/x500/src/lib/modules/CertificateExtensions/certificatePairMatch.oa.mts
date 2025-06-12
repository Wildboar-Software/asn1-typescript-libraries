/* eslint-disable */
import {
    CertificatePairAssertion,
    _decode_CertificatePairAssertion,
    _encode_CertificatePairAssertion,
} from "../CertificateExtensions/CertificatePairAssertion.ta.mjs";
import { certPairAssertion } from "../CertificateExtensions/certPairAssertion.oa.mjs";
import { id_mr_certificatePairMatch } from "../CertificateExtensions/id-mr-certificatePairMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export {
    CertificatePairAssertion,
    _decode_CertificatePairAssertion,
    _encode_CertificatePairAssertion,
} from "../CertificateExtensions/CertificatePairAssertion.ta.mjs";
export { certPairAssertion } from "../CertificateExtensions/certPairAssertion.oa.mjs";
export { id_mr_certificatePairMatch } from "../CertificateExtensions/id-mr-certificatePairMatch.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";

/* START_OF_SYMBOL_DEFINITION certificatePairMatch */
/**
 * @summary certificatePairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePairMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificatePairAssertion
 *   LDAP-SYNTAX  certPairAssertion.&id
 *   LDAP-NAME    {"certificatePairMatch"}
 *   LDAP-DESC    "X.509 Certificate Pair Match"
 *   ID           id-mr-certificatePairMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificatePairAssertion>}
 * @implements {MATCHING_RULE<CertificatePairAssertion>}
 */
export const certificatePairMatch: MATCHING_RULE<CertificatePairAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificatePairAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificatePairAssertion,
    },
    "&ldapSyntax": certPairAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificatePairMatch"],
    "&ldapDesc": "X.509 Certificate Pair Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificatePairMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificatePairMatch */

/* eslint-enable */
