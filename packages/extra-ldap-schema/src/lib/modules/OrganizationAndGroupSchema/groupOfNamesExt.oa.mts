/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
// export { id_oc_groupOfNamesExt } from "../OrganizationAndGroupSchema/id-oc-groupOfNamesExt.va.mjs";


/**
 * @summary groupOfNamesExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfNamesExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {groupOfNames}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationOrGroupAttributes}
 *     LDAP-NAME           {"groupOfNamesExt"}
 *     LDAP-DESC           "A group of names"
 *     ID                  id-oc-groupOfNamesExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfNamesExt: OBJECT_CLASS = undefined;

/* eslint-enable */
