/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
// export { id_oc_configGroup } from "../LdapApacheFortress/id-oc-configGroup.va.mjs";


/**
 * @summary configGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * configGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { groupOfNames }
 *   MUST CONTAIN              { configProtocol
 *                               | ftType }
 *   MAY CONTAIN               { configParameter
 *                               | ftProps }
 *   LDAP-NAME                 {"configGroup"}
 *   LDAP-DESC                 "LDAP Configuration Group"
 *   ID                        id-oc-configGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const configGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
