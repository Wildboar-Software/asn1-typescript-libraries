/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Service } from "../LdapGlue506Service/gLUE2Service.oa.mjs";
import { id_oc_gLUE2ComputingService } from "../LdapGlue601ComputingService/id-oc-gLUE2ComputingService.va.mjs";
import { gLUE2ComputingServiceTotalJobs } from "../LdapGlue601ComputingService/gLUE2ComputingServiceTotalJobs.oa.mjs";
import { gLUE2ComputingServiceRunningJobs } from "../LdapGlue601ComputingService/gLUE2ComputingServiceRunningJobs.oa.mjs";
import { gLUE2ComputingServiceWaitingJobs } from "../LdapGlue601ComputingService/gLUE2ComputingServiceWaitingJobs.oa.mjs";
import { gLUE2ComputingServiceStagingJobs } from "../LdapGlue601ComputingService/gLUE2ComputingServiceStagingJobs.oa.mjs";
import { gLUE2ComputingServiceSuspendedJobs } from "../LdapGlue601ComputingService/gLUE2ComputingServiceSuspendedJobs.oa.mjs";
import { gLUE2ComputingServicePreLRMSWaitingJobs } from "../LdapGlue601ComputingService/gLUE2ComputingServicePreLRMSWaitingJobs.oa.mjs";


/**
 * @summary gLUE2ComputingService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Service }
 *   MAY CONTAIN               { gLUE2ComputingServiceTotalJobs
 *                               | gLUE2ComputingServiceRunningJobs
 *                               | gLUE2ComputingServiceWaitingJobs
 *                               | gLUE2ComputingServiceStagingJobs
 *                               | gLUE2ComputingServiceSuspendedJobs
 *                               | gLUE2ComputingServicePreLRMSWaitingJobs }
 *   LDAP-NAME                 {"GLUE2ComputingService"}
 *   LDAP-DESC                 "The computing service is autonomous and denotes a weak aggregation among computing endpoints, the underlying computing managers and related execution environments, and the defined computing shares. The computing service enables to identify the whole set of entities providing the computing functionality with a persistent name."
 *   ID                        id-oc-gLUE2ComputingService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Service, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ComputingServiceTotalJobs, gLUE2ComputingServiceRunningJobs, gLUE2ComputingServiceWaitingJobs, gLUE2ComputingServiceStagingJobs, gLUE2ComputingServiceSuspendedJobs, gLUE2ComputingServicePreLRMSWaitingJobs, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ComputingService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The computing service is autonomous and denotes a weak aggregation among computing endpoints, the underlying computing managers and related execution environments, and the defined computing shares. The computing service enables to identify the whole set of entities providing the computing functionality with a persistent name." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

