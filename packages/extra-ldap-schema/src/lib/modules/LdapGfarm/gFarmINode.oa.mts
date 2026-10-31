/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_gFarmINode } from "../LdapGfarm/id-oc-gFarmINode.va.mjs";


/**
 * @summary gFarmINode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmINode OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | igen
 *                               | nlink
 *                               | size-type
 *                               | mode
 *                               | username
 *                               | groupname
 *                               | atimesec
 *                               | atimensec
 *                               | mtimesec
 *                               | mtimensec
 *                               | ctimesec
 *                               | ctimensec }
 *   MAY CONTAIN               { checksumType
 *                               | checksum }
 *   LDAP-NAME                 {"GFarmINode"}
 *   ID                        id-oc-gFarmINode }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmINode: OBJECT_CLASS = undefined;

/* eslint-enable */
