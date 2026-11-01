/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_marathonAccess } from "../LdapMarathon/id-oc-marathonAccess.va.mjs";

import { marathonAccessRule } from "../LdapMarathon/marathonAccessRule.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
/**
 * @summary marathonAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * marathonAccess OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { marathonAccessRule
 *                               | commonName }
 *   LDAP-NAME                 {"marathonAccess"}
 *   LDAP-DESC                 "marathon-ldap group with permissions"
 *   ID                        id-oc-marathonAccess }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const marathonAccess: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ marathonAccessRule, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "marathonAccess" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "marathon-ldap group with permissions" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_marathonAccess /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
