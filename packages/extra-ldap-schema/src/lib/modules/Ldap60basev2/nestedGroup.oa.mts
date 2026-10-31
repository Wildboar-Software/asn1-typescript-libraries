/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
// export { memberOf } from "../MSUser/memberOf.oa.mjs";
// export { id_oc_nestedGroup } from "../Ldap60basev2/id-oc-nestedGroup.va.mjs";


/**
 * @summary nestedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nestedGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { groupOfNames }
 *   MAY CONTAIN               { memberOf }
 *   LDAP-NAME                 {"nestedGroup"}
 *   LDAP-DESC                 "Group that supports nesting"
 *   ID                        id-oc-nestedGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nestedGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
