/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { id_oc_postfixBookMailAccount } from "../LdapSchema2ldifPostfixBook/id-oc-postfixBookMailAccount.va.mjs";


/**
 * @summary postfixBookMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * postfixBookMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { mailHomeDirectory
 *                               | mailAlias
 *                               | mailGroupMember
 *                               | mailUidNumber
 *                               | mailGidNumber
 *                               | mailEnabled
 *                               | mailQuota
 *                               | mailStorageDirectory
 *                               | mailSieveRuleSource }
 *   LDAP-NAME                 {"PostfixBookMailAccount"}
 *   LDAP-DESC                 "Mail account used in Postfix Book"
 *   ID                        id-oc-postfixBookMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const postfixBookMailAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
