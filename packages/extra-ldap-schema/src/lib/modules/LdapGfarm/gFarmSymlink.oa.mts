/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { sourcePath } from "../LdapGfarm/sourcePath.oa.mjs";
// export { id_oc_gFarmSymlink } from "../LdapGfarm/id-oc-gFarmSymlink.va.mjs";


/**
 * @summary gFarmSymlink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmSymlink OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { sourcePath }
 *   LDAP-NAME                 {"GFarmSymlink"}
 *   ID                        id-oc-gFarmSymlink }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmSymlink: OBJECT_CLASS = undefined;

/* eslint-enable */
