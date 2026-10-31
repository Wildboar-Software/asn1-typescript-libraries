/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_externalUser } from "../LdapExcisionMail/id-oc-externalUser.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { accountStatus } from "./accountStatus.oa.mjs";
import { mailSetting } from "./mailSetting.oa.mjs";

/**
 * @summary externalUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * externalUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | surname
 *                               | mailSetting
 *                               | accountStatus }
 *   LDAP-NAME                 {"externalUser"}
 *   LDAP-DESC                 "Abstraction of an external user"
 *   ID                        id-oc-externalUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const externalUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, givenName, surname, mailSetting, accountStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["externalUser"],
    "&ldapDesc": "Abstraction of an external user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_externalUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
