/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_mailUser } from "../LdapExcisionMail/id-oc-mailUser.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { mailUID } from "../LdapExcisionMail/mailUID.oa.mjs";
import { mailGID } from "../LdapExcisionMail/mailGID.oa.mjs";
import { mailQuota } from "../LdapExcisionMail/mailQuota.oa.mjs";
import { mailSetting } from "../LdapExcisionMail/mailSetting.oa.mjs";
import { aliasAddress } from "../LdapExcisionMail/aliasAddress.oa.mjs";
import { backupAddress } from "../LdapExcisionMail/backupAddress.oa.mjs";
import { accountStatus } from "../LdapExcisionMail/accountStatus.oa.mjs";
import { allowedNetwork } from "../LdapExcisionMail/allowedNetwork.oa.mjs";
import { allowList } from "../LdapExcisionMail/allowList.oa.mjs";
import { blockList } from "../LdapExcisionMail/blockList.oa.mjs";


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
const mailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, givenName, surname, userPassword, homeDirectory, mailUID, mailGID, mailQuota, mailSetting, aliasAddress, backupAddress, accountStatus, allowedNetwork, allowList, blockList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a mail user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

