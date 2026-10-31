/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
// export { id_oc_pkiUser } from "../AuthenticationFramework/id-oc-pkiUser.va.mjs";


/**
 * @summary pkiUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {userCertificate}
 *   LDAP-NAME           {"pkiUser"}
 *   LDAP-DESC           "X.509 PKI User"
 *   ID                  id-oc-pkiUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pkiUser: OBJECT_CLASS = undefined;

/* eslint-enable */
