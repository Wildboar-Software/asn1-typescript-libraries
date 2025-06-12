/* eslint-disable */
import { id_at_eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/id-at-eeAttrCertificateRevocationList.va.mjs";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta.mjs";
import { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa.mjs";
import { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { id_at_eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/id-at-eeAttrCertificateRevocationList.va.mjs";
export {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta.mjs";
export { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa.mjs";
export { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
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
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";

/* START_OF_SYMBOL_DEFINITION eeAttrCertificateRevocationList */
/**
 * @summary eeAttrCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eeAttrCertificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX             CertificateList
 *   EQUALITY MATCHING RULE  certificateListExactMatch
 *   LDAP-SYNTAX             x509CertificateList.&id
 *   LDAP-NAME               {"EEAttrCertificateRevocationList"}
 *   LDAP-DESC               "X.509 EEAttr certificate revocation list"
 *   ID                      id-at-eeAttrCertificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CertificateList>}
 * @implements {ATTRIBUTE<CertificateList>}
 */
export const eeAttrCertificateRevocationList: ATTRIBUTE<CertificateList> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["EEAttrCertificateRevocationList"],
    "&ldapDesc":
        "X.509 EEAttr certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_eeAttrCertificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION eeAttrCertificateRevocationList */

/* eslint-enable */
