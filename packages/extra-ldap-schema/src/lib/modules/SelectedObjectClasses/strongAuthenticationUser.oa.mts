/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
// export { id_oc_strongAuthenticationUser } from "../SelectedObjectClasses/id-oc-strongAuthenticationUser.va.mjs";


/**
 * @summary strongAuthenticationUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * strongAuthenticationUser OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {userCertificate}
 *   LDAP-NAME     {"strongAuthenticationUser"} -- RFC 4523
 *   LDAP-DESC     {"X.521 strong authentication user"}
 *   ID            id-oc-strongAuthenticationUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const strongAuthenticationUser: OBJECT_CLASS = undefined;

/* eslint-enable */
