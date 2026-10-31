/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Manager } from "../LdapGlue509Manager/gLUE2Manager.oa.mjs";
import { id_oc_gLUE2ComputingManager } from "../LdapGlue604ComputingManager/id-oc-gLUE2ComputingManager.va.mjs";
import { gLUE2ComputingManagerApplicationDir } from "./gLUE2ComputingManagerApplicationDir.oa.mjs";
import { gLUE2ComputingManagerBulkSubmission } from "./gLUE2ComputingManagerBulkSubmission.oa.mjs";
import { gLUE2ComputingManagerCacheFree } from "./gLUE2ComputingManagerCacheFree.oa.mjs";
import { gLUE2ComputingManagerCacheTotal } from "./gLUE2ComputingManagerCacheTotal.oa.mjs";
import { gLUE2ComputingManagerComputingServiceForeignKey } from "./gLUE2ComputingManagerComputingServiceForeignKey.oa.mjs";
import { gLUE2ComputingManagerHomogeneous } from "./gLUE2ComputingManagerHomogeneous.oa.mjs";
import { gLUE2ComputingManagerLogicalCPUDistribution } from "./gLUE2ComputingManagerLogicalCPUDistribution.oa.mjs";
import { gLUE2ComputingManagerNetworkInfo } from "./gLUE2ComputingManagerNetworkInfo.oa.mjs";
import { gLUE2ComputingManagerReservation } from "./gLUE2ComputingManagerReservation.oa.mjs";
import { gLUE2ComputingManagerScratchDir } from "./gLUE2ComputingManagerScratchDir.oa.mjs";
import { gLUE2ComputingManagerSlotsUsedByGridJobs } from "./gLUE2ComputingManagerSlotsUsedByGridJobs.oa.mjs";
import { gLUE2ComputingManagerSlotsUsedByLocalJobs } from "./gLUE2ComputingManagerSlotsUsedByLocalJobs.oa.mjs";
import { gLUE2ComputingManagerTmpDir } from "./gLUE2ComputingManagerTmpDir.oa.mjs";
import { gLUE2ComputingManagerTotalLogicalCPUs } from "./gLUE2ComputingManagerTotalLogicalCPUs.oa.mjs";
import { gLUE2ComputingManagerTotalPhysicalCPUs } from "./gLUE2ComputingManagerTotalPhysicalCPUs.oa.mjs";
import { gLUE2ComputingManagerTotalSlots } from "./gLUE2ComputingManagerTotalSlots.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaFree } from "./gLUE2ComputingManagerWorkingAreaFree.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaGuaranteed } from "./gLUE2ComputingManagerWorkingAreaGuaranteed.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaLifeTime } from "./gLUE2ComputingManagerWorkingAreaLifeTime.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaMultiSlotFree } from "./gLUE2ComputingManagerWorkingAreaMultiSlotFree.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime } from "./gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaMultiSlotTotal } from "./gLUE2ComputingManagerWorkingAreaMultiSlotTotal.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaShared } from "./gLUE2ComputingManagerWorkingAreaShared.oa.mjs";
import { gLUE2ComputingManagerWorkingAreaTotal } from "./gLUE2ComputingManagerWorkingAreaTotal.oa.mjs";

/**
 * @summary gLUE2ComputingManager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingManager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Manager }
 *   MAY CONTAIN               { gLUE2ComputingManagerReservation
 *                               | gLUE2ComputingManagerBulkSubmission
 *                               | gLUE2ComputingManagerTotalPhysicalCPUs
 *                               | gLUE2ComputingManagerTotalLogicalCPUs
 *                               | gLUE2ComputingManagerTotalSlots
 *                               | gLUE2ComputingManagerSlotsUsedByLocalJobs
 *                               | gLUE2ComputingManagerSlotsUsedByGridJobs
 *                               | gLUE2ComputingManagerHomogeneous
 *                               | gLUE2ComputingManagerNetworkInfo
 *                               | gLUE2ComputingManagerLogicalCPUDistribution
 *                               | gLUE2ComputingManagerWorkingAreaShared
 *                               | gLUE2ComputingManagerWorkingAreaGuaranteed
 *                               | gLUE2ComputingManagerWorkingAreaTotal
 *                               | gLUE2ComputingManagerWorkingAreaFree
 *                               | gLUE2ComputingManagerWorkingAreaLifeTime
 *                               | gLUE2ComputingManagerWorkingAreaMultiSlotTotal
 *                               | gLUE2ComputingManagerWorkingAreaMultiSlotFree
 *                               | gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime
 *                               | gLUE2ComputingManagerCacheTotal
 *                               | gLUE2ComputingManagerCacheFree
 *                               | gLUE2ComputingManagerTmpDir
 *                               | gLUE2ComputingManagerScratchDir
 *                               | gLUE2ComputingManagerApplicationDir
 *                               | gLUE2ComputingManagerComputingServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2ComputingManager"}
 *   LDAP-DESC                 "A software component locally managing one or more execution environments. It can describe also aggregated information about the managed resources. The computing manager is also known as Local Resource Management System (LRMS)."
 *   ID                        id-oc-gLUE2ComputingManager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingManager: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Manager] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ComputingManagerReservation, gLUE2ComputingManagerBulkSubmission, gLUE2ComputingManagerTotalPhysicalCPUs, gLUE2ComputingManagerTotalLogicalCPUs, gLUE2ComputingManagerTotalSlots, gLUE2ComputingManagerSlotsUsedByLocalJobs, gLUE2ComputingManagerSlotsUsedByGridJobs, gLUE2ComputingManagerHomogeneous, gLUE2ComputingManagerNetworkInfo, gLUE2ComputingManagerLogicalCPUDistribution, gLUE2ComputingManagerWorkingAreaShared, gLUE2ComputingManagerWorkingAreaGuaranteed, gLUE2ComputingManagerWorkingAreaTotal, gLUE2ComputingManagerWorkingAreaFree, gLUE2ComputingManagerWorkingAreaLifeTime, gLUE2ComputingManagerWorkingAreaMultiSlotTotal, gLUE2ComputingManagerWorkingAreaMultiSlotFree, gLUE2ComputingManagerWorkingAreaMultiSlotLifeTime, gLUE2ComputingManagerCacheTotal, gLUE2ComputingManagerCacheFree, gLUE2ComputingManagerTmpDir, gLUE2ComputingManagerScratchDir, gLUE2ComputingManagerApplicationDir, gLUE2ComputingManagerComputingServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ComputingManager"],
    "&ldapDesc": "A software component locally managing one or more execution environments. It can describe also aggregated information about the managed resources. The computing manager is also known as Local Resource Management System (LRMS)." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingManager /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
