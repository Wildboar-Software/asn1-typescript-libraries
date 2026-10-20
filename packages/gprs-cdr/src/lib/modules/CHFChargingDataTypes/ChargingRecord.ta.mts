/* eslint-disable */
import {
    IA5String,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CHFChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../CHFChargingDataTypes/RecordType.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../CHFChargingDataTypes/SubscriptionID.ta.mjs";
// export { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../CHFChargingDataTypes/SubscriptionID.ta.mjs";
import { NetworkFunctionInformation, _decode_NetworkFunctionInformation, _encode_NetworkFunctionInformation } from "../CHFChargingDataTypes/NetworkFunctionInformation.ta.mjs";
// export { NetworkFunctionInformation, _decode_NetworkFunctionInformation, _encode_NetworkFunctionInformation } from "../CHFChargingDataTypes/NetworkFunctionInformation.ta.mjs";
import { Trigger, _decode_Trigger, _encode_Trigger } from "../CHFChargingDataTypes/Trigger.ta.mjs";
// export { Trigger, _decode_Trigger, _encode_Trigger } from "../CHFChargingDataTypes/Trigger.ta.mjs";
import { MultipleUnitUsage, _decode_MultipleUnitUsage, _encode_MultipleUnitUsage } from "../CHFChargingDataTypes/MultipleUnitUsage.ta.mjs";
// export { MultipleUnitUsage, _decode_MultipleUnitUsage, _encode_MultipleUnitUsage } from "../CHFChargingDataTypes/MultipleUnitUsage.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../CHFChargingDataTypes/CauseForRecClosing.ta.mjs";
// export { CauseForRecClosing, CauseForRecClosing_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_cAMELInitCallRelease /* IMPORTED_LONG_NAMED_INTEGER */, cAMELInitCallRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_volumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, volumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_timeLimit /* IMPORTED_LONG_NAMED_INTEGER */, timeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_servingNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, servingNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_maxChangeCond /* IMPORTED_LONG_NAMED_INTEGER */, maxChangeCond /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_managementIntervention /* IMPORTED_LONG_NAMED_INTEGER */, managementIntervention /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_intraSGSNIntersystemChange /* IMPORTED_LONG_NAMED_INTEGER */, intraSGSNIntersystemChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_rATChange /* IMPORTED_LONG_NAMED_INTEGER */, rATChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_mSTimeZoneChange /* IMPORTED_LONG_NAMED_INTEGER */, mSTimeZoneChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_sGSNPLMNIDChange /* IMPORTED_LONG_NAMED_INTEGER */, sGSNPLMNIDChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_sGWChange /* IMPORTED_LONG_NAMED_INTEGER */, sGWChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_aPNAMBRChange /* IMPORTED_LONG_NAMED_INTEGER */, aPNAMBRChange /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_mOExceptionDataCounterReceipt /* IMPORTED_LONG_NAMED_INTEGER */, mOExceptionDataCounterReceipt /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unauthorizedRequestingNetwork /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedRequestingNetwork /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unauthorizedLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_positionMethodFailure /* IMPORTED_LONG_NAMED_INTEGER */, positionMethodFailure /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_unknownOrUnreachableLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrUnreachableLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForRecClosing_listofDownstreamNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, listofDownstreamNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../CHFChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CHFChargingDataTypes/Diagnostics.ta.mjs";
// export { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CHFChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CHFChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CHFChargingDataTypes/ManagementExtension.ta.mjs";
import { PDUSessionChargingInformation, _decode_PDUSessionChargingInformation, _encode_PDUSessionChargingInformation } from "../CHFChargingDataTypes/PDUSessionChargingInformation.ta.mjs";
// export { PDUSessionChargingInformation, _decode_PDUSessionChargingInformation, _encode_PDUSessionChargingInformation } from "../CHFChargingDataTypes/PDUSessionChargingInformation.ta.mjs";
import { RoamingQBCInformation, _decode_RoamingQBCInformation, _encode_RoamingQBCInformation } from "../CHFChargingDataTypes/RoamingQBCInformation.ta.mjs";
// export { RoamingQBCInformation, _decode_RoamingQBCInformation, _encode_RoamingQBCInformation } from "../CHFChargingDataTypes/RoamingQBCInformation.ta.mjs";
import { SMSChargingInformation, _decode_SMSChargingInformation, _encode_SMSChargingInformation } from "../CHFChargingDataTypes/SMSChargingInformation.ta.mjs";
// export { SMSChargingInformation, _decode_SMSChargingInformation, _encode_SMSChargingInformation } from "../CHFChargingDataTypes/SMSChargingInformation.ta.mjs";


/**
 * @summary ChargingRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingRecord ::= SET {
 *    recordType                        [0] IMPLICIT RecordType,
 *    recordingNetworkFunctionID        [1] IMPLICIT IA5String  ( SIZE( 1 .. 36 ) ),
 *    subscriberIdentifier              [2] IMPLICIT SubscriptionID OPTIONAL,
 *    nFunctionConsumerInformation      [3] IMPLICIT NetworkFunctionInformation,
 *    triggers                          [4] IMPLICIT SEQUENCE  OF
 *       Trigger OPTIONAL,
 *    listOfMultipleUnitUsage           [5] IMPLICIT SEQUENCE  OF
 *       MultipleUnitUsage OPTIONAL,
 *    recordOpeningTime                 [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                          [7] IMPLICIT INTEGER,
 *    recordSequenceNumber              [8] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecClosing                [9] IMPLICIT CauseForRecClosing,
 *    diagnostics                       [10] Diagnostics OPTIONAL,
 *    localRecordSequenceNumber         [11] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions                  [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    pDUSessionChargingInformation     [13] IMPLICIT PDUSessionChargingInformation OPTIONAL,
 *    roamingQBCInformation             [14] IMPLICIT RoamingQBCInformation OPTIONAL,
 *    sMSChargingInformation            [15] IMPLICIT SMSChargingInformation OPTIONAL,
 *    chargingSessionIdentifier         [16] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceSpecificationInformation   [17] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChargingRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recordingNetworkFunctionID`.
     * @public
     * @readonly
     */
    readonly recordingNetworkFunctionID: IA5String;
    /**
     * @summary `subscriberIdentifier`.
     * @public
     * @readonly
     */
    readonly subscriberIdentifier: OPTIONAL<SubscriptionID>;
    /**
     * @summary `nFunctionConsumerInformation`.
     * @public
     * @readonly
     */
    readonly nFunctionConsumerInformation: NetworkFunctionInformation;
    /**
     * @summary `triggers`.
     * @public
     * @readonly
     */
    readonly triggers: OPTIONAL<Trigger[]>;
    /**
     * @summary `listOfMultipleUnitUsage`.
     * @public
     * @readonly
     */
    readonly listOfMultipleUnitUsage: OPTIONAL<MultipleUnitUsage[]>;
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
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
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
     * @summary `localRecordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `pDUSessionChargingInformation`.
     * @public
     * @readonly
     */
    readonly pDUSessionChargingInformation: OPTIONAL<PDUSessionChargingInformation>;
    /**
     * @summary `roamingQBCInformation`.
     * @public
     * @readonly
     */
    readonly roamingQBCInformation: OPTIONAL<RoamingQBCInformation>;
    /**
     * @summary `sMSChargingInformation`.
     * @public
     * @readonly
     */
    readonly sMSChargingInformation: OPTIONAL<SMSChargingInformation>;
    /**
     * @summary `chargingSessionIdentifier`.
     * @public
     * @readonly
     */
    readonly chargingSessionIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceSpecificationInformation`.
     * @public
     * @readonly
     */
    readonly serviceSpecificationInformation: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        recordingNetworkFunctionID: IA5String,
        subscriberIdentifier: OPTIONAL<SubscriptionID>,
        nFunctionConsumerInformation: NetworkFunctionInformation,
        triggers: OPTIONAL<Trigger[]>,
        listOfMultipleUnitUsage: OPTIONAL<MultipleUnitUsage[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        pDUSessionChargingInformation: OPTIONAL<PDUSessionChargingInformation>,
        roamingQBCInformation: OPTIONAL<RoamingQBCInformation>,
        sMSChargingInformation: OPTIONAL<SMSChargingInformation>,
        chargingSessionIdentifier: OPTIONAL<OCTET_STRING>,
        serviceSpecificationInformation: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.recordingNetworkFunctionID = recordingNetworkFunctionID;
        this.subscriberIdentifier = subscriberIdentifier;
        this.nFunctionConsumerInformation = nFunctionConsumerInformation;
        this.triggers = triggers;
        this.listOfMultipleUnitUsage = listOfMultipleUnitUsage;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.recordSequenceNumber = recordSequenceNumber;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.pDUSessionChargingInformation = pDUSessionChargingInformation;
        this.roamingQBCInformation = roamingQBCInformation;
        this.sMSChargingInformation = sMSChargingInformation;
        this.chargingSessionIdentifier = chargingSessionIdentifier;
        this.serviceSpecificationInformation = serviceSpecificationInformation;
    
        if ((this.recordingNetworkFunctionID.length < 1 || this.recordingNetworkFunctionID.length > 36)) {
            throw new ASN1SizeError("ChargingRecord.recordingNetworkFunctionID violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("ChargingRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && ((typeof this.localRecordSequenceNumber === "bigint" ? Number(this.localRecordSequenceNumber) : this.localRecordSequenceNumber) < 0 || (typeof this.localRecordSequenceNumber === "bigint" ? Number(this.localRecordSequenceNumber) : this.localRecordSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("ChargingRecord.localRecordSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ChargingRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingRecord`.
     * @returns {ChargingRecord}
     */
    public static _from_object (_o: { [_K in keyof (ChargingRecord)]: (ChargingRecord)[_K] }): ChargingRecord {
        return new ChargingRecord(_o.recordType, _o.recordingNetworkFunctionID, _o.subscriberIdentifier, _o.nFunctionConsumerInformation, _o.triggers, _o.listOfMultipleUnitUsage, _o.recordOpeningTime, _o.duration, _o.recordSequenceNumber, _o.causeForRecClosing, _o.diagnostics, _o.localRecordSequenceNumber, _o.recordExtensions, _o.pDUSessionChargingInformation, _o.roamingQBCInformation, _o.sMSChargingInformation, _o.chargingSessionIdentifier, _o.serviceSpecificationInformation);
    }


}

/**
 * @summary The Leading Root Component Types of ChargingRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingNetworkFunctionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriberIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nFunctionConsumerInformation", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("triggers", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("listOfMultipleUnitUsage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pDUSessionChargingInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("roamingQBCInformation", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sMSChargingInformation", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("chargingSessionIdentifier", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceSpecificationInformation", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of ChargingRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingRecord: $.ASN1Decoder<ChargingRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingRecord (el: _Element): ChargingRecord {
    if (!_cached_decoder_for_ChargingRecord) { _cached_decoder_for_ChargingRecord = function (el: _Element): ChargingRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingNetworkFunctionID!: IA5String;
    let subscriberIdentifier: OPTIONAL<SubscriptionID>;
    let nFunctionConsumerInformation!: NetworkFunctionInformation;
    let triggers: OPTIONAL<Trigger[]>;
    let listOfMultipleUnitUsage: OPTIONAL<MultipleUnitUsage[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let pDUSessionChargingInformation: OPTIONAL<PDUSessionChargingInformation>;
    let roamingQBCInformation: OPTIONAL<RoamingQBCInformation>;
    let sMSChargingInformation: OPTIONAL<SMSChargingInformation>;
    let chargingSessionIdentifier: OPTIONAL<OCTET_STRING>;
    let serviceSpecificationInformation: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingNetworkFunctionID": (_el: _Element): void => { recordingNetworkFunctionID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "subscriberIdentifier": (_el: _Element): void => { subscriberIdentifier = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "nFunctionConsumerInformation": (_el: _Element): void => { nFunctionConsumerInformation = $._decode_implicit<NetworkFunctionInformation>(() => _decode_NetworkFunctionInformation)(_el); },
        "triggers": (_el: _Element): void => { triggers = $._decode_implicit<Trigger[]>(() => $._decodeSequenceOf<Trigger>(() => _decode_Trigger))(_el); },
        "listOfMultipleUnitUsage": (_el: _Element): void => { listOfMultipleUnitUsage = $._decode_implicit<MultipleUnitUsage[]>(() => $._decodeSequenceOf<MultipleUnitUsage>(() => _decode_MultipleUnitUsage))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "pDUSessionChargingInformation": (_el: _Element): void => { pDUSessionChargingInformation = $._decode_implicit<PDUSessionChargingInformation>(() => _decode_PDUSessionChargingInformation)(_el); },
        "roamingQBCInformation": (_el: _Element): void => { roamingQBCInformation = $._decode_implicit<RoamingQBCInformation>(() => _decode_RoamingQBCInformation)(_el); },
        "sMSChargingInformation": (_el: _Element): void => { sMSChargingInformation = $._decode_implicit<SMSChargingInformation>(() => _decode_SMSChargingInformation)(_el); },
        "chargingSessionIdentifier": (_el: _Element): void => { chargingSessionIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceSpecificationInformation": (_el: _Element): void => { serviceSpecificationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingRecord,
        _extension_additions_list_spec_for_ChargingRecord,
        _root_component_type_list_2_spec_for_ChargingRecord,
        undefined,
    );
    return new ChargingRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingNetworkFunctionID,
        subscriberIdentifier,
        nFunctionConsumerInformation,
        triggers,
        listOfMultipleUnitUsage,
        recordOpeningTime,
        duration,
        recordSequenceNumber,
        causeForRecClosing,
        diagnostics,
        localRecordSequenceNumber,
        recordExtensions,
        pDUSessionChargingInformation,
        roamingQBCInformation,
        sMSChargingInformation,
        chargingSessionIdentifier,
        serviceSpecificationInformation
    );
}; }
    return _cached_decoder_for_ChargingRecord(el);
}

let _cached_encoder_for_ChargingRecord: $.ASN1Encoder<ChargingRecord> | null = null;

/**
 * @summary Encodes a(n) ChargingRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingRecord (value: ChargingRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingRecord) { _cached_encoder_for_ChargingRecord = function (value: ChargingRecord, _elGetter: $.ASN1Encoder<ChargingRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.recordingNetworkFunctionID, $.BER));
    if (value.subscriberIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SubscriptionID, $.BER)(value.subscriberIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NetworkFunctionInformation, $.BER)(value.nFunctionConsumerInformation, $.BER));
    if (value.triggers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Trigger>(() => _encode_Trigger, $.BER), $.BER)(value.triggers, $.BER));
    }
    if (value.listOfMultipleUnitUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<MultipleUnitUsage>(() => _encode_MultipleUnitUsage, $.BER), $.BER)(value.listOfMultipleUnitUsage, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.pDUSessionChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PDUSessionChargingInformation, $.BER)(value.pDUSessionChargingInformation, $.BER));
    }
    if (value.roamingQBCInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_RoamingQBCInformation, $.BER)(value.roamingQBCInformation, $.BER));
    }
    if (value.sMSChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SMSChargingInformation, $.BER)(value.sMSChargingInformation, $.BER));
    }
    if (value.chargingSessionIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.chargingSessionIdentifier, $.BER));
    }
    if (value.serviceSpecificationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.serviceSpecificationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ChargingRecord(value, elGetter);
}


/* eslint-enable */
