/* eslint-disable */
import {
    CertificatePairExactAssertion,
    _decode_CertificatePairExactAssertion,
    _encode_CertificatePairExactAssertion,
} from "../CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import { id_ldx_certPairExactAssertion } from "../CertificateExtensions/id-ldx-certPairExactAssertion.va.mjs";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary certPairExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certPairExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair Exact Assertion"
 *   DIRECTORY SYNTAX  CertificatePairExactAssertion
 *   ID                id-ldx-certPairExactAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificatePairExactAssertion>}
 * @implements {SYNTAX_NAME<CertificatePairExactAssertion>}
 */
export const certPairExactAssertion: SYNTAX_NAME<CertificatePairExactAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePairExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificatePairExactAssertion,
    },
    "&ldapDesc":
        "X.509 Certificate Pair Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certPairExactAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
