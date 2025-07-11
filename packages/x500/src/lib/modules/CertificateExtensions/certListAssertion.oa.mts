/* eslint-disable */
import {
    CertificateListAssertion,
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
} from "../CertificateExtensions/CertificateListAssertion.ta.mjs";
import { id_ldx_certListAssertion } from "../CertificateExtensions/id-ldx-certListAssertion.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary certListAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certListAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List Assertion"
 *   DIRECTORY SYNTAX  CertificateListAssertion
 *   ID                id-ldx-certListAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificateListAssertion>}
 * @implements {SYNTAX_NAME<CertificateListAssertion>}
 */
export const certListAssertion: SYNTAX_NAME<CertificateListAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateListAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateListAssertion,
    },
    "&ldapDesc": "X.509 Certificate List Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certListAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
