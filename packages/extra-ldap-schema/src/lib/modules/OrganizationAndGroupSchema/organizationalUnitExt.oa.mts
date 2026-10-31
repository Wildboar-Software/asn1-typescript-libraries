/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
// export { id_oc_organizationalUnitExt } from "../OrganizationAndGroupSchema/id-oc-organizationalUnitExt.va.mjs";


/**
 * @summary organizationalUnitExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalUnitExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {organizationalUnit}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationalAttributes}
 *     LDAP-NAME           {"organizationalUnitExt"}
 *     LDAP-DESC           "An organizational unit"
 *     ID                  id-oc-organizationalUnitExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationalUnitExt: OBJECT_CLASS = undefined;

/* eslint-enable */
