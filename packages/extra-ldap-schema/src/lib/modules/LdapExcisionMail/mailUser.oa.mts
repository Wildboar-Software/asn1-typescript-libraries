/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { id_oc_mailUser } from "../LdapExcisionMail/id-oc-mailUser.va.mjs";


/**
 * @summary mailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | surname
 *                               | userPassword
 *                               | homeDirectory
 *                               | mailUID
 *                               | mailGID
 *                               | mailQuota
 *                               | mailSetting
 *                               | aliasAddress
 *                               | backupAddress
 *                               | accountStatus
 *                               | allowedNetwork
 *                               | allowList
 *                               | blockList }
 *   LDAP-NAME                 {"mailUser"}
 *   LDAP-DESC                 "Abstraction of a mail user"
 *   ID                        id-oc-mailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailUser: OBJECT_CLASS = undefined;

/* eslint-enable */
