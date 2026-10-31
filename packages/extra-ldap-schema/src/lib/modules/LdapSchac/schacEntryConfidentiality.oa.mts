/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { schacUserPrivateAttribute } from "../LdapSchac/schacUserPrivateAttribute.oa.mjs";
// export { id_oc_schacEntryConfidentiality } from "../LdapSchac/id-oc-schacEntryConfidentiality.va.mjs";


/**
 * @summary schacEntryConfidentiality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacEntryConfidentiality OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacUserPrivateAttribute }
 *   LDAP-NAME                 {"schacEntryConfidentiality"}
 *   LDAP-DESC                 "Used to indicate whether an entry is visible publicly, visible only to affiliates of the institution, or not visible at all"
 *   ID                        id-oc-schacEntryConfidentiality }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacEntryConfidentiality: OBJECT_CLASS = undefined;

/* eslint-enable */
