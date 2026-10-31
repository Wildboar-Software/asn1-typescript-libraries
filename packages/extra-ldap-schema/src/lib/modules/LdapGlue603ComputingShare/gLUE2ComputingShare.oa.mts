/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
// export { gLUE2ComputingShareServingState } from "../LdapGlue603ComputingShare/gLUE2ComputingShareServingState.oa.mjs";
// export { id_oc_gLUE2ComputingShare } from "../LdapGlue603ComputingShare/id-oc-gLUE2ComputingShare.va.mjs";


/**
 * @summary gLUE2ComputingShare
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingShare OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Share }
 *   MUST CONTAIN              { gLUE2ComputingShareServingState }
 *   MAY CONTAIN               { gLUE2ComputingShareMappingQueue
 *                               | gLUE2ComputingShareMaxWallTime
 *                               | gLUE2ComputingShareMaxMultiSlotWallTime
 *                               | gLUE2ComputingShareMinWallTime
 *                               | gLUE2ComputingShareDefaultWallTime
 *                               | gLUE2ComputingShareMaxCPUTime
 *                               | gLUE2ComputingShareMaxTotalCPUTime
 *                               | gLUE2ComputingShareMinCPUTime
 *                               | gLUE2ComputingShareDefaultCPUTime
 *                               | gLUE2ComputingShareMaxTotalJobs
 *                               | gLUE2ComputingShareMaxRunningJobs
 *                               | gLUE2ComputingShareMaxWaitingJobs
 *                               | gLUE2ComputingShareMaxPreLRMSWaitingJobs
 *                               | gLUE2ComputingShareMaxUserRunningJobs
 *                               | gLUE2ComputingShareMaxSlotsPerJob
 *                               | gLUE2ComputingShareMaxStageInStreams
 *                               | gLUE2ComputingShareMaxStageOutStreams
 *                               | gLUE2ComputingShareSchedulingPolicy
 *                               | gLUE2ComputingShareMaxMainMemory
 *                               | gLUE2ComputingShareGuaranteedMainMemory
 *                               | gLUE2ComputingShareMaxVirtualMemory
 *                               | gLUE2ComputingShareGuaranteedVirtualMemory
 *                               | gLUE2ComputingShareMaxDiskSpace
 *                               | gLUE2ComputingShareDefaultStorageService
 *                               | gLUE2ComputingSharePreemption
 *                               | gLUE2ComputingShareTotalJobs
 *                               | gLUE2ComputingShareRunningJobs
 *                               | gLUE2ComputingShareLocalRunningJobs
 *                               | gLUE2ComputingShareWaitingJobs
 *                               | gLUE2ComputingShareLocalWaitingJobs
 *                               | gLUE2ComputingShareSuspendedJobs
 *                               | gLUE2ComputingShareLocalSuspendedJobs
 *                               | gLUE2ComputingShareStagingJobs
 *                               | gLUE2ComputingShareLocalStagingJobs
 *                               | gLUE2ComputingSharePreLRMSWaitingJobs
 *                               | gLUE2ComputingShareEstimatedAverageWaitingTime
 *                               | gLUE2ComputingShareEstimatedWorstWaitingTime
 *                               | gLUE2ComputingShareFreeSlots
 *                               | gLUE2ComputingShareFreeSlotsWithDuration
 *                               | gLUE2ComputingShareUsedSlots
 *                               | gLUE2ComputingShareRequestedSlots
 *                               | gLUE2ComputingShareReservationPolicy
 *                               | gLUE2ComputingShareTag
 *                               | gLUE2ComputingShareComputingEndpointForeignKey
 *                               | gLUE2ComputingShareExecutionEnvironmentForeignKey
 *                               | gLUE2ComputingShareComputingServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2ComputingShare"}
 *   LDAP-DESC                 "A utilization target for a set of execution environments defined by a set of configuration parameters and characterized by status information"
 *   ID                        id-oc-gLUE2ComputingShare }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingShare: OBJECT_CLASS = undefined;

/* eslint-enable */
