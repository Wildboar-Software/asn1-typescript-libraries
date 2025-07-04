/* eslint-disable */
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta.mjs";
import { id_at_cAcertificate } from "../AuthenticationFramework/id-at-cAcertificate.va.mjs";
import { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa.mjs";
import { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary cACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cACertificate ATTRIBUTE ::= {
 *   WITH SYNTAX              Certificate
 *   EQUALITY MATCHING RULE   certificateExactMatch
 *   LDAP-SYNTAX              x509Certificate.&id
 *   LDAP-NAME                {"cACertificate"}
 *   LDAP-DESC                "X.509 CA certificate"
 *   ID                       id-at-cAcertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Certificate>}
 * @implements {ATTRIBUTE<Certificate>}
 */
export const cACertificate: ATTRIBUTE<Certificate> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&equality-match": certificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509Certificate["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cACertificate"],
    "&ldapDesc": "X.509 CA certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_cAcertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
