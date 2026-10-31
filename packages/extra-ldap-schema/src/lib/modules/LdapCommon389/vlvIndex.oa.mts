/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_vlvIndex } from "../LdapCommon389/id-oc-vlvIndex.va.mjs";


/**
 * @summary vlvIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vlvIndex OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | vlvSort }
 *   MAY CONTAIN               { vlvEnabled
 *                               | vlvUses }
 *   LDAP-NAME                 {"vlvIndex"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-vlvIndex }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vlvIndex: OBJECT_CLASS = undefined;

/* eslint-enable */
