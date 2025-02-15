/* eslint-disable */
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
import { id_at_userCertificate } from "../AuthenticationFramework/id-at-userCertificate.va";
import { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa";
import { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export { id_at_userCertificate } from "../AuthenticationFramework/id-at-userCertificate.va";
export { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa";
export { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION userCertificate */
/**
 * @summary userCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userCertificate ATTRIBUTE ::= {
 *   WITH SYNTAX              Certificate
 *   EQUALITY MATCHING RULE   certificateExactMatch
 *   LDAP-SYNTAX              x509Certificate.&id
 *   LDAP-NAME                {"userCertificate"}
 *   LDAP-DESC                "X.509 user certificate"
 *   ID                       id-at-userCertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Certificate>}
 * @implements {ATTRIBUTE<Certificate>}
 */
export const userCertificate: ATTRIBUTE<Certificate> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&equality-match": certificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509Certificate["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["userCertificate"],
    "&ldapDesc": "X.509 user certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_userCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userCertificate */

/* eslint-enable */
