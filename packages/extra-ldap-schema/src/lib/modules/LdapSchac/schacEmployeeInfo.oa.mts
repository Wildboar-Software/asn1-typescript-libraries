/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { schacPersonalPosition } from "../LdapSchac/schacPersonalPosition.oa.mjs";
// export { id_oc_schacEmployeeInfo } from "../LdapSchac/id-oc-schacEmployeeInfo.va.mjs";


/**
 * @summary schacEmployeeInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacEmployeeInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacPersonalPosition }
 *   LDAP-NAME                 {"schacEmployeeInfo"}
 *   LDAP-DESC                 "Employee information includes attributes that have relevance to the employee role, such as position, office hours, and job title"
 *   ID                        id-oc-schacEmployeeInfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacEmployeeInfo: OBJECT_CLASS = undefined;

/* eslint-enable */
