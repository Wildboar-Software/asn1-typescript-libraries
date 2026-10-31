/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { tuftsEduDisplayNameLF } from "../LdapTuftsSchema/tuftsEduDisplayNameLF.oa.mjs";
// export { id_oc_tuftsEduPerson } from "../LdapTuftsSchema/id-oc-tuftsEduPerson.va.mjs";


/**
 * @summary tuftsEduPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tuftsEduPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { tuftsEduDisplayNameLF }
 *   LDAP-NAME                 {"tuftsEduPerson"}
 *   LDAP-DESC                 "Tufts schema extensions for people directory entries"
 *   ID                        id-oc-tuftsEduPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tuftsEduPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
