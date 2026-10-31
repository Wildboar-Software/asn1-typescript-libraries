/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { authAuthority } from "../LdapSchema2ldifApple/authAuthority.oa.mjs";
// export { id_oc_authAuthorityObject } from "../LdapSchema2ldifApple/id-oc-authAuthorityObject.va.mjs";


/**
 * @summary authAuthorityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authAuthorityObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { authAuthority }
 *   LDAP-NAME                 {"authAuthorityObject"}
 *   ID                        id-oc-authAuthorityObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const authAuthorityObject: OBJECT_CLASS = undefined;

/* eslint-enable */
