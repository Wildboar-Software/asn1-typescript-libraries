/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Service } from "../LdapGlue506Service/gLUE2Service.oa.mjs";
// export { id_oc_gLUE2ComputingService } from "../LdapGlue601ComputingService/id-oc-gLUE2ComputingService.va.mjs";


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
const gLUE2ComputingService: OBJECT_CLASS = undefined;

/* eslint-enable */
