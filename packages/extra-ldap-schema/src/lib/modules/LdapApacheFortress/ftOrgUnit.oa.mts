/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
// export { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
// export { ftParents } from "../LdapApacheFortress/ftParents.oa.mjs";
// export { id_oc_ftOrgUnit } from "../LdapApacheFortress/id-oc-ftOrgUnit.va.mjs";


/**
 * @summary ftOrgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftOrgUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MUST CONTAIN              { ftId }
 *   MAY CONTAIN               { ftParents }
 *   LDAP-NAME                 {"ftOrgUnit"}
 *   LDAP-DESC                 "Fortress OrgUnit Structural Object Class"
 *   ID                        id-oc-ftOrgUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftOrgUnit: OBJECT_CLASS = undefined;

/* eslint-enable */
