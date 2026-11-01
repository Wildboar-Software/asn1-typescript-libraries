/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { dKIMSelector } from "../LdapOpendkim/dKIMSelector.oa.mjs";
import { id_oc_dKIM } from "../LdapOpendkim/id-oc-dKIM.va.mjs";

import { dKIMIdentity } from "../LdapOpendkim/dKIMIdentity.oa.mjs";
import { dKIMDomain } from "../LdapOpendkim/dKIMDomain.oa.mjs";
import { dKIMKey } from "../LdapOpendkim/dKIMKey.oa.mjs";
/**
 * @summary dKIM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dKIM OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { dKIMSelector }
 *   MAY CONTAIN               { dKIMIdentity
 *                               | dKIMDomain
 *                               | dKIMKey }
 *   LDAP-NAME                 {"DKIM"}
 *   LDAP-DESC                 "DKIM Selector and Key container"
 *   ID                        id-oc-dKIM }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dKIM: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dKIMSelector, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dKIMIdentity, dKIMDomain, dKIMKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "DKIM" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DKIM Selector and Key container" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dKIM /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
