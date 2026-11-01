/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_mailList } from "../LdapExcisionMail/id-oc-mailList.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { memberURL } from "../DynGroup/memberURL.oa.mjs";
import { accountStatus } from "../LdapExcisionMail/accountStatus.oa.mjs";
import { blockList } from "../LdapExcisionMail/blockList.oa.mjs";
import { allowList } from "../LdapExcisionMail/allowList.oa.mjs";
import { mailSetting } from "../LdapExcisionMail/mailSetting.oa.mjs";
// export { id_oc_mailList } from "../LdapExcisionMail/id-oc-mailList.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, memberURL, accountStatus, blockList, allowList, mailSetting, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailList" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a mailing list" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
