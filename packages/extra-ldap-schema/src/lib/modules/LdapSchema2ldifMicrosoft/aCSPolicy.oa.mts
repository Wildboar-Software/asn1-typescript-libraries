/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_aCSPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-aCSPolicy.va.mjs";
import { aCSAggregateTokenRatePerUser } from "../MSUser/aCSAggregateTokenRatePerUser.oa.mjs";
import { aCSDirection } from "../MSUser/aCSDirection.oa.mjs";
import { aCSIdentityName } from "../MSUser/aCSIdentityName.oa.mjs";
import { aCSMaxAggregatePeakRatePerUser } from "../MSUser/aCSMaxAggregatePeakRatePerUser.oa.mjs";
import { aCSMaxDurationPerFlow } from "../MSUser/aCSMaxDurationPerFlow.oa.mjs";
import { aCSMaxPeakBandwidthPerFlow } from "../MSUser/aCSMaxPeakBandwidthPerFlow.oa.mjs";
import { aCSMaxTokenBucketPerFlow } from "../MSUser/aCSMaxTokenBucketPerFlow.oa.mjs";
import { aCSMaxTokenRatePerFlow } from "../MSUser/aCSMaxTokenRatePerFlow.oa.mjs";
import { aCSMaximumSDUSize } from "../MSUser/aCSMaximumSDUSize.oa.mjs";
import { aCSMinimumDelayVariation } from "../MSUser/aCSMinimumDelayVariation.oa.mjs";
import { aCSMinimumLatency } from "../MSUser/aCSMinimumLatency.oa.mjs";
import { aCSMinimumPolicedSize } from "../MSUser/aCSMinimumPolicedSize.oa.mjs";
import { aCSPermissionBits } from "../MSUser/aCSPermissionBits.oa.mjs";
import { aCSPriority } from "../MSUser/aCSPriority.oa.mjs";
import { aCSServiceType } from "../MSUser/aCSServiceType.oa.mjs";
import { aCSTimeOfDay } from "../MSUser/aCSTimeOfDay.oa.mjs";
import { aCSTotalNoOfFlows } from "../MSUser/aCSTotalNoOfFlows.oa.mjs";

/**
 * @summary aCSPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aCSPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { aCSTimeOfDay
 *                               | aCSDirection
 *                               | aCSMaxTokenRatePerFlow
 *                               | aCSMaxPeakBandwidthPerFlow
 *                               | aCSAggregateTokenRatePerUser
 *                               | aCSMaxDurationPerFlow
 *                               | aCSServiceType
 *                               | aCSTotalNoOfFlows
 *                               | aCSPriority
 *                               | aCSPermissionBits
 *                               | aCSIdentityName
 *                               | aCSMaxAggregatePeakRatePerUser
 *                               | aCSMaxTokenBucketPerFlow
 *                               | aCSMaximumSDUSize
 *                               | aCSMinimumPolicedSize
 *                               | aCSMinimumLatency
 *                               | aCSMinimumDelayVariation }
 *   LDAP-NAME                 {"aCSPolicy"}
 *   ID                        id-oc-aCSPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const aCSPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [aCSTimeOfDay, aCSDirection, aCSMaxTokenRatePerFlow, aCSMaxPeakBandwidthPerFlow, aCSAggregateTokenRatePerUser, aCSMaxDurationPerFlow, aCSServiceType, aCSTotalNoOfFlows, aCSPriority, aCSPermissionBits, aCSIdentityName, aCSMaxAggregatePeakRatePerUser, aCSMaxTokenBucketPerFlow, aCSMaximumSDUSize, aCSMinimumPolicedSize, aCSMinimumLatency, aCSMinimumDelayVariation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["aCSPolicy"],
    "&id": id_oc_aCSPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
