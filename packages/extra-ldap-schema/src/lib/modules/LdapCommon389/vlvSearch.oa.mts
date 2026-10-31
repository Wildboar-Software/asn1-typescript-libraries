/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { multiLineDescription } from "../LdapCore389/multiLineDescription.oa.mjs";
// export { id_oc_vlvSearch } from "../LdapCommon389/id-oc-vlvSearch.va.mjs";


/**
 * @summary vlvSearch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vlvSearch OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | vlvBase
 *                               | vlvScope
 *                               | vlvFilter }
 *   MAY CONTAIN               { multiLineDescription }
 *   LDAP-NAME                 {"vlvSearch"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-vlvSearch }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vlvSearch: OBJECT_CLASS = undefined;

/* eslint-enable */
