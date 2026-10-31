/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { id_oc_ftAttribute } from "../LdapApacheFortress/id-oc-ftAttribute.va.mjs";


/**
 * @summary ftAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftAttribute OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftPASet
 *                               | ftPA
 *                               | commonName }
 *   MAY CONTAIN               { ftPADataType
 *                               | ftPADefaultValue
 *                               | ftPADefaultStrategy
 *                               | ftPADefaultOperator
 *                               | ftPAValidVals
 *                               | description }
 *   LDAP-NAME                 {"ftAttribute"}
 *   LDAP-DESC                 "Fortress Attribute Structural Object Class"
 *   ID                        id-oc-ftAttribute }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftAttribute: OBJECT_CLASS = undefined;

/* eslint-enable */
