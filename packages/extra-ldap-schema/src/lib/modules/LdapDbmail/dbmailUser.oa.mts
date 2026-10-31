/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_dbmailUser } from "../LdapDbmail/id-oc-dbmailUser.va.mjs";


/**
 * @summary dbmailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dbmailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | mail }
 *   MAY CONTAIN               { userPassword
 *                               | uidNumber
 *                               | gidNumber
 *                               | mailQuota
 *                               | mailForwardingAddress
 *                               | mailHost
 *                               | mailAlternateAddress
 *                               | dbmailUID
 *                               | dbmailGID
 *                               | deliveryMode
 *                               | accountStatus }
 *   LDAP-NAME                 {"dbmailUser"}
 *   LDAP-DESC                 "DBMail-LDAP User"
 *   ID                        id-oc-dbmailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dbmailUser: OBJECT_CLASS = undefined;

/* eslint-enable */
