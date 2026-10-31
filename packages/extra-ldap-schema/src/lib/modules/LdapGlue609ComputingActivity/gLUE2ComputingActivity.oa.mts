/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_gLUE2ComputingActivity } from "../LdapGlue609ComputingActivity/id-oc-gLUE2ComputingActivity.va.mjs";


/**
 * @summary gLUE2ComputingActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingActivity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2ComputingActivityState
 *                               | gLUE2ComputingActivityOwner }
 *   MAY CONTAIN               { gLUE2ComputingActivityType
 *                               | gLUE2ComputingActivityIDFromEndpoint
 *                               | gLUE2ComputingActivityLocalIDFromManager
 *                               | gLUE2ComputingActivityJobDescription
 *                               | gLUE2ComputingActivityRestartState
 *                               | gLUE2ComputingActivityExitCode
 *                               | gLUE2ComputingActivityComputingManagerExitCode
 *                               | gLUE2ComputingActivityError
 *                               | gLUE2ComputingActivityWaitingPosition
 *                               | gLUE2ComputingActivityUserDomain
 *                               | gLUE2ComputingActivityLocalOwner
 *                               | gLUE2ComputingActivityRequestedTotalWallTime
 *                               | gLUE2ComputingActivityRequestedTotalCPUTime
 *                               | gLUE2ComputingActivityRequestedSlots
 *                               | gLUE2ComputingActivityRequestedApplicationEnvironment
 *                               | gLUE2ComputingActivityStdIn
 *                               | gLUE2ComputingActivityStdOut
 *                               | gLUE2ComputingActivityStdErr
 *                               | gLUE2ComputingActivityLogDir
 *                               | gLUE2ComputingActivityExecutionNode
 *                               | gLUE2ComputingActivityQueue
 *                               | gLUE2ComputingActivityUsedTotalWallTime
 *                               | gLUE2ComputingActivityUsedTotalCPUTime
 *                               | gLUE2ComputingActivityUsedMainMemory
 *                               | gLUE2ComputingActivitySubmissionTime
 *                               | gLUE2ComputingActivityComputingManagerSubmissionTime
 *                               | gLUE2ComputingActivityStartTime
 *                               | gLUE2ComputingActivityComputingManagerEndTime
 *                               | gLUE2ComputingActivityEndTime
 *                               | gLUE2ComputingActivityWorkingAreaEraseTime
 *                               | gLUE2ComputingActivityProxyExpirationTime
 *                               | gLUE2ComputingActivitySubmissionHost
 *                               | gLUE2ComputingActivitySubmissionClientName
 *                               | gLUE2ComputingActivityOtherMessages
 *                               | gLUE2ComputingActivityComputingEndpointForeignKey
 *                               | gLUE2ComputingActivityComputingShareForeignKey
 *                               | gLUE2ComputingActivityExecutionEnvironmentForeignKey }
 *   LDAP-NAME                 {"GLUE2ComputingActivity"}
 *   LDAP-DESC                 "An activity managed by an OGSA execution capability service"
 *   ID                        id-oc-gLUE2ComputingActivity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ComputingActivity: OBJECT_CLASS = undefined;

/* eslint-enable */
