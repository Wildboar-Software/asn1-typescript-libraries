/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuOxtrustStat } from "../LdapOx/id-oc-gluuOxtrustStat.va.mjs";

import { gluuFreeDiskSpace } from "../LdapOx/gluuFreeDiskSpace.oa.mjs";
import { gluuFreeMemory } from "../LdapOx/gluuFreeMemory.oa.mjs";
import { gluuFreeSwap } from "../LdapOx/gluuFreeSwap.oa.mjs";
import { gluuGroupCount } from "../LdapOx/gluuGroupCount.oa.mjs";
import { gluuIpAddress } from "../LdapOx/gluuIpAddress.oa.mjs";
import { gluuLoadAvg } from "../LdapOx/gluuLoadAvg.oa.mjs";
import { gluuPersonCount } from "../LdapOx/gluuPersonCount.oa.mjs";
import { gluuSystemUptime } from "../LdapOx/gluuSystemUptime.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
/**
 * @summary gluuOxtrustStat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuOxtrustStat OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { gluuFreeDiskSpace
 *                               | gluuFreeMemory
 *                               | gluuFreeSwap
 *                               | gluuGroupCount
 *                               | gluuIpAddress
 *                               | gluuLoadAvg
 *                               | gluuPersonCount
 *                               | gluuSystemUptime
 *                               | uniqueIdentifier }
 *   LDAP-NAME                 {"gluuOxtrustStat"}
 *   ID                        id-oc-gluuOxtrustStat }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuOxtrustStat: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gluuFreeDiskSpace, gluuFreeMemory, gluuFreeSwap, gluuGroupCount, gluuIpAddress, gluuLoadAvg, gluuPersonCount, gluuSystemUptime, uniqueIdentifier, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuOxtrustStat" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuOxtrustStat /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
