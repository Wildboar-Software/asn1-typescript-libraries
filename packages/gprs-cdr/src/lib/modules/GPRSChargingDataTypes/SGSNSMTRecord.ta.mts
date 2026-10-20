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
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
// export { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
// export { ChChSelectionMode, _enum_for_ChChSelectionMode, ChChSelectionMode_servingNodeSupplied /* IMPORTED_LONG_ENUMERATION_ITEM */, servingNodeSupplied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_subscriptionSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_aPNSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_homeDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, homeDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_roamingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_visitingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, visitingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_fixedDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, fixedDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChChSelectionMode, _encode_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { CAMELInformationSMS, _decode_CAMELInformationSMS, _encode_CAMELInformationSMS } from "../GPRSChargingDataTypes/CAMELInformationSMS.ta.mjs";
// export { CAMELInformationSMS, _decode_CAMELInformationSMS, _encode_CAMELInformationSMS } from "../GPRSChargingDataTypes/CAMELInformationSMS.ta.mjs";
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType, _enum_for_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
// export { ServingNodeType, _enum_for_ServingNodeType, ServingNodeType_sGSN /* IMPORTED_LONG_ENUMERATION_ITEM */, sGSN /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServingNodeType_pMIPSGW /* IMPORTED_LONG_ENUMERATION_ITEM */, pMIPSGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServingNodeType_gTPSGW /* IMPORTED_LONG_ENUMERATION_ITEM */, gTPSGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServingNodeType_ePDG /* IMPORTED_LONG_ENUMERATION_ITEM */, ePDG /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServingNodeType_hSGW /* IMPORTED_LONG_ENUMERATION_ITEM */, hSGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServingNodeType_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServingNodeType_tWAN /* IMPORTED_LONG_ENUMERATION_ITEM */, tWAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServingNodeType, _encode_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
// export { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";
// export { CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity, CNOperatorSelectionEntity_servCNSelectedbyUE /* IMPORTED_LONG_ENUMERATION_ITEM */, servCNSelectedbyUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, CNOperatorSelectionEntity_servCNSelectedbyNtw /* IMPORTED_LONG_ENUMERATION_ITEM */, servCNSelectedbyNtw /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";


/**
 * @summary SGSNSMTRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNSMTRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    servedIMSI                  [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI                  [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN                [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    msNetworkCapability         [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    serviceCentre               [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordingEntity             [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    locationArea                [7] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    routingArea                 [8] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    cellIdentifier              [9] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    eventTimeStamp              [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    smsResult                   [11] Diagnostics OPTIONAL,
 *    recordExtensions            [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    nodeID                      [13] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    localSequenceNumber         [14] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    chargingCharacteristics     [15] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    rATType                     [16] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    chChSelectionMode           [17] IMPLICIT ChChSelectionMode OPTIONAL,
 *    cAMELInformationSMS         [18] IMPLICIT CAMELInformationSMS OPTIONAL,
 *    originatingAddress          [19] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    servingNodeType             [20] IMPLICIT ServingNodeType,
 *    servingNodeAddress          [21] GSNAddress OPTIONAL,
 *    servingNodeiPv6Address      [22] GSNAddress OPTIONAL,
 *    mMEName                     [23] IMPLICIT OCTET STRING OPTIONAL,
 *    mMERealm                    [24] IMPLICIT OCTET STRING OPTIONAL,
 *    userLocationInformation     [25] IMPLICIT OCTET STRING OPTIONAL,
 *    retransmission              [26] IMPLICIT NULL OPTIONAL,
 *    servingNodePLMNIdentifier   [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    userLocationInfoTime        [28] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt      [29] IMPLICIT CNOperatorSelectionEntity OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNSMTRecord {
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
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msNetworkCapability`.
     * @public
     * @readonly
     */
    readonly msNetworkCapability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceCentre`.
     * @public
     * @readonly
     */
    readonly serviceCentre: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationArea`.
     * @public
     * @readonly
     */
    readonly locationArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routingArea`.
     * @public
     * @readonly
     */
    readonly routingArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellIdentifier`.
     * @public
     * @readonly
     */
    readonly cellIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventTimeStamp`.
     * @public
     * @readonly
     */
    readonly eventTimeStamp: OCTET_STRING;
    /**
     * @summary `smsResult`.
     * @public
     * @readonly
     */
    readonly smsResult: OPTIONAL<Diagnostics>;
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
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `cAMELInformationSMS`.
     * @public
     * @readonly
     */
    readonly cAMELInformationSMS: OPTIONAL<CAMELInformationSMS>;
    /**
     * @summary `originatingAddress`.
     * @public
     * @readonly
     */
    readonly originatingAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingNodeType`.
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType;
    /**
     * @summary `servingNodeAddress`.
     * @public
     * @readonly
     */
    readonly servingNodeAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `servingNodeiPv6Address`.
     * @public
     * @readonly
     */
    readonly servingNodeiPv6Address: OPTIONAL<GSNAddress>;
    /**
     * @summary `mMEName`.
     * @public
     * @readonly
     */
    readonly mMEName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMERealm`.
     * @public
     * @readonly
     */
    readonly mMERealm: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
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

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        msNetworkCapability: OPTIONAL<OCTET_STRING>,
        serviceCentre: OPTIONAL<OCTET_STRING>,
        recordingEntity: OPTIONAL<OCTET_STRING>,
        locationArea: OPTIONAL<OCTET_STRING>,
        routingArea: OPTIONAL<OCTET_STRING>,
        cellIdentifier: OPTIONAL<OCTET_STRING>,
        eventTimeStamp: OCTET_STRING,
        smsResult: OPTIONAL<Diagnostics>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        nodeID: OPTIONAL<IA5String>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        chargingCharacteristics: OCTET_STRING,
        rATType: OPTIONAL<INTEGER>,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        cAMELInformationSMS: OPTIONAL<CAMELInformationSMS>,
        originatingAddress: OPTIONAL<OCTET_STRING>,
        servingNodeType: ServingNodeType,
        servingNodeAddress: OPTIONAL<GSNAddress>,
        servingNodeiPv6Address: OPTIONAL<GSNAddress>,
        mMEName: OPTIONAL<OCTET_STRING>,
        mMERealm: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        retransmission: OPTIONAL<NULL>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        userLocationInfoTime: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.msNetworkCapability = msNetworkCapability;
        this.serviceCentre = serviceCentre;
        this.recordingEntity = recordingEntity;
        this.locationArea = locationArea;
        this.routingArea = routingArea;
        this.cellIdentifier = cellIdentifier;
        this.eventTimeStamp = eventTimeStamp;
        this.smsResult = smsResult;
        this.recordExtensions = recordExtensions;
        this.nodeID = nodeID;
        this.localSequenceNumber = localSequenceNumber;
        this.chargingCharacteristics = chargingCharacteristics;
        this.rATType = rATType;
        this.chChSelectionMode = chChSelectionMode;
        this.cAMELInformationSMS = cAMELInformationSMS;
        this.originatingAddress = originatingAddress;
        this.servingNodeType = servingNodeType;
        this.servingNodeAddress = servingNodeAddress;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.mMEName = mMEName;
        this.mMERealm = mMERealm;
        this.userLocationInformation = userLocationInformation;
        this.retransmission = retransmission;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.userLocationInfoTime = userLocationInfoTime;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
    }

    /**
     * @summary Restructures an object into a SGSNSMTRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNSMTRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNSMTRecord`.
     * @returns {SGSNSMTRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNSMTRecord)]: (SGSNSMTRecord)[_K] }): SGSNSMTRecord {
        return new SGSNSMTRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.msNetworkCapability, _o.serviceCentre, _o.recordingEntity, _o.locationArea, _o.routingArea, _o.cellIdentifier, _o.eventTimeStamp, _o.smsResult, _o.recordExtensions, _o.nodeID, _o.localSequenceNumber, _o.chargingCharacteristics, _o.rATType, _o.chChSelectionMode, _o.cAMELInformationSMS, _o.originatingAddress, _o.servingNodeType, _o.servingNodeAddress, _o.servingNodeiPv6Address, _o.mMEName, _o.mMERealm, _o.userLocationInformation, _o.retransmission, _o.servingNodePLMNIdentifier, _o.userLocationInfoTime, _o.cNOperatorSelectionEnt);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `servingNodeType`
         * @public
         * @static
         */

    public static _enum_for_servingNodeType = _enum_for_ServingNodeType;        /**
         * @summary The enum used as the type of the component `cNOperatorSelectionEnt`
         * @public
         * @static
         */

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;
}

/**
 * @summary The Leading Root Component Types of SGSNSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNSMTRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msNetworkCapability", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceCentre", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("locationArea", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("routingArea", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellIdentifier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eventTimeStamp", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("smsResult", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("cAMELInformationSMS", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("originatingAddress", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("servingNodeAddress", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("mMEName", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("mMERealm", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of SGSNSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNSMTRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNSMTRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNSMTRecord: $.ASN1Decoder<SGSNSMTRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNSMTRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNSMTRecord (el: _Element): SGSNSMTRecord {
    if (!_cached_decoder_for_SGSNSMTRecord) { _cached_decoder_for_SGSNSMTRecord = function (el: _Element): SGSNSMTRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let msNetworkCapability: OPTIONAL<OCTET_STRING>;
    let serviceCentre: OPTIONAL<OCTET_STRING>;
    let recordingEntity: OPTIONAL<OCTET_STRING>;
    let locationArea: OPTIONAL<OCTET_STRING>;
    let routingArea: OPTIONAL<OCTET_STRING>;
    let cellIdentifier: OPTIONAL<OCTET_STRING>;
    let eventTimeStamp!: OCTET_STRING;
    let smsResult: OPTIONAL<Diagnostics>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let nodeID: OPTIONAL<IA5String>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let chargingCharacteristics!: OCTET_STRING;
    let rATType: OPTIONAL<INTEGER>;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let cAMELInformationSMS: OPTIONAL<CAMELInformationSMS>;
    let originatingAddress: OPTIONAL<OCTET_STRING>;
    let servingNodeType!: ServingNodeType;
    let servingNodeAddress: OPTIONAL<GSNAddress>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress>;
    let mMEName: OPTIONAL<OCTET_STRING>;
    let mMERealm: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let retransmission: OPTIONAL<NULL>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msNetworkCapability": (_el: _Element): void => { msNetworkCapability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceCentre": (_el: _Element): void => { serviceCentre = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationArea": (_el: _Element): void => { locationArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingArea": (_el: _Element): void => { routingArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellIdentifier": (_el: _Element): void => { cellIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimeStamp": (_el: _Element): void => { eventTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsResult": (_el: _Element): void => { smsResult = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "cAMELInformationSMS": (_el: _Element): void => { cAMELInformationSMS = $._decode_implicit<CAMELInformationSMS>(() => _decode_CAMELInformationSMS)(_el); },
        "originatingAddress": (_el: _Element): void => { originatingAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType>(() => _decode_ServingNodeType)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "mMEName": (_el: _Element): void => { mMEName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMERealm": (_el: _Element): void => { mMERealm = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNSMTRecord,
        _extension_additions_list_spec_for_SGSNSMTRecord,
        _root_component_type_list_2_spec_for_SGSNSMTRecord,
        undefined,
    );
    return new SGSNSMTRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        msNetworkCapability,
        serviceCentre,
        recordingEntity,
        locationArea,
        routingArea,
        cellIdentifier,
        eventTimeStamp,
        smsResult,
        recordExtensions,
        nodeID,
        localSequenceNumber,
        chargingCharacteristics,
        rATType,
        chChSelectionMode,
        cAMELInformationSMS,
        originatingAddress,
        servingNodeType,
        servingNodeAddress,
        servingNodeiPv6Address,
        mMEName,
        mMERealm,
        userLocationInformation,
        retransmission,
        servingNodePLMNIdentifier,
        userLocationInfoTime,
        cNOperatorSelectionEnt
    );
}; }
    return _cached_decoder_for_SGSNSMTRecord(el);
}

let _cached_encoder_for_SGSNSMTRecord: $.ASN1Encoder<SGSNSMTRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNSMTRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNSMTRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNSMTRecord (value: SGSNSMTRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNSMTRecord) { _cached_encoder_for_SGSNSMTRecord = function (value: SGSNSMTRecord, elGetter: $.ASN1Encoder<SGSNSMTRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.msNetworkCapability !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.msNetworkCapability, $.BER));
    }
    if (value.serviceCentre !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.serviceCentre, $.BER));
    }
    if (value.recordingEntity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    }
    if (value.locationArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.locationArea, $.BER));
    }
    if (value.routingArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.routingArea, $.BER));
    }
    if (value.cellIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.cellIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eventTimeStamp, $.BER));
    if (value.smsResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_Diagnostics, $.BER)(value.smsResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.cAMELInformationSMS !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_CAMELInformationSMS, $.BER)(value.cAMELInformationSMS, $.BER));
    }
    if (value.originatingAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.originatingAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => _encode_ServingNodeType, $.BER)(value.servingNodeType, $.BER));
    if (value.servingNodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 21, () => _encode_GSNAddress, $.BER)(value.servingNodeAddress, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 22, () => _encode_GSNAddress, $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.mMEName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.mMEName, $.BER));
    }
    if (value.mMERealm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.mMERealm, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNSMTRecord(value, elGetter);
}


/* eslint-enable */
