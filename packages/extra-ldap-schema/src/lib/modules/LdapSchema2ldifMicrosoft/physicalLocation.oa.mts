/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { locality } from "../SelectedObjectClasses/locality.oa.mjs";
// export { managedBy } from "../MSUser/managedBy.oa.mjs";
// export { id_oc_physicalLocation } from "../LdapSchema2ldifMicrosoft/id-oc-physicalLocation.va.mjs";


/**
 * @summary physicalLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * physicalLocation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality }
 *   MAY CONTAIN               { managedBy }
 *   LDAP-NAME                 {"physicalLocation"}
 *   ID                        id-oc-physicalLocation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const physicalLocation: OBJECT_CLASS = undefined;

/* eslint-enable */
