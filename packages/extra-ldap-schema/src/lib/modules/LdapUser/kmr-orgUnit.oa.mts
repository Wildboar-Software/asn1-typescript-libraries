/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
// export { id_oc_kmr_orgUnit } from "../LdapUser/id-oc-kmr-orgUnit.va.mjs";


/**
 * @summary kmr_orgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-orgUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MAY CONTAIN               { orgCode
 *                               | locationCode }
 *   LDAP-NAME                 {"kmr-orgUnit"}
 *   ID                        id-oc-kmr-orgUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_orgUnit: OBJECT_CLASS = undefined;

/* eslint-enable */
