/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { mepManagedEntry } from "../LdapMepPlugin/mepManagedEntry.oa.mjs";
// export { id_oc_mepOriginEntry } from "../LdapMepPlugin/id-oc-mepOriginEntry.va.mjs";


/**
 * @summary mepOriginEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mepOriginEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mepManagedEntry }
 *   LDAP-NAME                 {"mepOriginEntry"}
 *   LDAP-DESC                 "Managed Entries Origin Entry"
 *   ID                        id-oc-mepOriginEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mepOriginEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
