/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { groupOfUniqueNames } from "../SelectedObjectClasses/groupOfUniqueNames.oa.mjs";
// export { id_oc_groupOfUniqueNamesExt } from "../OrganizationAndGroupSchema/id-oc-groupOfUniqueNamesExt.va.mjs";


/**
 * @summary groupOfUniqueNamesExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfUniqueNamesExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {groupOfUniqueNames}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationOrGroupAttributes}
 *     LDAP-NAME           {"groupOfUniqueNamesExt"}
 *     LDAP-DESC           "A group of unique names"
 *     ID                  id-oc-groupOfUniqueNamesExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfUniqueNamesExt: OBJECT_CLASS = undefined;

/* eslint-enable */
