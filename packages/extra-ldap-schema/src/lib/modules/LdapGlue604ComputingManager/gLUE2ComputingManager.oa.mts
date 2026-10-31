/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Manager } from "../LdapGlue509Manager/gLUE2Manager.oa.mjs";
// export { id_oc_gLUE2ComputingManager } from "../LdapGlue604ComputingManager/id-oc-gLUE2ComputingManager.va.mjs";


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
const gLUE2ComputingManager: OBJECT_CLASS = undefined;

/* eslint-enable */
