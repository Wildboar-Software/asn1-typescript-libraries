/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { posixGroup } from "../NIS/posixGroup.oa.mjs";
// export { dsOnlyMemberUid } from "../LdapPosixWinsync/dsOnlyMemberUid.oa.mjs";
// export { id_oc_dynamicGroup } from "../LdapPosixWinsync/id-oc-dynamicGroup.va.mjs";


/**
 * @summary dynamicGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dynamicGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { posixGroup }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dsOnlyMemberUid }
 *   LDAP-NAME                 {"dynamicGroup"}
 *   LDAP-DESC                 "Group containing internal dynamically-generated members"
 *   ID                        id-oc-dynamicGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dynamicGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
