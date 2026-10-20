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
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
// export { ChChSelectionMode, _enum_for_ChChSelectionMode, ChChSelectionMode_servingNodeSupplied /* IMPORTED_LONG_ENUMERATION_ITEM */, servingNodeSupplied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_subscriptionSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_aPNSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_homeDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, homeDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_roamingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_visitingDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, visitingDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChChSelectionMode_fixedDefault /* IMPORTED_LONG_ENUMERATION_ITEM */, fixedDefault /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChChSelectionMode, _encode_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
// export { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
// export { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
// export { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
import { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";
// export { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";
import { FixedUserLocationInformation, _decode_FixedUserLocationInformation, _encode_FixedUserLocationInformation } from "../GPRSChargingDataTypes/FixedUserLocationInformation.ta.mjs";
// export { FixedUserLocationInformation, _decode_FixedUserLocationInformation, _encode_FixedUserLocationInformation } from "../GPRSChargingDataTypes/FixedUserLocationInformation.ta.mjs";


/**
 * @summary IPERecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPERecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    servedIMSI                     [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    iPEdgeAddress                  [4] GSNAddress,
 *    chargingID                     [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessPointNameNI              [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    iPCANsessionType               [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedIPCANsessionAddress      [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag             [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes           [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime              [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                       [14] IMPLICIT INTEGER,
 *    causeForRecClosing             [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                    [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber           [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                         [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions               [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber            [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedMSISDN                   [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics        [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode              [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    pSFurnishChargingInformation   [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                     [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    listOfServiceData              [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servedMNNAI                    [36] IMPLICIT SubscriptionID OPTIONAL,
 *    iPEdgeOperatorIdentifier       [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                      [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                       [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    servedIPCANsessionAddressExt   [45] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt          [47] IMPLICIT BOOLEAN OPTIONAL,
 *    iPEdgeiPv6AddressUsed          [50] GSNAddress OPTIONAL,
 *    retransmission                 [52] IMPLICIT NULL OPTIONAL,
 *    servedFixedSubsID              [55] IMPLICIT OCTET STRING OPTIONAL,
 *    accessLineIdentifier           [56] IMPLICIT AccessLineIdentifier OPTIONAL,
 *    fixedUserLocationInformation   [57] IMPLICIT FixedUserLocationInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class IPERecord {
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
     * @summary `iPEdgeAddress`.
     * @public
     * @readonly
     */
    readonly iPEdgeAddress: GSNAddress;
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
     * @summary `iPCANsessionType`.
     * @public
     * @readonly
     */
    readonly iPCANsessionType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIPCANsessionAddress`.
     * @public
     * @readonly
     */
    readonly servedIPCANsessionAddress: OPTIONAL<PDPAddress>;
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
     * @summary `listOfServiceData`.
     * @public
     * @readonly
     */
    readonly listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    /**
     * @summary `servedMNNAI`.
     * @public
     * @readonly
     */
    readonly servedMNNAI: OPTIONAL<SubscriptionID>;
    /**
     * @summary `iPEdgeOperatorIdentifier`.
     * @public
     * @readonly
     */
    readonly iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>;
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
     * @summary `servedIPCANsessionAddressExt`.
     * @public
     * @readonly
     */
    readonly servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlagExt`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iPEdgeiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servedFixedSubsID`.
     * @public
     * @readonly
     */
    readonly servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `accessLineIdentifier`.
     * @public
     * @readonly
     */
    readonly accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    /**
     * @summary `fixedUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        iPEdgeAddress: GSNAddress,
        chargingID: INTEGER,
        accessPointNameNI: OPTIONAL<IA5String>,
        iPCANsessionType: OPTIONAL<OCTET_STRING>,
        servedIPCANsessionAddress: OPTIONAL<PDPAddress>,
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
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servedMNNAI: OPTIONAL<SubscriptionID>,
        iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>,
        retransmission: OPTIONAL<NULL>,
        servedFixedSubsID: OPTIONAL<OCTET_STRING>,
        accessLineIdentifier: OPTIONAL<AccessLineIdentifier>,
        fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.iPEdgeAddress = iPEdgeAddress;
        this.chargingID = chargingID;
        this.accessPointNameNI = accessPointNameNI;
        this.iPCANsessionType = iPCANsessionType;
        this.servedIPCANsessionAddress = servedIPCANsessionAddress;
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
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.listOfServiceData = listOfServiceData;
        this.servedMNNAI = servedMNNAI;
        this.iPEdgeOperatorIdentifier = iPEdgeOperatorIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.servedIPCANsessionAddressExt = servedIPCANsessionAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.iPEdgeiPv6AddressUsed = iPEdgeiPv6AddressUsed;
        this.retransmission = retransmission;
        this.servedFixedSubsID = servedFixedSubsID;
        this.accessLineIdentifier = accessLineIdentifier;
        this.fixedUserLocationInformation = fixedUserLocationInformation;
    }

    /**
     * @summary Restructures an object into a IPERecord
     * @description
     * 
     * This takes an `object` and converts it to a `IPERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPERecord`.
     * @returns {IPERecord}
     */
    public static _from_object (_o: { [_K in keyof (IPERecord)]: (IPERecord)[_K] }): IPERecord {
        return new IPERecord(_o.recordType, _o.servedIMSI, _o.iPEdgeAddress, _o.chargingID, _o.accessPointNameNI, _o.iPCANsessionType, _o.servedIPCANsessionAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.listOfServiceData, _o.servedMNNAI, _o.iPEdgeOperatorIdentifier, _o.startTime, _o.stopTime, _o.servedIPCANsessionAddressExt, _o.dynamicAddressFlagExt, _o.iPEdgeiPv6AddressUsed, _o.retransmission, _o.servedFixedSubsID, _o.accessLineIdentifier, _o.fixedUserLocationInformation);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPERecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPEdgeAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iPCANsessionType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedIPCANsessionAddress", true, $.hasTag(_TagClass.context, 9)),
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
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("iPEdgeOperatorIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("servedIPCANsessionAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("iPEdgeiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("servedFixedSubsID", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("accessLineIdentifier", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("fixedUserLocationInformation", true, $.hasTag(_TagClass.context, 57))
];

/**
 * @summary The Trailing Root Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPERecord: $.ASN1Decoder<IPERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPERecord (el: _Element): IPERecord {
    if (!_cached_decoder_for_IPERecord) { _cached_decoder_for_IPERecord = function (el: _Element): IPERecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let iPEdgeAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let iPCANsessionType: OPTIONAL<OCTET_STRING>;
    let servedIPCANsessionAddress: OPTIONAL<PDPAddress>;
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
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    let accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    let fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPEdgeAddress": (_el: _Element): void => { iPEdgeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "iPCANsessionType": (_el: _Element): void => { iPCANsessionType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIPCANsessionAddress": (_el: _Element): void => { servedIPCANsessionAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
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
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "iPEdgeOperatorIdentifier": (_el: _Element): void => { iPEdgeOperatorIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIPCANsessionAddressExt": (_el: _Element): void => { servedIPCANsessionAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iPEdgeiPv6AddressUsed": (_el: _Element): void => { iPEdgeiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servedFixedSubsID": (_el: _Element): void => { servedFixedSubsID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessLineIdentifier": (_el: _Element): void => { accessLineIdentifier = $._decode_implicit<AccessLineIdentifier>(() => _decode_AccessLineIdentifier)(_el); },
        "fixedUserLocationInformation": (_el: _Element): void => { fixedUserLocationInformation = $._decode_implicit<FixedUserLocationInformation>(() => _decode_FixedUserLocationInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_IPERecord,
        _extension_additions_list_spec_for_IPERecord,
        _root_component_type_list_2_spec_for_IPERecord,
        undefined,
    );
    return new IPERecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        iPEdgeAddress,
        chargingID,
        accessPointNameNI,
        iPCANsessionType,
        servedIPCANsessionAddress,
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
        servedMSISDN,
        chargingCharacteristics,
        chChSelectionMode,
        pSFurnishChargingInformation,
        servedIMEI,
        listOfServiceData,
        servedMNNAI,
        iPEdgeOperatorIdentifier,
        startTime,
        stopTime,
        servedIPCANsessionAddressExt,
        dynamicAddressFlagExt,
        iPEdgeiPv6AddressUsed,
        retransmission,
        servedFixedSubsID,
        accessLineIdentifier,
        fixedUserLocationInformation
    );
}; }
    return _cached_decoder_for_IPERecord(el);
}

let _cached_encoder_for_IPERecord: $.ASN1Encoder<IPERecord> | null = null;

/**
 * @summary Encodes a(n) IPERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPERecord, encoded as an ASN.1 Element.
 */
export
function _encode_IPERecord (value: IPERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPERecord) { _cached_encoder_for_IPERecord = function (value: IPERecord, elGetter: $.ASN1Encoder<IPERecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.iPEdgeAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.iPCANsessionType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.iPCANsessionType, $.BER));
    }
    if (value.servedIPCANsessionAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_PDPAddress, $.BER)(value.servedIPCANsessionAddress, $.BER));
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
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.listOfServiceData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeSequenceOf<ChangeOfServiceCondition>(() => _encode_ChangeOfServiceCondition, $.BER), $.BER)(value.listOfServiceData, $.BER));
    }
    if (value.servedMNNAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SubscriptionID, $.BER)(value.servedMNNAI, $.BER));
    }
    if (value.iPEdgeOperatorIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.iPEdgeOperatorIdentifier, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    if (value.servedIPCANsessionAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedIPCANsessionAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.iPEdgeiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.iPEdgeiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.servedFixedSubsID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.servedFixedSubsID, $.BER));
    }
    if (value.accessLineIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_AccessLineIdentifier, $.BER)(value.accessLineIdentifier, $.BER));
    }
    if (value.fixedUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_FixedUserLocationInformation, $.BER)(value.fixedUserLocationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_IPERecord(value, elGetter);
}


/* eslint-enable */
