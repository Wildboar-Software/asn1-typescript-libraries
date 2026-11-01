/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_courierMailAccount } from "../LdapSchema2ldifCourier/id-oc-courierMailAccount.va.mjs";

import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { mailbox } from "../InetMailSchema/mailbox.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gecos } from "../NIS/gecos.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { quota } from "../LdapSchema2ldifCourier/quota.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { clearPassword } from "../LdapSchema2ldifCourier/clearPassword.oa.mjs";
import { defaultdelivery } from "../LdapSchema2ldifCourier/defaultdelivery.oa.mjs";
import { disableimap } from "../LdapSchema2ldifCourier/disableimap.oa.mjs";
import { disablepop3 } from "../LdapSchema2ldifCourier/disablepop3.oa.mjs";
import { disablewebmail } from "../LdapSchema2ldifCourier/disablewebmail.oa.mjs";
import { sharedgroup } from "../LdapSchema2ldifCourier/sharedgroup.oa.mjs";
import { disableshared } from "../LdapSchema2ldifCourier/disableshared.oa.mjs";
import { mailhost } from "../LdapSchema2ldifCourier/mailhost.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
/**
 * @summary courierMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * courierMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | homeDirectory }
 *   MAY CONTAIN               { uidNumber
 *                               | gidNumber
 *                               | mailbox
 *                               | uid
 *                               | commonName
 *                               | gecos
 *                               | description
 *                               | loginShell
 *                               | quota
 *                               | userPassword
 *                               | clearPassword
 *                               | defaultdelivery
 *                               | disableimap
 *                               | disablepop3
 *                               | disablewebmail
 *                               | sharedgroup
 *                               | disableshared
 *                               | mailhost }
 *   LDAP-NAME                 {"CourierMailAccount"}
 *   LDAP-DESC                 "Mail account object as used by the Courier mail server"
 *   ID                        id-oc-courierMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const courierMailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, homeDirectory, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uidNumber, gidNumber, mailbox, uid, commonName, gecos, description, loginShell, quota, userPassword, clearPassword, defaultdelivery, disableimap, disablepop3, disablewebmail, sharedgroup, disableshared, mailhost, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "CourierMailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mail account object as used by the Courier mail server" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_courierMailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
