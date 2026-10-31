/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_aCSPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-aCSPolicy.va.mjs";


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
const aCSPolicy: OBJECT_CLASS = undefined;

/* eslint-enable */
