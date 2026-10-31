/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
import { gLUE2ComputingShareServingState } from "../LdapGlue603ComputingShare/gLUE2ComputingShareServingState.oa.mjs";
import { id_oc_gLUE2ComputingShare } from "../LdapGlue603ComputingShare/id-oc-gLUE2ComputingShare.va.mjs";
import { gLUE2ComputingShareComputingEndpointForeignKey } from "./gLUE2ComputingShareComputingEndpointForeignKey.oa.mjs";
import { gLUE2ComputingShareComputingServiceForeignKey } from "./gLUE2ComputingShareComputingServiceForeignKey.oa.mjs";
import { gLUE2ComputingShareDefaultCPUTime } from "./gLUE2ComputingShareDefaultCPUTime.oa.mjs";
import { gLUE2ComputingShareDefaultStorageService } from "./gLUE2ComputingShareDefaultStorageService.oa.mjs";
import { gLUE2ComputingShareDefaultWallTime } from "./gLUE2ComputingShareDefaultWallTime.oa.mjs";
import { gLUE2ComputingShareEstimatedAverageWaitingTime } from "./gLUE2ComputingShareEstimatedAverageWaitingTime.oa.mjs";
import { gLUE2ComputingShareEstimatedWorstWaitingTime } from "./gLUE2ComputingShareEstimatedWorstWaitingTime.oa.mjs";
import { gLUE2ComputingShareExecutionEnvironmentForeignKey } from "./gLUE2ComputingShareExecutionEnvironmentForeignKey.oa.mjs";
import { gLUE2ComputingShareFreeSlots } from "./gLUE2ComputingShareFreeSlots.oa.mjs";
import { gLUE2ComputingShareFreeSlotsWithDuration } from "./gLUE2ComputingShareFreeSlotsWithDuration.oa.mjs";
import { gLUE2ComputingShareGuaranteedMainMemory } from "./gLUE2ComputingShareGuaranteedMainMemory.oa.mjs";
import { gLUE2ComputingShareGuaranteedVirtualMemory } from "./gLUE2ComputingShareGuaranteedVirtualMemory.oa.mjs";
import { gLUE2ComputingShareLocalRunningJobs } from "./gLUE2ComputingShareLocalRunningJobs.oa.mjs";
import { gLUE2ComputingShareLocalStagingJobs } from "./gLUE2ComputingShareLocalStagingJobs.oa.mjs";
import { gLUE2ComputingShareLocalSuspendedJobs } from "./gLUE2ComputingShareLocalSuspendedJobs.oa.mjs";
import { gLUE2ComputingShareLocalWaitingJobs } from "./gLUE2ComputingShareLocalWaitingJobs.oa.mjs";
import { gLUE2ComputingShareMappingQueue } from "./gLUE2ComputingShareMappingQueue.oa.mjs";
import { gLUE2ComputingShareMaxCPUTime } from "./gLUE2ComputingShareMaxCPUTime.oa.mjs";
import { gLUE2ComputingShareMaxDiskSpace } from "./gLUE2ComputingShareMaxDiskSpace.oa.mjs";
import { gLUE2ComputingShareMaxMainMemory } from "./gLUE2ComputingShareMaxMainMemory.oa.mjs";
import { gLUE2ComputingShareMaxMultiSlotWallTime } from "./gLUE2ComputingShareMaxMultiSlotWallTime.oa.mjs";
import { gLUE2ComputingShareMaxPreLRMSWaitingJobs } from "./gLUE2ComputingShareMaxPreLRMSWaitingJobs.oa.mjs";
import { gLUE2ComputingShareMaxRunningJobs } from "./gLUE2ComputingShareMaxRunningJobs.oa.mjs";
import { gLUE2ComputingShareMaxSlotsPerJob } from "./gLUE2ComputingShareMaxSlotsPerJob.oa.mjs";
import { gLUE2ComputingShareMaxStageInStreams } from "./gLUE2ComputingShareMaxStageInStreams.oa.mjs";
import { gLUE2ComputingShareMaxStageOutStreams } from "./gLUE2ComputingShareMaxStageOutStreams.oa.mjs";
import { gLUE2ComputingShareMaxTotalCPUTime } from "./gLUE2ComputingShareMaxTotalCPUTime.oa.mjs";
import { gLUE2ComputingShareMaxTotalJobs } from "./gLUE2ComputingShareMaxTotalJobs.oa.mjs";
import { gLUE2ComputingShareMaxUserRunningJobs } from "./gLUE2ComputingShareMaxUserRunningJobs.oa.mjs";
import { gLUE2ComputingShareMaxVirtualMemory } from "./gLUE2ComputingShareMaxVirtualMemory.oa.mjs";
import { gLUE2ComputingShareMaxWaitingJobs } from "./gLUE2ComputingShareMaxWaitingJobs.oa.mjs";
import { gLUE2ComputingShareMaxWallTime } from "./gLUE2ComputingShareMaxWallTime.oa.mjs";
import { gLUE2ComputingShareMinCPUTime } from "./gLUE2ComputingShareMinCPUTime.oa.mjs";
import { gLUE2ComputingShareMinWallTime } from "./gLUE2ComputingShareMinWallTime.oa.mjs";
import { gLUE2ComputingSharePreLRMSWaitingJobs } from "./gLUE2ComputingSharePreLRMSWaitingJobs.oa.mjs";
import { gLUE2ComputingSharePreemption } from "./gLUE2ComputingSharePreemption.oa.mjs";
import { gLUE2ComputingShareRequestedSlots } from "./gLUE2ComputingShareRequestedSlots.oa.mjs";
import { gLUE2ComputingShareReservationPolicy } from "./gLUE2ComputingShareReservationPolicy.oa.mjs";
import { gLUE2ComputingShareRunningJobs } from "./gLUE2ComputingShareRunningJobs.oa.mjs";
import { gLUE2ComputingShareSchedulingPolicy } from "./gLUE2ComputingShareSchedulingPolicy.oa.mjs";
import { gLUE2ComputingShareStagingJobs } from "./gLUE2ComputingShareStagingJobs.oa.mjs";
import { gLUE2ComputingShareSuspendedJobs } from "./gLUE2ComputingShareSuspendedJobs.oa.mjs";
import { gLUE2ComputingShareTag } from "./gLUE2ComputingShareTag.oa.mjs";
import { gLUE2ComputingShareTotalJobs } from "./gLUE2ComputingShareTotalJobs.oa.mjs";
import { gLUE2ComputingShareUsedSlots } from "./gLUE2ComputingShareUsedSlots.oa.mjs";
import { gLUE2ComputingShareWaitingJobs } from "./gLUE2ComputingShareWaitingJobs.oa.mjs";

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
const gLUE2ComputingShare: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Share] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ComputingShareServingState] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ComputingShareMappingQueue, gLUE2ComputingShareMaxWallTime, gLUE2ComputingShareMaxMultiSlotWallTime, gLUE2ComputingShareMinWallTime, gLUE2ComputingShareDefaultWallTime, gLUE2ComputingShareMaxCPUTime, gLUE2ComputingShareMaxTotalCPUTime, gLUE2ComputingShareMinCPUTime, gLUE2ComputingShareDefaultCPUTime, gLUE2ComputingShareMaxTotalJobs, gLUE2ComputingShareMaxRunningJobs, gLUE2ComputingShareMaxWaitingJobs, gLUE2ComputingShareMaxPreLRMSWaitingJobs, gLUE2ComputingShareMaxUserRunningJobs, gLUE2ComputingShareMaxSlotsPerJob, gLUE2ComputingShareMaxStageInStreams, gLUE2ComputingShareMaxStageOutStreams, gLUE2ComputingShareSchedulingPolicy, gLUE2ComputingShareMaxMainMemory, gLUE2ComputingShareGuaranteedMainMemory, gLUE2ComputingShareMaxVirtualMemory, gLUE2ComputingShareGuaranteedVirtualMemory, gLUE2ComputingShareMaxDiskSpace, gLUE2ComputingShareDefaultStorageService, gLUE2ComputingSharePreemption, gLUE2ComputingShareTotalJobs, gLUE2ComputingShareRunningJobs, gLUE2ComputingShareLocalRunningJobs, gLUE2ComputingShareWaitingJobs, gLUE2ComputingShareLocalWaitingJobs, gLUE2ComputingShareSuspendedJobs, gLUE2ComputingShareLocalSuspendedJobs, gLUE2ComputingShareStagingJobs, gLUE2ComputingShareLocalStagingJobs, gLUE2ComputingSharePreLRMSWaitingJobs, gLUE2ComputingShareEstimatedAverageWaitingTime, gLUE2ComputingShareEstimatedWorstWaitingTime, gLUE2ComputingShareFreeSlots, gLUE2ComputingShareFreeSlotsWithDuration, gLUE2ComputingShareUsedSlots, gLUE2ComputingShareRequestedSlots, gLUE2ComputingShareReservationPolicy, gLUE2ComputingShareTag, gLUE2ComputingShareComputingEndpointForeignKey, gLUE2ComputingShareExecutionEnvironmentForeignKey, gLUE2ComputingShareComputingServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ComputingShare"],
    "&ldapDesc": "A utilization target for a set of execution environments defined by a set of configuration parameters and characterized by status information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingShare /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
