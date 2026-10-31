/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
// export { ftType } from "../LdapApacheFortress/ftType.oa.mjs";
// export { id_oc_ftObject } from "../LdapApacheFortress/id-oc-ftObject.va.mjs";


/**
 * @summary ftObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MUST CONTAIN              { ftId
 *                               | ftObjNm }
 *   MAY CONTAIN               { ftType }
 *   LDAP-NAME                 {"ftObject"}
 *   LDAP-DESC                 "Fortress Permission Object Class"
 *   ID                        id-oc-ftObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftObject: OBJECT_CLASS = undefined;

/* eslint-enable */
