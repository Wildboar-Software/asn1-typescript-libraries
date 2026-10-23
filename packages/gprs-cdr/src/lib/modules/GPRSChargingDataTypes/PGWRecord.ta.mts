/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { TWANUserLocationInfo, _decode_TWANUserLocationInfo, _encode_TWANUserLocationInfo } from "../GPRSChargingDataTypes/TWANUserLocationInfo.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";
import { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { NBIFOMMode, _decode_NBIFOMMode, _encode_NBIFOMMode, _enum_for_NBIFOMMode } from "../GPRSChargingDataTypes/NBIFOMMode.ta.mjs";
import { NBIFOMSupport, _decode_NBIFOMSupport, _encode_NBIFOMSupport, _enum_for_NBIFOMSupport } from "../GPRSChargingDataTypes/NBIFOMSupport.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { SGiPtPTunnellingMethod, _decode_SGiPtPTunnellingMethod, _encode_SGiPtPTunnellingMethod, _enum_for_SGiPtPTunnellingMethod } from "../GPRSChargingDataTypes/SGiPtPTunnellingMethod.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";
import { MOExceptionDataCounter, _decode_MOExceptionDataCounter, _encode_MOExceptionDataCounter } from "../GPRSChargingDataTypes/MOExceptionDataCounter.ta.mjs";
import { ChargingPerIPCANSessionIndicator, _decode_ChargingPerIPCANSessionIndicator, _encode_ChargingPerIPCANSessionIndicator, _enum_for_ChargingPerIPCANSessionIndicator } from "../GPRSChargingDataTypes/ChargingPerIPCANSessionIndicator.ta.mjs";
import { ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { SCSASAddress, _decode_SCSASAddress, _encode_SCSASAddress } from "../GPRSChargingDataTypes/SCSASAddress.ta.mjs";
import { RANSecondaryRATUsageReport, _decode_RANSecondaryRATUsageReport, _encode_RANSecondaryRATUsageReport } from "../GPRSChargingDataTypes/RANSecondaryRATUsageReport.ta.mjs";


/**
 * @summary PGWRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWRecord ::= SET {
 *    recordType                          [0] IMPLICIT RecordType,
 *    servedIMSI                          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    p-GWAddress                         [4] GSNAddress,
 *    chargingID                          [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    servingNodeAddress                  [6] IMPLICIT SEQUENCE  OF
 *       GSNAddress,
 *    accessPointNameNI                   [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                          [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress                 [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag                  [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes                [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime                   [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                            [14] IMPLICIT INTEGER,
 *    causeForRecClosing                  [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                         [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber                [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                              [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions                    [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber                 [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode                    [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                        [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics             [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode                   [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    iMSsignalingContext                 [25] IMPLICIT NULL OPTIONAL,
 *    servingNodePLMNIdentifier           [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    pSFurnishChargingInformation        [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                          [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                             [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                          [31] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    userLocationInformation             [32] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELChargingInformation            [33] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfServiceData                   [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servingNodeType                     [35] IMPLICIT SEQUENCE  OF
 *       ServingNodeType,
 *    servedMNNAI                         [36] IMPLICIT SubscriptionID OPTIONAL,
 *    p-GWPLMNIdentifier                  [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                           [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                            [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    served3gpp2MEID                     [40] IMPLICIT OCTET STRING OPTIONAL,
 *    pDNConnectionChargingID             [41] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    iMSIunauthenticatedFlag             [42] IMPLICIT NULL OPTIONAL,
 *    userCSGInformation                  [43] IMPLICIT UserCSGInformation OPTIONAL,
 *    threeGPP2UserLocationInformation    [44] IMPLICIT OCTET STRING OPTIONAL,
 *    servedPDPPDNAddressExt              [45] PDPAddress OPTIONAL,
 *    lowPriorityIndicator                [46] IMPLICIT NULL OPTIONAL,
 *    dynamicAddressFlagExt               [47] IMPLICIT BOOLEAN OPTIONAL,
 *    servingNodeiPv6Address              [49] IMPLICIT SEQUENCE  OF
 *       GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed                 [50] GSNAddress OPTIONAL,
 *    tWANUserLocationInformation         [51] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    retransmission                      [52] IMPLICIT NULL OPTIONAL,
 *    userLocationInfoTime                [53] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt              [54] IMPLICIT CNOperatorSelectionEntity OPTIONAL,
 *    ePCQoSInformation                   [55] IMPLICIT EPCQoSInformation OPTIONAL,
 *    presenceReportingAreaInfo           [56] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    lastUserLocationInformation         [57] IMPLICIT OCTET STRING OPTIONAL,
 *    lastMSTimeZone                      [58] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    enhancedDiagnostics                 [59] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    nBIFOMMode                          [60] IMPLICIT NBIFOMMode OPTIONAL,
 *    nBIFOMSupport                       [61] IMPLICIT NBIFOMSupport OPTIONAL,
 *    uWANUserLocationInformation         [62] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    sGiPtPTunnellingMethod              [64] IMPLICIT SGiPtPTunnellingMethod OPTIONAL,
 *    uNIPDUCPOnlyFlag                    [65] IMPLICIT BOOLEAN OPTIONAL,
 *    servingPLMNRateControl              [66] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    aPNRateControl                      [67] IMPLICIT APNRateControl OPTIONAL,
 *    pDPPDNTypeExtension                 [68] IMPLICIT INTEGER OPTIONAL,
 *    mOExceptionDataCounter              [69] IMPLICIT MOExceptionDataCounter OPTIONAL,
 *    chargingPerIPCANSessionIndicator    [70] IMPLICIT ChargingPerIPCANSessionIndicator OPTIONAL,
 *    threeGPPPSDataOffStatus             [71] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    sCSASAddress                        [72] IMPLICIT SCSASAddress OPTIONAL,
 *    listOfRANSecondaryRATUsageReports   [73] IMPLICIT SEQUENCE  OF
 *       RANSecondaryRATUsageReport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PGWRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `p_GWAddress`.
     * @public
     * @readonly
     */
    readonly p_GWAddress: GSNAddress;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `servingNodeAddress`.
     * @public
     * @readonly
     */
    readonly servingNodeAddress: GSNAddress[];
    /**
     * @summary `accessPointNameNI`.
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `pdpPDNType`.
     * @public
     * @readonly
     */
    readonly pdpPDNType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddress`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlag`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    /**
     * @summary `recordOpeningTime`.
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `apnSelectionMode`.
     * @public
     * @readonly
     */
    readonly apnSelectionMode: OPTIONAL<APNSelectionMode>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `iMSsignalingContext`.
     * @public
     * @readonly
     */
    readonly iMSsignalingContext: OPTIONAL<NULL>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pSFurnishChargingInformation`.
     * @public
     * @readonly
     */
    readonly pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELChargingInformation`.
     * @public
     * @readonly
     */
    readonly cAMELChargingInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfServiceData`.
     * @public
     * @readonly
     */
    readonly listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    /**
     * @summary `servingNodeType`.
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType[];
    /**
     * @summary `servedMNNAI`.
     * @public
     * @readonly
     */
    readonly servedMNNAI: OPTIONAL<SubscriptionID>;
    /**
     * @summary `p_GWPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `stopTime`.
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `served3gpp2MEID`.
     * @public
     * @readonly
     */
    readonly served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDNConnectionChargingID`.
     * @public
     * @readonly
     */
    readonly pDNConnectionChargingID: OPTIONAL<INTEGER>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @public
     * @readonly
     */
    readonly iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    /**
     * @summary `userCSGInformation`.
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @public
     * @readonly
     */
    readonly threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `lowPriorityIndicator`.
     * @public
     * @readonly
     */
    readonly lowPriorityIndicator: OPTIONAL<NULL>;
    /**
     * @summary `dynamicAddressFlagExt`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servingNodeiPv6Address`.
     * @public
     * @readonly
     */
    readonly servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    /**
     * @summary `p_GWiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `tWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `userLocationInfoTime`.
     * @public
     * @readonly
     */
    readonly userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /**
     * @summary `ePCQoSInformation`.
     * @public
     * @readonly
     */
    readonly ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    /**
     * @summary `presenceReportingAreaInfo`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    /**
     * @summary `lastUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly lastUserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lastMSTimeZone`.
     * @public
     * @readonly
     */
    readonly lastMSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `enhancedDiagnostics`.
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    /**
     * @summary `nBIFOMMode`.
     * @public
     * @readonly
     */
    readonly nBIFOMMode: OPTIONAL<NBIFOMMode>;
    /**
     * @summary `nBIFOMSupport`.
     * @public
     * @readonly
     */
    readonly nBIFOMSupport: OPTIONAL<NBIFOMSupport>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `sGiPtPTunnellingMethod`.
     * @public
     * @readonly
     */
    readonly sGiPtPTunnellingMethod: OPTIONAL<SGiPtPTunnellingMethod>;
    /**
     * @summary `uNIPDUCPOnlyFlag`.
     * @public
     * @readonly
     */
    readonly uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servingPLMNRateControl`.
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `aPNRateControl`.
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;
    /**
     * @summary `pDPPDNTypeExtension`.
     * @public
     * @readonly
     */
    readonly pDPPDNTypeExtension: OPTIONAL<INTEGER>;
    /**
     * @summary `mOExceptionDataCounter`.
     * @public
     * @readonly
     */
    readonly mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
    /**
     * @summary `chargingPerIPCANSessionIndicator`.
     * @public
     * @readonly
     */
    readonly chargingPerIPCANSessionIndicator: OPTIONAL<ChargingPerIPCANSessionIndicator>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `sCSASAddress`.
     * @public
     * @readonly
     */
    readonly sCSASAddress: OPTIONAL<SCSASAddress>;
    /**
     * @summary `listOfRANSecondaryRATUsageReports`.
     * @public
     * @readonly
     */
    readonly listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        p_GWAddress: GSNAddress,
        chargingID: INTEGER,
        servingNodeAddress: GSNAddress[],
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpPDNType: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddress: OPTIONAL<PDPAddress>,
        dynamicAddressFlag: OPTIONAL<BOOLEAN>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        apnSelectionMode: OPTIONAL<APNSelectionMode>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        iMSsignalingContext: OPTIONAL<NULL>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        cAMELChargingInformation: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servingNodeType: ServingNodeType[],
        servedMNNAI: OPTIONAL<SubscriptionID>,
        p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        served3gpp2MEID: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID: OPTIONAL<INTEGER>,
        iMSIunauthenticatedFlag: OPTIONAL<NULL>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        lowPriorityIndicator: OPTIONAL<NULL>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        servingNodeiPv6Address: OPTIONAL<GSNAddress[]>,
        p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>,
        tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>,
        retransmission: OPTIONAL<NULL>,
        userLocationInfoTime: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>,
        ePCQoSInformation: OPTIONAL<EPCQoSInformation>,
        presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>,
        lastUserLocationInformation: OPTIONAL<OCTET_STRING>,
        lastMSTimeZone: OPTIONAL<OCTET_STRING>,
        enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>,
        nBIFOMMode: OPTIONAL<NBIFOMMode>,
        nBIFOMSupport: OPTIONAL<NBIFOMSupport>,
        uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>,
        sGiPtPTunnellingMethod: OPTIONAL<SGiPtPTunnellingMethod>,
        uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>,
        servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>,
        aPNRateControl: OPTIONAL<APNRateControl>,
        pDPPDNTypeExtension: OPTIONAL<INTEGER>,
        mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>,
        chargingPerIPCANSessionIndicator: OPTIONAL<ChargingPerIPCANSessionIndicator>,
        threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>,
        sCSASAddress: OPTIONAL<SCSASAddress>,
        listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.p_GWAddress = p_GWAddress;
        this.chargingID = chargingID;
        this.servingNodeAddress = servingNodeAddress;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpPDNType = pdpPDNType;
        this.servedPDPPDNAddress = servedPDPPDNAddress;
        this.dynamicAddressFlag = dynamicAddressFlag;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.apnSelectionMode = apnSelectionMode;
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.iMSsignalingContext = iMSsignalingContext;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
        this.userLocationInformation = userLocationInformation;
        this.cAMELChargingInformation = cAMELChargingInformation;
        this.listOfServiceData = listOfServiceData;
        this.servingNodeType = servingNodeType;
        this.servedMNNAI = servedMNNAI;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.served3gpp2MEID = served3gpp2MEID;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
        this.userCSGInformation = userCSGInformation;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.lowPriorityIndicator = lowPriorityIndicator;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.retransmission = retransmission;
        this.userLocationInfoTime = userLocationInfoTime;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
        this.ePCQoSInformation = ePCQoSInformation;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.lastUserLocationInformation = lastUserLocationInformation;
        this.lastMSTimeZone = lastMSTimeZone;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.nBIFOMMode = nBIFOMMode;
        this.nBIFOMSupport = nBIFOMSupport;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.sGiPtPTunnellingMethod = sGiPtPTunnellingMethod;
        this.uNIPDUCPOnlyFlag = uNIPDUCPOnlyFlag;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.aPNRateControl = aPNRateControl;
        this.pDPPDNTypeExtension = pDPPDNTypeExtension;
        this.mOExceptionDataCounter = mOExceptionDataCounter;
        this.chargingPerIPCANSessionIndicator = chargingPerIPCANSessionIndicator;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.sCSASAddress = sCSASAddress;
        this.listOfRANSecondaryRATUsageReports = listOfRANSecondaryRATUsageReports;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PGWRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("PGWRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("PGWRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("PGWRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("PGWRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("PGWRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PGWRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("PGWRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("PGWRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PGWRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.stopTime violates SIZE constraint");
        }
        if (this.pDNConnectionChargingID !== undefined && (this.pDNConnectionChargingID < 0 || this.pDNConnectionChargingID > 4294967295)) {
            throw new ASN1OverflowError("PGWRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.userLocationInfoTime !== undefined && (this.userLocationInfoTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.userLocationInfoTime violates SIZE constraint");
        }
        if (this.lastMSTimeZone !== undefined && (this.lastMSTimeZone.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.lastMSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PGWRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PGWRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PGWRecord`.
     * @returns {PGWRecord}
     */
    public static _from_object (_o: { [_K in keyof (PGWRecord)]: (PGWRecord)[_K] }): PGWRecord {
        return new PGWRecord(_o.recordType, _o.servedIMSI, _o.p_GWAddress, _o.chargingID, _o.servingNodeAddress, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.iMSsignalingContext, _o.servingNodePLMNIdentifier, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.rATType, _o.mSTimeZone, _o.userLocationInformation, _o.cAMELChargingInformation, _o.listOfServiceData, _o.servingNodeType, _o.servedMNNAI, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.served3gpp2MEID, _o.pDNConnectionChargingID, _o.iMSIunauthenticatedFlag, _o.userCSGInformation, _o.threeGPP2UserLocationInformation, _o.servedPDPPDNAddressExt, _o.lowPriorityIndicator, _o.dynamicAddressFlagExt, _o.servingNodeiPv6Address, _o.p_GWiPv6AddressUsed, _o.tWANUserLocationInformation, _o.retransmission, _o.userLocationInfoTime, _o.cNOperatorSelectionEnt, _o.ePCQoSInformation, _o.presenceReportingAreaInfo, _o.lastUserLocationInformation, _o.lastMSTimeZone, _o.enhancedDiagnostics, _o.nBIFOMMode, _o.nBIFOMSupport, _o.uWANUserLocationInformation, _o.sGiPtPTunnellingMethod, _o.uNIPDUCPOnlyFlag, _o.servingPLMNRateControl, _o.aPNRateControl, _o.pDPPDNTypeExtension, _o.mOExceptionDataCounter, _o.chargingPerIPCANSessionIndicator, _o.threeGPPPSDataOffStatus, _o.sCSASAddress, _o.listOfRANSecondaryRATUsageReports);
    }

        /**
         * @summary The enum used as the type of the component `apnSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_apnSelectionMode = _enum_for_APNSelectionMode;        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `cNOperatorSelectionEnt`
         * @public
         * @static
         */

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;        /**
         * @summary The enum used as the type of the component `nBIFOMMode`
         * @public
         * @static
         */

    public static _enum_for_nBIFOMMode = _enum_for_NBIFOMMode;        /**
         * @summary The enum used as the type of the component `nBIFOMSupport`
         * @public
         * @static
         */

    public static _enum_for_nBIFOMSupport = _enum_for_NBIFOMSupport;        /**
         * @summary The enum used as the type of the component `sGiPtPTunnellingMethod`
         * @public
         * @static
         */

    public static _enum_for_sGiPtPTunnellingMethod = _enum_for_SGiPtPTunnellingMethod;        /**
         * @summary The enum used as the type of the component `chargingPerIPCANSessionIndicator`
         * @public
         * @static
         */

    public static _enum_for_chargingPerIPCANSessionIndicator = _enum_for_ChargingPerIPCANSessionIndicator;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of PGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PGWRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("p-GWAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("servingNodeAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pdpPDNType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedPDPPDNAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("apnSelectionMode", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("iMSsignalingContext", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("cAMELChargingInformation", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("served3gpp2MEID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("lowPriorityIndicator", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("ePCQoSInformation", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("lastUserLocationInformation", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("lastMSTimeZone", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("nBIFOMMode", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("nBIFOMSupport", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("sGiPtPTunnellingMethod", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("uNIPDUCPOnlyFlag", true, $.hasTag(_TagClass.context, 65)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 66)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 67)),
    new $.ComponentSpec("pDPPDNTypeExtension", true, $.hasTag(_TagClass.context, 68)),
    new $.ComponentSpec("mOExceptionDataCounter", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("chargingPerIPCANSessionIndicator", true, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 71)),
    new $.ComponentSpec("sCSASAddress", true, $.hasTag(_TagClass.context, 72)),
    new $.ComponentSpec("listOfRANSecondaryRATUsageReports", true, $.hasTag(_TagClass.context, 73))
];

/**
 * @summary The Trailing Root Component Types of PGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PGWRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PGWRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PGWRecord: $.ASN1Decoder<PGWRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PGWRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PGWRecord (el: _Element): PGWRecord {
    if (!_cached_decoder_for_PGWRecord) { _cached_decoder_for_PGWRecord = function (el: _Element): PGWRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let p_GWAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let servingNodeAddress!: GSNAddress[];
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpPDNType: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let apnSelectionMode: OPTIONAL<APNSelectionMode>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let iMSsignalingContext: OPTIONAL<NULL>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let cAMELChargingInformation: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servingNodeType!: ServingNodeType[];
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let lowPriorityIndicator: OPTIONAL<NULL>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let retransmission: OPTIONAL<NULL>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    let ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let lastUserLocationInformation: OPTIONAL<OCTET_STRING>;
    let lastMSTimeZone: OPTIONAL<OCTET_STRING>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let nBIFOMMode: OPTIONAL<NBIFOMMode>;
    let nBIFOMSupport: OPTIONAL<NBIFOMSupport>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let sGiPtPTunnellingMethod: OPTIONAL<SGiPtPTunnellingMethod>;
    let uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    let pDPPDNTypeExtension: OPTIONAL<INTEGER>;
    let mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
    let chargingPerIPCANSessionIndicator: OPTIONAL<ChargingPerIPCANSessionIndicator>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let sCSASAddress: OPTIONAL<SCSASAddress>;
    let listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "p-GWAddress": (_el: _Element): void => { p_GWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpPDNType": (_el: _Element): void => { pdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddress": (_el: _Element): void => { servedPDPPDNAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfCharCondition[]>(() => $._decodeSequenceOf<ChangeOfCharCondition>(() => _decode_ChangeOfCharCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "apnSelectionMode": (_el: _Element): void => { apnSelectionMode = $._decode_implicit<APNSelectionMode>(() => _decode_APNSelectionMode)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "iMSsignalingContext": (_el: _Element): void => { iMSsignalingContext = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELChargingInformation": (_el: _Element): void => { cAMELChargingInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType[]>(() => $._decodeSequenceOf<ServingNodeType>(() => _decode_ServingNodeType))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "served3gpp2MEID": (_el: _Element): void => { served3gpp2MEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "lowPriorityIndicator": (_el: _Element): void => { lowPriorityIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); },
        "ePCQoSInformation": (_el: _Element): void => { ePCQoSInformation = $._decode_implicit<EPCQoSInformation>(() => _decode_EPCQoSInformation)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "lastUserLocationInformation": (_el: _Element): void => { lastUserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lastMSTimeZone": (_el: _Element): void => { lastMSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "nBIFOMMode": (_el: _Element): void => { nBIFOMMode = $._decode_implicit<NBIFOMMode>(() => _decode_NBIFOMMode)(_el); },
        "nBIFOMSupport": (_el: _Element): void => { nBIFOMSupport = $._decode_implicit<NBIFOMSupport>(() => _decode_NBIFOMSupport)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "sGiPtPTunnellingMethod": (_el: _Element): void => { sGiPtPTunnellingMethod = $._decode_implicit<SGiPtPTunnellingMethod>(() => _decode_SGiPtPTunnellingMethod)(_el); },
        "uNIPDUCPOnlyFlag": (_el: _Element): void => { uNIPDUCPOnlyFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); },
        "pDPPDNTypeExtension": (_el: _Element): void => { pDPPDNTypeExtension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mOExceptionDataCounter": (_el: _Element): void => { mOExceptionDataCounter = $._decode_implicit<MOExceptionDataCounter>(() => _decode_MOExceptionDataCounter)(_el); },
        "chargingPerIPCANSessionIndicator": (_el: _Element): void => { chargingPerIPCANSessionIndicator = $._decode_implicit<ChargingPerIPCANSessionIndicator>(() => _decode_ChargingPerIPCANSessionIndicator)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "sCSASAddress": (_el: _Element): void => { sCSASAddress = $._decode_implicit<SCSASAddress>(() => _decode_SCSASAddress)(_el); },
        "listOfRANSecondaryRATUsageReports": (_el: _Element): void => { listOfRANSecondaryRATUsageReports = $._decode_implicit<RANSecondaryRATUsageReport[]>(() => $._decodeSequenceOf<RANSecondaryRATUsageReport>(() => _decode_RANSecondaryRATUsageReport))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PGWRecord,
        _extension_additions_list_spec_for_PGWRecord,
        _root_component_type_list_2_spec_for_PGWRecord,
        undefined,
    );
    return new PGWRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        p_GWAddress,
        chargingID,
        servingNodeAddress,
        accessPointNameNI,
        pdpPDNType,
        servedPDPPDNAddress,
        dynamicAddressFlag,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        apnSelectionMode,
        servedMSISDN,
        chargingCharacteristics,
        chChSelectionMode,
        iMSsignalingContext,
        servingNodePLMNIdentifier,
        pSFurnishChargingInformation,
        servedIMEI,
        rATType,
        mSTimeZone,
        userLocationInformation,
        cAMELChargingInformation,
        listOfServiceData,
        servingNodeType,
        servedMNNAI,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        served3gpp2MEID,
        pDNConnectionChargingID,
        iMSIunauthenticatedFlag,
        userCSGInformation,
        threeGPP2UserLocationInformation,
        servedPDPPDNAddressExt,
        lowPriorityIndicator,
        dynamicAddressFlagExt,
        servingNodeiPv6Address,
        p_GWiPv6AddressUsed,
        tWANUserLocationInformation,
        retransmission,
        userLocationInfoTime,
        cNOperatorSelectionEnt,
        ePCQoSInformation,
        presenceReportingAreaInfo,
        lastUserLocationInformation,
        lastMSTimeZone,
        enhancedDiagnostics,
        nBIFOMMode,
        nBIFOMSupport,
        uWANUserLocationInformation,
        sGiPtPTunnellingMethod,
        uNIPDUCPOnlyFlag,
        servingPLMNRateControl,
        aPNRateControl,
        pDPPDNTypeExtension,
        mOExceptionDataCounter,
        chargingPerIPCANSessionIndicator,
        threeGPPPSDataOffStatus,
        sCSASAddress,
        listOfRANSecondaryRATUsageReports
    );
}; }
    return _cached_decoder_for_PGWRecord(el);
}

let _cached_encoder_for_PGWRecord: $.ASN1Encoder<PGWRecord> | null = null;

/**
 * @summary Encodes a(n) PGWRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGWRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PGWRecord (value: PGWRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PGWRecord) { _cached_encoder_for_PGWRecord = function (value: PGWRecord, _elGetter: $.ASN1Encoder<PGWRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.p_GWAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeAddress, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.pdpPDNType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.pdpPDNType, $.BER));
    }
    if (value.servedPDPPDNAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddress, $.BER));
    }
    if (value.dynamicAddressFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlag, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<ChangeOfCharCondition>(() => _encode_ChangeOfCharCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.apnSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_APNSelectionMode, $.BER)(value.apnSelectionMode, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.iMSsignalingContext !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeNull, $.BER)(value.iMSsignalingContext, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.cAMELChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.cAMELChargingInformation, $.BER));
    }
    if (value.listOfServiceData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeSequenceOf<ChangeOfServiceCondition>(() => _encode_ChangeOfServiceCondition, $.BER), $.BER)(value.listOfServiceData, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSequenceOf<ServingNodeType>(() => _encode_ServingNodeType, $.BER), $.BER)(value.servingNodeType, $.BER));
    if (value.servedMNNAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SubscriptionID, $.BER)(value.servedMNNAI, $.BER));
    }
    if (value.p_GWPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.p_GWPLMNIdentifier, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    if (value.served3gpp2MEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeOctetString, $.BER)(value.served3gpp2MEID, $.BER));
    }
    if (value.pDNConnectionChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.lowPriorityIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => $._encodeNull, $.BER)(value.lowPriorityIndicator, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.tWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => _encode_TWANUserLocationInfo, $.BER)(value.tWANUserLocationInformation, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    if (value.ePCQoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => _encode_EPCQoSInformation, $.BER)(value.ePCQoSInformation, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    if (value.lastUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => $._encodeOctetString, $.BER)(value.lastUserLocationInformation, $.BER));
    }
    if (value.lastMSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER)(value.lastMSTimeZone, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.nBIFOMMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => _encode_NBIFOMMode, $.BER)(value.nBIFOMMode, $.BER));
    }
    if (value.nBIFOMSupport !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_NBIFOMSupport, $.BER)(value.nBIFOMSupport, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.sGiPtPTunnellingMethod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => _encode_SGiPtPTunnellingMethod, $.BER)(value.sGiPtPTunnellingMethod, $.BER));
    }
    if (value.uNIPDUCPOnlyFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => $._encodeBoolean, $.BER)(value.uNIPDUCPOnlyFlag, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 66, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 67, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    if (value.pDPPDNTypeExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 68, () => $._encodeInteger, $.BER)(value.pDPPDNTypeExtension, $.BER));
    }
    if (value.mOExceptionDataCounter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 69, () => _encode_MOExceptionDataCounter, $.BER)(value.mOExceptionDataCounter, $.BER));
    }
    if (value.chargingPerIPCANSessionIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 70, () => _encode_ChargingPerIPCANSessionIndicator, $.BER)(value.chargingPerIPCANSessionIndicator, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 71, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.sCSASAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 72, () => _encode_SCSASAddress, $.BER)(value.sCSASAddress, $.BER));
    }
    if (value.listOfRANSecondaryRATUsageReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 73, () => $._encodeSequenceOf<RANSecondaryRATUsageReport>(() => _encode_RANSecondaryRATUsageReport, $.BER), $.BER)(value.listOfRANSecondaryRATUsageReports, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PGWRecord(value, elGetter);
}


/* eslint-enable */
