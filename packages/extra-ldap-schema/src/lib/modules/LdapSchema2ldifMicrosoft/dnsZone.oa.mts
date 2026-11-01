/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { id_oc_dnsZone } from "../LdapSchema2ldifMicrosoft/id-oc-dnsZone.va.mjs";

import { dnsAllowDynamic } from "../MSUser/dnsAllowDynamic.oa.mjs";
import { dnsAllowXFR } from "../MSUser/dnsAllowXFR.oa.mjs";
import { dnsSecureSecondaries } from "../MSUser/dnsSecureSecondaries.oa.mjs";
import { dnsNotifySecondaries } from "../MSUser/dnsNotifySecondaries.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { dNSProperty } from "../MSUser/dNSProperty.oa.mjs";
/**
 * @summary dnsZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsZone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dc }
 *   MAY CONTAIN               { dnsAllowDynamic
 *                               | dnsAllowXFR
 *                               | dnsSecureSecondaries
 *                               | dnsNotifySecondaries
 *                               | managedBy
 *                               | dNSProperty }
 *   LDAP-NAME                 {"dnsZone"}
 *   ID                        id-oc-dnsZone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnsZone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dc, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dnsAllowDynamic, dnsAllowXFR, dnsSecureSecondaries, dnsNotifySecondaries, managedBy, dNSProperty, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dnsZone" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dnsZone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
