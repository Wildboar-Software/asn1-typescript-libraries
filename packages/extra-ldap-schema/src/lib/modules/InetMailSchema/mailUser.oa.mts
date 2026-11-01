/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { id_oc_mailUser } from "../InetMailSchema/id-oc-mailUser.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mailbox } from "../InetMailSchema/mailbox.oa.mjs";
import { maildest } from "../InetMailSchema/maildest.oa.mjs";
import { mailaccess } from "../InetMailSchema/mailaccess.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { maildrop } from "../InetMailSchema/maildrop.oa.mjs";
/**
 * @summary mailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailUser OBJECT-CLASS ::= {
 *     KIND            auxiliary
 *     MUST CONTAIN    {uid | mail | maildrop}
 *     MAY CONTAIN     {commonName | mailbox | maildest | mailaccess}
 *     LDAP-NAME       {"mailUser"}
 *     LDAP-DESC       "E-Mail User"
 *     ID              id-oc-mailUser
 * }
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
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, mail, maildrop, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, mailbox, maildest, mailaccess, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "E-Mail User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
