/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_pKICertificateTemplate } from "../LdapSchema2ldifMicrosoft/id-oc-pKICertificateTemplate.va.mjs";


/**
 * @summary pKICertificateTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pKICertificateTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { displayName
 *                               | flags
 *                               | pKIDefaultKeySpec
 *                               | pKIKeyUsage
 *                               | pKIMaxIssuingDepth
 *                               | pKICriticalExtensions
 *                               | pKIExpirationPeriod
 *                               | pKIOverlapPeriod
 *                               | pKIExtendedKeyUsage
 *                               | pKIDefaultCSPs
 *                               | pKIEnrollmentAccess }
 *   LDAP-NAME                 {"pKICertificateTemplate"}
 *   ID                        id-oc-pKICertificateTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pKICertificateTemplate: OBJECT_CLASS = undefined;

/* eslint-enable */
