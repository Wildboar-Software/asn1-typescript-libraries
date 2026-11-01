/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
import { gLUE2ComputingShareServingState } from "../LdapGlue603ComputingShare/gLUE2ComputingShareServingState.oa.mjs";
import { id_oc_gLUE2ComputingShare } from "../LdapGlue603ComputingShare/id-oc-gLUE2ComputingShare.va.mjs";
import { gLUE2ComputingShareMappingQueue } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMappingQueue.oa.mjs";
import { gLUE2ComputingShareMaxWallTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxWallTime.oa.mjs";
import { gLUE2ComputingShareMaxMultiSlotWallTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxMultiSlotWallTime.oa.mjs";
import { gLUE2ComputingShareMinWallTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMinWallTime.oa.mjs";
import { gLUE2ComputingShareDefaultWallTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareDefaultWallTime.oa.mjs";
import { gLUE2ComputingShareMaxCPUTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxCPUTime.oa.mjs";
import { gLUE2ComputingShareMaxTotalCPUTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxTotalCPUTime.oa.mjs";
import { gLUE2ComputingShareMinCPUTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMinCPUTime.oa.mjs";
import { gLUE2ComputingShareDefaultCPUTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareDefaultCPUTime.oa.mjs";
import { gLUE2ComputingShareMaxTotalJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxTotalJobs.oa.mjs";
import { gLUE2ComputingShareMaxRunningJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxRunningJobs.oa.mjs";
import { gLUE2ComputingShareMaxWaitingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxWaitingJobs.oa.mjs";
import { gLUE2ComputingShareMaxPreLRMSWaitingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxPreLRMSWaitingJobs.oa.mjs";
import { gLUE2ComputingShareMaxUserRunningJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxUserRunningJobs.oa.mjs";
import { gLUE2ComputingShareMaxSlotsPerJob } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxSlotsPerJob.oa.mjs";
import { gLUE2ComputingShareMaxStageInStreams } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxStageInStreams.oa.mjs";
import { gLUE2ComputingShareMaxStageOutStreams } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxStageOutStreams.oa.mjs";
import { gLUE2ComputingShareSchedulingPolicy } from "../LdapGlue603ComputingShare/gLUE2ComputingShareSchedulingPolicy.oa.mjs";
import { gLUE2ComputingShareMaxMainMemory } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxMainMemory.oa.mjs";
import { gLUE2ComputingShareGuaranteedMainMemory } from "../LdapGlue603ComputingShare/gLUE2ComputingShareGuaranteedMainMemory.oa.mjs";
import { gLUE2ComputingShareMaxVirtualMemory } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxVirtualMemory.oa.mjs";
import { gLUE2ComputingShareGuaranteedVirtualMemory } from "../LdapGlue603ComputingShare/gLUE2ComputingShareGuaranteedVirtualMemory.oa.mjs";
import { gLUE2ComputingShareMaxDiskSpace } from "../LdapGlue603ComputingShare/gLUE2ComputingShareMaxDiskSpace.oa.mjs";
import { gLUE2ComputingShareDefaultStorageService } from "../LdapGlue603ComputingShare/gLUE2ComputingShareDefaultStorageService.oa.mjs";
import { gLUE2ComputingSharePreemption } from "../LdapGlue603ComputingShare/gLUE2ComputingSharePreemption.oa.mjs";
import { gLUE2ComputingShareTotalJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareTotalJobs.oa.mjs";
import { gLUE2ComputingShareRunningJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareRunningJobs.oa.mjs";
import { gLUE2ComputingShareLocalRunningJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareLocalRunningJobs.oa.mjs";
import { gLUE2ComputingShareWaitingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareWaitingJobs.oa.mjs";
import { gLUE2ComputingShareLocalWaitingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareLocalWaitingJobs.oa.mjs";
import { gLUE2ComputingShareSuspendedJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareSuspendedJobs.oa.mjs";
import { gLUE2ComputingShareLocalSuspendedJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareLocalSuspendedJobs.oa.mjs";
import { gLUE2ComputingShareStagingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareStagingJobs.oa.mjs";
import { gLUE2ComputingShareLocalStagingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingShareLocalStagingJobs.oa.mjs";
import { gLUE2ComputingSharePreLRMSWaitingJobs } from "../LdapGlue603ComputingShare/gLUE2ComputingSharePreLRMSWaitingJobs.oa.mjs";
import { gLUE2ComputingShareEstimatedAverageWaitingTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareEstimatedAverageWaitingTime.oa.mjs";
import { gLUE2ComputingShareEstimatedWorstWaitingTime } from "../LdapGlue603ComputingShare/gLUE2ComputingShareEstimatedWorstWaitingTime.oa.mjs";
import { gLUE2ComputingShareFreeSlots } from "../LdapGlue603ComputingShare/gLUE2ComputingShareFreeSlots.oa.mjs";
import { gLUE2ComputingShareFreeSlotsWithDuration } from "../LdapGlue603ComputingShare/gLUE2ComputingShareFreeSlotsWithDuration.oa.mjs";
import { gLUE2ComputingShareUsedSlots } from "../LdapGlue603ComputingShare/gLUE2ComputingShareUsedSlots.oa.mjs";
import { gLUE2ComputingShareRequestedSlots } from "../LdapGlue603ComputingShare/gLUE2ComputingShareRequestedSlots.oa.mjs";
import { gLUE2ComputingShareReservationPolicy } from "../LdapGlue603ComputingShare/gLUE2ComputingShareReservationPolicy.oa.mjs";
import { gLUE2ComputingShareTag } from "../LdapGlue603ComputingShare/gLUE2ComputingShareTag.oa.mjs";
import { gLUE2ComputingShareComputingEndpointForeignKey } from "../LdapGlue603ComputingShare/gLUE2ComputingShareComputingEndpointForeignKey.oa.mjs";
import { gLUE2ComputingShareExecutionEnvironmentForeignKey } from "../LdapGlue603ComputingShare/gLUE2ComputingShareExecutionEnvironmentForeignKey.oa.mjs";
import { gLUE2ComputingShareComputingServiceForeignKey } from "../LdapGlue603ComputingShare/gLUE2ComputingShareComputingServiceForeignKey.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Share, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ComputingShareServingState, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ComputingShareMappingQueue, gLUE2ComputingShareMaxWallTime, gLUE2ComputingShareMaxMultiSlotWallTime, gLUE2ComputingShareMinWallTime, gLUE2ComputingShareDefaultWallTime, gLUE2ComputingShareMaxCPUTime, gLUE2ComputingShareMaxTotalCPUTime, gLUE2ComputingShareMinCPUTime, gLUE2ComputingShareDefaultCPUTime, gLUE2ComputingShareMaxTotalJobs, gLUE2ComputingShareMaxRunningJobs, gLUE2ComputingShareMaxWaitingJobs, gLUE2ComputingShareMaxPreLRMSWaitingJobs, gLUE2ComputingShareMaxUserRunningJobs, gLUE2ComputingShareMaxSlotsPerJob, gLUE2ComputingShareMaxStageInStreams, gLUE2ComputingShareMaxStageOutStreams, gLUE2ComputingShareSchedulingPolicy, gLUE2ComputingShareMaxMainMemory, gLUE2ComputingShareGuaranteedMainMemory, gLUE2ComputingShareMaxVirtualMemory, gLUE2ComputingShareGuaranteedVirtualMemory, gLUE2ComputingShareMaxDiskSpace, gLUE2ComputingShareDefaultStorageService, gLUE2ComputingSharePreemption, gLUE2ComputingShareTotalJobs, gLUE2ComputingShareRunningJobs, gLUE2ComputingShareLocalRunningJobs, gLUE2ComputingShareWaitingJobs, gLUE2ComputingShareLocalWaitingJobs, gLUE2ComputingShareSuspendedJobs, gLUE2ComputingShareLocalSuspendedJobs, gLUE2ComputingShareStagingJobs, gLUE2ComputingShareLocalStagingJobs, gLUE2ComputingSharePreLRMSWaitingJobs, gLUE2ComputingShareEstimatedAverageWaitingTime, gLUE2ComputingShareEstimatedWorstWaitingTime, gLUE2ComputingShareFreeSlots, gLUE2ComputingShareFreeSlotsWithDuration, gLUE2ComputingShareUsedSlots, gLUE2ComputingShareRequestedSlots, gLUE2ComputingShareReservationPolicy, gLUE2ComputingShareTag, gLUE2ComputingShareComputingEndpointForeignKey, gLUE2ComputingShareExecutionEnvironmentForeignKey, gLUE2ComputingShareComputingServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ComputingShare" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A utilization target for a set of execution environments defined by a set of configuration parameters and characterized by status information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingShare /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

