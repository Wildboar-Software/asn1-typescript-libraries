/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
// export { id_oc_ftUserAttrs } from "../LdapApacheFortress/id-oc-ftUserAttrs.va.mjs";


/**
 * @summary ftUserAttrs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftUserAttrs OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ftId }
 *   MAY CONTAIN               { ftRC
 *                               | ftRA
 *                               | ftARC
 *                               | ftARA
 *                               | ftCstr
 *                               | ftSystem }
 *   LDAP-NAME                 {"ftUserAttrs"}
 *   LDAP-DESC                 "Fortress User Attribute AUX Object Class"
 *   ID                        id-oc-ftUserAttrs }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftUserAttrs: OBJECT_CLASS = undefined;

/* eslint-enable */
