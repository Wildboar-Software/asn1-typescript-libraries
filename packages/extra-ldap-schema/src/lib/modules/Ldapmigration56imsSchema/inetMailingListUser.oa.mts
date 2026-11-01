/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetMailingListUser } from "../Ldapmigration56imsSchema/id-oc-inetMailingListUser.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mluserUniqueId } from "../Ldapmigration56imsSchema/mluserUniqueId.oa.mjs";
import { mluserPassword } from "../Ldapmigration56imsSchema/mluserPassword.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mluserJoinDate } from "../Ldapmigration56imsSchema/mluserJoinDate.oa.mjs";
import { mluserJoinIPAddress } from "../Ldapmigration56imsSchema/mluserJoinIPAddress.oa.mjs";


/**
 * @summary inetMailingListUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailingListUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | mluserUniqueId }
 *   MAY CONTAIN               { mluserPassword
 *                               | commonName
 *                               | mluserJoinDate
 *                               | mluserJoinIPAddress }
 *   LDAP-NAME                 {"inetMailingListUser"}
 *   LDAP-DESC                 "auxiliary class for mailing list users"
 *   ID                        id-oc-inetMailingListUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailingListUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, mluserUniqueId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mluserPassword, commonName, mluserJoinDate, mluserJoinIPAddress, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailingListUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for mailing list users" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailingListUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

