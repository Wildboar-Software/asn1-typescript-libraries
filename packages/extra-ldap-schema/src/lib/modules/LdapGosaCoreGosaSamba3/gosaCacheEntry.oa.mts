/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { gosaUser } from "../LdapGosaCoreGosaSamba3/gosaUser.oa.mjs";
// export { id_oc_gosaCacheEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gosaCacheEntry.va.mjs";


/**
 * @summary gosaCacheEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaCacheEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaUser }
 *   LDAP-NAME                 {"gosaCacheEntry"}
 *   LDAP-DESC                 "Class for GOsa caching (v2.7)"
 *   ID                        id-oc-gosaCacheEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaCacheEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
