/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dbmailUser } from "../LdapDbmail/id-oc-dbmailUser.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { accountStatus } from "./accountStatus.oa.mjs";
import { dbmailGID } from "./dbmailGID.oa.mjs";
import { dbmailUID } from "./dbmailUID.oa.mjs";
import { deliveryMode } from "./deliveryMode.oa.mjs";
import { mailAlternateAddress } from "./mailAlternateAddress.oa.mjs";
import { mailForwardingAddress } from "./mailForwardingAddress.oa.mjs";
import { mailHost } from "./mailHost.oa.mjs";
import { mailQuota } from "./mailQuota.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid, mail] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [userPassword, uidNumber, gidNumber, mailQuota, mailForwardingAddress, mailHost, mailAlternateAddress, dbmailUID, dbmailGID, deliveryMode, accountStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dbmailUser"],
    "&ldapDesc": "DBMail-LDAP User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dbmailUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
