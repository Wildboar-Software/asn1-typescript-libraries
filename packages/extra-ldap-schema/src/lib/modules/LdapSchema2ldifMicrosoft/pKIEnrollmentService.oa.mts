/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_pKIEnrollmentService } from "../LdapSchema2ldifMicrosoft/id-oc-pKIEnrollmentService.va.mjs";


/**
 * @summary pKIEnrollmentService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pKIEnrollmentService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { cACertificate
 *                               | dNSHostName
 *                               | cACertificateDN
 *                               | certificateTemplates
 *                               | signatureAlgorithms
 *                               | enrollmentProviders }
 *   LDAP-NAME                 {"pKIEnrollmentService"}
 *   ID                        id-oc-pKIEnrollmentService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pKIEnrollmentService: OBJECT_CLASS = undefined;

/* eslint-enable */
