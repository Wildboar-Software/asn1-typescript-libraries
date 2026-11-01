/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { id_oc_dnsConfiguration } from "../DNSFramework/id-oc-dnsConfiguration.va.mjs";

import { DNSConfigurationAttributes } from "../DNSFramework/DNSConfigurationAttributes.osa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary dnsConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsConfiguration OBJECT-CLASS ::= {
 *     SUBCLASS OF        {top}
 *     KIND            auxiliary
 *     MAY CONTAIN        {DNSConfigurationAttributes}
 *     LDAP-NAME        {"dnsConfiguration"}
 *     LDAP-DESC        "Something configured with DNS parameters"
 *     ID                id-oc-dnsConfiguration
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnsConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ...DNSConfigurationAttributes, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dnsConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Something configured with DNS parameters" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dnsConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
