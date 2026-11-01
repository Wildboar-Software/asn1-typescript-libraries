/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonAccount } from "../LdapGosaCoreGofon/id-oc-goFonAccount.va.mjs";

import { goFonFormat } from "../LdapGosaCoreGofon/goFonFormat.oa.mjs";
import { goFonForwarding } from "../LdapGosaCoreGofon/goFonForwarding.oa.mjs";
import { goFonHardware } from "../LdapGosaCoreGofon/goFonHardware.oa.mjs";
import { goFonPIN } from "../LdapGosaCoreGofon/goFonPIN.oa.mjs";
import { goFonVoicemailPIN } from "../LdapGosaCoreGofon/goFonVoicemailPIN.oa.mjs";
import { goFonMacro } from "../LdapGosaCoreGofon/goFonMacro.oa.mjs";
import { goFonHomeServer } from "../LdapGosaCoreGofon/goFonHomeServer.oa.mjs";
import { goFonDeliveryMode } from "../LdapGosaCoreGofon/goFonDeliveryMode.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
/**
 * @summary goFonAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { goFonDeliveryMode
 *                               | telephoneNumber
 *                               | uid }
 *   MAY CONTAIN               { goFonFormat
 *                               | goFonForwarding
 *                               | goFonHardware
 *                               | goFonPIN
 *                               | goFonVoicemailPIN
 *                               | goFonMacro
 *                               | goFonHomeServer }
 *   LDAP-NAME                 {"goFonAccount"}
 *   LDAP-DESC                 "GOFon Account objectclass (v2.7)"
 *   ID                        id-oc-goFonAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ goFonDeliveryMode, telephoneNumber, uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ goFonFormat, goFonForwarding, goFonHardware, goFonPIN, goFonVoicemailPIN, goFonMacro, goFonHomeServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFonAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOFon Account objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
