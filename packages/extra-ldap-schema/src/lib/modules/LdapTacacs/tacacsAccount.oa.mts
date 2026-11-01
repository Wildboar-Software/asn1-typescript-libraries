/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_tacacsAccount } from "../LdapTacacs/id-oc-tacacsAccount.va.mjs";

import { tacacsClient } from "../LdapTacacs/tacacsClient.oa.mjs";
import { tacacsMember } from "../LdapTacacs/tacacsMember.oa.mjs";
import { tacacsProfile } from "../LdapTacacs/tacacsProfile.oa.mjs";
import { tacacsFlag } from "../LdapTacacs/tacacsFlag.oa.mjs";
/**
 * @summary tacacsAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tacacsAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { tacacsClient
 *                               | tacacsMember
 *                               | tacacsProfile
 *                               | tacacsFlag }
 *   LDAP-NAME                 {"tacacsAccount"}
 *   LDAP-DESC                 "Tacacs user object"
 *   ID                        id-oc-tacacsAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tacacsAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ tacacsClient, tacacsMember, tacacsProfile, tacacsFlag, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tacacsAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Tacacs user object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tacacsAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
