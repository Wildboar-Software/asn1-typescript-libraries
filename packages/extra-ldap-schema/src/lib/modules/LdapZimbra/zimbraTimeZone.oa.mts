/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraTimeZone } from "../LdapZimbra/id-oc-zimbraTimeZone.va.mjs";
import { zimbraTimeZoneStandardDtStart } from "../LdapZimbra/zimbraTimeZoneStandardDtStart.oa.mjs";
import { zimbraTimeZoneStandardOffset } from "../LdapZimbra/zimbraTimeZoneStandardOffset.oa.mjs";
import { zimbraTimeZoneDaylightDtStart } from "../LdapZimbra/zimbraTimeZoneDaylightDtStart.oa.mjs";
import { zimbraTimeZoneDaylightOffset } from "../LdapZimbra/zimbraTimeZoneDaylightOffset.oa.mjs";
import { zimbraTimeZoneDaylightRRule } from "../LdapZimbra/zimbraTimeZoneDaylightRRule.oa.mjs";
import { zimbraTimeZoneStandardRRule } from "../LdapZimbra/zimbraTimeZoneStandardRRule.oa.mjs";


/**
 * @summary zimbraTimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraTimeZone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { zimbraTimeZoneStandardDtStart
 *                               | zimbraTimeZoneStandardOffset }
 *   MAY CONTAIN               { zimbraTimeZoneDaylightDtStart
 *                               | zimbraTimeZoneDaylightOffset
 *                               | zimbraTimeZoneDaylightRRule
 *                               | zimbraTimeZoneStandardRRule }
 *   LDAP-NAME                 {"zimbraTimeZone"}
 *   LDAP-DESC                 "Time Zone info"
 *   ID                        id-oc-zimbraTimeZone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraTimeZone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraTimeZoneStandardDtStart, zimbraTimeZoneStandardOffset, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraTimeZoneDaylightDtStart, zimbraTimeZoneDaylightOffset, zimbraTimeZoneDaylightRRule, zimbraTimeZoneStandardRRule, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraTimeZone" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Time Zone info" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraTimeZone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

