/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { id_oc_organizationalRoleExt } from "../OrganizationAndGroupSchema/id-oc-organizationalRoleExt.va.mjs";


/**
 * @summary organizationalRoleExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalRoleExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {organizationalRole}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationOrGroupAttributes}
 *     LDAP-NAME           {"organizationalRoleExt"}
 *     LDAP-DESC           "An organizational role"
 *     ID                  id-oc-organizationalRoleExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationalRoleExt: OBJECT_CLASS = undefined;

/* eslint-enable */
