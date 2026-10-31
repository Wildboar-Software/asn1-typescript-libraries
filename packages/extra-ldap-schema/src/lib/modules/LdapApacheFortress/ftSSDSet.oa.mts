/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { id_oc_ftSSDSet } from "../LdapApacheFortress/id-oc-ftSSDSet.va.mjs";


/**
 * @summary ftSSDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftSSDSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftSetName
 *                               | ftSetCardinality }
 *   MAY CONTAIN               { ftRoles
 *                               | description }
 *   LDAP-NAME                 {"ftSSDSet"}
 *   LDAP-DESC                 "Fortress Role Static Separation of Duty Set Structural Object Class"
 *   ID                        id-oc-ftSSDSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftSSDSet: OBJECT_CLASS = undefined;

/* eslint-enable */
