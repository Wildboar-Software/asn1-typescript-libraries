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
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { MOExceptionDataCounter, _decode_MOExceptionDataCounter, _encode_MOExceptionDataCounter } from "../GPRSChargingDataTypes/MOExceptionDataCounter.ta.mjs";
import { RANSecondaryRATUsageReport, _decode_RANSecondaryRATUsageReport, _encode_RANSecondaryRATUsageReport } from "../GPRSChargingDataTypes/RANSecondaryRATUsageReport.ta.mjs";


/**
 * @summary SGWRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGWRecord ::= SET {
 *    recordType                          [0] IMPLICIT RecordType,
 *    servedIMSI                          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    s-GWAddress                         [4] GSNAddress,
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
 *    servedIMEI                          [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                             [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                          [31] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    userLocationInformation             [32] IMPLICIT OCTET STRING OPTIONAL,
 *    sGWChange                           [34] IMPLICIT BOOLEAN OPTIONAL,
 *    servingNodeType                     [35] IMPLICIT SEQUENCE  OF
 *       ServingNodeType,
 *    p-GWAddressUsed                     [36] GSNAddress OPTIONAL,
 *    p-GWPLMNIdentifier                  [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                           [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                            [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    pDNConnectionChargingID             [40] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    iMSIunauthenticatedFlag             [41] IMPLICIT NULL OPTIONAL,
 *    userCSGInformation                  [42] IMPLICIT UserCSGInformation OPTIONAL,
 *    servedPDPPDNAddressExt              [43] PDPAddress OPTIONAL,
 *    lowPriorityIndicator                [44] IMPLICIT NULL OPTIONAL,
 *    dynamicAddressFlagExt               [47] IMPLICIT BOOLEAN OPTIONAL,
 *    s-GWiPv6Address                     [48] GSNAddress OPTIONAL,
 *    servingNodeiPv6Address              [49] IMPLICIT SEQUENCE  OF
 *       GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed                 [50] GSNAddress OPTIONAL,
 *    retransmission                      [51] IMPLICIT NULL OPTIONAL,
 *    userLocationInfoTime                [52] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt              [53] IMPLICIT CNOperatorSelectionEntity OPTIONAL,
 *    presenceReportingAreaInfo           [54] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    lastUserLocationInformation         [55] IMPLICIT OCTET STRING OPTIONAL,
 *    lastMSTimeZone                      [56] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    enhancedDiagnostics                 [57] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    cPCIoTEPSOptimisationIndicator      [59] IMPLICIT BOOLEAN OPTIONAL,
 *    uNIPDUCPOnlyFlag                    [60] IMPLICIT BOOLEAN OPTIONAL,
 *    servingPLMNRateControl              [61] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    pDPPDNTypeExtension                 [62] IMPLICIT INTEGER OPTIONAL,
 *    mOExceptionDataCounter              [63] IMPLICIT MOExceptionDataCounter OPTIONAL,
 *    listOfRANSecondaryRATUsageReports   [64] IMPLICIT SEQUENCE  OF
 *       RANSecondaryRATUsageReport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGWRecord {
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
     * @summary `s_GWAddress`.
     * @public
     * @readonly
     */
    readonly s_GWAddress: GSNAddress;
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
     * @summary `sGWChange`.
     * @public
     * @readonly
     */
    readonly sGWChange: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servingNodeType`.
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType[];
    /**
     * @summary `p_GWAddressUsed`.
     * @public
     * @readonly
     */
    readonly p_GWAddressUsed: OPTIONAL<GSNAddress>;
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
     * @summary `s_GWiPv6Address`.
     * @public
     * @readonly
     */
    readonly s_GWiPv6Address: OPTIONAL<GSNAddress>;
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
     * @summary `cPCIoTEPSOptimisationIndicator`.
     * @public
     * @readonly
     */
    readonly cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
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
     * @summary `listOfRANSecondaryRATUsageReports`.
     * @public
     * @readonly
     */
    readonly listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        s_GWAddress: GSNAddress,
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
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        sGWChange: OPTIONAL<BOOLEAN>,
        servingNodeType: ServingNodeType[],
        p_GWAddressUsed: OPTIONAL<GSNAddress>,
        p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID: OPTIONAL<INTEGER>,
        iMSIunauthenticatedFlag: OPTIONAL<NULL>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        lowPriorityIndicator: OPTIONAL<NULL>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        s_GWiPv6Address: OPTIONAL<GSNAddress>,
        servingNodeiPv6Address: OPTIONAL<GSNAddress[]>,
        p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>,
        retransmission: OPTIONAL<NULL>,
        userLocationInfoTime: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>,
        presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>,
        lastUserLocationInformation: OPTIONAL<OCTET_STRING>,
        lastMSTimeZone: OPTIONAL<OCTET_STRING>,
        enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>,
        cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>,
        uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>,
        servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>,
        pDPPDNTypeExtension: OPTIONAL<INTEGER>,
        mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>,
        listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.s_GWAddress = s_GWAddress;
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
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
        this.userLocationInformation = userLocationInformation;
        this.sGWChange = sGWChange;
        this.servingNodeType = servingNodeType;
        this.p_GWAddressUsed = p_GWAddressUsed;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
        this.userCSGInformation = userCSGInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.lowPriorityIndicator = lowPriorityIndicator;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.s_GWiPv6Address = s_GWiPv6Address;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.retransmission = retransmission;
        this.userLocationInfoTime = userLocationInfoTime;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.lastUserLocationInformation = lastUserLocationInformation;
        this.lastMSTimeZone = lastMSTimeZone;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.cPCIoTEPSOptimisationIndicator = cPCIoTEPSOptimisationIndicator;
        this.uNIPDUCPOnlyFlag = uNIPDUCPOnlyFlag;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.pDPPDNTypeExtension = pDPPDNTypeExtension;
        this.mOExceptionDataCounter = mOExceptionDataCounter;
        this.listOfRANSecondaryRATUsageReports = listOfRANSecondaryRATUsageReports;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SGWRecord.servedIMSI violates SIZE constraint");
        }
        if (((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("SGWRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SGWRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGWRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("SGWRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SGWRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGWRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SGWRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("SGWRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGWRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.stopTime violates SIZE constraint");
        }
        if (this.pDNConnectionChargingID !== undefined && ((typeof this.pDNConnectionChargingID === "bigint" ? Number(this.pDNConnectionChargingID) : this.pDNConnectionChargingID) < 0 || (typeof this.pDNConnectionChargingID === "bigint" ? Number(this.pDNConnectionChargingID) : this.pDNConnectionChargingID) > 4294967295)) {
            throw new ASN1OverflowError("SGWRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.userLocationInfoTime !== undefined && (this.userLocationInfoTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.userLocationInfoTime violates SIZE constraint");
        }
        if (this.lastMSTimeZone !== undefined && (this.lastMSTimeZone.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.lastMSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGWRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGWRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGWRecord`.
     * @returns {SGWRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGWRecord)]: (SGWRecord)[_K] }): SGWRecord {
        return new SGWRecord(_o.recordType, _o.servedIMSI, _o.s_GWAddress, _o.chargingID, _o.servingNodeAddress, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.iMSsignalingContext, _o.servingNodePLMNIdentifier, _o.servedIMEI, _o.rATType, _o.mSTimeZone, _o.userLocationInformation, _o.sGWChange, _o.servingNodeType, _o.p_GWAddressUsed, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.pDNConnectionChargingID, _o.iMSIunauthenticatedFlag, _o.userCSGInformation, _o.servedPDPPDNAddressExt, _o.lowPriorityIndicator, _o.dynamicAddressFlagExt, _o.s_GWiPv6Address, _o.servingNodeiPv6Address, _o.p_GWiPv6AddressUsed, _o.retransmission, _o.userLocationInfoTime, _o.cNOperatorSelectionEnt, _o.presenceReportingAreaInfo, _o.lastUserLocationInformation, _o.lastMSTimeZone, _o.enhancedDiagnostics, _o.cPCIoTEPSOptimisationIndicator, _o.uNIPDUCPOnlyFlag, _o.servingPLMNRateControl, _o.pDPPDNTypeExtension, _o.mOExceptionDataCounter, _o.listOfRANSecondaryRATUsageReports);
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

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;
}

/**
 * @summary The Leading Root Component Types of SGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGWRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("s-GWAddress", false, $.hasTag(_TagClass.context, 4)),
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
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("sGWChange", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("p-GWAddressUsed", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("lowPriorityIndicator", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("s-GWiPv6Address", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("lastUserLocationInformation", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("lastMSTimeZone", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("cPCIoTEPSOptimisationIndicator", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("uNIPDUCPOnlyFlag", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("pDPPDNTypeExtension", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("mOExceptionDataCounter", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("listOfRANSecondaryRATUsageReports", true, $.hasTag(_TagClass.context, 64))
];

/**
 * @summary The Trailing Root Component Types of SGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGWRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGWRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGWRecord: $.ASN1Decoder<SGWRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGWRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGWRecord (el: _Element): SGWRecord {
    if (!_cached_decoder_for_SGWRecord) { _cached_decoder_for_SGWRecord = function (el: _Element): SGWRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let s_GWAddress!: GSNAddress;
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
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let sGWChange: OPTIONAL<BOOLEAN>;
    let servingNodeType!: ServingNodeType[];
    let p_GWAddressUsed: OPTIONAL<GSNAddress>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let lowPriorityIndicator: OPTIONAL<NULL>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let s_GWiPv6Address: OPTIONAL<GSNAddress>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let lastUserLocationInformation: OPTIONAL<OCTET_STRING>;
    let lastMSTimeZone: OPTIONAL<OCTET_STRING>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
    let uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let pDPPDNTypeExtension: OPTIONAL<INTEGER>;
    let mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
    let listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "s-GWAddress": (_el: _Element): void => { s_GWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
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
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGWChange": (_el: _Element): void => { sGWChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType[]>(() => $._decodeSequenceOf<ServingNodeType>(() => _decode_ServingNodeType))(_el); },
        "p-GWAddressUsed": (_el: _Element): void => { p_GWAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "lowPriorityIndicator": (_el: _Element): void => { lowPriorityIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "s-GWiPv6Address": (_el: _Element): void => { s_GWiPv6Address = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "lastUserLocationInformation": (_el: _Element): void => { lastUserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lastMSTimeZone": (_el: _Element): void => { lastMSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "cPCIoTEPSOptimisationIndicator": (_el: _Element): void => { cPCIoTEPSOptimisationIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "uNIPDUCPOnlyFlag": (_el: _Element): void => { uNIPDUCPOnlyFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "pDPPDNTypeExtension": (_el: _Element): void => { pDPPDNTypeExtension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mOExceptionDataCounter": (_el: _Element): void => { mOExceptionDataCounter = $._decode_implicit<MOExceptionDataCounter>(() => _decode_MOExceptionDataCounter)(_el); },
        "listOfRANSecondaryRATUsageReports": (_el: _Element): void => { listOfRANSecondaryRATUsageReports = $._decode_implicit<RANSecondaryRATUsageReport[]>(() => $._decodeSequenceOf<RANSecondaryRATUsageReport>(() => _decode_RANSecondaryRATUsageReport))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGWRecord,
        _extension_additions_list_spec_for_SGWRecord,
        _root_component_type_list_2_spec_for_SGWRecord,
        undefined,
    );
    return new SGWRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        s_GWAddress,
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
        servedIMEI,
        rATType,
        mSTimeZone,
        userLocationInformation,
        sGWChange,
        servingNodeType,
        p_GWAddressUsed,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        pDNConnectionChargingID,
        iMSIunauthenticatedFlag,
        userCSGInformation,
        servedPDPPDNAddressExt,
        lowPriorityIndicator,
        dynamicAddressFlagExt,
        s_GWiPv6Address,
        servingNodeiPv6Address,
        p_GWiPv6AddressUsed,
        retransmission,
        userLocationInfoTime,
        cNOperatorSelectionEnt,
        presenceReportingAreaInfo,
        lastUserLocationInformation,
        lastMSTimeZone,
        enhancedDiagnostics,
        cPCIoTEPSOptimisationIndicator,
        uNIPDUCPOnlyFlag,
        servingPLMNRateControl,
        pDPPDNTypeExtension,
        mOExceptionDataCounter,
        listOfRANSecondaryRATUsageReports
    );
}; }
    return _cached_decoder_for_SGWRecord(el);
}

let _cached_encoder_for_SGWRecord: $.ASN1Encoder<SGWRecord> | null = null;

/**
 * @summary Encodes a(n) SGWRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGWRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGWRecord (value: SGWRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGWRecord) { _cached_encoder_for_SGWRecord = function (value: SGWRecord, _elGetter: $.ASN1Encoder<SGWRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.s_GWAddress, $.BER));
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
    if (value.sGWChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.sGWChange, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSequenceOf<ServingNodeType>(() => _encode_ServingNodeType, $.BER), $.BER)(value.servingNodeType, $.BER));
    if (value.p_GWAddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 36, () => _encode_GSNAddress, $.BER)(value.p_GWAddressUsed, $.BER));
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
    if (value.pDNConnectionChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.lowPriorityIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeNull, $.BER)(value.lowPriorityIndicator, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.s_GWiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 48, () => _encode_GSNAddress, $.BER)(value.s_GWiPv6Address, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    if (value.lastUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.lastUserLocationInformation, $.BER));
    }
    if (value.lastMSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.lastMSTimeZone, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.cPCIoTEPSOptimisationIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeBoolean, $.BER)(value.cPCIoTEPSOptimisationIndicator, $.BER));
    }
    if (value.uNIPDUCPOnlyFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeBoolean, $.BER)(value.uNIPDUCPOnlyFlag, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.pDPPDNTypeExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeInteger, $.BER)(value.pDPPDNTypeExtension, $.BER));
    }
    if (value.mOExceptionDataCounter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => _encode_MOExceptionDataCounter, $.BER)(value.mOExceptionDataCounter, $.BER));
    }
    if (value.listOfRANSecondaryRATUsageReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeSequenceOf<RANSecondaryRATUsageReport>(() => _encode_RANSecondaryRATUsageReport, $.BER), $.BER)(value.listOfRANSecondaryRATUsageReports, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGWRecord(value, elGetter);
}


/* eslint-enable */
