/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_ftHier } from "../LdapApacheFortress/id-oc-ftHier.va.mjs";


/**
 * @summary ftHier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftHier OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { ftRels
 *                               | description }
 *   LDAP-NAME                 {"ftHier"}
 *   LDAP-DESC                 "Fortress Hierarchy Structural Object Class"
 *   ID                        id-oc-ftHier }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftHier: OBJECT_CLASS = undefined;

/* eslint-enable */
