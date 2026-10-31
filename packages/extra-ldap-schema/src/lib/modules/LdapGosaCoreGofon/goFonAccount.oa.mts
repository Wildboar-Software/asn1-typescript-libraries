/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonAccount } from "../LdapGosaCoreGofon/id-oc-goFonAccount.va.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { goFonDeliveryMode } from "./goFonDeliveryMode.oa.mjs";
import { goFonFormat } from "./goFonFormat.oa.mjs";
import { goFonForwarding } from "./goFonForwarding.oa.mjs";
import { goFonHardware } from "./goFonHardware.oa.mjs";
import { goFonHomeServer } from "./goFonHomeServer.oa.mjs";
import { goFonMacro } from "./goFonMacro.oa.mjs";
import { goFonPIN } from "./goFonPIN.oa.mjs";
import { goFonVoicemailPIN } from "./goFonVoicemailPIN.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [goFonDeliveryMode, telephoneNumber, uid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goFonFormat, goFonForwarding, goFonHardware, goFonPIN, goFonVoicemailPIN, goFonMacro, goFonHomeServer] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFonAccount"],
    "&ldapDesc": "GOFon Account objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
