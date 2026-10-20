/* eslint-disable */
import {
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
import { LCSClientType, _decode_LCSClientType, _encode_LCSClientType, _enum_for_LCSClientType } from "../GPRSChargingDataTypes/LCSClientType.ta.mjs";
// export { LCSClientType, _enum_for_LCSClientType, LCSClientType_emergencyServices /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_valueAddedServices /* IMPORTED_LONG_ENUMERATION_ITEM */, valueAddedServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_plmnOperatorServices /* IMPORTED_LONG_ENUMERATION_ITEM */, plmnOperatorServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_lawfulInterceptServices /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterceptServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientType, _encode_LCSClientType } from "../GPRSChargingDataTypes/LCSClientType.ta.mjs";
import { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../GPRSChargingDataTypes/LCSClientIdentity.ta.mjs";
// export { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../GPRSChargingDataTypes/LCSClientIdentity.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
// export { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { LocationType, _decode_LocationType, _encode_LocationType } from "../GPRSChargingDataTypes/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../GPRSChargingDataTypes/LocationType.ta.mjs";
import { SGSNMTLCSRecord_notificationToMSUser, _decode_SGSNMTLCSRecord_notificationToMSUser, _encode_SGSNMTLCSRecord_notificationToMSUser, _enum_for_SGSNMTLCSRecord_notificationToMSUser } from "../GPRSChargingDataTypes/SGSNMTLCSRecord-notificationToMSUser.ta.mjs";
// export { SGSNMTLCSRecord_notificationToMSUser, _enum_for_SGSNMTLCSRecord_notificationToMSUser, SGSNMTLCSRecord_notificationToMSUser_notifyLocationAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyLocationAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, SGSNMTLCSRecord_notificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, SGSNMTLCSRecord_notificationToMSUser_locationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, locationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SGSNMTLCSRecord_notificationToMSUser, _encode_SGSNMTLCSRecord_notificationToMSUser } from "../GPRSChargingDataTypes/SGSNMTLCSRecord-notificationToMSUser.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../GPRSChargingDataTypes/LocationAreaAndCell.ta.mjs";
// export { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../GPRSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
// export { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
// export { ChChSelectionMode, _enum_for_ChChSelectionMode, ChChSelectionMode_servingNodeSupplied /* IMPORTED_LONG_ENUMERATION_ITEM */, servingNodeSupplied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_subscriptionSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_aPNSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_homeDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, homeDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_roamingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_visitingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, visitingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_fixedDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, fixedDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChChSelectionMode, _encode_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
// export { CauseForRecClosing, CauseForRecClosing_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_cAMELInitCallRelease /* IMPORTED_LONG_NAMED_INTEGER */, cAMELInitCallRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_volumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, volumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_timeLimit /* IMPORTED_LONG_NAMED_INTEGER */, timeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_servingNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, servingNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_maxChangeCond /* IMPORTED_LONG_NAMED_INTEGER */, maxChangeCond /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_managementIntervention /* IMPORTED_LONG_NAMED_INTEGER */, managementIntervention /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_intraSGSNIntersystemChange /* IMPORTED_LONG_NAMED_INTEGER */, intraSGSNIntersystemChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_rATChange /* IMPORTED_LONG_NAMED_INTEGER */, rATChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_mSTimeZoneChange /* IMPORTED_LONG_NAMED_INTEGER */, mSTimeZoneChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_sGSNPLMNIDChange /* IMPORTED_LONG_NAMED_INTEGER */, sGSNPLMNIDChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_sGWChange /* IMPORTED_LONG_NAMED_INTEGER */, sGWChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_aPNAMBRChange /* IMPORTED_LONG_NAMED_INTEGER */, aPNAMBRChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_mOExceptionDataCounterReceipt /* IMPORTED_LONG_NAMED_INTEGER */, mOExceptionDataCounterReceipt /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unauthorizedRequestingNetwork /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedRequestingNetwork /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unauthorizedLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_positionMethodFailure /* IMPORTED_LONG_NAMED_INTEGER */, positionMethodFailure /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unknownOrUnreachableLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrUnreachableLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_listofDownstreamNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, listofDownstreamNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";
// export { CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity, CNOperatorSelectionEntity_servCNSelectedbyUE /* IMPORTED_LONG_ENUMERATION_ITEM */, servCNSelectedbyUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, CNOperatorSelectionEntity_servCNSelectedbyNtw /* IMPORTED_LONG_ENUMERATION_ITEM */, servCNSelectedbyNtw /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";


/**
 * @summary SGSNMTLCSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNMTLCSRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    recordingEntity             [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    lcsClientType               [2] IMPLICIT LCSClientType,
 *    lcsClientIdentity           [3] IMPLICIT LCSClientIdentity,
 *    servedIMSI                  [4] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN                [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    sgsnAddress                 [6] GSNAddress OPTIONAL,
 *    locationType                [7] IMPLICIT LocationType,
 *    lcsQos                      [8] IMPLICIT OCTET STRING ( SIZE( 4 ) ) OPTIONAL,
 *    lcsPriority                 [9] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    mlcNumber                   [10] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    eventTimeStamp              [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    measurementDuration         [12] IMPLICIT INTEGER OPTIONAL,
 *    notificationToMSUser        [13] IMPLICIT ENUMERATED {
 *       notifyLocationAllowed                             ( 0 ),
 *       notifyAndVerify-LocationAllowedIfNoResponse       ( 1 ),
 *       notifyAndVerify-LocationNotAllowedIfNoResponse    ( 2 ),
 *       ... ,
 *       locationNotAllowed                                ( 3 ) } OPTIONAL,
 *    privacyOverride             [14] IMPLICIT NULL OPTIONAL,
 *    location                    [15] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    routingArea                 [16] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationEstimate            [17] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    positioningData             [18] IMPLICIT OCTET STRING ( SIZE( 1 .. 33 ) ) OPTIONAL,
 *    lcsCause                    [19] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    diagnostics                 [20] Diagnostics OPTIONAL,
 *    nodeID                      [21] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    localSequenceNumber         [22] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    chargingCharacteristics     [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode           [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    rATType                     [25] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    recordExtensions            [26] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    causeForRecClosing          [27] IMPLICIT CauseForRecClosing,
 *    servingNodePLMNIdentifier   [28] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt      [29] IMPLICIT CNOperatorSelectionEntity OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNMTLCSRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `lcsClientType`.
     * @public
     * @readonly
     */
    readonly lcsClientType: LCSClientType;
    /**
     * @summary `lcsClientIdentity`.
     * @public
     * @readonly
     */
    readonly lcsClientIdentity: LCSClientIdentity;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sgsnAddress`.
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `locationType`.
     * @public
     * @readonly
     */
    readonly locationType: LocationType;
    /**
     * @summary `lcsQos`.
     * @public
     * @readonly
     */
    readonly lcsQos: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsPriority`.
     * @public
     * @readonly
     */
    readonly lcsPriority: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mlcNumber`.
     * @public
     * @readonly
     */
    readonly mlcNumber: OCTET_STRING;
    /**
     * @summary `eventTimeStamp`.
     * @public
     * @readonly
     */
    readonly eventTimeStamp: OCTET_STRING;
    /**
     * @summary `measurementDuration`.
     * @public
     * @readonly
     */
    readonly measurementDuration: OPTIONAL<INTEGER>;
    /**
     * @summary `notificationToMSUser`.
     * @public
     * @readonly
     */
    readonly notificationToMSUser: OPTIONAL<SGSNMTLCSRecord_notificationToMSUser>;
    /**
     * @summary `privacyOverride`.
     * @public
     * @readonly
     */
    readonly privacyOverride: OPTIONAL<NULL>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `routingArea`.
     * @public
     * @readonly
     */
    readonly routingArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationEstimate`.
     * @public
     * @readonly
     */
    readonly locationEstimate: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `positioningData`.
     * @public
     * @readonly
     */
    readonly positioningData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsCause`.
     * @public
     * @readonly
     */
    readonly lcsCause: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
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
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        lcsClientType: LCSClientType,
        lcsClientIdentity: LCSClientIdentity,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        sgsnAddress: OPTIONAL<GSNAddress>,
        locationType: LocationType,
        lcsQos: OPTIONAL<OCTET_STRING>,
        lcsPriority: OPTIONAL<OCTET_STRING>,
        mlcNumber: OCTET_STRING,
        eventTimeStamp: OCTET_STRING,
        measurementDuration: OPTIONAL<INTEGER>,
        notificationToMSUser: OPTIONAL<SGSNMTLCSRecord_notificationToMSUser>,
        privacyOverride: OPTIONAL<NULL>,
        location: OPTIONAL<LocationAreaAndCell>,
        routingArea: OPTIONAL<OCTET_STRING>,
        locationEstimate: OPTIONAL<OCTET_STRING>,
        positioningData: OPTIONAL<OCTET_STRING>,
        lcsCause: OPTIONAL<OCTET_STRING>,
        diagnostics: OPTIONAL<Diagnostics>,
        nodeID: OPTIONAL<IA5String>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        rATType: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        causeForRecClosing: CauseForRecClosing,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.lcsClientType = lcsClientType;
        this.lcsClientIdentity = lcsClientIdentity;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.sgsnAddress = sgsnAddress;
        this.locationType = locationType;
        this.lcsQos = lcsQos;
        this.lcsPriority = lcsPriority;
        this.mlcNumber = mlcNumber;
        this.eventTimeStamp = eventTimeStamp;
        this.measurementDuration = measurementDuration;
        this.notificationToMSUser = notificationToMSUser;
        this.privacyOverride = privacyOverride;
        this.location = location;
        this.routingArea = routingArea;
        this.locationEstimate = locationEstimate;
        this.positioningData = positioningData;
        this.lcsCause = lcsCause;
        this.diagnostics = diagnostics;
        this.nodeID = nodeID;
        this.localSequenceNumber = localSequenceNumber;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.rATType = rATType;
        this.recordExtensions = recordExtensions;
        this.causeForRecClosing = causeForRecClosing;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
    }

    /**
     * @summary Restructures an object into a SGSNMTLCSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNMTLCSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNMTLCSRecord`.
     * @returns {SGSNMTLCSRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNMTLCSRecord)]: (SGSNMTLCSRecord)[_K] }): SGSNMTLCSRecord {
        return new SGSNMTLCSRecord(_o.recordType, _o.recordingEntity, _o.lcsClientType, _o.lcsClientIdentity, _o.servedIMSI, _o.servedMSISDN, _o.sgsnAddress, _o.locationType, _o.lcsQos, _o.lcsPriority, _o.mlcNumber, _o.eventTimeStamp, _o.measurementDuration, _o.notificationToMSUser, _o.privacyOverride, _o.location, _o.routingArea, _o.locationEstimate, _o.positioningData, _o.lcsCause, _o.diagnostics, _o.nodeID, _o.localSequenceNumber, _o.chargingCharacteristics, _o.chChSelectionMode, _o.rATType, _o.recordExtensions, _o.causeForRecClosing, _o.servingNodePLMNIdentifier, _o.cNOperatorSelectionEnt);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;        /**
         * @summary The enum used as the type of the component `notificationToMSUser`
         * @public
         * @static
         */

    public static _enum_for_notificationToMSUser = _enum_for_SGSNMTLCSRecord_notificationToMSUser;        /**
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
 * @summary The Leading Root Component Types of SGSNMTLCSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNMTLCSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lcsClientIdentity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("locationType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("lcsQos", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("lcsPriority", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mlcNumber", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("eventTimeStamp", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("measurementDuration", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("notificationToMSUser", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("privacyOverride", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("routingArea", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("locationEstimate", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("positioningData", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("lcsCause", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of SGSNMTLCSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNMTLCSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNMTLCSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNMTLCSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNMTLCSRecord: $.ASN1Decoder<SGSNMTLCSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNMTLCSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNMTLCSRecord (el: _Element): SGSNMTLCSRecord {
    if (!_cached_decoder_for_SGSNMTLCSRecord) { _cached_decoder_for_SGSNMTLCSRecord = function (el: _Element): SGSNMTLCSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let lcsClientType!: LCSClientType;
    let lcsClientIdentity!: LCSClientIdentity;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let sgsnAddress: OPTIONAL<GSNAddress>;
    let locationType!: LocationType;
    let lcsQos: OPTIONAL<OCTET_STRING>;
    let lcsPriority: OPTIONAL<OCTET_STRING>;
    let mlcNumber!: OCTET_STRING;
    let eventTimeStamp!: OCTET_STRING;
    let measurementDuration: OPTIONAL<INTEGER>;
    let notificationToMSUser: OPTIONAL<SGSNMTLCSRecord_notificationToMSUser>;
    let privacyOverride: OPTIONAL<NULL>;
    let location: OPTIONAL<LocationAreaAndCell>;
    let routingArea: OPTIONAL<OCTET_STRING>;
    let locationEstimate: OPTIONAL<OCTET_STRING>;
    let positioningData: OPTIONAL<OCTET_STRING>;
    let lcsCause: OPTIONAL<OCTET_STRING>;
    let diagnostics: OPTIONAL<Diagnostics>;
    let nodeID: OPTIONAL<IA5String>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let rATType: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let causeForRecClosing!: CauseForRecClosing;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientIdentity": (_el: _Element): void => { lcsClientIdentity = $._decode_implicit<LCSClientIdentity>(() => _decode_LCSClientIdentity)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sgsnAddress": (_el: _Element): void => { sgsnAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "locationType": (_el: _Element): void => { locationType = $._decode_implicit<LocationType>(() => _decode_LocationType)(_el); },
        "lcsQos": (_el: _Element): void => { lcsQos = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsPriority": (_el: _Element): void => { lcsPriority = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mlcNumber": (_el: _Element): void => { mlcNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimeStamp": (_el: _Element): void => { eventTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "measurementDuration": (_el: _Element): void => { measurementDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "notificationToMSUser": (_el: _Element): void => { notificationToMSUser = $._decode_implicit<SGSNMTLCSRecord_notificationToMSUser>(() => _decode_SGSNMTLCSRecord_notificationToMSUser)(_el); },
        "privacyOverride": (_el: _Element): void => { privacyOverride = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "routingArea": (_el: _Element): void => { routingArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "positioningData": (_el: _Element): void => { positioningData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsCause": (_el: _Element): void => { lcsCause = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNMTLCSRecord,
        _extension_additions_list_spec_for_SGSNMTLCSRecord,
        _root_component_type_list_2_spec_for_SGSNMTLCSRecord,
        undefined,
    );
    return new SGSNMTLCSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        lcsClientType,
        lcsClientIdentity,
        servedIMSI,
        servedMSISDN,
        sgsnAddress,
        locationType,
        lcsQos,
        lcsPriority,
        mlcNumber,
        eventTimeStamp,
        measurementDuration,
        notificationToMSUser,
        privacyOverride,
        location,
        routingArea,
        locationEstimate,
        positioningData,
        lcsCause,
        diagnostics,
        nodeID,
        localSequenceNumber,
        chargingCharacteristics,
        chChSelectionMode,
        rATType,
        recordExtensions,
        causeForRecClosing,
        servingNodePLMNIdentifier,
        cNOperatorSelectionEnt
    );
}; }
    return _cached_decoder_for_SGSNMTLCSRecord(el);
}

let _cached_encoder_for_SGSNMTLCSRecord: $.ASN1Encoder<SGSNMTLCSRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNMTLCSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNMTLCSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNMTLCSRecord (value: SGSNMTLCSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNMTLCSRecord) { _cached_encoder_for_SGSNMTLCSRecord = function (value: SGSNMTLCSRecord, elGetter: $.ASN1Encoder<SGSNMTLCSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientIdentity, $.BER)(value.lcsClientIdentity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.sgsnAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_GSNAddress, $.BER)(value.sgsnAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_LocationType, $.BER)(value.locationType, $.BER));
    if (value.lcsQos !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.lcsQos, $.BER));
    }
    if (value.lcsPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.lcsPriority, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.mlcNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.eventTimeStamp, $.BER));
    if (value.measurementDuration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.measurementDuration, $.BER));
    }
    if (value.notificationToMSUser !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_SGSNMTLCSRecord_notificationToMSUser, $.BER)(value.notificationToMSUser, $.BER));
    }
    if (value.privacyOverride !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.privacyOverride, $.BER));
    }
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.routingArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.routingArea, $.BER));
    }
    if (value.locationEstimate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.locationEstimate, $.BER));
    }
    if (value.positioningData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.positioningData, $.BER));
    }
    if (value.lcsCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.lcsCause, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNMTLCSRecord(value, elGetter);
}


/* eslint-enable */
