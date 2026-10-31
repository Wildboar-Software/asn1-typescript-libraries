/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { groupname } from "../LdapGfarm/groupname.oa.mjs";
// export { groupusers } from "../LdapGfarm/groupusers.oa.mjs";
// export { id_oc_gFarmGroup } from "../LdapGfarm/id-oc-gFarmGroup.va.mjs";


/**
 * @summary gFarmGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { groupname }
 *   MAY CONTAIN               { groupusers }
 *   LDAP-NAME                 {"GFarmGroup"}
 *   ID                        id-oc-gFarmGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
