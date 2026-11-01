/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Endpoint } from "../LdapGlue507Endpoint/gLUE2Endpoint.oa.mjs";
// export { gLUE2Endpoint } from "../LdapGlue507Endpoint/gLUE2Endpoint.oa.mjs";
import { id_oc_gLUE2ComputingEndpoint } from "../LdapGlue602ComputingEndpoint/id-oc-gLUE2ComputingEndpoint.va.mjs";
import { gLUE2ComputingEndpointStaging } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointStaging.oa.mjs";
import { gLUE2ComputingEndpointJobDescription } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointJobDescription.oa.mjs";
import { gLUE2ComputingEndpointTotalJobs } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointTotalJobs.oa.mjs";
import { gLUE2ComputingEndpointRunningJobs } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointRunningJobs.oa.mjs";
import { gLUE2ComputingEndpointWaitingJobs } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointWaitingJobs.oa.mjs";
import { gLUE2ComputingEndpointStagingJobs } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointStagingJobs.oa.mjs";
import { gLUE2ComputingEndpointSuspendedJobs } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointSuspendedJobs.oa.mjs";
import { gLUE2ComputingEndpointPreLRMSWaitingJobs } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointPreLRMSWaitingJobs.oa.mjs";
import { gLUE2ComputingEndpointComputingServiceForeignKey } from "../LdapGlue602ComputingEndpoint/gLUE2ComputingEndpointComputingServiceForeignKey.oa.mjs";
// export { id_oc_gLUE2ComputingEndpoint } from "../LdapGlue602ComputingEndpoint/id-oc-gLUE2ComputingEndpoint.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Endpoint, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ComputingEndpointStaging, gLUE2ComputingEndpointJobDescription, gLUE2ComputingEndpointTotalJobs, gLUE2ComputingEndpointRunningJobs, gLUE2ComputingEndpointWaitingJobs, gLUE2ComputingEndpointStagingJobs, gLUE2ComputingEndpointSuspendedJobs, gLUE2ComputingEndpointPreLRMSWaitingJobs, gLUE2ComputingEndpointComputingServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ComputingEndpoint" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Endpoint for creating, monitoring, and controlling computational activities called jobs; it can be used to expose also complementary capabilities (e.g., reservation, proxy manipulation)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingEndpoint /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
