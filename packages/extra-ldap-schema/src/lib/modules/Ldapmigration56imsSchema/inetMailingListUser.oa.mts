/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_inetMailingListUser } from "../Ldapmigration56imsSchema/id-oc-inetMailingListUser.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mluserJoinDate } from "./mluserJoinDate.oa.mjs";
import { mluserJoinIPAddress } from "./mluserJoinIPAddress.oa.mjs";
import { mluserPassword } from "./mluserPassword.oa.mjs";
import { mluserUniqueId } from "./mluserUniqueId.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail, mluserUniqueId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mluserPassword, commonName, mluserJoinDate, mluserJoinIPAddress] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetMailingListUser"],
    "&ldapDesc": "auxiliary class for mailing list users" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailingListUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
