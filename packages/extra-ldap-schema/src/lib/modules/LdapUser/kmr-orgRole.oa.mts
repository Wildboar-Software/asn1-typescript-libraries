/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
// export { id_oc_kmr_orgRole } from "../LdapUser/id-oc-kmr-orgRole.va.mjs";


/**
 * @summary kmr_orgRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-orgRole OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MAY CONTAIN               { orgCode
 *                               | locationCode }
 *   LDAP-NAME                 {"kmr-orgRole"}
 *   ID                        id-oc-kmr-orgRole }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_orgRole: OBJECT_CLASS = undefined;

/* eslint-enable */
