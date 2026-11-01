/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iPlanetPreferences } from "../Ldapmigration20subscriber/id-oc-iPlanetPreferences.va.mjs";

import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { preferredLocale } from "../Ldapmigration20subscriber/preferredLocale.oa.mjs";
import { preferredTimeZone } from "../Ldapmigration20subscriber/preferredTimeZone.oa.mjs";
/**
 * @summary iPlanetPreferences
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPlanetPreferences OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { preferredLanguage
 *                               | preferredLocale
 *                               | preferredTimeZone }
 *   LDAP-NAME                 {"iPlanetPreferences"}
 *   ID                        id-oc-iPlanetPreferences }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iPlanetPreferences: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ preferredLanguage, preferredLocale, preferredTimeZone, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iPlanetPreferences" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iPlanetPreferences /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
