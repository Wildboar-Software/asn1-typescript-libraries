/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mailAccount } from "../LdapIspenv/id-oc-mailAccount.va.mjs";


/**
 * @summary mailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | userPassword
 *                               | maildropPlace
 *                               | mail }
 *   MAY CONTAIN               { mailForward
 *                               | mailHost }
 *   LDAP-NAME                 {"mailAccount"}
 *   LDAP-DESC                 "Emailaccount, associated with a user"
 *   ID                        id-oc-mailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
