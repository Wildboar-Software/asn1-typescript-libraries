/* eslint-disable */
import {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
} from "../CertificateExtensions/CertificateListExactAssertion.ta.mjs";
import { id_ldx_certListExactAssertion } from "../CertificateExtensions/id-ldx-certListExactAssertion.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary certListExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certListExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List Exact Assertion"
 *   DIRECTORY SYNTAX  CertificateListExactAssertion
 *   ID                id-ldx-certListExactAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificateListExactAssertion>}
 * @implements {SYNTAX_NAME<CertificateListExactAssertion>}
 */
export const certListExactAssertion: SYNTAX_NAME<CertificateListExactAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateListExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateListExactAssertion,
    },
    "&ldapDesc":
        "X.509 Certificate List Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certListExactAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
