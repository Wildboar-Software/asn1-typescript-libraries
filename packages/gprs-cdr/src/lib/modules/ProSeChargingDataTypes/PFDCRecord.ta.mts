/* eslint-disable */
import {
    IA5String,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../ProSeChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../ProSeChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ProSeChargingDataTypes/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ProSeChargingDataTypes/IPAddress.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../ProSeChargingDataTypes/ChChSelectionMode.ta.mjs";
// export { ChChSelectionMode, _enum_for_ChChSelectionMode, ChChSelectionMode_servingNodeSupplied /* IMPORTED_LONG_ENUMERATION_ITEM */, servingNodeSupplied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_subscriptionSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_aPNSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_homeDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, homeDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_roamingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_visitingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, visitingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_fixedDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, fixedDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChChSelectionMode, _encode_ChChSelectionMode } from "../ProSeChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ProSeChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ProSeChargingDataTypes/ManagementExtension.ta.mjs";
import { CoverageInfo, _decode_CoverageInfo, _encode_CoverageInfo } from "../ProSeChargingDataTypes/CoverageInfo.ta.mjs";
// export { CoverageInfo, _decode_CoverageInfo, _encode_CoverageInfo } from "../ProSeChargingDataTypes/CoverageInfo.ta.mjs";
import { RadioParameterSetInfo, _decode_RadioParameterSetInfo, _encode_RadioParameterSetInfo } from "../ProSeChargingDataTypes/RadioParameterSetInfo.ta.mjs";
// export { RadioParameterSetInfo, _decode_RadioParameterSetInfo, _encode_RadioParameterSetInfo } from "../ProSeChargingDataTypes/RadioParameterSetInfo.ta.mjs";
import { TransmitterInfo, _decode_TransmitterInfo, _encode_TransmitterInfo } from "../ProSeChargingDataTypes/TransmitterInfo.ta.mjs";
// export { TransmitterInfo, _decode_TransmitterInfo, _encode_TransmitterInfo } from "../ProSeChargingDataTypes/TransmitterInfo.ta.mjs";
import { ChangeOfProSeCondition, _decode_ChangeOfProSeCondition, _encode_ChangeOfProSeCondition } from "../ProSeChargingDataTypes/ChangeOfProSeCondition.ta.mjs";
// export { ChangeOfProSeCondition, _decode_ChangeOfProSeCondition, _encode_ChangeOfProSeCondition } from "../ProSeChargingDataTypes/ChangeOfProSeCondition.ta.mjs";
import { ProSeCauseForRecClosing, _decode_ProSeCauseForRecClosing, _encode_ProSeCauseForRecClosing, _enum_for_ProSeCauseForRecClosing } from "../ProSeChargingDataTypes/ProSeCauseForRecClosing.ta.mjs";
// export { ProSeCauseForRecClosing, _enum_for_ProSeCauseForRecClosing, ProSeCauseForRecClosing_proximityAlerted /* IMPORTED_LONG_ENUMERATION_ITEM */, proximityAlerted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_timeExpiredWithNoRrenewal /* IMPORTED_LONG_ENUMERATION_ITEM */, timeExpiredWithNoRrenewal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_requestorCancellation /* IMPORTED_LONG_ENUMERATION_ITEM */, requestorCancellation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_timeLimited /* IMPORTED_LONG_ENUMERATION_ITEM */, timeLimited /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_maxNumberOfReports /* IMPORTED_LONG_ENUMERATION_ITEM */, maxNumberOfReports /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_abnormalRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeCauseForRecClosing, _encode_ProSeCauseForRecClosing } from "../ProSeChargingDataTypes/ProSeCauseForRecClosing.ta.mjs";


/**
 * @summary PFDCRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDCRecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    retransmission                 [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID               [2] IMPLICIT UTF8String OPTIONAL,
 *    servedIMSI                     [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    proSeFunctionIPAddress         [4] IPAddress OPTIONAL,
 *    chargingCharacteristics        [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode              [6] IMPLICIT ChChSelectionMode OPTIONAL,
 *    recordExtensions               [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    nodeID                         [8] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    proseFunctionPLMNIdentifier    [9] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    proseFunctionId                [10] IMPLICIT UTF8String OPTIONAL,
 *    recordOpeningTime              [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime              [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    listOfCoverageInfo             [13] IMPLICIT SEQUENCE  OF
 *       CoverageInfo OPTIONAL,
 *    listOfRadioParameterSet        [14] IMPLICIT SEQUENCE  OF
 *       RadioParameterSetInfo OPTIONAL,
 *    proSeUEID                      [15] IMPLICIT OCTET STRING OPTIONAL,
 *    sourceIPaddress                [16] IPAddress OPTIONAL,
 *    layerTwoGroupID                [17] IMPLICIT OCTET STRING OPTIONAL,
 *    proSeGroupIPmulticastaddress   [18] IPAddress OPTIONAL,
 *    timeOfFirstTransmission        [19] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfFirstReception           [20] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    listOfTransmitters             [21] IMPLICIT SEQUENCE  OF
 *       TransmitterInfo OPTIONAL,
 *    listOfTransmissionData         [22] IMPLICIT SEQUENCE  OF
 *       ChangeOfProSeCondition OPTIONAL,
 *    listOfReceptionData            [23] IMPLICIT SEQUENCE  OF
 *       ChangeOfProSeCondition OPTIONAL,
 *    causeForRecClosing             [24] IMPLICIT ProSeCauseForRecClosing,
 *    listOfAppSpecificData          [25] IMPLICIT SEQUENCE  OF
 *       OCTET STRING,
 *    targetIPaddress                [26] IPAddress OPTIONAL,
 *    relayIPaddress                 [27] IPAddress OPTIONAL,
 *    proSeUEtoNetworkRelayUEID      [28] IMPLICIT OCTET STRING OPTIONAL,
 *    proSeTargetLayerTwoID          [29] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PFDCRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeFunctionIPAddress`.
     * @public
     * @readonly
     */
    readonly proSeFunctionIPAddress: OPTIONAL<IPAddress>;
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
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `proseFunctionPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proseFunctionId`.
     * @public
     * @readonly
     */
    readonly proseFunctionId: OPTIONAL<UTF8String>;
    /**
     * @summary `recordOpeningTime`.
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordClosureTime`.
     * @public
     * @readonly
     */
    readonly recordClosureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfCoverageInfo`.
     * @public
     * @readonly
     */
    readonly listOfCoverageInfo: OPTIONAL<CoverageInfo[]>;
    /**
     * @summary `listOfRadioParameterSet`.
     * @public
     * @readonly
     */
    readonly listOfRadioParameterSet: OPTIONAL<RadioParameterSetInfo[]>;
    /**
     * @summary `proSeUEID`.
     * @public
     * @readonly
     */
    readonly proSeUEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sourceIPaddress`.
     * @public
     * @readonly
     */
    readonly sourceIPaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `layerTwoGroupID`.
     * @public
     * @readonly
     */
    readonly layerTwoGroupID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeGroupIPmulticastaddress`.
     * @public
     * @readonly
     */
    readonly proSeGroupIPmulticastaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `timeOfFirstTransmission`.
     * @public
     * @readonly
     */
    readonly timeOfFirstTransmission: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfFirstReception`.
     * @public
     * @readonly
     */
    readonly timeOfFirstReception: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfTransmitters`.
     * @public
     * @readonly
     */
    readonly listOfTransmitters: OPTIONAL<TransmitterInfo[]>;
    /**
     * @summary `listOfTransmissionData`.
     * @public
     * @readonly
     */
    readonly listOfTransmissionData: OPTIONAL<ChangeOfProSeCondition[]>;
    /**
     * @summary `listOfReceptionData`.
     * @public
     * @readonly
     */
    readonly listOfReceptionData: OPTIONAL<ChangeOfProSeCondition[]>;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: ProSeCauseForRecClosing;
    /**
     * @summary `listOfAppSpecificData`.
     * @public
     * @readonly
     */
    readonly listOfAppSpecificData: OCTET_STRING[];
    /**
     * @summary `targetIPaddress`.
     * @public
     * @readonly
     */
    readonly targetIPaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `relayIPaddress`.
     * @public
     * @readonly
     */
    readonly relayIPaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `proSeUEtoNetworkRelayUEID`.
     * @public
     * @readonly
     */
    readonly proSeUEtoNetworkRelayUEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeTargetLayerTwoID`.
     * @public
     * @readonly
     */
    readonly proSeTargetLayerTwoID: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        proSeFunctionIPAddress: OPTIONAL<IPAddress>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        nodeID: OPTIONAL<IA5String>,
        proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        proseFunctionId: OPTIONAL<UTF8String>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        listOfCoverageInfo: OPTIONAL<CoverageInfo[]>,
        listOfRadioParameterSet: OPTIONAL<RadioParameterSetInfo[]>,
        proSeUEID: OPTIONAL<OCTET_STRING>,
        sourceIPaddress: OPTIONAL<IPAddress>,
        layerTwoGroupID: OPTIONAL<OCTET_STRING>,
        proSeGroupIPmulticastaddress: OPTIONAL<IPAddress>,
        timeOfFirstTransmission: OPTIONAL<OCTET_STRING>,
        timeOfFirstReception: OPTIONAL<OCTET_STRING>,
        listOfTransmitters: OPTIONAL<TransmitterInfo[]>,
        listOfTransmissionData: OPTIONAL<ChangeOfProSeCondition[]>,
        listOfReceptionData: OPTIONAL<ChangeOfProSeCondition[]>,
        causeForRecClosing: ProSeCauseForRecClosing,
        listOfAppSpecificData: OCTET_STRING[],
        targetIPaddress: OPTIONAL<IPAddress>,
        relayIPaddress: OPTIONAL<IPAddress>,
        proSeUEtoNetworkRelayUEID: OPTIONAL<OCTET_STRING>,
        proSeTargetLayerTwoID: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.servedIMSI = servedIMSI;
        this.proSeFunctionIPAddress = proSeFunctionIPAddress;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.recordExtensions = recordExtensions;
        this.nodeID = nodeID;
        this.proseFunctionPLMNIdentifier = proseFunctionPLMNIdentifier;
        this.proseFunctionId = proseFunctionId;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.listOfCoverageInfo = listOfCoverageInfo;
        this.listOfRadioParameterSet = listOfRadioParameterSet;
        this.proSeUEID = proSeUEID;
        this.sourceIPaddress = sourceIPaddress;
        this.layerTwoGroupID = layerTwoGroupID;
        this.proSeGroupIPmulticastaddress = proSeGroupIPmulticastaddress;
        this.timeOfFirstTransmission = timeOfFirstTransmission;
        this.timeOfFirstReception = timeOfFirstReception;
        this.listOfTransmitters = listOfTransmitters;
        this.listOfTransmissionData = listOfTransmissionData;
        this.listOfReceptionData = listOfReceptionData;
        this.causeForRecClosing = causeForRecClosing;
        this.listOfAppSpecificData = listOfAppSpecificData;
        this.targetIPaddress = targetIPaddress;
        this.relayIPaddress = relayIPaddress;
        this.proSeUEtoNetworkRelayUEID = proSeUEtoNetworkRelayUEID;
        this.proSeTargetLayerTwoID = proSeTargetLayerTwoID;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PFDCRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PFDCRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("PFDCRecord.nodeID violates SIZE constraint");
        }
        if (this.proseFunctionPLMNIdentifier !== undefined && (this.proseFunctionPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDCRecord.proseFunctionPLMNIdentifier violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.timeOfFirstTransmission !== undefined && (this.timeOfFirstTransmission.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.timeOfFirstTransmission violates SIZE constraint");
        }
        if (this.timeOfFirstReception !== undefined && (this.timeOfFirstReception.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.timeOfFirstReception violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PFDCRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PFDCRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDCRecord`.
     * @returns {PFDCRecord}
     */
    public static _from_object (_o: { [_K in keyof (PFDCRecord)]: (PFDCRecord)[_K] }): PFDCRecord {
        return new PFDCRecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.servedIMSI, _o.proSeFunctionIPAddress, _o.chargingCharacteristics, _o.chChSelectionMode, _o.recordExtensions, _o.nodeID, _o.proseFunctionPLMNIdentifier, _o.proseFunctionId, _o.recordOpeningTime, _o.recordClosureTime, _o.listOfCoverageInfo, _o.listOfRadioParameterSet, _o.proSeUEID, _o.sourceIPaddress, _o.layerTwoGroupID, _o.proSeGroupIPmulticastaddress, _o.timeOfFirstTransmission, _o.timeOfFirstReception, _o.listOfTransmitters, _o.listOfTransmissionData, _o.listOfReceptionData, _o.causeForRecClosing, _o.listOfAppSpecificData, _o.targetIPaddress, _o.relayIPaddress, _o.proSeUEtoNetworkRelayUEID, _o.proSeTargetLayerTwoID);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `causeForRecClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecClosing = _enum_for_ProSeCauseForRecClosing;
}

/**
 * @summary The Leading Root Component Types of PFDCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDCRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("proSeFunctionIPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("proseFunctionPLMNIdentifier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("proseFunctionId", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("listOfCoverageInfo", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("listOfRadioParameterSet", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("proSeUEID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sourceIPaddress", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("layerTwoGroupID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("proSeGroupIPmulticastaddress", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("timeOfFirstTransmission", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("timeOfFirstReception", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("listOfTransmitters", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("listOfTransmissionData", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("listOfReceptionData", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("listOfAppSpecificData", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("targetIPaddress", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("relayIPaddress", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("proSeUEtoNetworkRelayUEID", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("proSeTargetLayerTwoID", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of PFDCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDCRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDCRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDCRecord: $.ASN1Decoder<PFDCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDCRecord (el: _Element): PFDCRecord {
    if (!_cached_decoder_for_PFDCRecord) { _cached_decoder_for_PFDCRecord = function (el: _Element): PFDCRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let proSeFunctionIPAddress: OPTIONAL<IPAddress>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let nodeID: OPTIONAL<IA5String>;
    let proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let proseFunctionId: OPTIONAL<UTF8String>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let listOfCoverageInfo: OPTIONAL<CoverageInfo[]>;
    let listOfRadioParameterSet: OPTIONAL<RadioParameterSetInfo[]>;
    let proSeUEID: OPTIONAL<OCTET_STRING>;
    let sourceIPaddress: OPTIONAL<IPAddress>;
    let layerTwoGroupID: OPTIONAL<OCTET_STRING>;
    let proSeGroupIPmulticastaddress: OPTIONAL<IPAddress>;
    let timeOfFirstTransmission: OPTIONAL<OCTET_STRING>;
    let timeOfFirstReception: OPTIONAL<OCTET_STRING>;
    let listOfTransmitters: OPTIONAL<TransmitterInfo[]>;
    let listOfTransmissionData: OPTIONAL<ChangeOfProSeCondition[]>;
    let listOfReceptionData: OPTIONAL<ChangeOfProSeCondition[]>;
    let causeForRecClosing!: ProSeCauseForRecClosing;
    let listOfAppSpecificData!: OCTET_STRING[];
    let targetIPaddress: OPTIONAL<IPAddress>;
    let relayIPaddress: OPTIONAL<IPAddress>;
    let proSeUEtoNetworkRelayUEID: OPTIONAL<OCTET_STRING>;
    let proSeTargetLayerTwoID: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeFunctionIPAddress": (_el: _Element): void => { proSeFunctionIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "proseFunctionPLMNIdentifier": (_el: _Element): void => { proseFunctionPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proseFunctionId": (_el: _Element): void => { proseFunctionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfCoverageInfo": (_el: _Element): void => { listOfCoverageInfo = $._decode_implicit<CoverageInfo[]>(() => $._decodeSequenceOf<CoverageInfo>(() => _decode_CoverageInfo))(_el); },
        "listOfRadioParameterSet": (_el: _Element): void => { listOfRadioParameterSet = $._decode_implicit<RadioParameterSetInfo[]>(() => $._decodeSequenceOf<RadioParameterSetInfo>(() => _decode_RadioParameterSetInfo))(_el); },
        "proSeUEID": (_el: _Element): void => { proSeUEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sourceIPaddress": (_el: _Element): void => { sourceIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "layerTwoGroupID": (_el: _Element): void => { layerTwoGroupID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeGroupIPmulticastaddress": (_el: _Element): void => { proSeGroupIPmulticastaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "timeOfFirstTransmission": (_el: _Element): void => { timeOfFirstTransmission = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfFirstReception": (_el: _Element): void => { timeOfFirstReception = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfTransmitters": (_el: _Element): void => { listOfTransmitters = $._decode_implicit<TransmitterInfo[]>(() => $._decodeSequenceOf<TransmitterInfo>(() => _decode_TransmitterInfo))(_el); },
        "listOfTransmissionData": (_el: _Element): void => { listOfTransmissionData = $._decode_implicit<ChangeOfProSeCondition[]>(() => $._decodeSequenceOf<ChangeOfProSeCondition>(() => _decode_ChangeOfProSeCondition))(_el); },
        "listOfReceptionData": (_el: _Element): void => { listOfReceptionData = $._decode_implicit<ChangeOfProSeCondition[]>(() => $._decodeSequenceOf<ChangeOfProSeCondition>(() => _decode_ChangeOfProSeCondition))(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<ProSeCauseForRecClosing>(() => _decode_ProSeCauseForRecClosing)(_el); },
        "listOfAppSpecificData": (_el: _Element): void => { listOfAppSpecificData = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "targetIPaddress": (_el: _Element): void => { targetIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "relayIPaddress": (_el: _Element): void => { relayIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "proSeUEtoNetworkRelayUEID": (_el: _Element): void => { proSeUEtoNetworkRelayUEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeTargetLayerTwoID": (_el: _Element): void => { proSeTargetLayerTwoID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PFDCRecord,
        _extension_additions_list_spec_for_PFDCRecord,
        _root_component_type_list_2_spec_for_PFDCRecord,
        undefined,
    );
    return new PFDCRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        servedIMSI,
        proSeFunctionIPAddress,
        chargingCharacteristics,
        chChSelectionMode,
        recordExtensions,
        nodeID,
        proseFunctionPLMNIdentifier,
        proseFunctionId,
        recordOpeningTime,
        recordClosureTime,
        listOfCoverageInfo,
        listOfRadioParameterSet,
        proSeUEID,
        sourceIPaddress,
        layerTwoGroupID,
        proSeGroupIPmulticastaddress,
        timeOfFirstTransmission,
        timeOfFirstReception,
        listOfTransmitters,
        listOfTransmissionData,
        listOfReceptionData,
        causeForRecClosing,
        listOfAppSpecificData,
        targetIPaddress,
        relayIPaddress,
        proSeUEtoNetworkRelayUEID,
        proSeTargetLayerTwoID
    );
}; }
    return _cached_decoder_for_PFDCRecord(el);
}

let _cached_encoder_for_PFDCRecord: $.ASN1Encoder<PFDCRecord> | null = null;

/**
 * @summary Encodes a(n) PFDCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PFDCRecord (value: PFDCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDCRecord) { _cached_encoder_for_PFDCRecord = function (value: PFDCRecord, _elGetter: $.ASN1Encoder<PFDCRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.proSeFunctionIPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.proSeFunctionIPAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.proseFunctionPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.proseFunctionPLMNIdentifier, $.BER));
    }
    if (value.proseFunctionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.proseFunctionId, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.listOfCoverageInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<CoverageInfo>(() => _encode_CoverageInfo, $.BER), $.BER)(value.listOfCoverageInfo, $.BER));
    }
    if (value.listOfRadioParameterSet !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<RadioParameterSetInfo>(() => _encode_RadioParameterSetInfo, $.BER), $.BER)(value.listOfRadioParameterSet, $.BER));
    }
    if (value.proSeUEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.proSeUEID, $.BER));
    }
    if (value.sourceIPaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_IPAddress, $.BER)(value.sourceIPaddress, $.BER));
    }
    if (value.layerTwoGroupID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.layerTwoGroupID, $.BER));
    }
    if (value.proSeGroupIPmulticastaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_IPAddress, $.BER)(value.proSeGroupIPmulticastaddress, $.BER));
    }
    if (value.timeOfFirstTransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.timeOfFirstTransmission, $.BER));
    }
    if (value.timeOfFirstReception !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.timeOfFirstReception, $.BER));
    }
    if (value.listOfTransmitters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSequenceOf<TransmitterInfo>(() => _encode_TransmitterInfo, $.BER), $.BER)(value.listOfTransmitters, $.BER));
    }
    if (value.listOfTransmissionData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<ChangeOfProSeCondition>(() => _encode_ChangeOfProSeCondition, $.BER), $.BER)(value.listOfTransmissionData, $.BER));
    }
    if (value.listOfReceptionData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<ChangeOfProSeCondition>(() => _encode_ChangeOfProSeCondition, $.BER), $.BER)(value.listOfReceptionData, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => _encode_ProSeCauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.listOfAppSpecificData, $.BER));
    if (value.targetIPaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 26, () => _encode_IPAddress, $.BER)(value.targetIPaddress, $.BER));
    }
    if (value.relayIPaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => _encode_IPAddress, $.BER)(value.relayIPaddress, $.BER));
    }
    if (value.proSeUEtoNetworkRelayUEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.proSeUEtoNetworkRelayUEID, $.BER));
    }
    if (value.proSeTargetLayerTwoID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.proSeTargetLayerTwoID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PFDCRecord(value, elGetter);
}


/* eslint-enable */
