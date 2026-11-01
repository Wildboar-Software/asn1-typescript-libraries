/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gLUE2ComputingActivity } from "../LdapGlue609ComputingActivity/id-oc-gLUE2ComputingActivity.va.mjs";

import { gLUE2ComputingActivityType } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityType.oa.mjs";
import { gLUE2ComputingActivityIDFromEndpoint } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityIDFromEndpoint.oa.mjs";
import { gLUE2ComputingActivityLocalIDFromManager } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityLocalIDFromManager.oa.mjs";
import { gLUE2ComputingActivityJobDescription } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityJobDescription.oa.mjs";
import { gLUE2ComputingActivityRestartState } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityRestartState.oa.mjs";
import { gLUE2ComputingActivityExitCode } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityExitCode.oa.mjs";
import { gLUE2ComputingActivityComputingManagerExitCode } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityComputingManagerExitCode.oa.mjs";
import { gLUE2ComputingActivityError } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityError.oa.mjs";
import { gLUE2ComputingActivityWaitingPosition } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityWaitingPosition.oa.mjs";
import { gLUE2ComputingActivityUserDomain } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityUserDomain.oa.mjs";
import { gLUE2ComputingActivityLocalOwner } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityLocalOwner.oa.mjs";
import { gLUE2ComputingActivityRequestedTotalWallTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityRequestedTotalWallTime.oa.mjs";
import { gLUE2ComputingActivityRequestedTotalCPUTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityRequestedTotalCPUTime.oa.mjs";
import { gLUE2ComputingActivityRequestedSlots } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityRequestedSlots.oa.mjs";
import { gLUE2ComputingActivityRequestedApplicationEnvironment } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityRequestedApplicationEnvironment.oa.mjs";
import { gLUE2ComputingActivityStdIn } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityStdIn.oa.mjs";
import { gLUE2ComputingActivityStdOut } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityStdOut.oa.mjs";
import { gLUE2ComputingActivityStdErr } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityStdErr.oa.mjs";
import { gLUE2ComputingActivityLogDir } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityLogDir.oa.mjs";
import { gLUE2ComputingActivityExecutionNode } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityExecutionNode.oa.mjs";
import { gLUE2ComputingActivityQueue } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityQueue.oa.mjs";
import { gLUE2ComputingActivityUsedTotalWallTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityUsedTotalWallTime.oa.mjs";
import { gLUE2ComputingActivityUsedTotalCPUTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityUsedTotalCPUTime.oa.mjs";
import { gLUE2ComputingActivityUsedMainMemory } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityUsedMainMemory.oa.mjs";
import { gLUE2ComputingActivitySubmissionTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivitySubmissionTime.oa.mjs";
import { gLUE2ComputingActivityComputingManagerSubmissionTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityComputingManagerSubmissionTime.oa.mjs";
import { gLUE2ComputingActivityStartTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityStartTime.oa.mjs";
import { gLUE2ComputingActivityComputingManagerEndTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityComputingManagerEndTime.oa.mjs";
import { gLUE2ComputingActivityEndTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityEndTime.oa.mjs";
import { gLUE2ComputingActivityWorkingAreaEraseTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityWorkingAreaEraseTime.oa.mjs";
import { gLUE2ComputingActivityProxyExpirationTime } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityProxyExpirationTime.oa.mjs";
import { gLUE2ComputingActivitySubmissionHost } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivitySubmissionHost.oa.mjs";
import { gLUE2ComputingActivitySubmissionClientName } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivitySubmissionClientName.oa.mjs";
import { gLUE2ComputingActivityOtherMessages } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityOtherMessages.oa.mjs";
import { gLUE2ComputingActivityComputingEndpointForeignKey } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityComputingEndpointForeignKey.oa.mjs";
import { gLUE2ComputingActivityComputingShareForeignKey } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityComputingShareForeignKey.oa.mjs";
import { gLUE2ComputingActivityExecutionEnvironmentForeignKey } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityExecutionEnvironmentForeignKey.oa.mjs";
import { gLUE2ComputingActivityState } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityState.oa.mjs";
import { gLUE2ComputingActivityOwner } from "../LdapGlue609ComputingActivity/gLUE2ComputingActivityOwner.oa.mjs";
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
const gLUE2ComputingActivity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ComputingActivityState, gLUE2ComputingActivityOwner, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ComputingActivityType, gLUE2ComputingActivityIDFromEndpoint, gLUE2ComputingActivityLocalIDFromManager, gLUE2ComputingActivityJobDescription, gLUE2ComputingActivityRestartState, gLUE2ComputingActivityExitCode, gLUE2ComputingActivityComputingManagerExitCode, gLUE2ComputingActivityError, gLUE2ComputingActivityWaitingPosition, gLUE2ComputingActivityUserDomain, gLUE2ComputingActivityLocalOwner, gLUE2ComputingActivityRequestedTotalWallTime, gLUE2ComputingActivityRequestedTotalCPUTime, gLUE2ComputingActivityRequestedSlots, gLUE2ComputingActivityRequestedApplicationEnvironment, gLUE2ComputingActivityStdIn, gLUE2ComputingActivityStdOut, gLUE2ComputingActivityStdErr, gLUE2ComputingActivityLogDir, gLUE2ComputingActivityExecutionNode, gLUE2ComputingActivityQueue, gLUE2ComputingActivityUsedTotalWallTime, gLUE2ComputingActivityUsedTotalCPUTime, gLUE2ComputingActivityUsedMainMemory, gLUE2ComputingActivitySubmissionTime, gLUE2ComputingActivityComputingManagerSubmissionTime, gLUE2ComputingActivityStartTime, gLUE2ComputingActivityComputingManagerEndTime, gLUE2ComputingActivityEndTime, gLUE2ComputingActivityWorkingAreaEraseTime, gLUE2ComputingActivityProxyExpirationTime, gLUE2ComputingActivitySubmissionHost, gLUE2ComputingActivitySubmissionClientName, gLUE2ComputingActivityOtherMessages, gLUE2ComputingActivityComputingEndpointForeignKey, gLUE2ComputingActivityComputingShareForeignKey, gLUE2ComputingActivityExecutionEnvironmentForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ComputingActivity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An activity managed by an OGSA execution capability service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ComputingActivity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
