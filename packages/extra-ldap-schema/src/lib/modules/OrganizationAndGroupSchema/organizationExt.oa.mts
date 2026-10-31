/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organization } from "../SelectedObjectClasses/organization.oa.mjs";
// export { id_oc_organizationExt } from "../OrganizationAndGroupSchema/id-oc-organizationExt.va.mjs";


/**
 * @summary organizationExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationExt OBJECT-CLASS ::= {
 *     SUBCLASS OF            {organization}
 *     KIND                structural
 *     MAY CONTAIN            {ExtOrganizationalAttributes}
 *     LDAP-NAME            {"organizationExt"}
 *     LDAP-DESC            "An organization"
 *     ID                    id-oc-organizationExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationExt: OBJECT_CLASS = undefined;

/* eslint-enable */
