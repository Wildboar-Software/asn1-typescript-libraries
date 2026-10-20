/* eslint-disable */
import {
    IA5String,
    INTEGER,
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
import { ProSeUERole, _decode_ProSeUERole, _encode_ProSeUERole, _enum_for_ProSeUERole } from "../ProSeChargingDataTypes/ProSeUERole.ta.mjs";
// export { ProSeUERole, _enum_for_ProSeUERole, ProSeUERole_annoucingUE /* IMPORTED_LONG_ENUMERATION_ITEM */, annoucingUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_monitoringUE /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_requestorUE /* IMPORTED_LONG_ENUMERATION_ITEM */, requestorUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_requestedUE /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_discovererUE /* IMPORTED_LONG_ENUMERATION_ITEM */, discovererUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeUERole_discovereeUE /* IMPORTED_LONG_ENUMERATION_ITEM */, discovereeUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeUERole, _encode_ProSeUERole } from "../ProSeChargingDataTypes/ProSeUERole.ta.mjs";
import { ProSeFunctionRole, _decode_ProSeFunctionRole, _encode_ProSeFunctionRole, _enum_for_ProSeFunctionRole } from "../ProSeChargingDataTypes/ProSeFunctionRole.ta.mjs";
// export { ProSeFunctionRole, _enum_for_ProSeFunctionRole, ProSeFunctionRole_hPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, hPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeFunctionRole_vPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, vPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeFunctionRole_localPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, localPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeFunctionRole, _encode_ProSeFunctionRole } from "../ProSeChargingDataTypes/ProSeFunctionRole.ta.mjs";
import { ProSeEventType, _decode_ProSeEventType, _encode_ProSeEventType, _enum_for_ProSeEventType } from "../ProSeChargingDataTypes/ProSeEventType.ta.mjs";
// export { ProSeEventType, _enum_for_ProSeEventType, ProSeEventType_openAnnouncing /* IMPORTED_LONG_ENUMERATION_ITEM */, openAnnouncing /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_openMonitoring /* IMPORTED_LONG_ENUMERATION_ITEM */, openMonitoring /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_openMatchReport /* IMPORTED_LONG_ENUMERATION_ITEM */, openMatchReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_restrictedAnnouncing /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedAnnouncing /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_restrictedMonitoring /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedMonitoring /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_restrictedMatchReport /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedMatchReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_restrictedDiscoveryRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedDiscoveryRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeEventType_restrictedDiscoveryReporting /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedDiscoveryReporting /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeEventType, _encode_ProSeEventType } from "../ProSeChargingDataTypes/ProSeEventType.ta.mjs";
import { PC5RadioTechnology, _decode_PC5RadioTechnology, _encode_PC5RadioTechnology, _enum_for_PC5RadioTechnology } from "../ProSeChargingDataTypes/PC5RadioTechnology.ta.mjs";
// export { PC5RadioTechnology, _enum_for_PC5RadioTechnology, PC5RadioTechnology_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PC5RadioTechnology_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, PC5RadioTechnology_bothEUTRAAndWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, bothEUTRAAndWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PC5RadioTechnology, _encode_PC5RadioTechnology } from "../ProSeChargingDataTypes/PC5RadioTechnology.ta.mjs";


/**
 * @summary PFDDRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDDRecord ::= SET {
 *    recordType                    [0] IMPLICIT RecordType,
 *    retransmission                [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID              [2] IMPLICIT UTF8String OPTIONAL,
 *    servedIMSI                    [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    proSeFunctionIPAddress        [4] IPAddress OPTIONAL,
 *    chargingCharacteristics       [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode             [6] IMPLICIT ChChSelectionMode OPTIONAL,
 *    recordExtensions              [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    proSeRequestTimestamp         [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    roleofUE                      [9] IMPLICIT ProSeUERole OPTIONAL,
 *    pCThreeControlProtocolCause   [10] IMPLICIT INTEGER OPTIONAL,
 *    roleofProSeFunction           [11] IMPLICIT ProSeFunctionRole OPTIONAL,
 *    proSeApplicationID            [12] IMPLICIT UTF8String OPTIONAL,
 *    proSeEventType                [13] IMPLICIT ProSeEventType OPTIONAL,
 *    nodeID                        [14] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    proseFunctionId               [15] IMPLICIT UTF8String OPTIONAL,
 *    announcingUEHPLMNIdentifier   [16] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    announcingUEVPLMNIdentifier   [17] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    monitoringUEHPLMNIdentifier   [18] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    monitoringUEVPLMNIdentifier   [19] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    monitoredPLMNIdentifier       [20] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    applicationID                 [21] IMPLICIT UTF8String OPTIONAL,
 *    directDiscoveryModel          [22] IMPLICIT UTF8String OPTIONAL,
 *    validityPeriod                [23] IMPLICIT INTEGER OPTIONAL,
 *    monitoringUEIdentifier        [24] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    discovererUEHPLMNIdentifier   [25] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    discovererUEVPLMNIdentifier   [26] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    discovereeUEHPLMNIdentifier   [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    discovereeUEVPLMNIdentifier   [28] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    announcingPLMNID              [29] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    pc5RadioTechnology            [30] IMPLICIT PC5RadioTechnology OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PFDDRecord {
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
     * @summary `pCThreeControlProtocolCause`.
     * @public
     * @readonly
     */
    readonly pCThreeControlProtocolCause: OPTIONAL<INTEGER>;
    /**
     * @summary `roleofProSeFunction`.
     * @public
     * @readonly
     */
    readonly roleofProSeFunction: OPTIONAL<ProSeFunctionRole>;
    /**
     * @summary `proSeApplicationID`.
     * @public
     * @readonly
     */
    readonly proSeApplicationID: OPTIONAL<UTF8String>;
    /**
     * @summary `proSeEventType`.
     * @public
     * @readonly
     */
    readonly proSeEventType: OPTIONAL<ProSeEventType>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `proseFunctionId`.
     * @public
     * @readonly
     */
    readonly proseFunctionId: OPTIONAL<UTF8String>;
    /**
     * @summary `announcingUEHPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly announcingUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `announcingUEVPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly announcingUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringUEHPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly monitoringUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringUEVPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly monitoringUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoredPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly monitoredPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `applicationID`.
     * @public
     * @readonly
     */
    readonly applicationID: OPTIONAL<UTF8String>;
    /**
     * @summary `directDiscoveryModel`.
     * @public
     * @readonly
     */
    readonly directDiscoveryModel: OPTIONAL<UTF8String>;
    /**
     * @summary `validityPeriod`.
     * @public
     * @readonly
     */
    readonly validityPeriod: OPTIONAL<INTEGER>;
    /**
     * @summary `monitoringUEIdentifier`.
     * @public
     * @readonly
     */
    readonly monitoringUEIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovererUEHPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly discovererUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovererUEVPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly discovererUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovereeUEHPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly discovereeUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovereeUEVPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly discovereeUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `announcingPLMNID`.
     * @public
     * @readonly
     */
    readonly announcingPLMNID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pc5RadioTechnology`.
     * @public
     * @readonly
     */
    readonly pc5RadioTechnology: OPTIONAL<PC5RadioTechnology>;

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
        pCThreeControlProtocolCause: OPTIONAL<INTEGER>,
        roleofProSeFunction: OPTIONAL<ProSeFunctionRole>,
        proSeApplicationID: OPTIONAL<UTF8String>,
        proSeEventType: OPTIONAL<ProSeEventType>,
        nodeID: OPTIONAL<IA5String>,
        proseFunctionId: OPTIONAL<UTF8String>,
        announcingUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        announcingUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        monitoringUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        monitoringUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        monitoredPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        applicationID: OPTIONAL<UTF8String>,
        directDiscoveryModel: OPTIONAL<UTF8String>,
        validityPeriod: OPTIONAL<INTEGER>,
        monitoringUEIdentifier: OPTIONAL<OCTET_STRING>,
        discovererUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        discovererUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        discovereeUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        discovereeUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        announcingPLMNID: OPTIONAL<OCTET_STRING>,
        pc5RadioTechnology: OPTIONAL<PC5RadioTechnology>
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
        this.pCThreeControlProtocolCause = pCThreeControlProtocolCause;
        this.roleofProSeFunction = roleofProSeFunction;
        this.proSeApplicationID = proSeApplicationID;
        this.proSeEventType = proSeEventType;
        this.nodeID = nodeID;
        this.proseFunctionId = proseFunctionId;
        this.announcingUEHPLMNIdentifier = announcingUEHPLMNIdentifier;
        this.announcingUEVPLMNIdentifier = announcingUEVPLMNIdentifier;
        this.monitoringUEHPLMNIdentifier = monitoringUEHPLMNIdentifier;
        this.monitoringUEVPLMNIdentifier = monitoringUEVPLMNIdentifier;
        this.monitoredPLMNIdentifier = monitoredPLMNIdentifier;
        this.applicationID = applicationID;
        this.directDiscoveryModel = directDiscoveryModel;
        this.validityPeriod = validityPeriod;
        this.monitoringUEIdentifier = monitoringUEIdentifier;
        this.discovererUEHPLMNIdentifier = discovererUEHPLMNIdentifier;
        this.discovererUEVPLMNIdentifier = discovererUEVPLMNIdentifier;
        this.discovereeUEHPLMNIdentifier = discovereeUEHPLMNIdentifier;
        this.discovereeUEVPLMNIdentifier = discovereeUEVPLMNIdentifier;
        this.announcingPLMNID = announcingPLMNID;
        this.pc5RadioTechnology = pc5RadioTechnology;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PFDDRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PFDDRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.proSeRequestTimestamp !== undefined && (this.proSeRequestTimestamp.length !== 9)) {
            throw new ASN1SizeError("PFDDRecord.proSeRequestTimestamp violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("PFDDRecord.nodeID violates SIZE constraint");
        }
        if (this.announcingUEHPLMNIdentifier !== undefined && (this.announcingUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.announcingUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.announcingUEVPLMNIdentifier !== undefined && (this.announcingUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.announcingUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoringUEHPLMNIdentifier !== undefined && (this.monitoringUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.monitoringUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoringUEVPLMNIdentifier !== undefined && (this.monitoringUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.monitoringUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoredPLMNIdentifier !== undefined && (this.monitoredPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.monitoredPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoringUEIdentifier !== undefined && (this.monitoringUEIdentifier.length < 3 || this.monitoringUEIdentifier.length > 8)) {
            throw new ASN1SizeError("PFDDRecord.monitoringUEIdentifier violates SIZE constraint");
        }
        if (this.discovererUEHPLMNIdentifier !== undefined && (this.discovererUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovererUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.discovererUEVPLMNIdentifier !== undefined && (this.discovererUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovererUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.discovereeUEHPLMNIdentifier !== undefined && (this.discovereeUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovereeUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.discovereeUEVPLMNIdentifier !== undefined && (this.discovereeUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovereeUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.announcingPLMNID !== undefined && (this.announcingPLMNID.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.announcingPLMNID violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PFDDRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PFDDRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDDRecord`.
     * @returns {PFDDRecord}
     */
    public static _from_object (_o: { [_K in keyof (PFDDRecord)]: (PFDDRecord)[_K] }): PFDDRecord {
        return new PFDDRecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.servedIMSI, _o.proSeFunctionIPAddress, _o.chargingCharacteristics, _o.chChSelectionMode, _o.recordExtensions, _o.proSeRequestTimestamp, _o.roleofUE, _o.pCThreeControlProtocolCause, _o.roleofProSeFunction, _o.proSeApplicationID, _o.proSeEventType, _o.nodeID, _o.proseFunctionId, _o.announcingUEHPLMNIdentifier, _o.announcingUEVPLMNIdentifier, _o.monitoringUEHPLMNIdentifier, _o.monitoringUEVPLMNIdentifier, _o.monitoredPLMNIdentifier, _o.applicationID, _o.directDiscoveryModel, _o.validityPeriod, _o.monitoringUEIdentifier, _o.discovererUEHPLMNIdentifier, _o.discovererUEVPLMNIdentifier, _o.discovereeUEHPLMNIdentifier, _o.discovereeUEVPLMNIdentifier, _o.announcingPLMNID, _o.pc5RadioTechnology);
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
         * @summary The enum used as the type of the component `roleofProSeFunction`
         * @public
         * @static
         */

    public static _enum_for_roleofProSeFunction = _enum_for_ProSeFunctionRole;        /**
         * @summary The enum used as the type of the component `proSeEventType`
         * @public
         * @static
         */

    public static _enum_for_proSeEventType = _enum_for_ProSeEventType;        /**
         * @summary The enum used as the type of the component `pc5RadioTechnology`
         * @public
         * @static
         */

    public static _enum_for_pc5RadioTechnology = _enum_for_PC5RadioTechnology;
}

/**
 * @summary The Leading Root Component Types of PFDDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDDRecord: $.ComponentSpec[] = [
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
    new $.ComponentSpec("pCThreeControlProtocolCause", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("roleofProSeFunction", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("proSeApplicationID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("proSeEventType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("proseFunctionId", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("announcingUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("announcingUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("monitoringUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("monitoringUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("monitoredPLMNIdentifier", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("directDiscoveryModel", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("validityPeriod", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("monitoringUEIdentifier", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("discovererUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("discovererUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("discovereeUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("discovereeUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("announcingPLMNID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("pc5RadioTechnology", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of PFDDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDDRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDDRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDDRecord: $.ASN1Decoder<PFDDRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDDRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDDRecord (el: _Element): PFDDRecord {
    if (!_cached_decoder_for_PFDDRecord) { _cached_decoder_for_PFDDRecord = function (el: _Element): PFDDRecord {
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
    let pCThreeControlProtocolCause: OPTIONAL<INTEGER>;
    let roleofProSeFunction: OPTIONAL<ProSeFunctionRole>;
    let proSeApplicationID: OPTIONAL<UTF8String>;
    let proSeEventType: OPTIONAL<ProSeEventType>;
    let nodeID: OPTIONAL<IA5String>;
    let proseFunctionId: OPTIONAL<UTF8String>;
    let announcingUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let announcingUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let monitoringUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let monitoringUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let monitoredPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let applicationID: OPTIONAL<UTF8String>;
    let directDiscoveryModel: OPTIONAL<UTF8String>;
    let validityPeriod: OPTIONAL<INTEGER>;
    let monitoringUEIdentifier: OPTIONAL<OCTET_STRING>;
    let discovererUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let discovererUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let discovereeUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let discovereeUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let announcingPLMNID: OPTIONAL<OCTET_STRING>;
    let pc5RadioTechnology: OPTIONAL<PC5RadioTechnology>;
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
        "pCThreeControlProtocolCause": (_el: _Element): void => { pCThreeControlProtocolCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "roleofProSeFunction": (_el: _Element): void => { roleofProSeFunction = $._decode_implicit<ProSeFunctionRole>(() => _decode_ProSeFunctionRole)(_el); },
        "proSeApplicationID": (_el: _Element): void => { proSeApplicationID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "proSeEventType": (_el: _Element): void => { proSeEventType = $._decode_implicit<ProSeEventType>(() => _decode_ProSeEventType)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "proseFunctionId": (_el: _Element): void => { proseFunctionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "announcingUEHPLMNIdentifier": (_el: _Element): void => { announcingUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "announcingUEVPLMNIdentifier": (_el: _Element): void => { announcingUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringUEHPLMNIdentifier": (_el: _Element): void => { monitoringUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringUEVPLMNIdentifier": (_el: _Element): void => { monitoringUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoredPLMNIdentifier": (_el: _Element): void => { monitoredPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "directDiscoveryModel": (_el: _Element): void => { directDiscoveryModel = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "validityPeriod": (_el: _Element): void => { validityPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "monitoringUEIdentifier": (_el: _Element): void => { monitoringUEIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovererUEHPLMNIdentifier": (_el: _Element): void => { discovererUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovererUEVPLMNIdentifier": (_el: _Element): void => { discovererUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovereeUEHPLMNIdentifier": (_el: _Element): void => { discovereeUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovereeUEVPLMNIdentifier": (_el: _Element): void => { discovereeUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "announcingPLMNID": (_el: _Element): void => { announcingPLMNID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pc5RadioTechnology": (_el: _Element): void => { pc5RadioTechnology = $._decode_implicit<PC5RadioTechnology>(() => _decode_PC5RadioTechnology)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PFDDRecord,
        _extension_additions_list_spec_for_PFDDRecord,
        _root_component_type_list_2_spec_for_PFDDRecord,
        undefined,
    );
    return new PFDDRecord( /* SET_CONSTRUCTOR_CALL */
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
        pCThreeControlProtocolCause,
        roleofProSeFunction,
        proSeApplicationID,
        proSeEventType,
        nodeID,
        proseFunctionId,
        announcingUEHPLMNIdentifier,
        announcingUEVPLMNIdentifier,
        monitoringUEHPLMNIdentifier,
        monitoringUEVPLMNIdentifier,
        monitoredPLMNIdentifier,
        applicationID,
        directDiscoveryModel,
        validityPeriod,
        monitoringUEIdentifier,
        discovererUEHPLMNIdentifier,
        discovererUEVPLMNIdentifier,
        discovereeUEHPLMNIdentifier,
        discovereeUEVPLMNIdentifier,
        announcingPLMNID,
        pc5RadioTechnology
    );
}; }
    return _cached_decoder_for_PFDDRecord(el);
}

let _cached_encoder_for_PFDDRecord: $.ASN1Encoder<PFDDRecord> | null = null;

/**
 * @summary Encodes a(n) PFDDRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDDRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PFDDRecord (value: PFDDRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDDRecord) { _cached_encoder_for_PFDDRecord = function (value: PFDDRecord, _elGetter: $.ASN1Encoder<PFDDRecord>): _Element {
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
    if (value.pCThreeControlProtocolCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.pCThreeControlProtocolCause, $.BER));
    }
    if (value.roleofProSeFunction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ProSeFunctionRole, $.BER)(value.roleofProSeFunction, $.BER));
    }
    if (value.proSeApplicationID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.proSeApplicationID, $.BER));
    }
    if (value.proSeEventType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ProSeEventType, $.BER)(value.proSeEventType, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.proseFunctionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.proseFunctionId, $.BER));
    }
    if (value.announcingUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.announcingUEHPLMNIdentifier, $.BER));
    }
    if (value.announcingUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.announcingUEVPLMNIdentifier, $.BER));
    }
    if (value.monitoringUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.monitoringUEHPLMNIdentifier, $.BER));
    }
    if (value.monitoringUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.monitoringUEVPLMNIdentifier, $.BER));
    }
    if (value.monitoredPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.monitoredPLMNIdentifier, $.BER));
    }
    if (value.applicationID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.applicationID, $.BER));
    }
    if (value.directDiscoveryModel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.directDiscoveryModel, $.BER));
    }
    if (value.validityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER)(value.validityPeriod, $.BER));
    }
    if (value.monitoringUEIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.monitoringUEIdentifier, $.BER));
    }
    if (value.discovererUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.discovererUEHPLMNIdentifier, $.BER));
    }
    if (value.discovererUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.discovererUEVPLMNIdentifier, $.BER));
    }
    if (value.discovereeUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.discovereeUEHPLMNIdentifier, $.BER));
    }
    if (value.discovereeUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.discovereeUEVPLMNIdentifier, $.BER));
    }
    if (value.announcingPLMNID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.announcingPLMNID, $.BER));
    }
    if (value.pc5RadioTechnology !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_PC5RadioTechnology, $.BER)(value.pc5RadioTechnology, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PFDDRecord(value, elGetter);
}


/* eslint-enable */
