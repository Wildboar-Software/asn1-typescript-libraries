/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_inetMailGroupManagement } from "../Ldapmigration56imsSchema/id-oc-inetMailGroupManagement.va.mjs";


/**
 * @summary inetMailGroupManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailGroupManagement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mgmanAllowSubscribe
 *                               | mgmanDenySubscribe
 *                               | mgmanHidden
 *                               | mgmanJoinability
 *                               | mgmanVisibility
 *                               | mgmanMemberVisibility
 *                               | mgmanIntroText
 *                               | mgmanGoodbyeText
 *                               | multiLineDescription }
 *   LDAP-NAME                 {"inetMailGroupManagement"}
 *   LDAP-DESC                 "auxiliary class for managed mailing lists"
 *   ID                        id-oc-inetMailGroupManagement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailGroupManagement: OBJECT_CLASS = undefined;

/* eslint-enable */
