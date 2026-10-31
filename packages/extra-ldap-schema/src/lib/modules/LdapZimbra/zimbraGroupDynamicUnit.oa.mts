/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraGroupDynamicUnit } from "../LdapZimbra/id-oc-zimbraGroupDynamicUnit.va.mjs";


/**
 * @summary zimbraGroupDynamicUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGroupDynamicUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { memberURL
 *                               | zimbraGroupId
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | mail
 *                               | zimbraCreateTimestamp
 *                               | zimbraMailAlias
 *                               | zimbraMailStatus }
 *   LDAP-NAME                 {"zimbraGroupDynamicUnit"}
 *   LDAP-DESC                 "hold attributes for the dynamic entry of dynamic groups."
 *   ID                        id-oc-zimbraGroupDynamicUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGroupDynamicUnit: OBJECT_CLASS = undefined;

/* eslint-enable */
