/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nabUser } from "../Ldapmigration60iplanetCalendar/id-oc-nabUser.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { nabStatus } from "../Ldapmigration60iplanetCalendar/nabStatus.oa.mjs";
import { nabStore } from "../Ldapmigration60iplanetCalendar/nabStore.oa.mjs";
/**
 * @summary nabUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nabUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | mail
 *                               | mailAlternateAddress
 *                               | preferredLanguage
 *                               | surname
 *                               | uid
 *                               | userPassword
 *                               | nabStatus
 *                               | nabStore }
 *   LDAP-NAME                 {"nabUser"}
 *   LDAP-DESC                 "NAB Entry Object Class"
 *   ID                        id-oc-nabUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nabUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, givenName, mail, mailAlternateAddress, preferredLanguage, surname, uid, userPassword, nabStatus, nabStore, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nabUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "NAB Entry Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nabUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
