/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_aCSSubnet } from "../LdapSchema2ldifMicrosoft/id-oc-aCSSubnet.va.mjs";
import { aCSAllocableRSVPBandwidth } from "../MSUser/aCSAllocableRSVPBandwidth.oa.mjs";
import { aCSCacheTimeout } from "../MSUser/aCSCacheTimeout.oa.mjs";
import { aCSDSBMDeadTime } from "../MSUser/aCSDSBMDeadTime.oa.mjs";
import { aCSDSBMPriority } from "../MSUser/aCSDSBMPriority.oa.mjs";
import { aCSDSBMRefresh } from "../MSUser/aCSDSBMRefresh.oa.mjs";
import { aCSEnableACSService } from "../MSUser/aCSEnableACSService.oa.mjs";
import { aCSEnableRSVPAccounting } from "../MSUser/aCSEnableRSVPAccounting.oa.mjs";
import { aCSEnableRSVPMessageLogging } from "../MSUser/aCSEnableRSVPMessageLogging.oa.mjs";
import { aCSEventLogLevel } from "../MSUser/aCSEventLogLevel.oa.mjs";
import { aCSMaxDurationPerFlow } from "../MSUser/aCSMaxDurationPerFlow.oa.mjs";
import { aCSMaxNoOfAccountFiles } from "../MSUser/aCSMaxNoOfAccountFiles.oa.mjs";
import { aCSMaxNoOfLogFiles } from "../MSUser/aCSMaxNoOfLogFiles.oa.mjs";
import { aCSMaxPeakBandwidth } from "../MSUser/aCSMaxPeakBandwidth.oa.mjs";
import { aCSMaxPeakBandwidthPerFlow } from "../MSUser/aCSMaxPeakBandwidthPerFlow.oa.mjs";
import { aCSMaxSizeOfRSVPAccountFile } from "../MSUser/aCSMaxSizeOfRSVPAccountFile.oa.mjs";
import { aCSMaxSizeOfRSVPLogFile } from "../MSUser/aCSMaxSizeOfRSVPLogFile.oa.mjs";
import { aCSMaxTokenRatePerFlow } from "../MSUser/aCSMaxTokenRatePerFlow.oa.mjs";
import { aCSNonReservedMaxSDUSize } from "../MSUser/aCSNonReservedMaxSDUSize.oa.mjs";
import { aCSNonReservedMinPolicedSize } from "../MSUser/aCSNonReservedMinPolicedSize.oa.mjs";
import { aCSNonReservedPeakRate } from "../MSUser/aCSNonReservedPeakRate.oa.mjs";
import { aCSNonReservedTokenSize } from "../MSUser/aCSNonReservedTokenSize.oa.mjs";
import { aCSNonReservedTxLimit } from "../MSUser/aCSNonReservedTxLimit.oa.mjs";
import { aCSNonReservedTxSize } from "../MSUser/aCSNonReservedTxSize.oa.mjs";
import { aCSRSVPAccountFilesLocation } from "../MSUser/aCSRSVPAccountFilesLocation.oa.mjs";
import { aCSRSVPLogFilesLocation } from "../MSUser/aCSRSVPLogFilesLocation.oa.mjs";
import { aCSServerList } from "../MSUser/aCSServerList.oa.mjs";

/**
 * @summary aCSSubnet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aCSSubnet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { aCSMaxTokenRatePerFlow
 *                               | aCSMaxPeakBandwidthPerFlow
 *                               | aCSMaxDurationPerFlow
 *                               | aCSAllocableRSVPBandwidth
 *                               | aCSMaxPeakBandwidth
 *                               | aCSEnableRSVPMessageLogging
 *                               | aCSEventLogLevel
 *                               | aCSEnableACSService
 *                               | aCSRSVPLogFilesLocation
 *                               | aCSMaxNoOfLogFiles
 *                               | aCSMaxSizeOfRSVPLogFile
 *                               | aCSDSBMPriority
 *                               | aCSDSBMRefresh
 *                               | aCSDSBMDeadTime
 *                               | aCSCacheTimeout
 *                               | aCSNonReservedTxLimit
 *                               | aCSNonReservedTxSize
 *                               | aCSEnableRSVPAccounting
 *                               | aCSRSVPAccountFilesLocation
 *                               | aCSMaxNoOfAccountFiles
 *                               | aCSMaxSizeOfRSVPAccountFile
 *                               | aCSServerList
 *                               | aCSNonReservedPeakRate
 *                               | aCSNonReservedTokenSize
 *                               | aCSNonReservedMaxSDUSize
 *                               | aCSNonReservedMinPolicedSize }
 *   LDAP-NAME                 {"aCSSubnet"}
 *   ID                        id-oc-aCSSubnet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const aCSSubnet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [aCSMaxTokenRatePerFlow, aCSMaxPeakBandwidthPerFlow, aCSMaxDurationPerFlow, aCSAllocableRSVPBandwidth, aCSMaxPeakBandwidth, aCSEnableRSVPMessageLogging, aCSEventLogLevel, aCSEnableACSService, aCSRSVPLogFilesLocation, aCSMaxNoOfLogFiles, aCSMaxSizeOfRSVPLogFile, aCSDSBMPriority, aCSDSBMRefresh, aCSDSBMDeadTime, aCSCacheTimeout, aCSNonReservedTxLimit, aCSNonReservedTxSize, aCSEnableRSVPAccounting, aCSRSVPAccountFilesLocation, aCSMaxNoOfAccountFiles, aCSMaxSizeOfRSVPAccountFile, aCSServerList, aCSNonReservedPeakRate, aCSNonReservedTokenSize, aCSNonReservedMaxSDUSize, aCSNonReservedMinPolicedSize] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["aCSSubnet"],
    "&id": id_oc_aCSSubnet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
