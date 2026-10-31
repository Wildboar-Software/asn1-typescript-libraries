/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Endpoint } from "../LdapGlue507Endpoint/gLUE2Endpoint.oa.mjs";
import { id_oc_gLUE2ComputingEndpoint } from "../LdapGlue602ComputingEndpoint/id-oc-gLUE2ComputingEndpoint.va.mjs";
import { gLUE2ComputingEndpointComputingServiceForeignKey } from "./gLUE2ComputingEndpointComputingServiceForeignKey.oa.mjs";
import { gLUE2ComputingEndpointJobDescription } from "./gLUE2ComputingEndpointJobDescription.oa.mjs";
import { gLUE2ComputingEndpointPreLRMSWaitingJobs } from "./gLUE2ComputingEndpointPreLRMSWaitingJobs.oa.mjs";
import { gLUE2ComputingEndpointRunningJobs } from "./gLUE2ComputingEndpointRunningJobs.oa.mjs";
import { gLUE2ComputingEndpointStaging } from "./gLUE2ComputingEndpointStaging.oa.mjs";
import { gLUE2ComputingEndpointStagingJobs } from "./gLUE2ComputingEndpointStagingJobs.oa.mjs";
import { gLUE2ComputingEndpointSuspendedJobs } from "./gLUE2ComputingEndpointSuspendedJobs.oa.mjs";
import { gLUE2ComputingEndpointTotalJobs } from "./gLUE2ComputingEndpointTotalJobs.oa.mjs";
import { gLUE2ComputingEndpointWaitingJobs } from "./gLUE2ComputingEndpointWaitingJobs.oa.mjs";

/**
 * @summary gLUE2ComputingEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingEndpoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Endpoint }
 *   MAY CONTAIN               { gLUE2ComputingEndpointStaging
 *                               | gLUE2ComputingEndpointJobDescription
 *                               | gLUE2ComputingEndpointTotalJobs
 *                               | gLUE2ComputingEndpointRunningJobs
 *                               | gLUE2ComputingEndpointWaitingJobs
 *                               | gLUE2ComputingEndpointStagingJobs
 *                               | gLUE2ComputingEndpointSuspendedJobs
 *                               | gLUE2ComputingEndpointPreLRMSWaitingJobs
 *                               | gLUE2ComputingEndpointComputingServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2ComputingEndpoint"}
 *   LDAP-DESC                 "Endpoint for creating, monitoring, and controlling computational activities called jobs; it can be used to expose also complementary capabilities (e.g., reservation, proxy manipulation)"
 *   ID                        id-oc-gLUE2ComputingEndpoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingEndpoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Endpoint] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ComputingEndpointStaging, gLUE2ComputingEndpointJobDescription, gLUE2ComputingEndpointTotalJobs, gLUE2ComputingEndpointRunningJobs, gLUE2ComputingEndpointWaitingJobs, gLUE2ComputingEndpointStagingJobs, gLUE2ComputingEndpointSuspendedJobs, gLUE2ComputingEndpointPreLRMSWaitingJobs, gLUE2ComputingEndpointComputingServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ComputingEndpoint"],
    "&ldapDesc": "Endpoint for creating, monitoring, and controlling computational activities called jobs; it can be used to expose also complementary capabilities (e.g., reservation, proxy manipulation)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingEndpoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
