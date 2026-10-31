/* eslint-disable */
import { memberURL } from "../DynGroup/memberURL.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mailList } from "../LdapExcisionMail/id-oc-mailList.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { accountStatus } from "./accountStatus.oa.mjs";
import { allowList } from "./allowList.oa.mjs";
import { blockList } from "./blockList.oa.mjs";
import { mailSetting } from "./mailSetting.oa.mjs";

/**
 * @summary mailList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { description
 *                               | memberURL
 *                               | accountStatus
 *                               | blockList
 *                               | allowList
 *                               | mailSetting }
 *   LDAP-NAME                 {"mailList"}
 *   LDAP-DESC                 "Abstraction of a mailing list"
 *   ID                        id-oc-mailList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailList: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, memberURL, accountStatus, blockList, allowList, mailSetting] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailList"],
    "&ldapDesc": "Abstraction of a mailing list" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
