/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Endpoint } from "../LdapGlue507Endpoint/gLUE2Endpoint.oa.mjs";
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
const gLUE2ComputingEndpoint: OBJECT_CLASS = undefined;

/* eslint-enable */
