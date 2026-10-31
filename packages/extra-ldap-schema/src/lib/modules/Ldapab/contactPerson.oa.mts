/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_contactPerson } from "../Ldapab/id-oc-contactPerson.va.mjs";


/**
 * @summary contactPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contactPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { anniversary
 *                               | marker
 *                               | birthday
 *                               | custom1
 *                               | custom2
 *                               | custom3
 *                               | custom4
 *                               | countryName }
 *   LDAP-NAME                 {"contactPerson"}
 *   LDAP-DESC                 "Contact - Addressbook entry"
 *   ID                        id-oc-contactPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const contactPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
