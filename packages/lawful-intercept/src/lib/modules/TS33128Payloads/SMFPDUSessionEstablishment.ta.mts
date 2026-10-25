/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { type SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
// export { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { type PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { PDUSessionType, _decode_PDUSessionType, _encode_PDUSessionType, _enum_for_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
// export { PDUSessionType, _enum_for_PDUSessionType, PDUSessionType_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv4v6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4v6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDUSessionType, _encode_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { type UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { type DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { type HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { type SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { type UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
// export { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
import { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
// export { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { HandoverState, _decode_HandoverState, _encode_HandoverState, _enum_for_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
// export { HandoverState, _enum_for_HandoverState, HandoverState_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_preparing /* IMPORTED_LONG_ENUMERATION_ITEM */, preparing /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_prepared /* IMPORTED_LONG_ENUMERATION_ITEM */, prepared /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverState, _encode_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { type PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
// export { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
import { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
// export { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { type GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
// export { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
import { type AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
import { type ANDSPRules, _decode_ANDSPRules, _encode_ANDSPRules } from "../TS33128Payloads/ANDSPRules.ta.mjs";
// export { ANDSPRules, _decode_ANDSPRules, _encode_ANDSPRules } from "../TS33128Payloads/ANDSPRules.ta.mjs";
import { type ServiceLevelAAContainer, _decode_ServiceLevelAAContainer, _encode_ServiceLevelAAContainer } from "../TS33128Payloads/ServiceLevelAAContainer.ta.mjs";
// export { ServiceLevelAAContainer, _decode_ServiceLevelAAContainer, _encode_ServiceLevelAAContainer } from "../TS33128Payloads/ServiceLevelAAContainer.ta.mjs";
import { type SatelliteID, _decode_SatelliteID, _encode_SatelliteID } from "../TS33128Payloads/SatelliteID.ta.mjs";
// export { SatelliteID, _decode_SatelliteID, _encode_SatelliteID } from "../TS33128Payloads/SatelliteID.ta.mjs";


/**
 * @summary SMFPDUSessionEstablishment
 * @description
 * 
 * The IRI-POI in the SMF shall generate an xIRI containing an
 * SMFPDUSessionEstablishment record when the IRI-POI present in the SMF detects
 * that a single-access PDU session has been established for the target UE. The
 * IRI-POI present in the SMF shall generate the xIRI for the following events:
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO), sends the N1 NAS message
 *   (via AMF) PDU SESSION ESTABLISHMENT ACCEPT to the UE and the 5G Session
 *   Management (5GSM) state within the SMF is changed to PDU SESSION ACTIVE
 *   (see TS 24.501 [13] clauses 6.1.3.3 and 6.4.1).
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF) sends
 *   the N16: Nsmf_PDU_Session_Create Response message with n1SmInfoToUe IE
 *   containing the PDU SESSION ESTABLISHMENT ACCEPT (see TS 29.502 [16] clauses
 *   5.2.1, 5.2.2.7, 5.2.3, 6.1.2.4 and 6.1.6.4).
 *
 * If the Npcf_SMPolicyControl_Create response received from the PCF for the
 * target UE in response to Npcf_SMPolicyControl_Create request includes PCC
 * rules in which the traffic control policy data contains either a routeToLocs
 * IE or trafficSteeringPolIdDl IE and/or trafficSteeringPolIdUl IE, then the
 * SMF shall include those PCC rules in the xIRI. These PCC rules correspond to
 * policies that influence the target UE’s traffic flows (see TS 29.513 [88]
 * clause 5.5.3).
 *
 * NOTE: At least one of the SUPI, PEI or GPSI fields shall be present.
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as BEGIN.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFPDUSessionEstablishment ::= SEQUENCE
 * {
 *     sUPI                          [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated           [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                           [3] PEI OPTIONAL,
 *     gPSI                          [4] GPSI OPTIONAL,
 *     pDUSessionID                  [5] PDUSessionID,
 *     gTPTunnelID                   [6] FTEID,
 *     pDUSessionType                [7] PDUSessionType,
 *     sNSSAI                        [8] SNSSAI OPTIONAL,
 *     uEEndpoint                    [9] SEQUENCE OF UEEndpointAddress OPTIONAL,
 *     non3GPPAccessEndpoint         [10] UEEndpointAddress OPTIONAL,
 *     location                      [11] Location OPTIONAL,
 *     dNN                           [12] DNN,
 *     aMFID                         [13] AMFID OPTIONAL,
 *     hSMFURI                       [14] HSMFURI OPTIONAL,
 *     requestType                   [15] FiveGSMRequestType,
 *     accessType                    [16] AccessType OPTIONAL,
 *     rATType                       [17] RATType OPTIONAL,
 *     sMPDUDNRequest                [18] SMPDUDNRequest OPTIONAL,
 *     uEEPSPDNConnection            [19] UEEPSPDNConnection OPTIONAL,
 *     ePS5GSComboInfo               [20] EPS5GSComboInfo OPTIONAL,
 *     selectedDNN                   [21] DNN OPTIONAL,
 *     servingNetwork                [22] SMFServingNetwork OPTIONAL,
 *     oldPDUSessionID               [23] PDUSessionID OPTIONAL,
 *     handoverState                 [24] HandoverState OPTIONAL,
 *     gTPTunnelInfo                 [25] GTPTunnelInfo OPTIONAL,
 *     pCCRules                      [26] PCCRuleSet OPTIONAL,
 *     ePSPDNConnectionEstablishment [27] EPSPDNConnectionEstablishment OPTIONAL,
 *     satelliteBackhaulCategory     [28] SBIType OPTIONAL,
 *     gEOSatelliteID                [29] GEOSatelliteID OPTIONAL,
 *     alternativeNSSAI              [30] AlternativeNSSAIList OPTIONAL,
 *     aNDSPRules                    [31] ANDSPRules OPTIONAL,
 *     serviceLevelAAContainer       [32] ServiceLevelAAContainer OPTIONAL,
 *     servingSatelliteID            [33] SatelliteID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFPDUSessionEstablishment {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the PDU session (e.g. as provided by the AMF in the
     * associated Nsmf_PDU_Session_CreateSMContext service operation). Shall be
     * present except for PEI-only unauthenticated emergency sessions (see
     * NOTE). NOTE: At least one of the SUPI, PEI or GPSI fields shall be
     * present.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `sUPIUnauthenticated`.
     * @description
     *
     * Shall be present if a SUPI is present in the message and set to "true" if
     * the SUPI has not been authenticated, or "false" if it has been
     * authenticated.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI associated with the PDU session, if available (see NOTE). NOTE: At
     * least one of the SUPI, PEI or GPSI fields shall be present.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI associated with the PDU session, if available (see NOTE). NOTE: At
     * least one of the SUPI, PEI or GPSI fields shall be present.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID. See TS 24.501 [13] clause 9.4.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `gTPTunnelID`.
     * @description
     *
     * Contains the F-TEID identifying the UPF endpoint of the GTP tunnel used
     * to encapsulate the traffic derived from the UL NG-U UP TNL Information
     * (see TS 38.413 clause 9.3.4.1), as defined in TS 29.244 [15] clause
     * 8.2.3. Non-GTP encapsulation is for further study.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly gTPTunnelID: FTEID;
    /**
     * @summary `pDUSessionType`.
     * @description
     *
     * Identifies selected PDU session type, see TS 24.501 [13] clause
     * 9.11.4.11.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionType: PDUSessionType;
    /**
     * @summary `sNSSAI`.
     * @description
     *
     * Slice identifiers associated with the PDU session, if available. See TS
     * 23.003 [19] clause 28.4.2 and TS 23.501 [2] clause 5.15.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly sNSSAI: OPTIONAL<SNSSAI>;
    /**
     * @summary `uEEndpoint`.
     * @description
     *
     * UE endpoint address(es) assigned to the PDU Session, if available (see TS
     * 29.244 [15] clause 5.21).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    /**
     * @summary `non3GPPAccessEndpoint`.
     * @description
     *
     * UE's local IP address used to reach the N3IWF, TNGF or TWIF, if
     * available. IP addresses are given as 4 octets (for IPv4) or 16 octets
     * (for IPv6) with the most significant octet first (network byte order).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information provided by the AMF or present in the context at the
     * SMF, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `dNN`.
     * @description
     *
     * Data Network Name requested by the target UE, as defined in TS 23.003[19]
     * clause 9A and described in TS 23.502 [4] clause 4.3.2.2. Shall be given
     * in dotted-label presentation format as described in TS 23.003 [19] clause
     * 9.1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly dNN: DNN;
    /**
     * @summary `aMFID`.
     * @description
     *
     * Identifier of the AMF associated with the target UE, as defined in TS
     * 23.003 [19] clause 2.10.1 if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly aMFID: OPTIONAL<AMFID>;
    /**
     * @summary `hSMFURI`.
     * @description
     *
     * URI of the Nsmf_PDUSession service of the selected H-SMF, if available.
     * See TS 29.502 [16] clause 6.1.6.2.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly hSMFURI: OPTIONAL<HSMFURI>;
    /**
     * @summary `requestType`.
     * @description
     *
     * Type of request as described in TS 24.501 [13] clause 9.11.3.47 provided
     * within the Nsmf_PDU_Session_CreateSMContext Request (TS 29.502 [16])
     * message shall be reported. In the case where the network does not support
     * Multi Access (MA) PDU sessions, but receives a MA PDU session request, a
     * request type of "Initial request" shall be reported. In the case where
     * the network does not provide a request type value for a non-MA PDU
     * session, a request type of "initial request", according to TS 24.501 [13]
     * clause 6.4.1.2 shall be reported.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly requestType: FiveGSMRequestType;
    /**
     * @summary `accessType`.
     * @description
     *
     * Access type associated with the session (i.e. 3GPP or non-3GPP access) if
     * provided by the AMF (see TS 24.501 [13] clause 9.11.2.1A).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly accessType: OPTIONAL<AccessType>;
    /**
     * @summary `rATType`.
     * @description
     *
     * RAT Type associated with the access if provided by the AMF as part of
     * session establishment (see TS 23.502 [4] clause 4.3.2). Values given as
     * per TS 29.571 [17] clause 5.4.3.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<RATType>;
    /**
     * @summary `sMPDUDNRequest`.
     * @description
     *
     * Contents of the SM PDU DN Request container, if available, as described
     * in TS 24.501 [13] clause 9.11.4.15.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    /**
     * @summary `uEEPSPDNConnection`.
     * @description
     *
     * This IE shall be present, if available, during an EPS to 5GS Idle mode
     * mobility or handover using the N26 interface. If present, it shall
     * contain the EPS bearer context(s) information present in the
     * uEEPSPDNConnection parameter of the intercepted SmContextCreateData
     * message. (see TS 29.502 [16] clause 6.1.6.2.2).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    /**
     * @summary `ePS5GSComboInfo`.
     * @description
     *
     * Provides detailed information about PDN Connections associated with the
     * reported PDU Session. Shall be included if the AMF has selected a
     * SMF+PGW-C to serve the PDU session. This parameter shall include the
     * additional IEs in table 6.2.3.2.2-2, if present.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    /**
     * @summary `selectedDNN`.
     * @description
     *
     * Shall be present if a DNN other than the UE requested DNN is selected for
     * the PDU Session. Shall be given in dotted-label presentation format as
     * described in TS 23.003 [19] clause 9.1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly selectedDNN: OPTIONAL<DNN>;
    /**
     * @summary `servingNetwork`.
     * @description
     *
     * PLMN ID of the serving core network operator, and, for a Non-Public
     * Network (NPN), the NID that together with the PLMN ID identifies the NPN.
     * Shall be present if this IE is in the SMContextCreateData or
     * PDUSessionCreateData message sent to the SMF or the PDU Session Context
     * or SM Context at the SMF (see TS 29.502 [16] clauses 6.1.6.2.2, 6.1.6.2.9
     * and 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly servingNetwork: OPTIONAL<SMFServingNetwork>;
    /**
     * @summary `oldPDUSessionID`.
     * @description
     *
     * Shall be present if this IE is in the SMContextCreateData or
     * PDUSessionCreateData message sent to the SMF or the PDU Session Context
     * or SM Context at the SMF (see TS 29.502 [16] clauses 6.1.6.2.2, 6.1.6.2.9
     * and 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly oldPDUSessionID: OPTIONAL<PDUSessionID>;
    /**
     * @summary `handoverState`.
     * @description
     *
     * Indicates whether the PDU Session Establishment being reported was due to
     * a handover. Shall be present if this IE is in the SMContextCreatedData
     * sent by the SMF (see TS 29.502 [16] clause 6.1.6.2.3).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly handoverState: OPTIONAL<HandoverState>;
    /**
     * @summary `gTPTunnelInfo`.
     * @description
     *
     * Contains the information for the User Plane GTP Tunnels for the PDU
     * Session (see TS 29.502 [16] clauses 6.1.6.2.2, 6.1.6.2.9 and 6.1.6.2.39).
     * See table 6.2.3.2.2-3.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    /**
     * @summary `pCCRules`.
     * @description
     *
     * Set of PCC rules related to traffic influence. Each PCC rule influences
     * the routing of a given traffic flow. If several flows are concerned, then
     * several PCC rules shall be handled by the SMF. Traffic influence policies
     * are originated by an AF. PCF translates these rules into PCC rules for
     * traffic influence. The payload of a PCC rule for traffic influence is
     * defined in table 6.2.3.2.2-6.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly pCCRules: OPTIONAL<PCCRuleSet>;
    /**
     * @summary `ePSPDNConnectionEstablishment`.
     * @description
     *
     * Provides details about PDN Connections when the
     * SMFPDUSessionEstablishment xIRI message is used to report PDN Connection
     * establishment. See table 6.3.3.2.2-1 and clause 6.3.3.2.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly ePSPDNConnectionEstablishment: OPTIONAL<EPSPDNConnectionEstablishment>;
    /**
     * @summary `satelliteBackhaulCategory`.
     * @description
     *
     * Indicates that a satellite backhaul is used towards 5G AN and the
     * corresponding backhaul category, if available. Encoded according to TS
     * 29.571 [17] clause 5.4.3.39. The SBIReference for this parameter shall be
     * populated with
     * 'TS29571_CommonData.yaml#/components/schemas/SatelliteBackhaulCategory'.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly satelliteBackhaulCategory: OPTIONAL<SBIType>;
    /**
     * @summary `gEOSatelliteID`.
     * @description
     *
     * Indicates the satellite ID if satellite backhaul category is GEO, if
     * available. Encoded according to TS 29.571 [17] clause 5.4.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly gEOSatelliteID: OPTIONAL<GEOSatelliteID>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI. Shall be present if this IE is in the
     * SMContextCreateData or PDUSessionCreateData message sent to the SMF or
     * the PDU Session Context or SM Context at the SMF (see TS 29.502 [16]
     * clauses 6.1.6.2.2, 6.1.6.2.9 and 6.1.6.2.39). See TS 24.501 [13] clause
     * 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    /**
     * @summary `aNDSPRules`.
     * @description
     *
     * Indicates the ANDSP sent by the PCF to the SMF for the target. Contains
     * the payload of the UE policy part type ANDSP, encoded per TS 24.526 [163]
     * clause 5.3. This parameter shall only be included if location is
     * authorized.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly aNDSPRules: OPTIONAL<ANDSPRules>;
    /**
     * @summary `serviceLevelAAContainer`.
     * @description
     *
     * Provides information related to UAS, sent during the establishment of a
     * PDU session for UAS services. Encoded per TS 24.501 [13], clause
     * 9.11.2.10. Include if present in the PDU Session Establishment Request
     * message. See TS 29.502 [16] clause 6.1.6.4.4-1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly serviceLevelAAContainer: OPTIONAL<ServiceLevelAAContainer>;
    /**
     * @summary `servingSatelliteID`.
     * @description
     *
     * Provides the identifier of the satellite currently serving the target UE
     * in NTN deployments. Encoded according to TS 29.571 [17] clause 5.4.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly servingSatelliteID: OPTIONAL<SatelliteID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: OPTIONAL<SUPI>,
        sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        pDUSessionID: PDUSessionID,
        gTPTunnelID: FTEID,
        pDUSessionType: PDUSessionType,
        sNSSAI: OPTIONAL<SNSSAI>,
        uEEndpoint: OPTIONAL<UEEndpointAddress[]>,
        non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        location: OPTIONAL<Location>,
        dNN: DNN,
        aMFID: OPTIONAL<AMFID>,
        hSMFURI: OPTIONAL<HSMFURI>,
        requestType: FiveGSMRequestType,
        accessType?: OPTIONAL<AccessType>,
        rATType?: OPTIONAL<RATType>,
        sMPDUDNRequest?: OPTIONAL<SMPDUDNRequest>,
        uEEPSPDNConnection?: OPTIONAL<UEEPSPDNConnection>,
        ePS5GSComboInfo?: OPTIONAL<EPS5GSComboInfo>,
        selectedDNN?: OPTIONAL<DNN>,
        servingNetwork?: OPTIONAL<SMFServingNetwork>,
        oldPDUSessionID?: OPTIONAL<PDUSessionID>,
        handoverState?: OPTIONAL<HandoverState>,
        gTPTunnelInfo?: OPTIONAL<GTPTunnelInfo>,
        pCCRules?: OPTIONAL<PCCRuleSet>,
        ePSPDNConnectionEstablishment?: OPTIONAL<EPSPDNConnectionEstablishment>,
        satelliteBackhaulCategory?: OPTIONAL<SBIType>,
        gEOSatelliteID?: OPTIONAL<GEOSatelliteID>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        aNDSPRules?: OPTIONAL<ANDSPRules>,
        serviceLevelAAContainer?: OPTIONAL<ServiceLevelAAContainer>,
        servingSatelliteID?: OPTIONAL<SatelliteID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUPIUnauthenticated = sUPIUnauthenticated;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.gTPTunnelID = gTPTunnelID;
        this.pDUSessionType = pDUSessionType;
        this.sNSSAI = sNSSAI;
        this.uEEndpoint = uEEndpoint;
        this.non3GPPAccessEndpoint = non3GPPAccessEndpoint;
        this.location = location;
        this.dNN = dNN;
        this.aMFID = aMFID;
        this.hSMFURI = hSMFURI;
        this.requestType = requestType;
        this.accessType = accessType;
        this.rATType = rATType;
        this.sMPDUDNRequest = sMPDUDNRequest;
        this.uEEPSPDNConnection = uEEPSPDNConnection;
        this.ePS5GSComboInfo = ePS5GSComboInfo;
        this.selectedDNN = selectedDNN;
        this.servingNetwork = servingNetwork;
        this.oldPDUSessionID = oldPDUSessionID;
        this.handoverState = handoverState;
        this.gTPTunnelInfo = gTPTunnelInfo;
        this.pCCRules = pCCRules;
        this.ePSPDNConnectionEstablishment = ePSPDNConnectionEstablishment;
        this.satelliteBackhaulCategory = satelliteBackhaulCategory;
        this.gEOSatelliteID = gEOSatelliteID;
        this.alternativeNSSAI = alternativeNSSAI;
        this.aNDSPRules = aNDSPRules;
        this.serviceLevelAAContainer = serviceLevelAAContainer;
        this.servingSatelliteID = servingSatelliteID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMFPDUSessionEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `SMFPDUSessionEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFPDUSessionEstablishment`.
     * @returns {SMFPDUSessionEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (SMFPDUSessionEstablishment)]: (SMFPDUSessionEstablishment)[_K] }): SMFPDUSessionEstablishment {
        return new SMFPDUSessionEstablishment(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.gTPTunnelID, _o.pDUSessionType, _o.sNSSAI, _o.uEEndpoint, _o.non3GPPAccessEndpoint, _o.location, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.accessType, _o.rATType, _o.sMPDUDNRequest, _o.uEEPSPDNConnection, _o.ePS5GSComboInfo, _o.selectedDNN, _o.servingNetwork, _o.oldPDUSessionID, _o.handoverState, _o.gTPTunnelInfo, _o.pCCRules, _o.ePSPDNConnectionEstablishment, _o.satelliteBackhaulCategory, _o.gEOSatelliteID, _o.alternativeNSSAI, _o.aNDSPRules, _o.serviceLevelAAContainer, _o.servingSatelliteID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pDUSessionType`
         * @public
         * @static
         */

    public static _enum_for_pDUSessionType = _enum_for_PDUSessionType;        /**
         * @summary The enum used as the type of the component `requestType`
         * @public
         * @static
         */

    public static _enum_for_requestType = _enum_for_FiveGSMRequestType;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;        /**
         * @summary The enum used as the type of the component `handoverState`
         * @public
         * @static
         */

    public static _enum_for_handoverState = _enum_for_HandoverState;
}

/**
 * @summary The Leading Root Component Types of SMFPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFPDUSessionEstablishment: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gTPTunnelID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pDUSessionType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("dNN", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("aMFID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("hSMFURI", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("requestType", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("uEEPSPDNConnection", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("selectedDNN", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servingNetwork", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("oldPDUSessionID", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("ePSPDNConnectionEstablishment", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("satelliteBackhaulCategory", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("gEOSatelliteID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("aNDSPRules", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("serviceLevelAAContainer", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("servingSatelliteID", true, $.hasTag(_TagClass.context, 33))
];

/**
 * @summary The Trailing Root Component Types of SMFPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFPDUSessionEstablishment: $.ASN1Decoder<SMFPDUSessionEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFPDUSessionEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFPDUSessionEstablishment (el: _Element): SMFPDUSessionEstablishment {
    if (!_cached_decoder_for_SMFPDUSessionEstablishment) { _cached_decoder_for_SMFPDUSessionEstablishment = function (el: _Element): SMFPDUSessionEstablishment {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let gTPTunnelID!: FTEID;
    let pDUSessionType!: PDUSessionType;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let location: OPTIONAL<Location>;
    let dNN!: DNN;
    let aMFID: OPTIONAL<AMFID>;
    let hSMFURI: OPTIONAL<HSMFURI>;
    let requestType!: FiveGSMRequestType;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let selectedDNN: OPTIONAL<DNN>;
    let servingNetwork: OPTIONAL<SMFServingNetwork>;
    let oldPDUSessionID: OPTIONAL<PDUSessionID>;
    let handoverState: OPTIONAL<HandoverState>;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let ePSPDNConnectionEstablishment: OPTIONAL<EPSPDNConnectionEstablishment>;
    let satelliteBackhaulCategory: OPTIONAL<SBIType>;
    let gEOSatelliteID: OPTIONAL<GEOSatelliteID>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    let aNDSPRules: OPTIONAL<ANDSPRules>;
    let serviceLevelAAContainer: OPTIONAL<ServiceLevelAAContainer>;
    let servingSatelliteID: OPTIONAL<SatelliteID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "gTPTunnelID": (_el: _Element): void => { gTPTunnelID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "pDUSessionType": (_el: _Element): void => { pDUSessionType = $._decode_implicit<PDUSessionType>(() => _decode_PDUSessionType)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "aMFID": (_el: _Element): void => { aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(_el); },
        "hSMFURI": (_el: _Element): void => { hSMFURI = $._decode_implicit<HSMFURI>(() => _decode_HSMFURI)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "uEEPSPDNConnection": (_el: _Element): void => { uEEPSPDNConnection = $._decode_implicit<UEEPSPDNConnection>(() => _decode_UEEPSPDNConnection)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "selectedDNN": (_el: _Element): void => { selectedDNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "oldPDUSessionID": (_el: _Element): void => { oldPDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "ePSPDNConnectionEstablishment": (_el: _Element): void => { ePSPDNConnectionEstablishment = $._decode_implicit<EPSPDNConnectionEstablishment>(() => _decode_EPSPDNConnectionEstablishment)(_el); },
        "satelliteBackhaulCategory": (_el: _Element): void => { satelliteBackhaulCategory = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "gEOSatelliteID": (_el: _Element): void => { gEOSatelliteID = $._decode_implicit<GEOSatelliteID>(() => _decode_GEOSatelliteID)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); },
        "aNDSPRules": (_el: _Element): void => { aNDSPRules = $._decode_implicit<ANDSPRules>(() => _decode_ANDSPRules)(_el); },
        "serviceLevelAAContainer": (_el: _Element): void => { serviceLevelAAContainer = $._decode_implicit<ServiceLevelAAContainer>(() => _decode_ServiceLevelAAContainer)(_el); },
        "servingSatelliteID": (_el: _Element): void => { servingSatelliteID = $._decode_implicit<SatelliteID>(() => _decode_SatelliteID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFPDUSessionEstablishment,
        _extension_additions_list_spec_for_SMFPDUSessionEstablishment,
        _root_component_type_list_2_spec_for_SMFPDUSessionEstablishment,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMFPDUSessionEstablishment(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        gTPTunnelID,
        pDUSessionType,
        sNSSAI,
        uEEndpoint,
        non3GPPAccessEndpoint,
        location,
        dNN,
        aMFID,
        hSMFURI,
        requestType,
        accessType,
        rATType,
        sMPDUDNRequest,
        uEEPSPDNConnection,
        ePS5GSComboInfo,
        selectedDNN,
        servingNetwork,
        oldPDUSessionID,
        handoverState,
        gTPTunnelInfo,
        pCCRules,
        ePSPDNConnectionEstablishment,
        satelliteBackhaulCategory,
        gEOSatelliteID,
        alternativeNSSAI,
        aNDSPRules,
        serviceLevelAAContainer,
        servingSatelliteID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMFPDUSessionEstablishment(el);
}

let _cached_encoder_for_SMFPDUSessionEstablishment: $.ASN1Encoder<SMFPDUSessionEstablishment> | null = null;

/**
 * @summary Encodes a(n) SMFPDUSessionEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFPDUSessionEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_SMFPDUSessionEstablishment (value: SMFPDUSessionEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFPDUSessionEstablishment) { _cached_encoder_for_SMFPDUSessionEstablishment = function (value: SMFPDUSessionEstablishment, elGetter: $.ASN1Encoder<SMFPDUSessionEstablishment>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(33 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sUPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    }
    if (value.sUPIUnauthenticated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_FTEID, $.BER)(value.gTPTunnelID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_PDUSessionType, $.BER)(value.pDUSessionType, $.BER);
    if (value.sNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    }
    if (value.uEEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER);
    }
    if (value.non3GPPAccessEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    if (value.aMFID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_AMFID, $.BER)(value.aMFID, $.BER);
    }
    if (value.hSMFURI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER);
    if (value.accessType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_AccessType, $.BER)(value.accessType, $.BER);
    }
    if (value.rATType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_RATType, $.BER)(value.rATType, $.BER);
    }
    if (value.sMPDUDNRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER);
    }
    if (value.uEEPSPDNConnection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_UEEPSPDNConnection, $.BER)(value.uEEPSPDNConnection, $.BER);
    }
    if (value.ePS5GSComboInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER);
    }
    if (value.selectedDNN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_DNN, $.BER)(value.selectedDNN, $.BER);
    }
    if (value.servingNetwork !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER);
    }
    if (value.oldPDUSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_PDUSessionID, $.BER)(value.oldPDUSessionID, $.BER);
    }
    if (value.handoverState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER);
    }
    if (value.gTPTunnelInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER);
    }
    if (value.pCCRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER);
    }
    if (value.ePSPDNConnectionEstablishment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_EPSPDNConnectionEstablishment, $.BER)(value.ePSPDNConnectionEstablishment, $.BER);
    }
    if (value.satelliteBackhaulCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_SBIType, $.BER)(value.satelliteBackhaulCategory, $.BER);
    }
    if (value.gEOSatelliteID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_GEOSatelliteID, $.BER)(value.gEOSatelliteID, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (value.aNDSPRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_ANDSPRules, $.BER)(value.aNDSPRules, $.BER);
    }
    if (value.serviceLevelAAContainer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_ServiceLevelAAContainer, $.BER)(value.serviceLevelAAContainer, $.BER);
    }
    if (value.servingSatelliteID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_SatelliteID, $.BER)(value.servingSatelliteID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFPDUSessionEstablishment(value, elGetter);
}


/* eslint-enable */
