/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
// export { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { PDUSessionType, _decode_PDUSessionType, _encode_PDUSessionType, _enum_for_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
// export { PDUSessionType, _enum_for_PDUSessionType, PDUSessionType_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_iPv4v6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4v6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDUSessionType_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDUSessionType, _encode_PDUSessionType } from "../TS33128Payloads/PDUSessionType.ta.mjs";
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { SMFMAUpgradeIndication, _decode_SMFMAUpgradeIndication, _encode_SMFMAUpgradeIndication } from "../TS33128Payloads/SMFMAUpgradeIndication.ta.mjs";
// export { SMFMAUpgradeIndication, _decode_SMFMAUpgradeIndication, _encode_SMFMAUpgradeIndication } from "../TS33128Payloads/SMFMAUpgradeIndication.ta.mjs";
import { SMFEPSPDNCnxInfo, _decode_SMFEPSPDNCnxInfo, _encode_SMFEPSPDNCnxInfo } from "../TS33128Payloads/SMFEPSPDNCnxInfo.ta.mjs";
// export { SMFEPSPDNCnxInfo, _decode_SMFEPSPDNCnxInfo, _encode_SMFEPSPDNCnxInfo } from "../TS33128Payloads/SMFEPSPDNCnxInfo.ta.mjs";
import { SMFMAAcceptedIndication, _decode_SMFMAAcceptedIndication, _encode_SMFMAAcceptedIndication } from "../TS33128Payloads/SMFMAAcceptedIndication.ta.mjs";
// export { SMFMAAcceptedIndication, _decode_SMFMAAcceptedIndication, _encode_SMFMAAcceptedIndication } from "../TS33128Payloads/SMFMAAcceptedIndication.ta.mjs";
import { ATSSSContainer, _decode_ATSSSContainer, _encode_ATSSSContainer } from "../TS33128Payloads/ATSSSContainer.ta.mjs";
// export { ATSSSContainer, _decode_ATSSSContainer, _encode_ATSSSContainer } from "../TS33128Payloads/ATSSSContainer.ta.mjs";
import { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
// export { UEEPSPDNConnection, _decode_UEEPSPDNConnection, _encode_UEEPSPDNConnection } from "../TS33128Payloads/UEEPSPDNConnection.ta.mjs";
import { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
// export { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
import { HandoverState, _decode_HandoverState, _encode_HandoverState, _enum_for_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
// export { HandoverState, _enum_for_HandoverState, HandoverState_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_preparing /* IMPORTED_LONG_ENUMERATION_ITEM */, preparing /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_prepared /* IMPORTED_LONG_ENUMERATION_ITEM */, prepared /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverState, _encode_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
import { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
// export { PCCRuleSet, _decode_PCCRuleSet, _encode_PCCRuleSet } from "../TS33128Payloads/PCCRuleSet.ta.mjs";
import { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
// export { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
import { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary SMFMAPDUSessionEstablishment
 * @description
 * 
 * 6.2.3.2.7.1 General
 *
 * In the present document, an MA PDU session will include two general types of
 * PDU sessions as defined below:
 *
 * - MA-Confirmed: This is an MA PDU session where the UE signals Upgrade
 *   Allowed to MA and the network immediately upgrades the session to an MA PDU
 *   session or the UE explicitly requests an MA PDU session (using a Request
 *   Type of MA PDU).
 *
 * - MA-Upgrade-Allowed: This is a PDU session where the UE indicated that
 *   upgrade to an MA PDU session is allowed, but the network does not
 *   immediately confirm the upgrade. The network may at some later point
 *   upgrade the session to an MA PDU session.
 *
 * - NOTE: The above terms are not defined or used in other 3GPP Stage 2 or
 *   Stage 3 specifications, but have been introduced here to clarify and
 *   distinguish LI event reporting for the respective situations.
 *
 * An MA-Confirmed MA PDU session may be established over a single access or
 * over multiple accesses. The establishment over multiple accesses may occur
 * concurrently or may occur at different points in time.
 *
 * An MA-Upgrade-Allowed MA PDU session is established over a single access and
 * nearly all aspects appears to be an ordinary non-MA PDU session with the key
 * difference that the network may upgrade the session to an MA-confirmed MA PDU
 * session.
 *
 * 6.2.3.2.7.2 MA PDU session establishment
 *
 * The IRI-POI in the SMF (or for a roaming scenario, V-SMF in the VPLMN for HR
 * or SMF in the VPLMN for LBO) shall generate an xIRI containing an
 * SMFMAPDUSessionEstablishment record when the IRI-POI present in the SMF
 * detects that a PDU session has been established for the target UE that is an
 * MA PDU session (Request Type set to MA PDU session or upgraded at
 * establishment), or where the upgrade allowed parameter is set to upgrade
 * allowed and session is established as an ordinary PDU session (not upgraded
 * at establishment, but may occur later on). The IRI-POI present in the SMF
 * shall generate the xIRI for the following events:
 *
 * - For a non-roaming scenario , the SMF sends the N1 NAS message (via AMF) PDU
 *   SESSION ESTABLISHMENT ACCEPT to the UE for a new PDU session and the 5G
 *   Session Management (5GSM) state within the SMF is changed to PDU SESSION
 *   ACTIVE (see TS 24.501 [13] clause 6.1.3.3 and 6.4.1) in response to a PDU
 *   SESSION ESTABLISHMENT REQUEST received along with:
 *
 * - PDU Session ID which does not identify an existing PDU session, and
 *
 * - Request Type = MA PDU request, or
 *
 * - Request Type = initial request and MA PDU session information set to "MA
 *   PDU session network upgrade is allowed", with either upgrade occurring at
 *   establishment or upgrade does not occur at establishment but may occur
 *   later.
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF) sends
 *   the N16: Nsmf_PDU_Session_Create Response message with n1SmInfoToUe IE
 *   containing the PDU SESSION ESTABLISHMENT ACCEPT (see TS 29.502 [16] clauses
 *   5.2.1, 5.2.2.7, 5.2.3, and 6.1.6) for a new PDU session in response to a
 *   PDU SESSION ESTABLISHMENT REQUEST received along with:
 *
 * - PDU Session ID which does not identify an existing PDU session, and
 *
 * - Request Type = MA PDU request, or
 *
 * - Request Type = initial request and MA PDU session information set to "MA
 *   PDU session network upgrade is allowed", with either upgrade occurring at
 *   establishment or upgrade does not occur at establishment but may occur
 *   later.
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
 * 3GPP TS 33.128, clause 6.2.3.2.7.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAPDUSessionEstablishment ::= SEQUENCE
 * {
 *     sUPI                          [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated           [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                           [3] PEI OPTIONAL,
 *     gPSI                          [4] GPSI OPTIONAL,
 *     pDUSessionID                  [5] PDUSessionID,
 *     pDUSessionType                [6] PDUSessionType,
 *     accessInfo                    [7] SEQUENCE OF AccessInfo,
 *     sNSSAI                        [8] SNSSAI OPTIONAL,
 *     uEEndpoint                    [9] SEQUENCE OF UEEndpointAddress OPTIONAL,
 *     location                      [10] Location OPTIONAL,
 *     dNN                           [11] DNN,
 *     aMFID                         [12] AMFID OPTIONAL,
 *     hSMFURI                       [13] HSMFURI OPTIONAL,
 *     requestType                   [14] FiveGSMRequestType,
 *     sMPDUDNRequest                [15] SMPDUDNRequest OPTIONAL,
 *     servingNetwork                [16] SMFServingNetwork,
 *     oldPDUSessionID               [17] PDUSessionID OPTIONAL,
 *     mAUpgradeIndication           [18] SMFMAUpgradeIndication OPTIONAL,
 *     ePSPDNCnxInfo                 [19] SMFEPSPDNCnxInfo OPTIONAL,
 *     mAAcceptedIndication          [20] SMFMAAcceptedIndication,
 *     aTSSSContainer                [21] ATSSSContainer OPTIONAL,
 *     uEEPSPDNConnection            [22] UEEPSPDNConnection OPTIONAL,
 *     ePS5GSComboInfo               [23] EPS5GSComboInfo OPTIONAL,
 *     selectedDNN                   [24] DNN OPTIONAL,
 *     handoverState                 [25] HandoverState OPTIONAL,
 *     pCCRules                      [26] PCCRuleSet OPTIONAL,
 *     ePSPDNConnectionEstablishment [27] EPSPDNConnectionEstablishment OPTIONAL,
 *     alternativeNSSAI              [28] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAPDUSessionEstablishment {
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID See clause 9.4 of TS 24.501 [13]. Identifies a new PDU
     * session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `pDUSessionType`.
     * @description
     *
     * Identifies selected PDU session type, see TS 24.501 [13] clause
     * 9.11.4.11.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionType: PDUSessionType;
    /**
     * @summary `accessInfo`.
     * @description
     *
     * Identifies the access(es) associated with the PDU session including the
     * information for each specific access (see table 6.2.3.2.7.2-2).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly accessInfo: AccessInfo[];
    /**
     * @summary `sNSSAI`.
     * @description
     *
     * Slice identifiers associated with the PDU session, if available. See TS
     * 23.003 [19] clause 28.4.2 and TS 23.501 [2] clause 5.15.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly sNSSAI: OPTIONAL<SNSSAI>;
    /**
     * @summary `uEEndpoint`.
     * @description
     *
     * UE endpoint address(es) assigned to the PDU Session if available (see TS
     * 29.244 [15] clause 5.21).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information provided by the AMF or present in the context at the
     * SMF, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `dNN`.
     * @description
     *
     * Data Network Name requested by the target UE, as defined in TS 23.003
     * [19] clause 9A and described in TS 23.502 [4] clause 4.3.2.2. Shall be
     * given in dotted-label presentation format as described in TS 23.003 [19]
     * clause 9.1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * message shall be reported. In the case where the network does not provide
     * a request type value for a MA PDU session and the network does support MA
     * PDU sessions, the request type shall be set to "MA PDU request" according
     * to TS 24.501 [13] clause 6.4.1.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly requestType: FiveGSMRequestType;
    /**
     * @summary `sMPDUDNRequest`.
     * @description
     *
     * Contents of the SM PDU DN Request container, if available, as described
     * in TS 24.501 [13] clause 9.11.4.15.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    /**
     * @summary `servingNetwork`.
     * @description
     *
     * PLMN ID of the serving core network operator, and, for a Non-Public
     * Network (NPN), the NID that together with the PLMN ID identifies the NPN.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly servingNetwork: SMFServingNetwork;
    /**
     * @summary `oldPDUSessionID`.
     * @description
     *
     * The old PDU Session ID received from the UE. See TS 23.502 [4] clauses
     * 4.3.2.2.1 and 4.3.5.2 and TS 24.501 [13] clause 6.4.1.2. Shall be present
     * if this IE is in the SMContextCreateData or PDUSessionCreateData message
     * sent to the SMF or the PDU Session Context or SM Context at the SMF (see
     * TS 29.502 [16] clauses 6.1.6.2.2, 6.1.6.2.9 and 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly oldPDUSessionID: OPTIONAL<PDUSessionID>;
    /**
     * @summary `mAUpgradeIndication`.
     * @description
     *
     * Indicates whether the PDU session is allowed to be upgraded to
     * MA-Confirmed MA PDU session (see TS 23.502 [4] clause 4.22.3). Include if
     * known.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>;
    /**
     * @summary `ePSPDNCnxInfo`.
     * @description
     *
     * Indicates if the PDU session may be moved to EPS during its lifetime (see
     * TS 29.502 [16] clause 6.1.6.2.31). Include if known.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>;
    /**
     * @summary `mAAcceptedIndication`.
     * @description
     *
     * Indicates that a request to establish an MA PDU session was accepted or
     * if a single access PDU session request was upgraded into a MA PDU session
     * (see TS 23.502 [4] clauses 4.22.2 and 4.22.3). It shall be set as
     * follows:
     *
     * - true: MA-Confirmed MA PDU session was established.
     *
     * - false: single access MA-Upgrade-Allowed MA PDU session was established
     *   that may be upgraded to an MA-Confirmed MA PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly mAAcceptedIndication: SMFMAAcceptedIndication;
    /**
     * @summary `aTSSSContainer`.
     * @description
     *
     * Identifies the steering, switching, and splitting features for the
     * MA-Confirmed MA PDU session. Also indicates whether MPTCP or ATSSS-LL is
     * to be used for ATSSS. See TS 24.501[13] clause 9.11.4.22.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly aTSSSContainer: OPTIONAL<ATSSSContainer>;
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    /**
     * @summary `ePS5GSComboInfo`.
     * @description
     *
     * Provides detailed information about PDN Connections and PDU Sessions
     * during EPS to 5GS idle mode mobility or handover using the N26 interface.
     * Shall be included if the AMF has selected a SMF+PGW-C to serve the PDU
     * session. This parameter shall include the additional IEs in table
     * 6.2.3.2.2-2, if present.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly selectedDNN: OPTIONAL<DNN>;
    /**
     * @summary `handoverState`.
     * @description
     *
     * Indicates whether the PDU Session Establishment being reported was due to
     * a handover. Shall be present if this IE is in the SMContextCreatedData
     * sent by the SMF (see TS 29.502 [16] clause 6.1.6.2.3).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly handoverState: OPTIONAL<HandoverState>;
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
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
     * SMFMAPDUSessionEstablishment xIRI message is used to report PDN
     * Connection establishment. See table 6.3.3.2.2-1 and clause 6.3.3.2.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly ePSPDNConnectionEstablishment: OPTIONAL<EPSPDNConnectionEstablishment>;
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.2.
     *
     * @public
     * @readonly
     */
    readonly alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
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
        pDUSessionType: PDUSessionType,
        accessInfo: AccessInfo[],
        sNSSAI: OPTIONAL<SNSSAI>,
        uEEndpoint: OPTIONAL<UEEndpointAddress[]>,
        location: OPTIONAL<Location>,
        dNN: DNN,
        aMFID: OPTIONAL<AMFID>,
        hSMFURI: OPTIONAL<HSMFURI>,
        requestType: FiveGSMRequestType,
        sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>,
        servingNetwork: SMFServingNetwork,
        oldPDUSessionID: OPTIONAL<PDUSessionID>,
        mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>,
        ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>,
        mAAcceptedIndication: SMFMAAcceptedIndication,
        aTSSSContainer?: OPTIONAL<ATSSSContainer>,
        uEEPSPDNConnection?: OPTIONAL<UEEPSPDNConnection>,
        ePS5GSComboInfo?: OPTIONAL<EPS5GSComboInfo>,
        selectedDNN?: OPTIONAL<DNN>,
        handoverState?: OPTIONAL<HandoverState>,
        pCCRules?: OPTIONAL<PCCRuleSet>,
        ePSPDNConnectionEstablishment?: OPTIONAL<EPSPDNConnectionEstablishment>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUPIUnauthenticated = sUPIUnauthenticated;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.pDUSessionType = pDUSessionType;
        this.accessInfo = accessInfo;
        this.sNSSAI = sNSSAI;
        this.uEEndpoint = uEEndpoint;
        this.location = location;
        this.dNN = dNN;
        this.aMFID = aMFID;
        this.hSMFURI = hSMFURI;
        this.requestType = requestType;
        this.sMPDUDNRequest = sMPDUDNRequest;
        this.servingNetwork = servingNetwork;
        this.oldPDUSessionID = oldPDUSessionID;
        this.mAUpgradeIndication = mAUpgradeIndication;
        this.ePSPDNCnxInfo = ePSPDNCnxInfo;
        this.mAAcceptedIndication = mAAcceptedIndication;
        this.aTSSSContainer = aTSSSContainer;
        this.uEEPSPDNConnection = uEEPSPDNConnection;
        this.ePS5GSComboInfo = ePS5GSComboInfo;
        this.selectedDNN = selectedDNN;
        this.handoverState = handoverState;
        this.pCCRules = pCCRules;
        this.ePSPDNConnectionEstablishment = ePSPDNConnectionEstablishment;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMFMAPDUSessionEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `SMFMAPDUSessionEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFMAPDUSessionEstablishment`.
     * @returns {SMFMAPDUSessionEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (SMFMAPDUSessionEstablishment)]: (SMFMAPDUSessionEstablishment)[_K] }): SMFMAPDUSessionEstablishment {
        return new SMFMAPDUSessionEstablishment(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.pDUSessionType, _o.accessInfo, _o.sNSSAI, _o.uEEndpoint, _o.location, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.sMPDUDNRequest, _o.servingNetwork, _o.oldPDUSessionID, _o.mAUpgradeIndication, _o.ePSPDNCnxInfo, _o.mAAcceptedIndication, _o.aTSSSContainer, _o.uEEPSPDNConnection, _o.ePS5GSComboInfo, _o.selectedDNN, _o.handoverState, _o.pCCRules, _o.ePSPDNConnectionEstablishment, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
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
         * @summary The enum used as the type of the component `handoverState`
         * @public
         * @static
         */

    public static _enum_for_handoverState = _enum_for_HandoverState;
}

/**
 * @summary The Leading Root Component Types of SMFMAPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFMAPDUSessionEstablishment: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pDUSessionType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessInfo", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("dNN", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("aMFID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("hSMFURI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("requestType", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("servingNetwork", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("oldPDUSessionID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("mAUpgradeIndication", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("ePSPDNCnxInfo", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("mAAcceptedIndication", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("aTSSSContainer", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("uEEPSPDNConnection", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("selectedDNN", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("ePSPDNConnectionEstablishment", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 28))
];

/**
 * @summary The Trailing Root Component Types of SMFMAPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFMAPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFMAPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFMAPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFMAPDUSessionEstablishment: $.ASN1Decoder<SMFMAPDUSessionEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAPDUSessionEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAPDUSessionEstablishment (el: _Element): SMFMAPDUSessionEstablishment {
    if (!_cached_decoder_for_SMFMAPDUSessionEstablishment) { _cached_decoder_for_SMFMAPDUSessionEstablishment = function (el: _Element): SMFMAPDUSessionEstablishment {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let pDUSessionType!: PDUSessionType;
    let accessInfo!: AccessInfo[];
    let sNSSAI: OPTIONAL<SNSSAI>;
    let uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    let location: OPTIONAL<Location>;
    let dNN!: DNN;
    let aMFID: OPTIONAL<AMFID>;
    let hSMFURI: OPTIONAL<HSMFURI>;
    let requestType!: FiveGSMRequestType;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let servingNetwork!: SMFServingNetwork;
    let oldPDUSessionID: OPTIONAL<PDUSessionID>;
    let mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>;
    let ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>;
    let mAAcceptedIndication!: SMFMAAcceptedIndication;
    let aTSSSContainer: OPTIONAL<ATSSSContainer>;
    let uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let selectedDNN: OPTIONAL<DNN>;
    let handoverState: OPTIONAL<HandoverState>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let ePSPDNConnectionEstablishment: OPTIONAL<EPSPDNConnectionEstablishment>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "pDUSessionType": (_el: _Element): void => { pDUSessionType = $._decode_implicit<PDUSessionType>(() => _decode_PDUSessionType)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<AccessInfo[]>(() => $._decodeSequenceOf<AccessInfo>(() => _decode_AccessInfo))(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "aMFID": (_el: _Element): void => { aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(_el); },
        "hSMFURI": (_el: _Element): void => { hSMFURI = $._decode_implicit<HSMFURI>(() => _decode_HSMFURI)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "oldPDUSessionID": (_el: _Element): void => { oldPDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "mAUpgradeIndication": (_el: _Element): void => { mAUpgradeIndication = $._decode_implicit<SMFMAUpgradeIndication>(() => _decode_SMFMAUpgradeIndication)(_el); },
        "ePSPDNCnxInfo": (_el: _Element): void => { ePSPDNCnxInfo = $._decode_implicit<SMFEPSPDNCnxInfo>(() => _decode_SMFEPSPDNCnxInfo)(_el); },
        "mAAcceptedIndication": (_el: _Element): void => { mAAcceptedIndication = $._decode_implicit<SMFMAAcceptedIndication>(() => _decode_SMFMAAcceptedIndication)(_el); },
        "aTSSSContainer": (_el: _Element): void => { aTSSSContainer = $._decode_implicit<ATSSSContainer>(() => _decode_ATSSSContainer)(_el); },
        "uEEPSPDNConnection": (_el: _Element): void => { uEEPSPDNConnection = $._decode_implicit<UEEPSPDNConnection>(() => _decode_UEEPSPDNConnection)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "selectedDNN": (_el: _Element): void => { selectedDNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "ePSPDNConnectionEstablishment": (_el: _Element): void => { ePSPDNConnectionEstablishment = $._decode_implicit<EPSPDNConnectionEstablishment>(() => _decode_EPSPDNConnectionEstablishment)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAPDUSessionEstablishment,
        _extension_additions_list_spec_for_SMFMAPDUSessionEstablishment,
        _root_component_type_list_2_spec_for_SMFMAPDUSessionEstablishment,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMFMAPDUSessionEstablishment(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        pDUSessionType,
        accessInfo,
        sNSSAI,
        uEEndpoint,
        location,
        dNN,
        aMFID,
        hSMFURI,
        requestType,
        sMPDUDNRequest,
        servingNetwork,
        oldPDUSessionID,
        mAUpgradeIndication,
        ePSPDNCnxInfo,
        mAAcceptedIndication,
        aTSSSContainer,
        uEEPSPDNConnection,
        ePS5GSComboInfo,
        selectedDNN,
        handoverState,
        pCCRules,
        ePSPDNConnectionEstablishment,
        alternativeNSSAI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMFMAPDUSessionEstablishment(el);
}

let _cached_encoder_for_SMFMAPDUSessionEstablishment: $.ASN1Encoder<SMFMAPDUSessionEstablishment> | null = null;

/**
 * @summary Encodes a(n) SMFMAPDUSessionEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAPDUSessionEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAPDUSessionEstablishment (value: SMFMAPDUSessionEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAPDUSessionEstablishment) { _cached_encoder_for_SMFMAPDUSessionEstablishment = function (value: SMFMAPDUSessionEstablishment, elGetter: $.ASN1Encoder<SMFMAPDUSessionEstablishment>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(28 + (_unrecognized ? _unrecognized.length : 0));
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
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_PDUSessionType, $.BER)(value.pDUSessionType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<AccessInfo>(() => _encode_AccessInfo, $.BER), $.BER)(value.accessInfo, $.BER);
    if (value.sNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    }
    if (value.uEEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    if (value.aMFID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_AMFID, $.BER)(value.aMFID, $.BER);
    }
    if (value.hSMFURI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER);
    if (value.sMPDUDNRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER);
    if (value.oldPDUSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_PDUSessionID, $.BER)(value.oldPDUSessionID, $.BER);
    }
    if (value.mAUpgradeIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_SMFMAUpgradeIndication, $.BER)(value.mAUpgradeIndication, $.BER);
    }
    if (value.ePSPDNCnxInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_SMFEPSPDNCnxInfo, $.BER)(value.ePSPDNCnxInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => _encode_SMFMAAcceptedIndication, $.BER)(value.mAAcceptedIndication, $.BER);
    if (value.aTSSSContainer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ATSSSContainer, $.BER)(value.aTSSSContainer, $.BER);
    }
    if (value.uEEPSPDNConnection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_UEEPSPDNConnection, $.BER)(value.uEEPSPDNConnection, $.BER);
    }
    if (value.ePS5GSComboInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER);
    }
    if (value.selectedDNN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_DNN, $.BER)(value.selectedDNN, $.BER);
    }
    if (value.handoverState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER);
    }
    if (value.pCCRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER);
    }
    if (value.ePSPDNConnectionEstablishment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_EPSPDNConnectionEstablishment, $.BER)(value.ePSPDNConnectionEstablishment, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFMAPDUSessionEstablishment(value, elGetter);
}


/* eslint-enable */
