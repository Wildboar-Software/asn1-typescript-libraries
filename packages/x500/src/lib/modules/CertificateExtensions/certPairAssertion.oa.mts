/* eslint-disable */
import {
    CertificatePairAssertion,
    _decode_CertificatePairAssertion,
    _encode_CertificatePairAssertion,
} from "../CertificateExtensions/CertificatePairAssertion.ta.mjs";
import { id_ldx_certPairAssertion } from "../CertificateExtensions/id-ldx-certPairAssertion.va.mjs";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/* START_OF_SYMBOL_DEFINITION certPairAssertion */
/**
 * @summary certPairAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certPairAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair Assertion"
 *   DIRECTORY SYNTAX  CertificatePairAssertion
 *   ID                id-ldx-certPairAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificatePairAssertion>}
 * @implements {SYNTAX_NAME<CertificatePairAssertion>}
 */
export const certPairAssertion: SYNTAX_NAME<CertificatePairAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePairAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificatePairAssertion,
    },
    "&ldapDesc": "X.509 Certificate Pair Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certPairAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certPairAssertion */

/* eslint-enable */
