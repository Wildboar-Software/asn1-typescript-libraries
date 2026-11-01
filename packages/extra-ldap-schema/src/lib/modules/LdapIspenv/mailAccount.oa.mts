/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mailAccount } from "../LdapIspenv/id-oc-mailAccount.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { maildropPlace } from "../LdapIspenv/maildropPlace.oa.mjs";
import { mailForward } from "../LdapIspenv/mailForward.oa.mjs";
import { mailHost } from "../LdapIspenv/mailHost.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";


/**
 * @summary mailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | userPassword
 *                               | maildropPlace
 *                               | mail }
 *   MAY CONTAIN               { mailForward
 *                               | mailHost }
 *   LDAP-NAME                 {"mailAccount"}
 *   LDAP-DESC                 "Emailaccount, associated with a user"
 *   ID                        id-oc-mailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, userPassword, maildropPlace, mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailForward, mailHost, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Emailaccount, associated with a user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

