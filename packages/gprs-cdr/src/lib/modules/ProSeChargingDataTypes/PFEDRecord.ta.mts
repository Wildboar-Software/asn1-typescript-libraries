/* eslint-disable */
import {
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
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
import { ProSeUERole, _decode_ProSeUERole, _encode_ProSeUERole, _enum_for_ProSeUERole } from "../ProSeChargingDataTypes/ProSeUERole.ta.mjs";
// export { ProSeUERole, _enum_for_ProSeUERole, ProSeUERole_annoucingUE /* IMPORTED_LONG_ENUMERATION_ITEM */, annoucingUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_monitoringUE /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_requestorUE /* IMPORTED_LONG_ENUMERATION_ITEM */, requestorUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_requestedUE /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_discovererUE /* IMPORTED_LONG_ENUMERATION_ITEM */, discovererUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_discovereeUE /* IMPORTED_LONG_ENUMERATION_ITEM */, discovereeUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeUERole, _encode_ProSeUERole } from "../ProSeChargingDataTypes/ProSeUERole.ta.mjs";
import { RangeClass, _decode_RangeClass, _encode_RangeClass, _enum_for_RangeClass } from "../ProSeChargingDataTypes/RangeClass.ta.mjs";
// export { RangeClass, _enum_for_RangeClass, RangeClass_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, RangeClass_fiftyMeter /* IMPORTED_LONG_ENUMERATION_ITEM */, fiftyMeter /* IMPORTED_SHORT_ENUMERATION_ITEM */, RangeClass_onehundredMeter /* IMPORTED_LONG_ENUMERATION_ITEM */, onehundredMeter /* IMPORTED_SHORT_ENUMERATION_ITEM */, RangeClass_twohundredMeter /* IMPORTED_LONG_ENUMERATION_ITEM */, twohundredMeter /* IMPORTED_SHORT_ENUMERATION_ITEM */, RangeClass_fivehundredMeter /* IMPORTED_LONG_ENUMERATION_ITEM */, fivehundredMeter /* IMPORTED_SHORT_ENUMERATION_ITEM */, RangeClass_onethousandMeter /* IMPORTED_LONG_ENUMERATION_ITEM */, onethousandMeter /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RangeClass, _encode_RangeClass } from "../ProSeChargingDataTypes/RangeClass.ta.mjs";
import { ProximityAlertIndication, _decode_ProximityAlertIndication, _encode_ProximityAlertIndication, _enum_for_ProximityAlertIndication } from "../ProSeChargingDataTypes/ProximityAlertIndication.ta.mjs";
// export { ProximityAlertIndication, _enum_for_ProximityAlertIndication, ProximityAlertIndication_alerted /* IMPORTED_LONG_ENUMERATION_ITEM */, alerted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProximityAlertIndication_noAlert /* IMPORTED_LONG_ENUMERATION_ITEM */, noAlert /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProximityAlertIndication, _encode_ProximityAlertIndication } from "../ProSeChargingDataTypes/ProximityAlertIndication.ta.mjs";
import { ReasonforCancellation, _decode_ReasonforCancellation, _encode_ReasonforCancellation, _enum_for_ReasonforCancellation } from "../ProSeChargingDataTypes/ReasonforCancellation.ta.mjs";
// export { ReasonforCancellation, _enum_for_ReasonforCancellation, ReasonforCancellation_proximityAlerted /* IMPORTED_LONG_ENUMERATION_ITEM */, ReasonforCancellation_timeExpiredWithNoRrenewal /* IMPORTED_LONG_ENUMERATION_ITEM */, ReasonforCancellation_requestorCancellation /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ReasonforCancellation, _encode_ReasonforCancellation } from "../ProSeChargingDataTypes/ReasonforCancellation.ta.mjs";
import { ProSeCauseForRecClosing, _decode_ProSeCauseForRecClosing, _encode_ProSeCauseForRecClosing, _enum_for_ProSeCauseForRecClosing } from "../ProSeChargingDataTypes/ProSeCauseForRecClosing.ta.mjs";
// export { ProSeCauseForRecClosing, _enum_for_ProSeCauseForRecClosing, ProSeCauseForRecClosing_proximityAlerted /* IMPORTED_LONG_ENUMERATION_ITEM */, ProSeCauseForRecClosing_timeExpiredWithNoRrenewal /* IMPORTED_LONG_ENUMERATION_ITEM */, ProSeCauseForRecClosing_requestorCancellation /* IMPORTED_LONG_ENUMERATION_ITEM */, ProSeCauseForRecClosing_timeLimited /* IMPORTED_LONG_ENUMERATION_ITEM */, timeLimited /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_maxNumberOfReports /* IMPORTED_LONG_ENUMERATION_ITEM */, maxNumberOfReports /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeCauseForRecClosing_abnormalRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeCauseForRecClosing, _encode_ProSeCauseForRecClosing } from "../ProSeChargingDataTypes/ProSeCauseForRecClosing.ta.mjs";
import { ProximityRequestRenewalInfoBlock, _decode_ProximityRequestRenewalInfoBlock, _encode_ProximityRequestRenewalInfoBlock } from "../ProSeChargingDataTypes/ProximityRequestRenewalInfoBlock.ta.mjs";
// export { ProximityRequestRenewalInfoBlock, _decode_ProximityRequestRenewalInfoBlock, _encode_ProximityRequestRenewalInfoBlock } from "../ProSeChargingDataTypes/ProximityRequestRenewalInfoBlock.ta.mjs";


/**
 * @summary PFEDRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFEDRecord ::= SET {
 *    recordType                             [0] IMPLICIT RecordType,
 *    retransmission                         [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID                       [2] IMPLICIT UTF8String OPTIONAL,
 *    servedIMSI                             [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    proSeFunctionIPAddress                 [4] IPAddress OPTIONAL,
 *    chargingCharacteristics                [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode                      [6] IMPLICIT ChChSelectionMode OPTIONAL,
 *    recordExtensions                       [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    proSeRequestTimestamp                  [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    roleofUE                               [9] IMPLICIT ProSeUERole OPTIONAL,
 *    pCThreeEPCControlProtocolCause         [10] IMPLICIT INTEGER OPTIONAL,
 *    proseFunctionPLMNIdentifier            [11] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    proseFunctionId                        [12] IMPLICIT UTF8String OPTIONAL,
 *    recordOpeningTime                      [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime                      [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    applicationID                          [15] IMPLICIT UTF8String OPTIONAL,
 *    requestorApplicationLayerUserID        [16] IMPLICIT UTF8String OPTIONAL,
 *    wLANLinkLayerID                        [17] IMPLICIT UTF8String OPTIONAL,
 *    requestorEPCProSeUserID                [18] IMPLICIT UTF8String OPTIONAL,
 *    requestedApplicationLayerUserID        [19] IMPLICIT UTF8String OPTIONAL,
 *    requestedPLMNIdentifier                [20] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    timeWindow                             [21] IMPLICIT INTEGER OPTIONAL,
 *    rangeClass                             [22] IMPLICIT RangeClass OPTIONAL,
 *    uELocation                             [23] IMPLICIT OCTET STRING OPTIONAL,
 *    proximityAlertIndication               [24] IMPLICIT ProximityAlertIndication OPTIONAL,
 *    proximityAlertTimestamp                [25] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    proximityCancellationTimestamp         [26] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    reasonforCancellation                  [27] IMPLICIT ReasonforCancellation OPTIONAL,
 *    causeForRecClosing                     [28] IMPLICIT ProSeCauseForRecClosing,
 *    proximityRequestRenewalInfoBlockList   [29] IMPLICIT SEQUENCE  OF
 *       ProximityRequestRenewalInfoBlock OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PFEDRecord {
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
     * @summary `proSeRequestTimestamp`.
     * @public
     * @readonly
     */
    readonly proSeRequestTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roleofUE`.
     * @public
     * @readonly
     */
    readonly roleofUE: OPTIONAL<ProSeUERole>;
    /**
     * @summary `pCThreeEPCControlProtocolCause`.
     * @public
     * @readonly
     */
    readonly pCThreeEPCControlProtocolCause: OPTIONAL<INTEGER>;
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
     * @summary `applicationID`.
     * @public
     * @readonly
     */
    readonly applicationID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestorApplicationLayerUserID`.
     * @public
     * @readonly
     */
    readonly requestorApplicationLayerUserID: OPTIONAL<UTF8String>;
    /**
     * @summary `wLANLinkLayerID`.
     * @public
     * @readonly
     */
    readonly wLANLinkLayerID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestorEPCProSeUserID`.
     * @public
     * @readonly
     */
    readonly requestorEPCProSeUserID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestedApplicationLayerUserID`.
     * @public
     * @readonly
     */
    readonly requestedApplicationLayerUserID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestedPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly requestedPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeWindow`.
     * @public
     * @readonly
     */
    readonly timeWindow: OPTIONAL<INTEGER>;
    /**
     * @summary `rangeClass`.
     * @public
     * @readonly
     */
    readonly rangeClass: OPTIONAL<RangeClass>;
    /**
     * @summary `uELocation`.
     * @public
     * @readonly
     */
    readonly uELocation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proximityAlertIndication`.
     * @public
     * @readonly
     */
    readonly proximityAlertIndication: OPTIONAL<ProximityAlertIndication>;
    /**
     * @summary `proximityAlertTimestamp`.
     * @public
     * @readonly
     */
    readonly proximityAlertTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proximityCancellationTimestamp`.
     * @public
     * @readonly
     */
    readonly proximityCancellationTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `reasonforCancellation`.
     * @public
     * @readonly
     */
    readonly reasonforCancellation: OPTIONAL<ReasonforCancellation>;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: ProSeCauseForRecClosing;
    /**
     * @summary `proximityRequestRenewalInfoBlockList`.
     * @public
     * @readonly
     */
    readonly proximityRequestRenewalInfoBlockList: OPTIONAL<ProximityRequestRenewalInfoBlock[]>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        proSeFunctionIPAddress: OPTIONAL<IPAddress>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        proSeRequestTimestamp: OPTIONAL<OCTET_STRING>,
        roleofUE: OPTIONAL<ProSeUERole>,
        pCThreeEPCControlProtocolCause: OPTIONAL<INTEGER>,
        proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        proseFunctionId: OPTIONAL<UTF8String>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        applicationID: OPTIONAL<UTF8String>,
        requestorApplicationLayerUserID: OPTIONAL<UTF8String>,
        wLANLinkLayerID: OPTIONAL<UTF8String>,
        requestorEPCProSeUserID: OPTIONAL<UTF8String>,
        requestedApplicationLayerUserID: OPTIONAL<UTF8String>,
        requestedPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        timeWindow: OPTIONAL<INTEGER>,
        rangeClass: OPTIONAL<RangeClass>,
        uELocation: OPTIONAL<OCTET_STRING>,
        proximityAlertIndication: OPTIONAL<ProximityAlertIndication>,
        proximityAlertTimestamp: OPTIONAL<OCTET_STRING>,
        proximityCancellationTimestamp: OPTIONAL<OCTET_STRING>,
        reasonforCancellation: OPTIONAL<ReasonforCancellation>,
        causeForRecClosing: ProSeCauseForRecClosing,
        proximityRequestRenewalInfoBlockList: OPTIONAL<ProximityRequestRenewalInfoBlock[]>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.servedIMSI = servedIMSI;
        this.proSeFunctionIPAddress = proSeFunctionIPAddress;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.recordExtensions = recordExtensions;
        this.proSeRequestTimestamp = proSeRequestTimestamp;
        this.roleofUE = roleofUE;
        this.pCThreeEPCControlProtocolCause = pCThreeEPCControlProtocolCause;
        this.proseFunctionPLMNIdentifier = proseFunctionPLMNIdentifier;
        this.proseFunctionId = proseFunctionId;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.applicationID = applicationID;
        this.requestorApplicationLayerUserID = requestorApplicationLayerUserID;
        this.wLANLinkLayerID = wLANLinkLayerID;
        this.requestorEPCProSeUserID = requestorEPCProSeUserID;
        this.requestedApplicationLayerUserID = requestedApplicationLayerUserID;
        this.requestedPLMNIdentifier = requestedPLMNIdentifier;
        this.timeWindow = timeWindow;
        this.rangeClass = rangeClass;
        this.uELocation = uELocation;
        this.proximityAlertIndication = proximityAlertIndication;
        this.proximityAlertTimestamp = proximityAlertTimestamp;
        this.proximityCancellationTimestamp = proximityCancellationTimestamp;
        this.reasonforCancellation = reasonforCancellation;
        this.causeForRecClosing = causeForRecClosing;
        this.proximityRequestRenewalInfoBlockList = proximityRequestRenewalInfoBlockList;
    }

    /**
     * @summary Restructures an object into a PFEDRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PFEDRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFEDRecord`.
     * @returns {PFEDRecord}
     */
    public static _from_object (_o: { [_K in keyof (PFEDRecord)]: (PFEDRecord)[_K] }): PFEDRecord {
        return new PFEDRecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.servedIMSI, _o.proSeFunctionIPAddress, _o.chargingCharacteristics, _o.chChSelectionMode, _o.recordExtensions, _o.proSeRequestTimestamp, _o.roleofUE, _o.pCThreeEPCControlProtocolCause, _o.proseFunctionPLMNIdentifier, _o.proseFunctionId, _o.recordOpeningTime, _o.recordClosureTime, _o.applicationID, _o.requestorApplicationLayerUserID, _o.wLANLinkLayerID, _o.requestorEPCProSeUserID, _o.requestedApplicationLayerUserID, _o.requestedPLMNIdentifier, _o.timeWindow, _o.rangeClass, _o.uELocation, _o.proximityAlertIndication, _o.proximityAlertTimestamp, _o.proximityCancellationTimestamp, _o.reasonforCancellation, _o.causeForRecClosing, _o.proximityRequestRenewalInfoBlockList);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `roleofUE`
         * @public
         * @static
         */

    public static _enum_for_roleofUE = _enum_for_ProSeUERole;        /**
         * @summary The enum used as the type of the component `rangeClass`
         * @public
         * @static
         */

    public static _enum_for_rangeClass = _enum_for_RangeClass;        /**
         * @summary The enum used as the type of the component `proximityAlertIndication`
         * @public
         * @static
         */

    public static _enum_for_proximityAlertIndication = _enum_for_ProximityAlertIndication;        /**
         * @summary The enum used as the type of the component `reasonforCancellation`
         * @public
         * @static
         */

    public static _enum_for_reasonforCancellation = _enum_for_ReasonforCancellation;        /**
         * @summary The enum used as the type of the component `causeForRecClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecClosing = _enum_for_ProSeCauseForRecClosing;
}

/**
 * @summary The Leading Root Component Types of PFEDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFEDRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("proSeFunctionIPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("proSeRequestTimestamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("roleofUE", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pCThreeEPCControlProtocolCause", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("proseFunctionPLMNIdentifier", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("proseFunctionId", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("requestorApplicationLayerUserID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("wLANLinkLayerID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("requestorEPCProSeUserID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("requestedApplicationLayerUserID", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("requestedPLMNIdentifier", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("timeWindow", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("rangeClass", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("uELocation", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("proximityAlertIndication", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("proximityAlertTimestamp", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("proximityCancellationTimestamp", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reasonforCancellation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("proximityRequestRenewalInfoBlockList", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of PFEDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFEDRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFEDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFEDRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFEDRecord: $.ASN1Decoder<PFEDRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFEDRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFEDRecord (el: _Element): PFEDRecord {
    if (!_cached_decoder_for_PFEDRecord) { _cached_decoder_for_PFEDRecord = function (el: _Element): PFEDRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let proSeFunctionIPAddress: OPTIONAL<IPAddress>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let proSeRequestTimestamp: OPTIONAL<OCTET_STRING>;
    let roleofUE: OPTIONAL<ProSeUERole>;
    let pCThreeEPCControlProtocolCause: OPTIONAL<INTEGER>;
    let proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let proseFunctionId: OPTIONAL<UTF8String>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let applicationID: OPTIONAL<UTF8String>;
    let requestorApplicationLayerUserID: OPTIONAL<UTF8String>;
    let wLANLinkLayerID: OPTIONAL<UTF8String>;
    let requestorEPCProSeUserID: OPTIONAL<UTF8String>;
    let requestedApplicationLayerUserID: OPTIONAL<UTF8String>;
    let requestedPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let timeWindow: OPTIONAL<INTEGER>;
    let rangeClass: OPTIONAL<RangeClass>;
    let uELocation: OPTIONAL<OCTET_STRING>;
    let proximityAlertIndication: OPTIONAL<ProximityAlertIndication>;
    let proximityAlertTimestamp: OPTIONAL<OCTET_STRING>;
    let proximityCancellationTimestamp: OPTIONAL<OCTET_STRING>;
    let reasonforCancellation: OPTIONAL<ReasonforCancellation>;
    let causeForRecClosing!: ProSeCauseForRecClosing;
    let proximityRequestRenewalInfoBlockList: OPTIONAL<ProximityRequestRenewalInfoBlock[]>;
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
        "proSeRequestTimestamp": (_el: _Element): void => { proSeRequestTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roleofUE": (_el: _Element): void => { roleofUE = $._decode_implicit<ProSeUERole>(() => _decode_ProSeUERole)(_el); },
        "pCThreeEPCControlProtocolCause": (_el: _Element): void => { pCThreeEPCControlProtocolCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "proseFunctionPLMNIdentifier": (_el: _Element): void => { proseFunctionPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proseFunctionId": (_el: _Element): void => { proseFunctionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestorApplicationLayerUserID": (_el: _Element): void => { requestorApplicationLayerUserID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "wLANLinkLayerID": (_el: _Element): void => { wLANLinkLayerID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestorEPCProSeUserID": (_el: _Element): void => { requestorEPCProSeUserID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestedApplicationLayerUserID": (_el: _Element): void => { requestedApplicationLayerUserID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestedPLMNIdentifier": (_el: _Element): void => { requestedPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeWindow": (_el: _Element): void => { timeWindow = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rangeClass": (_el: _Element): void => { rangeClass = $._decode_implicit<RangeClass>(() => _decode_RangeClass)(_el); },
        "uELocation": (_el: _Element): void => { uELocation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proximityAlertIndication": (_el: _Element): void => { proximityAlertIndication = $._decode_implicit<ProximityAlertIndication>(() => _decode_ProximityAlertIndication)(_el); },
        "proximityAlertTimestamp": (_el: _Element): void => { proximityAlertTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proximityCancellationTimestamp": (_el: _Element): void => { proximityCancellationTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "reasonforCancellation": (_el: _Element): void => { reasonforCancellation = $._decode_implicit<ReasonforCancellation>(() => _decode_ReasonforCancellation)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<ProSeCauseForRecClosing>(() => _decode_ProSeCauseForRecClosing)(_el); },
        "proximityRequestRenewalInfoBlockList": (_el: _Element): void => { proximityRequestRenewalInfoBlockList = $._decode_implicit<ProximityRequestRenewalInfoBlock[]>(() => $._decodeSequenceOf<ProximityRequestRenewalInfoBlock>(() => _decode_ProximityRequestRenewalInfoBlock))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PFEDRecord,
        _extension_additions_list_spec_for_PFEDRecord,
        _root_component_type_list_2_spec_for_PFEDRecord,
        undefined,
    );
    return new PFEDRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        servedIMSI,
        proSeFunctionIPAddress,
        chargingCharacteristics,
        chChSelectionMode,
        recordExtensions,
        proSeRequestTimestamp,
        roleofUE,
        pCThreeEPCControlProtocolCause,
        proseFunctionPLMNIdentifier,
        proseFunctionId,
        recordOpeningTime,
        recordClosureTime,
        applicationID,
        requestorApplicationLayerUserID,
        wLANLinkLayerID,
        requestorEPCProSeUserID,
        requestedApplicationLayerUserID,
        requestedPLMNIdentifier,
        timeWindow,
        rangeClass,
        uELocation,
        proximityAlertIndication,
        proximityAlertTimestamp,
        proximityCancellationTimestamp,
        reasonforCancellation,
        causeForRecClosing,
        proximityRequestRenewalInfoBlockList
    );
}; }
    return _cached_decoder_for_PFEDRecord(el);
}

let _cached_encoder_for_PFEDRecord: $.ASN1Encoder<PFEDRecord> | null = null;

/**
 * @summary Encodes a(n) PFEDRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFEDRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PFEDRecord (value: PFEDRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFEDRecord) { _cached_encoder_for_PFEDRecord = function (value: PFEDRecord, elGetter: $.ASN1Encoder<PFEDRecord>): _Element {
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
    if (value.proSeRequestTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.proSeRequestTimestamp, $.BER));
    }
    if (value.roleofUE !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_ProSeUERole, $.BER)(value.roleofUE, $.BER));
    }
    if (value.pCThreeEPCControlProtocolCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.pCThreeEPCControlProtocolCause, $.BER));
    }
    if (value.proseFunctionPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.proseFunctionPLMNIdentifier, $.BER));
    }
    if (value.proseFunctionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.proseFunctionId, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.applicationID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.applicationID, $.BER));
    }
    if (value.requestorApplicationLayerUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.requestorApplicationLayerUserID, $.BER));
    }
    if (value.wLANLinkLayerID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.wLANLinkLayerID, $.BER));
    }
    if (value.requestorEPCProSeUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.requestorEPCProSeUserID, $.BER));
    }
    if (value.requestedApplicationLayerUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.requestedApplicationLayerUserID, $.BER));
    }
    if (value.requestedPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.requestedPLMNIdentifier, $.BER));
    }
    if (value.timeWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.timeWindow, $.BER));
    }
    if (value.rangeClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_RangeClass, $.BER)(value.rangeClass, $.BER));
    }
    if (value.uELocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.uELocation, $.BER));
    }
    if (value.proximityAlertIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ProximityAlertIndication, $.BER)(value.proximityAlertIndication, $.BER));
    }
    if (value.proximityAlertTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.proximityAlertTimestamp, $.BER));
    }
    if (value.proximityCancellationTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.proximityCancellationTimestamp, $.BER));
    }
    if (value.reasonforCancellation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_ReasonforCancellation, $.BER)(value.reasonforCancellation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => _encode_ProSeCauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.proximityRequestRenewalInfoBlockList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeSequenceOf<ProximityRequestRenewalInfoBlock>(() => _encode_ProximityRequestRenewalInfoBlock, $.BER), $.BER)(value.proximityRequestRenewalInfoBlockList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PFEDRecord(value, elGetter);
}


/* eslint-enable */
