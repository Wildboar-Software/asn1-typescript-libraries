/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
// export { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
// export { CauseForTerm, CauseForTerm_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_partialRecord /* IMPORTED_LONG_NAMED_INTEGER */, partialRecord /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_partialRecordCallReestablishment /* IMPORTED_LONG_NAMED_INTEGER */, partialRecordCallReestablishment /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unsuccessfulCallAttempt /* IMPORTED_LONG_NAMED_INTEGER */, unsuccessfulCallAttempt /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_cAMELInitCallRelease /* IMPORTED_LONG_NAMED_INTEGER */, cAMELInitCallRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unauthorizedRequestingNetwork /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedRequestingNetwork /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unauthorizedLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_positionMethodFailure /* IMPORTED_LONG_NAMED_INTEGER */, positionMethodFailure /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unknownOrUnreachableLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrUnreachableLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
// export { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { IncGatewayRecord_lrnSoInd, _decode_IncGatewayRecord_lrnSoInd, _encode_IncGatewayRecord_lrnSoInd } from "../CSChargingDataTypes/IncGatewayRecord-lrnSoInd.ta.mjs";
// export { IncGatewayRecord_lrnSoInd, IncGatewayRecord_lrnSoInd_lRN_NP_Database /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnSoInd_switchingSystemData /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnSoInd_incomingsignaling /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnSoInd_unknown /* IMPORTED_LONG_NAMED_INTEGER */, _decode_IncGatewayRecord_lrnSoInd, _encode_IncGatewayRecord_lrnSoInd } from "../CSChargingDataTypes/IncGatewayRecord-lrnSoInd.ta.mjs";
import { IncGatewayRecord_lrnQuryStatus, _decode_IncGatewayRecord_lrnQuryStatus, _encode_IncGatewayRecord_lrnQuryStatus } from "../CSChargingDataTypes/IncGatewayRecord-lrnQuryStatus.ta.mjs";
// export { IncGatewayRecord_lrnQuryStatus, IncGatewayRecord_lrnQuryStatus_successfulQuery /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnQuryStatus_queryProtocolErr /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnQuryStatus_queryResponseDataErr /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnQuryStatus_queryRejected /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnQuryStatus_queryNotPerformed /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_lrnQuryStatus_queryUnsuccessful /* IMPORTED_LONG_NAMED_INTEGER */, _decode_IncGatewayRecord_lrnQuryStatus, _encode_IncGatewayRecord_lrnQuryStatus } from "../CSChargingDataTypes/IncGatewayRecord-lrnQuryStatus.ta.mjs";
import { IncGatewayRecord_jIPSoInd, _decode_IncGatewayRecord_jIPSoInd, _encode_IncGatewayRecord_jIPSoInd } from "../CSChargingDataTypes/IncGatewayRecord-jIPSoInd.ta.mjs";
// export { IncGatewayRecord_jIPSoInd, IncGatewayRecord_jIPSoInd_lRN_NP_Database /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPSoInd_switchingSystemData /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPSoInd_incomingsignaling /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPSoInd_unknown /* IMPORTED_LONG_NAMED_INTEGER */, _decode_IncGatewayRecord_jIPSoInd, _encode_IncGatewayRecord_jIPSoInd } from "../CSChargingDataTypes/IncGatewayRecord-jIPSoInd.ta.mjs";
import { IncGatewayRecord_jIPQuryStatus, _decode_IncGatewayRecord_jIPQuryStatus, _encode_IncGatewayRecord_jIPQuryStatus } from "../CSChargingDataTypes/IncGatewayRecord-jIPQuryStatus.ta.mjs";
// export { IncGatewayRecord_jIPQuryStatus, IncGatewayRecord_jIPQuryStatus_successfulQuery /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPQuryStatus_queryProtocolErr /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPQuryStatus_queryResponseDataErr /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPQuryStatus_queryRejected /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPQuryStatus_queryNotPerformed /* IMPORTED_LONG_NAMED_INTEGER */, IncGatewayRecord_jIPQuryStatus_queryUnsuccessful /* IMPORTED_LONG_NAMED_INTEGER */, _decode_IncGatewayRecord_jIPQuryStatus, _encode_IncGatewayRecord_jIPQuryStatus } from "../CSChargingDataTypes/IncGatewayRecord-jIPQuryStatus.ta.mjs";
import { ReasonForServiceChange, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange, _enum_for_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";
// export { ReasonForServiceChange, _enum_for_ReasonForServiceChange, ReasonForServiceChange_msubInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, msubInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForServiceChange_mscInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, mscInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForServiceChange_callSetupFallBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callSetupFallBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForServiceChange_callSetupChangeOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, callSetupChangeOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";


/**
 * @summary IncGatewayRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IncGatewayRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    callingNumber            [1] IMPLICIT OCTET STRING OPTIONAL,
 *    calledNumber             [2] IMPLICIT OCTET STRING,
 *    recordingEntity          [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP          [4] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP          [5] TrunkGroup OPTIONAL,
 *    seizureTime              [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime               [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime              [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration             [9] IMPLICIT INTEGER,
 *    dataVolume               [10] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm             [11] IMPLICIT CauseForTerm,
 *    diagnostics              [12] HLRIntResult OPTIONAL,
 *    callReference            [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber           [14] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions         [15] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    locationRoutNum          [16] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                 [17] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus            [18] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                  [19] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                 [20] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus            [21] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    reasonForServiceChange   [22] IMPLICIT ReasonForServiceChange OPTIONAL,
 *    serviceChangeInitiator   [23] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class IncGatewayRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `calledNumber`.
     * @public
     * @readonly
     */
    readonly calledNumber: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `mscIncomingTKGP`.
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @public
     * @readonly
     */
    readonly callDuration: INTEGER;
    /**
     * @summary `dataVolume`.
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForTerm`.
     * @public
     * @readonly
     */
    readonly causeForTerm: CauseForTerm;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<HLRIntResult>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `locationRoutNum`.
     * @public
     * @readonly
     */
    readonly locationRoutNum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lrnSoInd`.
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<IncGatewayRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<IncGatewayRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @public
     * @readonly
     */
    readonly jIPPara: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `jIPSoInd`.
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<IncGatewayRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<IncGatewayRecord_jIPQuryStatus>;
    /**
     * @summary `reasonForServiceChange`.
     * @public
     * @readonly
     */
    readonly reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    /**
     * @summary `serviceChangeInitiator`.
     * @public
     * @readonly
     */
    readonly serviceChangeInitiator: OPTIONAL<BOOLEAN>;

    constructor (
        recordType: RecordType,
        callingNumber: OPTIONAL<OCTET_STRING>,
        calledNumber: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<IncGatewayRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<IncGatewayRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<IncGatewayRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<IncGatewayRecord_jIPQuryStatus>,
        reasonForServiceChange: OPTIONAL<ReasonForServiceChange>,
        serviceChangeInitiator: OPTIONAL<BOOLEAN>
    ) {
        this.recordType = recordType;
        this.callingNumber = callingNumber;
        this.calledNumber = calledNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.reasonForServiceChange = reasonForServiceChange;
        this.serviceChangeInitiator = serviceChangeInitiator;
    }

    /**
     * @summary Restructures an object into a IncGatewayRecord
     * @description
     * 
     * This takes an `object` and converts it to a `IncGatewayRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IncGatewayRecord`.
     * @returns {IncGatewayRecord}
     */
    public static _from_object (_o: { [_K in keyof (IncGatewayRecord)]: (IncGatewayRecord)[_K] }): IncGatewayRecord {
        return new IncGatewayRecord(_o.recordType, _o.callingNumber, _o.calledNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.reasonForServiceChange, _o.serviceChangeInitiator);
    }

        /**
         * @summary The enum used as the type of the component `reasonForServiceChange`
         * @public
         * @static
         */

    public static _enum_for_reasonForServiceChange = _enum_for_ReasonForServiceChange;
}

/**
 * @summary The Leading Root Component Types of IncGatewayRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IncGatewayRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("reasonForServiceChange", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceChangeInitiator", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of IncGatewayRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IncGatewayRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IncGatewayRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IncGatewayRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IncGatewayRecord: $.ASN1Decoder<IncGatewayRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IncGatewayRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IncGatewayRecord (el: _Element): IncGatewayRecord {
    if (!_cached_decoder_for_IncGatewayRecord) { _cached_decoder_for_IncGatewayRecord = function (el: _Element): IncGatewayRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let calledNumber!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<IncGatewayRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<IncGatewayRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<IncGatewayRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<IncGatewayRecord_jIPQuryStatus>;
    let reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    let serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<IncGatewayRecord_lrnSoInd>(() => _decode_IncGatewayRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<IncGatewayRecord_lrnQuryStatus>(() => _decode_IncGatewayRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<IncGatewayRecord_jIPSoInd>(() => _decode_IncGatewayRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<IncGatewayRecord_jIPQuryStatus>(() => _decode_IncGatewayRecord_jIPQuryStatus)(_el); },
        "reasonForServiceChange": (_el: _Element): void => { reasonForServiceChange = $._decode_implicit<ReasonForServiceChange>(() => _decode_ReasonForServiceChange)(_el); },
        "serviceChangeInitiator": (_el: _Element): void => { serviceChangeInitiator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_IncGatewayRecord,
        _extension_additions_list_spec_for_IncGatewayRecord,
        _root_component_type_list_2_spec_for_IncGatewayRecord,
        undefined,
    );
    return new IncGatewayRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        callingNumber,
        calledNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        recordExtensions,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        reasonForServiceChange,
        serviceChangeInitiator
    );
}; }
    return _cached_decoder_for_IncGatewayRecord(el);
}

let _cached_encoder_for_IncGatewayRecord: $.ASN1Encoder<IncGatewayRecord> | null = null;

/**
 * @summary Encodes a(n) IncGatewayRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncGatewayRecord, encoded as an ASN.1 Element.
 */
export
function _encode_IncGatewayRecord (value: IncGatewayRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IncGatewayRecord) { _cached_encoder_for_IncGatewayRecord = function (value: IncGatewayRecord, elGetter: $.ASN1Encoder<IncGatewayRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_IncGatewayRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_IncGatewayRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_IncGatewayRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_IncGatewayRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.reasonForServiceChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_ReasonForServiceChange, $.BER)(value.reasonForServiceChange, $.BER));
    }
    if (value.serviceChangeInitiator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.serviceChangeInitiator, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_IncGatewayRecord(value, elGetter);
}


/* eslint-enable */
