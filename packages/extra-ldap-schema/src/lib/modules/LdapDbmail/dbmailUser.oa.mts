/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dbmailUser } from "../LdapDbmail/id-oc-dbmailUser.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { mailQuota } from "../LdapDbmail/mailQuota.oa.mjs";
import { mailForwardingAddress } from "../LdapDbmail/mailForwardingAddress.oa.mjs";
import { mailHost } from "../LdapDbmail/mailHost.oa.mjs";
import { mailAlternateAddress } from "../LdapDbmail/mailAlternateAddress.oa.mjs";
import { dbmailUID } from "../LdapDbmail/dbmailUID.oa.mjs";
import { dbmailGID } from "../LdapDbmail/dbmailGID.oa.mjs";
import { deliveryMode } from "../LdapDbmail/deliveryMode.oa.mjs";
import { accountStatus } from "../LdapDbmail/accountStatus.oa.mjs";
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
const dbmailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ userPassword, uidNumber, gidNumber, mailQuota, mailForwardingAddress, mailHost, mailAlternateAddress, dbmailUID, dbmailGID, deliveryMode, accountStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dbmailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DBMail-LDAP User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dbmailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
