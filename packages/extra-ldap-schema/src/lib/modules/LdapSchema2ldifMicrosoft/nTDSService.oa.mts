/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTDSService } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSService.va.mjs";

import { tombstoneLifetime } from "../MSUser/tombstoneLifetime.oa.mjs";
import { dSHeuristics } from "../MSUser/dSHeuristics.oa.mjs";
import { garbageCollPeriod } from "../MSUser/garbageCollPeriod.oa.mjs";
import { replTopologyStayOfExecution } from "../MSUser/replTopologyStayOfExecution.oa.mjs";
import { sPNMappings } from "../MSUser/sPNMappings.oa.mjs";
/**
 * @summary nTDSService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { tombstoneLifetime
 *                               | dSHeuristics
 *                               | garbageCollPeriod
 *                               | replTopologyStayOfExecution
 *                               | sPNMappings }
 *   LDAP-NAME                 {"nTDSService"}
 *   ID                        id-oc-nTDSService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ tombstoneLifetime, dSHeuristics, garbageCollPeriod, replTopologyStayOfExecution, sPNMappings, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTDSService" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTDSService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
