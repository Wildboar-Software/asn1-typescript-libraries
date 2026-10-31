/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mailAlias } from "../LdapExcisionMail/id-oc-mailAlias.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { accountStatus } from "./accountStatus.oa.mjs";
import { mailSetting } from "./mailSetting.oa.mjs";

/**
 * @summary mailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { mailSetting
 *                               | accountStatus }
 *   LDAP-NAME                 {"mailAlias"}
 *   LDAP-DESC                 "Abstraction of a mail alias"
 *   ID                        id-oc-mailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailSetting, accountStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailAlias"],
    "&ldapDesc": "Abstraction of a mail alias" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailAlias /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
