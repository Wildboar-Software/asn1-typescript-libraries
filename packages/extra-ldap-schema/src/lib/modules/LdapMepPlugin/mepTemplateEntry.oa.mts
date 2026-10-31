/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mepTemplateEntry } from "../LdapMepPlugin/id-oc-mepTemplateEntry.va.mjs";


/**
 * @summary mepTemplateEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mepTemplateEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | mepStaticAttr
 *                               | mepMappedAttr
 *                               | mepRDNAttr }
 *   LDAP-NAME                 {"mepTemplateEntry"}
 *   LDAP-DESC                 "Managed Entries Template Entry"
 *   ID                        id-oc-mepTemplateEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mepTemplateEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
