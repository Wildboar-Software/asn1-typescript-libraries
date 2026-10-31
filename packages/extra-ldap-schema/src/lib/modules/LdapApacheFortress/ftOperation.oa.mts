/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { id_oc_ftOperation } from "../LdapApacheFortress/id-oc-ftOperation.va.mjs";


/**
 * @summary ftOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftOperation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftPermName
 *                               | ftObjNm
 *                               | ftOpNm }
 *   MAY CONTAIN               { ftObjId
 *                               | ftRoles
 *                               | ftUsers
 *                               | ftType
 *                               | ftPASet }
 *   LDAP-NAME                 {"ftOperation"}
 *   LDAP-DESC                 "Fortress Permission Operation Structural Object Class"
 *   ID                        id-oc-ftOperation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftOperation: OBJECT_CLASS = undefined;

/* eslint-enable */
