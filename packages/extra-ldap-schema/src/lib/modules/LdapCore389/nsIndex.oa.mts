/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_nsIndex } from "../LdapCore389/id-oc-nsIndex.va.mjs";


/**
 * @summary nsIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsIndex OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsSystemIndex }
 *   MAY CONTAIN               { description
 *                               | nsIndexType
 *                               | nsMatchingRule
 *                               | nsIndexIDListScanLimit }
 *   LDAP-NAME                 {"nsIndex"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsIndex }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsIndex: OBJECT_CLASS = undefined;

/* eslint-enable */
