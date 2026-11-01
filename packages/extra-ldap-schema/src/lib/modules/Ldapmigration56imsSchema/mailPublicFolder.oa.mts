/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mailFolderName } from "../Ldapmigration56imsSchema/mailFolderName.oa.mjs";
import { id_oc_mailPublicFolder } from "../Ldapmigration56imsSchema/id-oc-mailPublicFolder.va.mjs";
import { mailMessageStore } from "../QMailSchema/mailMessageStore.oa.mjs";
import { mailFolderDefaultAcl } from "../Ldapmigration56imsSchema/mailFolderDefaultAcl.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailQuota } from "../LdapDbmail/mailQuota.oa.mjs";
import { mailMsgQuota } from "../Ldapmigration56imsSchema/mailMsgQuota.oa.mjs";


/**
 * @summary mailPublicFolder
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailPublicFolder OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mailFolderName }
 *   MAY CONTAIN               { mailMessageStore
 *                               | mailFolderDefaultAcl
 *                               | mailDeliveryOption
 *                               | mailQuota
 *                               | mailMsgQuota }
 *   LDAP-NAME                 {"mailPublicFolder"}
 *   LDAP-DESC                 "structural class for defining public folders"
 *   ID                        id-oc-mailPublicFolder }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailPublicFolder: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mailFolderName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailMessageStore, mailFolderDefaultAcl, mailDeliveryOption, mailQuota, mailMsgQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailPublicFolder" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "structural class for defining public folders" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailPublicFolder /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

