/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
// export { id_oc_ftAttributeSet } from "../LdapApacheFortress/id-oc-ftAttributeSet.va.mjs";


/**
 * @summary ftAttributeSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftAttributeSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MUST CONTAIN              { ftId
 *                               | ftPASet
 *                               | commonName }
 *   MAY CONTAIN               { ftPA
 *                               | ftPASetType
 *                               | description }
 *   LDAP-NAME                 {"ftAttributeSet"}
 *   LDAP-DESC                 "Fortress Attribute Set Structural Object Class"
 *   ID                        id-oc-ftAttributeSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftAttributeSet: OBJECT_CLASS = undefined;

/* eslint-enable */
