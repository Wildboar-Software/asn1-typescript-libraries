/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_amdmapTimestamp_2 } from "../LdapAmd/id-oc-amdmapTimestamp-2.va.mjs";


/**
 * @summary amdmapTimestamp_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * amdmapTimestamp-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | amdmapName
 *                               | amdmapTimestamp }
 *   LDAP-NAME                 {"amdmapTimestamp"}
 *   LDAP-DESC                 "Timestamp for an AMD map"
 *   ID                        id-oc-amdmapTimestamp-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const amdmapTimestamp_2: OBJECT_CLASS = undefined;

/* eslint-enable */
