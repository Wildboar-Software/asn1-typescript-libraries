/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
// export { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
// export { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
// export { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
// export { CauseForRecClosing, CauseForRecClosing_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_cAMELInitCallRelease /* IMPORTED_LONG_NAMED_INTEGER */, cAMELInitCallRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_volumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, volumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_timeLimit /* IMPORTED_LONG_NAMED_INTEGER */, timeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_servingNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, servingNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_maxChangeCond /* IMPORTED_LONG_NAMED_INTEGER */, maxChangeCond /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_managementIntervention /* IMPORTED_LONG_NAMED_INTEGER */, managementIntervention /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_intraSGSNIntersystemChange /* IMPORTED_LONG_NAMED_INTEGER */, intraSGSNIntersystemChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_rATChange /* IMPORTED_LONG_NAMED_INTEGER */, rATChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_mSTimeZoneChange /* IMPORTED_LONG_NAMED_INTEGER */, mSTimeZoneChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_sGSNPLMNIDChange /* IMPORTED_LONG_NAMED_INTEGER */, sGSNPLMNIDChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_sGWChange /* IMPORTED_LONG_NAMED_INTEGER */, sGWChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_aPNAMBRChange /* IMPORTED_LONG_NAMED_INTEGER */, aPNAMBRChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_mOExceptionDataCounterReceipt /* IMPORTED_LONG_NAMED_INTEGER */, mOExceptionDataCounterReceipt /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unauthorizedRequestingNetwork /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedRequestingNetwork /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unauthorizedLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_positionMethodFailure /* IMPORTED_LONG_NAMED_INTEGER */, positionMethodFailure /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unknownOrUnreachableLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrUnreachableLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_listofDownstreamNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, listofDownstreamNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
// export { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
// export { APNSelectionMode, _enum_for_APNSelectionMode, APNSelectionMode_mSorNetworkProvidedSubscriptionVerified /* IMPORTED_LONG_ENUMERATION_ITEM */, mSorNetworkProvidedSubscriptionVerified /* IMPORTED_SHORT_ENUMERATION_ITEM */, APNSelectionMode_mSProvidedSubscriptionNotVerified /* IMPORTED_LONG_ENUMERATION_ITEM */, mSProvidedSubscriptionNotVerified /* IMPORTED_SHORT_ENUMERATION_ITEM */, APNSelectionMode_networkProvidedSubscriptionNotVerified /* IMPORTED_LONG_ENUMERATION_ITEM */, networkProvidedSubscriptionNotVerified /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_APNSelectionMode, _encode_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
// export { ChChSelectionMode, _enum_for_ChChSelectionMode, ChChSelectionMode_servingNodeSupplied /* IMPORTED_LONG_ENUMERATION_ITEM */, servingNodeSupplied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_subscriptionSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_aPNSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_homeDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, homeDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_roamingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_visitingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, visitingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_fixedDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, fixedDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChChSelectionMode, _encode_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
// export { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
// export { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";


/**
 * @summary EPDGRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPDGRecord ::= SET {
 *    recordType                    [0] IMPLICIT RecordType,
 *    servedIMSI                    [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    ePDGAddressUsed               [4] GSNAddress,
 *    chargingID                    [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessPointNameNI             [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                    [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress           [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag            [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes          [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime             [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                      [14] IMPLICIT INTEGER,
 *    causeForRecClosing            [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                   [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber          [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                        [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions              [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber           [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode              [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                  [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics       [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode             [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    iMSsignalingContext           [25] IMPLICIT NULL OPTIONAL,
 *    servedIMEI                    [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                       [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    sGWChange                     [34] IMPLICIT BOOLEAN OPTIONAL,
 *    p-GWAddressUsed               [36] GSNAddress OPTIONAL,
 *    p-GWPLMNIdentifier            [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                     [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                      [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    pDNConnectionChargingID       [40] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedPDPPDNAddressExt        [43] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt         [47] IMPLICIT BOOLEAN OPTIONAL,
 *    ePDGiPv6AddressUsed           [48] GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed           [50] GSNAddress OPTIONAL,
 *    retransmission                [51] IMPLICIT NULL OPTIONAL,
 *    enhancedDiagnostics           [52] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    uWANUserLocationInformation   [53] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    userLocationInfoTime          [54] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    iMSIunauthenticatedFlag       [55] IMPLICIT NULL OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EPDGRecord {
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
     * @summary `ePDGAddressUsed`.
     * @public
     * @readonly
     */
    readonly ePDGAddressUsed: GSNAddress;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
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
     * @summary `sGWChange`.
     * @public
     * @readonly
     */
    readonly sGWChange: OPTIONAL<BOOLEAN>;
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
     * @summary `servedPDPPDNAddressExt`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlagExt`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `ePDGiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly ePDGiPv6AddressUsed: OPTIONAL<GSNAddress>;
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
     * @summary `enhancedDiagnostics`.
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `userLocationInfoTime`.
     * @public
     * @readonly
     */
    readonly userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @public
     * @readonly
     */
    readonly iMSIunauthenticatedFlag: OPTIONAL<NULL>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        ePDGAddressUsed: GSNAddress,
        chargingID: INTEGER,
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
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        sGWChange: OPTIONAL<BOOLEAN>,
        p_GWAddressUsed: OPTIONAL<GSNAddress>,
        p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID: OPTIONAL<INTEGER>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        ePDGiPv6AddressUsed: OPTIONAL<GSNAddress>,
        p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>,
        retransmission: OPTIONAL<NULL>,
        enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>,
        uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>,
        userLocationInfoTime: OPTIONAL<OCTET_STRING>,
        iMSIunauthenticatedFlag: OPTIONAL<NULL>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.ePDGAddressUsed = ePDGAddressUsed;
        this.chargingID = chargingID;
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
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.sGWChange = sGWChange;
        this.p_GWAddressUsed = p_GWAddressUsed;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.ePDGiPv6AddressUsed = ePDGiPv6AddressUsed;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.retransmission = retransmission;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.userLocationInfoTime = userLocationInfoTime;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
    }

    /**
     * @summary Restructures an object into a EPDGRecord
     * @description
     * 
     * This takes an `object` and converts it to a `EPDGRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPDGRecord`.
     * @returns {EPDGRecord}
     */
    public static _from_object (_o: { [_K in keyof (EPDGRecord)]: (EPDGRecord)[_K] }): EPDGRecord {
        return new EPDGRecord(_o.recordType, _o.servedIMSI, _o.ePDGAddressUsed, _o.chargingID, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.iMSsignalingContext, _o.servedIMEI, _o.rATType, _o.sGWChange, _o.p_GWAddressUsed, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.pDNConnectionChargingID, _o.servedPDPPDNAddressExt, _o.dynamicAddressFlagExt, _o.ePDGiPv6AddressUsed, _o.p_GWiPv6AddressUsed, _o.retransmission, _o.enhancedDiagnostics, _o.uWANUserLocationInformation, _o.userLocationInfoTime, _o.iMSIunauthenticatedFlag);
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

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of EPDGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPDGRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ePDGAddressUsed", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
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
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("sGWChange", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("p-GWAddressUsed", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("ePDGiPv6AddressUsed", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 55))
];

/**
 * @summary The Trailing Root Component Types of EPDGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPDGRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPDGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPDGRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPDGRecord: $.ASN1Decoder<EPDGRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPDGRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPDGRecord (el: _Element): EPDGRecord {
    if (!_cached_decoder_for_EPDGRecord) { _cached_decoder_for_EPDGRecord = function (el: _Element): EPDGRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let ePDGAddressUsed!: GSNAddress;
    let chargingID!: INTEGER;
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
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let sGWChange: OPTIONAL<BOOLEAN>;
    let p_GWAddressUsed: OPTIONAL<GSNAddress>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let ePDGiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePDGAddressUsed": (_el: _Element): void => { ePDGAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
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
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sGWChange": (_el: _Element): void => { sGWChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "p-GWAddressUsed": (_el: _Element): void => { p_GWAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ePDGiPv6AddressUsed": (_el: _Element): void => { ePDGiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_EPDGRecord,
        _extension_additions_list_spec_for_EPDGRecord,
        _root_component_type_list_2_spec_for_EPDGRecord,
        undefined,
    );
    return new EPDGRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        ePDGAddressUsed,
        chargingID,
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
        servedIMEI,
        rATType,
        sGWChange,
        p_GWAddressUsed,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        pDNConnectionChargingID,
        servedPDPPDNAddressExt,
        dynamicAddressFlagExt,
        ePDGiPv6AddressUsed,
        p_GWiPv6AddressUsed,
        retransmission,
        enhancedDiagnostics,
        uWANUserLocationInformation,
        userLocationInfoTime,
        iMSIunauthenticatedFlag
    );
}; }
    return _cached_decoder_for_EPDGRecord(el);
}

let _cached_encoder_for_EPDGRecord: $.ASN1Encoder<EPDGRecord> | null = null;

/**
 * @summary Encodes a(n) EPDGRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPDGRecord, encoded as an ASN.1 Element.
 */
export
function _encode_EPDGRecord (value: EPDGRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPDGRecord) { _cached_encoder_for_EPDGRecord = function (value: EPDGRecord, elGetter: $.ASN1Encoder<EPDGRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.ePDGAddressUsed, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
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
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.sGWChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.sGWChange, $.BER));
    }
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
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.ePDGiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 48, () => _encode_GSNAddress, $.BER)(value.ePDGiPv6AddressUsed, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_EPDGRecord(value, elGetter);
}


/* eslint-enable */
