/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_dcExternalMailAccount } from "../LdapDovecot/id-oc-dcExternalMailAccount.va.mjs";


/**
 * @summary dcExternalMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcExternalMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dcSubMailAddress
 *                               | dcAccountStatus }
 *   MAY CONTAIN               { dcSMTPServer
 *                               | dcSMTPLogin
 *                               | dcSMTPPassword
 *                               | dcPOP3Server
 *                               | dcPOP3Login
 *                               | dcPOP3Password
 *                               | dcMailQuota
 *                               | dcMailSizeMax }
 *   LDAP-NAME                 {"dcExternalMailAccount"}
 *   LDAP-DESC                 "Dovecot-LDAP external mail account"
 *   ID                        id-oc-dcExternalMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcExternalMailAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
