/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_mailAlias } from "../LdapExcisionMail/id-oc-mailAlias.va.mjs";
import { mailSetting } from "../LdapExcisionMail/mailSetting.oa.mjs";
import { accountStatus } from "../LdapExcisionMail/accountStatus.oa.mjs";
// export { id_oc_mailAlias } from "../LdapExcisionMail/id-oc-mailAlias.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailSetting, accountStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a mail alias" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
