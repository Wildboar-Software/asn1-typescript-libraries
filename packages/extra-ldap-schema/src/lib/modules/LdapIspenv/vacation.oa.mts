/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { vacationActive } from "../LdapIspenv/vacationActive.oa.mjs";
// export { id_oc_vacation } from "../LdapIspenv/id-oc-vacation.va.mjs";


/**
 * @summary vacation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vacation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { vacationActive }
 *   MAY CONTAIN               { vacationInfo
 *                               | vacationStart
 *                               | vacationEnd
 *                               | vacationForward }
 *   LDAP-NAME                 {"Vacation"}
 *   LDAP-DESC                 "Users vacation status information"
 *   ID                        id-oc-vacation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vacation: OBJECT_CLASS = undefined;

/* eslint-enable */
