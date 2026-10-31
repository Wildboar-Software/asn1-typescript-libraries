/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../AuthenticationFramework/CertificateList.ta.mjs";
// export { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa.mjs";
// export { id_at_authorityRevocationList } from "../AuthenticationFramework/id-at-authorityRevocationList.va.mjs";


/**
 * @summary authorityRevocationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorityRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"authorityRevocationList"}
 *   LDAP-DESC                "X.509 authority revocation list"
 *   ID                       id-at-authorityRevocationList }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const authorityRevocationList: ATTRIBUTE = undefined;

/* eslint-enable */
