/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_schacLinkageIdentifiers } from "../LdapSchac/id-oc-schacLinkageIdentifiers.va.mjs";


/**
 * @summary schacLinkageIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacLinkageIdentifiers OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacPersonalUniqueCode
 *                               | schacPersonalUniqueID }
 *   LDAP-NAME                 {"schacLinkageIdentifiers"}
 *   LDAP-DESC                 "Used to link a directory entry with records in external data stores or other directory entries"
 *   ID                        id-oc-schacLinkageIdentifiers }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacLinkageIdentifiers: OBJECT_CLASS = undefined;

/* eslint-enable */
