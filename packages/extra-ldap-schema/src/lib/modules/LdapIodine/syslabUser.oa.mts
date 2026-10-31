/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { posixAccount } from "../NIS/posixAccount.oa.mjs";
// export { groupMembership } from "../LdapIodine/groupMembership.oa.mjs";
// export { id_oc_syslabUser } from "../LdapIodine/id-oc-syslabUser.va.mjs";


/**
 * @summary syslabUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * syslabUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { posixAccount }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | homeDirectory
 *                               | loginShell }
 *   MAY CONTAIN               { groupMembership }
 *   LDAP-NAME                 {"syslabUser"}
 *   ID                        id-oc-syslabUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const syslabUser: OBJECT_CLASS = undefined;

/* eslint-enable */
