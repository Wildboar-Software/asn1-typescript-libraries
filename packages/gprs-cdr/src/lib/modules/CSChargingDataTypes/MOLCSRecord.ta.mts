/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { LCSClientType, _decode_LCSClientType, _encode_LCSClientType, _enum_for_LCSClientType } from "../CSChargingDataTypes/LCSClientType.ta.mjs";
// export { LCSClientType, _enum_for_LCSClientType, LCSClientType_emergencyServices /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_valueAddedServices /* IMPORTED_LONG_ENUMERATION_ITEM */, valueAddedServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_plmnOperatorServices /* IMPORTED_LONG_ENUMERATION_ITEM */, plmnOperatorServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientType_lawfulInterceptServices /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterceptServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientType, _encode_LCSClientType } from "../CSChargingDataTypes/LCSClientType.ta.mjs";
import { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../CSChargingDataTypes/LCSClientIdentity.ta.mjs";
// export { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../CSChargingDataTypes/LCSClientIdentity.ta.mjs";
import { Molr_Type, _decode_Molr_Type, _encode_Molr_Type, _enum_for_Molr_Type } from "../CSChargingDataTypes/Molr-Type.ta.mjs";
// export { Molr_Type, _enum_for_Molr_Type, Molr_Type_locationEstimate /* IMPORTED_LONG_ENUMERATION_ITEM */, locationEstimate /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_assistanceData /* IMPORTED_LONG_ENUMERATION_ITEM */, assistanceData /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_deCipheringKeys /* IMPORTED_LONG_ENUMERATION_ITEM */, deCipheringKeys /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_deferredMo_lrTTTPInitiation /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredMo_lrTTTPInitiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_deferredMo_lrSelfLocationInitiation /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredMo_lrSelfLocationInitiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_deferredMt_lrOrmo_lrTTTPLocationEstimate /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredMt_lrOrmo_lrTTTPLocationEstimate /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_deferredMt_lrOrmo_lrCancellation /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredMt_lrOrmo_lrCancellation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_periodicEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, periodicEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_enteringAreaEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringAreaEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_leavingAreaEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, leavingAreaEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_beingInsideAreaEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, beingInsideAreaEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_motionEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, motionEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, Molr_Type_maximumIntervalExpirationEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, maximumIntervalExpirationEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Molr_Type, _encode_Molr_Type } from "../CSChargingDataTypes/Molr-Type.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
// export { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
// export { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
// export { SystemType, _enum_for_SystemType, SystemType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, SystemType_iuUTRAN /* IMPORTED_LONG_ENUMERATION_ITEM */, iuUTRAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, SystemType_gERAN /* IMPORTED_LONG_ENUMERATION_ITEM */, gERAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SystemType, _encode_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
// export { CauseForTerm, CauseForTerm_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_partialRecord /* IMPORTED_LONG_NAMED_INTEGER */, partialRecord /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_partialRecordCallReestablishment /* IMPORTED_LONG_NAMED_INTEGER */, partialRecordCallReestablishment /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unsuccessfulCallAttempt /* IMPORTED_LONG_NAMED_INTEGER */, unsuccessfulCallAttempt /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_cAMELInitCallRelease /* IMPORTED_LONG_NAMED_INTEGER */, cAMELInitCallRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unauthorizedRequestingNetwork /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedRequestingNetwork /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unauthorizedLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_positionMethodFailure /* IMPORTED_LONG_NAMED_INTEGER */, positionMethodFailure /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unknownOrUnreachableLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrUnreachableLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";


/**
 * @summary MOLCSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOLCSRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    recordingEntity     [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    lcsClientType       [2] IMPLICIT LCSClientType OPTIONAL,
 *    lcsClientIdentity   [3] IMPLICIT LCSClientIdentity OPTIONAL,
 *    servedIMSI          [4] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN        [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    molr-Type           [6] IMPLICIT Molr-Type,
 *    lcsQos              [7] IMPLICIT OCTET STRING ( SIZE( 4 ) ) OPTIONAL,
 *    lcsPriority         [8] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    mlc-Number          [9] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    eventTimeStamp      [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    measureDuration     [11] IMPLICIT INTEGER OPTIONAL,
 *    location            [12] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    locationEstimate    [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    positioningData     [14] IMPLICIT OCTET STRING ( SIZE( 1 .. 33 ) ) OPTIONAL,
 *    lcsCause            [15] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    diagnostics         [16] HLRIntResult OPTIONAL,
 *    systemType          [17] IMPLICIT SystemType OPTIONAL,
 *    recordExtensions    [18] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    causeForTerm        [19] IMPLICIT CauseForTerm}
 * ```
 * 
 * @class
 */
export
class MOLCSRecord {
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
    readonly lcsClientType: OPTIONAL<LCSClientType>;
    /**
     * @summary `lcsClientIdentity`.
     * @public
     * @readonly
     */
    readonly lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
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
     * @summary `molr_Type`.
     * @public
     * @readonly
     */
    readonly molr_Type: Molr_Type;
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
     * @summary `mlc_Number`.
     * @public
     * @readonly
     */
    readonly mlc_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventTimeStamp`.
     * @public
     * @readonly
     */
    readonly eventTimeStamp: OCTET_STRING;
    /**
     * @summary `measureDuration`.
     * @public
     * @readonly
     */
    readonly measureDuration: OPTIONAL<INTEGER>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
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
    readonly diagnostics: OPTIONAL<HLRIntResult>;
    /**
     * @summary `systemType`.
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `causeForTerm`.
     * @public
     * @readonly
     */
    readonly causeForTerm: CauseForTerm;

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        lcsClientType: OPTIONAL<LCSClientType>,
        lcsClientIdentity: OPTIONAL<LCSClientIdentity>,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        molr_Type: Molr_Type,
        lcsQos: OPTIONAL<OCTET_STRING>,
        lcsPriority: OPTIONAL<OCTET_STRING>,
        mlc_Number: OPTIONAL<OCTET_STRING>,
        eventTimeStamp: OCTET_STRING,
        measureDuration: OPTIONAL<INTEGER>,
        location: OPTIONAL<LocationAreaAndCell>,
        locationEstimate: OPTIONAL<OCTET_STRING>,
        positioningData: OPTIONAL<OCTET_STRING>,
        lcsCause: OPTIONAL<OCTET_STRING>,
        diagnostics: OPTIONAL<HLRIntResult>,
        systemType: OPTIONAL<SystemType>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        causeForTerm: CauseForTerm
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.lcsClientType = lcsClientType;
        this.lcsClientIdentity = lcsClientIdentity;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.molr_Type = molr_Type;
        this.lcsQos = lcsQos;
        this.lcsPriority = lcsPriority;
        this.mlc_Number = mlc_Number;
        this.eventTimeStamp = eventTimeStamp;
        this.measureDuration = measureDuration;
        this.location = location;
        this.locationEstimate = locationEstimate;
        this.positioningData = positioningData;
        this.lcsCause = lcsCause;
        this.diagnostics = diagnostics;
        this.systemType = systemType;
        this.recordExtensions = recordExtensions;
        this.causeForTerm = causeForTerm;
    }

    /**
     * @summary Restructures an object into a MOLCSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MOLCSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOLCSRecord`.
     * @returns {MOLCSRecord}
     */
    public static _from_object (_o: { [_K in keyof (MOLCSRecord)]: (MOLCSRecord)[_K] }): MOLCSRecord {
        return new MOLCSRecord(_o.recordType, _o.recordingEntity, _o.lcsClientType, _o.lcsClientIdentity, _o.servedIMSI, _o.servedMSISDN, _o.molr_Type, _o.lcsQos, _o.lcsPriority, _o.mlc_Number, _o.eventTimeStamp, _o.measureDuration, _o.location, _o.locationEstimate, _o.positioningData, _o.lcsCause, _o.diagnostics, _o.systemType, _o.recordExtensions, _o.causeForTerm);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;        /**
         * @summary The enum used as the type of the component `molr_Type`
         * @public
         * @static
         */

    public static _enum_for_molr_Type = _enum_for_Molr_Type;        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;
}

/**
 * @summary The Leading Root Component Types of MOLCSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOLCSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lcsClientIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("molr-Type", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("lcsQos", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("lcsPriority", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mlc-Number", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eventTimeStamp", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("measureDuration", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("locationEstimate", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("positioningData", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("lcsCause", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of MOLCSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOLCSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOLCSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MOLCSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOLCSRecord: $.ASN1Decoder<MOLCSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOLCSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOLCSRecord (el: _Element): MOLCSRecord {
    if (!_cached_decoder_for_MOLCSRecord) { _cached_decoder_for_MOLCSRecord = function (el: _Element): MOLCSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let lcsClientType: OPTIONAL<LCSClientType>;
    let lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let molr_Type!: Molr_Type;
    let lcsQos: OPTIONAL<OCTET_STRING>;
    let lcsPriority: OPTIONAL<OCTET_STRING>;
    let mlc_Number: OPTIONAL<OCTET_STRING>;
    let eventTimeStamp!: OCTET_STRING;
    let measureDuration: OPTIONAL<INTEGER>;
    let location: OPTIONAL<LocationAreaAndCell>;
    let locationEstimate: OPTIONAL<OCTET_STRING>;
    let positioningData: OPTIONAL<OCTET_STRING>;
    let lcsCause: OPTIONAL<OCTET_STRING>;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let systemType: OPTIONAL<SystemType>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let causeForTerm!: CauseForTerm;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientIdentity": (_el: _Element): void => { lcsClientIdentity = $._decode_implicit<LCSClientIdentity>(() => _decode_LCSClientIdentity)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "molr-Type": (_el: _Element): void => { molr_Type = $._decode_implicit<Molr_Type>(() => _decode_Molr_Type)(_el); },
        "lcsQos": (_el: _Element): void => { lcsQos = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsPriority": (_el: _Element): void => { lcsPriority = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mlc-Number": (_el: _Element): void => { mlc_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimeStamp": (_el: _Element): void => { eventTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "measureDuration": (_el: _Element): void => { measureDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "positioningData": (_el: _Element): void => { positioningData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsCause": (_el: _Element): void => { lcsCause = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MOLCSRecord,
        _extension_additions_list_spec_for_MOLCSRecord,
        _root_component_type_list_2_spec_for_MOLCSRecord,
        undefined,
    );
    return new MOLCSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        lcsClientType,
        lcsClientIdentity,
        servedIMSI,
        servedMSISDN,
        molr_Type,
        lcsQos,
        lcsPriority,
        mlc_Number,
        eventTimeStamp,
        measureDuration,
        location,
        locationEstimate,
        positioningData,
        lcsCause,
        diagnostics,
        systemType,
        recordExtensions,
        causeForTerm
    );
}; }
    return _cached_decoder_for_MOLCSRecord(el);
}

let _cached_encoder_for_MOLCSRecord: $.ASN1Encoder<MOLCSRecord> | null = null;

/**
 * @summary Encodes a(n) MOLCSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOLCSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MOLCSRecord (value: MOLCSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOLCSRecord) { _cached_encoder_for_MOLCSRecord = function (value: MOLCSRecord, elGetter: $.ASN1Encoder<MOLCSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.lcsClientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER));
    }
    if (value.lcsClientIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientIdentity, $.BER)(value.lcsClientIdentity, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Molr_Type, $.BER)(value.molr_Type, $.BER));
    if (value.lcsQos !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.lcsQos, $.BER));
    }
    if (value.lcsPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.lcsPriority, $.BER));
    }
    if (value.mlc_Number !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.mlc_Number, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eventTimeStamp, $.BER));
    if (value.measureDuration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.measureDuration, $.BER));
    }
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.locationEstimate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.locationEstimate, $.BER));
    }
    if (value.positioningData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.positioningData, $.BER));
    }
    if (value.lcsCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.lcsCause, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MOLCSRecord(value, elGetter);
}


/* eslint-enable */
