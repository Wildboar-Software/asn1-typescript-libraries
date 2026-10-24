/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
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
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
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
import { UPPathChange, _decode_UPPathChange, _encode_UPPathChange } from "../TS33128Payloads/UPPathChange.ta.mjs";
// export { UPPathChange, _decode_UPPathChange, _encode_UPPathChange } from "../TS33128Payloads/UPPathChange.ta.mjs";
import { PFDDataForApp, _decode_PFDDataForApp, _encode_PFDDataForApp } from "../TS33128Payloads/PFDDataForApp.ta.mjs";
// export { PFDDataForApp, _decode_PFDDataForApp, _encode_PFDDataForApp } from "../TS33128Payloads/PFDDataForApp.ta.mjs";
import { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
// export { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
import { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary SMFMAPDUSessionModification
 * @description
 * 
 * 6.2.3.2.7.3 MA PDU session modification
 *
 * The IRI-POI in the SMF shall generate an xIRI containing an
 * SMFMAPDUSessionModification record when the IRI-POI present in the SMF
 * detects that an MA PDU session has been modified for the target UE. The
 * IRI-POI present in the SMF shall generate the xIRI for the following events:
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO), receives the N1 NAS message
 *   (via AMF) PDU SESSION MODIFICATION COMPLETE from the UE and the 5GSM state
 *   within the SMF is returned to PDU SESSION ACTIVE (see TS 24.501 [13]
 *   clauses 6.1.3.3 and 6.4.2). This applies to the following cases for an
 *   MA-Upgrade-Allowed PDU session:
 *
 * - UE initiated MA PDU session modification (see TS 23.502 [4] clause
 *   4.22.8.2).
 *
 * - Network initiated MA PDU session modification (see TS 23.502 [4] clause
 *   4.22.8.2).
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO), receives the N1 NAS message
 *   (via AMF) PDU SESSION RELEASE COMPLETE from the UE in response to a PDU
 *   SESSION RELEASE COMMAND message containing an Access type IE identifying a
 *   single access to be released of an MA PDU session which was established
 *   over both accesses and the 5GSM state within the SMF remains in the PDU
 *   SESSION ACTIVE. This applies to the following case:
 *
 * - A single access type is released from an MA PDU session, but the MA PDU
 *   session continues.
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO), sends the N1 NAS message
 *   (via AMF) PDU SESSION ESTABLISHMENT ACCEPT to the UE and the 5GSM state
 *   within the SMF remains in the PDU SESSION ACTIVE (see TS 24.501 [13]
 *   clauses 6.1.3.3 and 6.4.1). This applies to the following cases:
 *
 * - Handover from one access type to another access type happens (e.g. 3GPP to
 *   non-3GPP) for an MA-Upgrade-Allowed MA PDU session (see TS 23.502 [4]
 *   clauses 4.9.2.3 and 4.9.2.4).
 *
 * - MA PDU Session establishment over second access type.
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF)
 *   receives the N16: Nsmf_PDU_Session_Update Response message with
 *   n1SmInfoFromUe IE containing the PDU SESSION MODIFICATION COMPLETE (see TS
 *   29.502 [16] , clauses 5.2.1, 5.2.2.8, 5.2.3, and 6.1.6). This applies to
 *   the following cases for an MA-Upgrade-Allowed PDU session:
 *
 * - UE initiated MA PDU session modification (see TS 23.502 [4] clause
 *   4.22.8.3).
 *
 * - Network (VPLMN) initiated MA PDU session modification (see TS 23.502 [4]
 *   clause 4.22.8.3).
 *
 * - Network (HPLMN) initiated MA PDU session modification (see TS 23.502 [4]
 *   clause 4.22.8.3).
 *
 * - For a non-roaming scenario, SMF sends a Nsmf_EventExposure_Notify request
 *   to the NEF or AF for the target UE for the event "UP Path Change" related
 *   to a corresponding subscription from AF (see TS 29.508 [90] clause 4.2.2).
 *
 * - For a non-roaming scenario, SMF sends a
 *   Nsmf_EventExposure_AppRelocationInfo response to the NEF or AF for the
 *   target UE in response to Nsmf_EventExposure_AppRelocationInfo request sent
 *   by NEF or AF to SMF (see TS 29.508 [90] clause 4.2.5).
 *
 * - For a non-roaming scenario, SMF receives a Nnef_PFDManagement_Fetch
 *   response from the NEF for the target UE in response to
 *   Nnef_PFDManagement_Fetch request sent by SMF to NEF (see TS 29.551 [96]
 *   clause 4.2.2).
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF)
 *   receives the N16: Nsmf_PDU_Session_Update Response message with
 *   n1SmInfoFromUe IE containing the PDU SESSION RELEASE COMPLETE message, a
 *   response to a PDU SESSION RELEASE COMMAND message containing an Access type
 *   IE identifying a single access to be released of an MA PDU session which
 *   was established over both accesses and the 5GSM state within the SMF
 *   remains in the PDU SESSION ACTIVE. This applies to the following cases:
 *
 * - A single access type is released from an MA PDU session, but the MA PDU
 *   session continues.
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF) sends
 *   the N16: Nsmf_PDU_Session_Create Response message with n1SmInfoToUe IE
 *   containing the PDU SESSION ESTABLISHMENT ACCEPT (see TS 29.502 [16] clauses
 *   5.2.1, 5.2.2.8, 5.2.3, and 6.1.6) while it had received an N16
 *   Nsmf_PDU_Session_Create request message with an existing PDU Session Id
 *   with access type being changed. This applies to the following cases:
 *
 * - Handover from one access type to another access type happens (e.g. 3GPP to
 *   non-3GPP) for an MA-Upgrade-Allowed PDU session (see TS 23.502 [4] clauses
 *   4.9.2.3 and 4.9.2.4). In this case, the V-SMF is used for the PDU session
 *   on the new access type only.
 *
 * - MA PDU Session establishment over second access type.
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF) sends
 *   the N16: Nsmf_PDU_Session_Update Response message with n1SmInfoToUe IE
 *   containing the PDU SESSION ESTABLISHMENT ACCEPT (see TS 29.502 [16]) while
 *   it had received a N16 Nsmf_PDU_Session_Update Request message with an
 *   existing PDU Session Id with access type being changed. This applies to the
 *   following cases:
 *
 * - Handover from one access type to another access type happens (e.g. 3GPP to
 *   non-3GPP) where the same V-SMF is used for the PDU session on both access
 *   types.
 *
 * - MA PDU Session establishment over second access type.
 *
 * For a non-roaming scenario, SMF sends a Npcf_SMPolicyControlUpdateNotify
 * response to the PCF for the target UE in response to an
 * Npcf_SMPolicyControlUpdateNotify request sent by PCF to SMF including PCC
 * rules which traffic control policy data contains either a routeToLocs IE or
 * trafficSteeringPolIdDl IE and/or trafficSteeringPolIdUl IE. These PCC rules
 * correspond to policies that influence the target UE’s traffic flows (see TS
 * 29.513 [88] clause 5.5.3).
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as
 * CONTINUE.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.7.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAPDUSessionModification ::= SEQUENCE
 * {
 *     sUPI                         [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated          [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                          [3] PEI OPTIONAL,
 *     gPSI                         [4] GPSI OPTIONAL,
 *     pDUSessionID                 [5] PDUSessionID,
 *     accessInfo                   [6] SEQUENCE OF AccessInfo OPTIONAL,
 *     sNSSAI                       [7] SNSSAI OPTIONAL,
 *     location                     [8] Location OPTIONAL,
 *     requestType                  [9] FiveGSMRequestType OPTIONAL,
 *     servingNetwork               [10] SMFServingNetwork,
 *     oldPDUSessionID              [11] PDUSessionID OPTIONAL,
 *     mAUpgradeIndication          [12] SMFMAUpgradeIndication OPTIONAL,
 *     ePSPDNCnxInfo                [13] SMFEPSPDNCnxInfo OPTIONAL,
 *     mAAcceptedIndication         [14] SMFMAAcceptedIndication,
 *     aTSSSContainer               [15] ATSSSContainer OPTIONAL,
 *     uEEPSPDNConnection           [16] UEEPSPDNConnection OPTIONAL,
 *     ePS5GSComboInfo              [17] EPS5GSComboInfo OPTIONAL,
 *     handoverState                [18] HandoverState OPTIONAL,
 *     pCCRules                     [19] PCCRuleSet OPTIONAL,
 *     uPPathChange                 [20] UPPathChange OPTIONAL,
 *     pFDDataForApp                [21] PFDDataForApp OPTIONAL,
 *     ePSPDNConnectionModification [22] EPSPDNConnectionModification OPTIONAL,
 *     alternativeNSSAI             [23] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAPDUSessionModification {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the PDU session (e.g. as provided by the AMF in the
     * associated Nsmf_PDU_Session_CreateSMContext service operation). Shall be
     * present except for PEI-only unauthenticated emergency sessions.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `sUPIUnauthenticated`.
     * @description
     *
     * Shall be present if a SUPI is present in the message, and set to "true"
     * if the SUPI was not authenticated, or "false" if it has been
     * authenticated.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI associated with the PDU session, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI associated with the PDU session, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID, see TS 24.501 [13] clause 9.4.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `accessInfo`.
     * @description
     *
     * Identifies the access(es) associated with the PDU session including the
     * information for each specific access (see table 6.2.3.2.7.2-2) being
     * modified.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly accessInfo: OPTIONAL<AccessInfo[]>;
    /**
     * @summary `sNSSAI`.
     * @description
     *
     * Slice identifier associated with the PDU session, if available. See TS
     * 23.003 [19] clause 28.4.2 and TS 23.501 [2] clause 5.15.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly sNSSAI: OPTIONAL<SNSSAI>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information provided by the AMF or present in the context at the
     * SMF, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `requestType`.
     * @description
     *
     * For both a UE- as well as a network-requested PDU session, the POI (SMF)
     * shall set the request type parameter to "modification request".
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly requestType: OPTIONAL<FiveGSMRequestType>;
    /**
     * @summary `servingNetwork`.
     * @description
     *
     * PLMN ID of the serving core network operator, and, for a Non-Public
     * Network (NPN), the NID that together with the PLMN ID identifies the NPN.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly oldPDUSessionID: OPTIONAL<PDUSessionID>;
    /**
     * @summary `mAUpgradeIndication`.
     * @description
     *
     * Indicates whether the PDU session is allowed to be upgraded to MA PDU
     * session (see TS 23.502 [4] clause 4.22.3). Include if known.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * (see clauses 4.22.2 and 4.22.3 of TS 23.502 [4]). It shall be set as
     * follows:
     *
     * - true: MA-Confirmed MA PDU session was established.
     *
     * - false: single access MA-Upgrade-Allowed MA PDU session was established
     *   that may be upgraded to an MA-Confirmed MA PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * to be used for ATSSS. See clause 9.11.4.22 of TS 24.501 [13].
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * message (see TS 29.502 [16] clause 6.1.6.2.2).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    /**
     * @summary `handoverState`.
     * @description
     *
     * Indicates whether the PDU Session Establishment being reported was due to
     * a handover. Shall be present if this IE is in the SMContextCreatedData
     * sent by the SMF (see TS 29.502 [16] clause 6.1.6.2.3).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly pCCRules: OPTIONAL<PCCRuleSet>;
    /**
     * @summary `uPPathChange`.
     * @description
     *
     * Notification of the UPPathChange event, if available. This IE is defined
     * in TS 29.508 [90] table 5.6.2.5-1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly uPPathChange: OPTIONAL<UPPathChange>;
    /**
     * @summary `pFDDataForApp`.
     * @description
     *
     * Represents the packet flow descriptions (PFDs) for an application
     * identifier (AppId), if available. This IE is defined in TS 29.551 [96]
     * table 5.6.2.2-1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly pFDDataForApp: OPTIONAL<PFDDataForApp>;
    /**
     * @summary `ePSPDNConnectionModification`.
     * @description
     *
     * Provides details about PDN Connections when the
     * SMFMAPDUSessionModification xIRI message is used to report PDN Connection
     * Establishment or Modification. See table 6.3.3.2.3-1 and clause
     * 6.3.3.2.3.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
     *
     * @public
     * @readonly
     */
    readonly ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI. Shall be included if present in the PDU
     * SESSION MODIFICATION COMMAND message. See TS 24.501 [13] clause
     * 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.3.
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
        accessInfo: OPTIONAL<AccessInfo[]>,
        sNSSAI: OPTIONAL<SNSSAI>,
        location: OPTIONAL<Location>,
        requestType: OPTIONAL<FiveGSMRequestType>,
        servingNetwork: SMFServingNetwork,
        oldPDUSessionID: OPTIONAL<PDUSessionID>,
        mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>,
        ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>,
        mAAcceptedIndication: SMFMAAcceptedIndication,
        aTSSSContainer?: OPTIONAL<ATSSSContainer>,
        uEEPSPDNConnection?: OPTIONAL<UEEPSPDNConnection>,
        ePS5GSComboInfo?: OPTIONAL<EPS5GSComboInfo>,
        handoverState?: OPTIONAL<HandoverState>,
        pCCRules?: OPTIONAL<PCCRuleSet>,
        uPPathChange?: OPTIONAL<UPPathChange>,
        pFDDataForApp?: OPTIONAL<PFDDataForApp>,
        ePSPDNConnectionModification?: OPTIONAL<EPSPDNConnectionModification>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUPIUnauthenticated = sUPIUnauthenticated;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.accessInfo = accessInfo;
        this.sNSSAI = sNSSAI;
        this.location = location;
        this.requestType = requestType;
        this.servingNetwork = servingNetwork;
        this.oldPDUSessionID = oldPDUSessionID;
        this.mAUpgradeIndication = mAUpgradeIndication;
        this.ePSPDNCnxInfo = ePSPDNCnxInfo;
        this.mAAcceptedIndication = mAAcceptedIndication;
        this.aTSSSContainer = aTSSSContainer;
        this.uEEPSPDNConnection = uEEPSPDNConnection;
        this.ePS5GSComboInfo = ePS5GSComboInfo;
        this.handoverState = handoverState;
        this.pCCRules = pCCRules;
        this.uPPathChange = uPPathChange;
        this.pFDDataForApp = pFDDataForApp;
        this.ePSPDNConnectionModification = ePSPDNConnectionModification;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMFMAPDUSessionModification
     * @description
     * 
     * This takes an `object` and converts it to a `SMFMAPDUSessionModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFMAPDUSessionModification`.
     * @returns {SMFMAPDUSessionModification}
     */
    public static _from_object (_o: { [_K in keyof (SMFMAPDUSessionModification)]: (SMFMAPDUSessionModification)[_K] }): SMFMAPDUSessionModification {
        return new SMFMAPDUSessionModification(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.accessInfo, _o.sNSSAI, _o.location, _o.requestType, _o.servingNetwork, _o.oldPDUSessionID, _o.mAUpgradeIndication, _o.ePSPDNCnxInfo, _o.mAAcceptedIndication, _o.aTSSSContainer, _o.uEEPSPDNConnection, _o.ePS5GSComboInfo, _o.handoverState, _o.pCCRules, _o.uPPathChange, _o.pFDDataForApp, _o.ePSPDNConnectionModification, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
    }

        /**
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
 * @summary The Leading Root Component Types of SMFMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFMAPDUSessionModification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("requestType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("servingNetwork", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("oldPDUSessionID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("mAUpgradeIndication", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("ePSPDNCnxInfo", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("mAAcceptedIndication", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("aTSSSContainer", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("uEEPSPDNConnection", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("pCCRules", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("uPPathChange", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("pFDDataForApp", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("ePSPDNConnectionModification", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of SMFMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFMAPDUSessionModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFMAPDUSessionModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFMAPDUSessionModification: $.ASN1Decoder<SMFMAPDUSessionModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAPDUSessionModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAPDUSessionModification (el: _Element): SMFMAPDUSessionModification {
    if (!_cached_decoder_for_SMFMAPDUSessionModification) { _cached_decoder_for_SMFMAPDUSessionModification = function (el: _Element): SMFMAPDUSessionModification {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let accessInfo: OPTIONAL<AccessInfo[]>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let location: OPTIONAL<Location>;
    let requestType: OPTIONAL<FiveGSMRequestType>;
    let servingNetwork!: SMFServingNetwork;
    let oldPDUSessionID: OPTIONAL<PDUSessionID>;
    let mAUpgradeIndication: OPTIONAL<SMFMAUpgradeIndication>;
    let ePSPDNCnxInfo: OPTIONAL<SMFEPSPDNCnxInfo>;
    let mAAcceptedIndication!: SMFMAAcceptedIndication;
    let aTSSSContainer: OPTIONAL<ATSSSContainer>;
    let uEEPSPDNConnection: OPTIONAL<UEEPSPDNConnection>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let handoverState: OPTIONAL<HandoverState>;
    let pCCRules: OPTIONAL<PCCRuleSet>;
    let uPPathChange: OPTIONAL<UPPathChange>;
    let pFDDataForApp: OPTIONAL<PFDDataForApp>;
    let ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<AccessInfo[]>(() => $._decodeSequenceOf<AccessInfo>(() => _decode_AccessInfo))(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "oldPDUSessionID": (_el: _Element): void => { oldPDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "mAUpgradeIndication": (_el: _Element): void => { mAUpgradeIndication = $._decode_implicit<SMFMAUpgradeIndication>(() => _decode_SMFMAUpgradeIndication)(_el); },
        "ePSPDNCnxInfo": (_el: _Element): void => { ePSPDNCnxInfo = $._decode_implicit<SMFEPSPDNCnxInfo>(() => _decode_SMFEPSPDNCnxInfo)(_el); },
        "mAAcceptedIndication": (_el: _Element): void => { mAAcceptedIndication = $._decode_implicit<SMFMAAcceptedIndication>(() => _decode_SMFMAAcceptedIndication)(_el); },
        "aTSSSContainer": (_el: _Element): void => { aTSSSContainer = $._decode_implicit<ATSSSContainer>(() => _decode_ATSSSContainer)(_el); },
        "uEEPSPDNConnection": (_el: _Element): void => { uEEPSPDNConnection = $._decode_implicit<UEEPSPDNConnection>(() => _decode_UEEPSPDNConnection)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "pCCRules": (_el: _Element): void => { pCCRules = $._decode_implicit<PCCRuleSet>(() => _decode_PCCRuleSet)(_el); },
        "uPPathChange": (_el: _Element): void => { uPPathChange = $._decode_implicit<UPPathChange>(() => _decode_UPPathChange)(_el); },
        "pFDDataForApp": (_el: _Element): void => { pFDDataForApp = $._decode_implicit<PFDDataForApp>(() => _decode_PFDDataForApp)(_el); },
        "ePSPDNConnectionModification": (_el: _Element): void => { ePSPDNConnectionModification = $._decode_implicit<EPSPDNConnectionModification>(() => _decode_EPSPDNConnectionModification)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAPDUSessionModification,
        _extension_additions_list_spec_for_SMFMAPDUSessionModification,
        _root_component_type_list_2_spec_for_SMFMAPDUSessionModification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMFMAPDUSessionModification(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        accessInfo,
        sNSSAI,
        location,
        requestType,
        servingNetwork,
        oldPDUSessionID,
        mAUpgradeIndication,
        ePSPDNCnxInfo,
        mAAcceptedIndication,
        aTSSSContainer,
        uEEPSPDNConnection,
        ePS5GSComboInfo,
        handoverState,
        pCCRules,
        uPPathChange,
        pFDDataForApp,
        ePSPDNConnectionModification,
        alternativeNSSAI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMFMAPDUSessionModification(el);
}

let _cached_encoder_for_SMFMAPDUSessionModification: $.ASN1Encoder<SMFMAPDUSessionModification> | null = null;

/**
 * @summary Encodes a(n) SMFMAPDUSessionModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAPDUSessionModification, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAPDUSessionModification (value: SMFMAPDUSessionModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAPDUSessionModification) { _cached_encoder_for_SMFMAPDUSessionModification = function (value: SMFMAPDUSessionModification, elGetter: $.ASN1Encoder<SMFMAPDUSessionModification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(23 + (_unrecognized ? _unrecognized.length : 0));
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
    if (value.accessInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<AccessInfo>(() => _encode_AccessInfo, $.BER), $.BER)(value.accessInfo, $.BER);
    }
    if (value.sNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.requestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER);
    if (value.oldPDUSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PDUSessionID, $.BER)(value.oldPDUSessionID, $.BER);
    }
    if (value.mAUpgradeIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_SMFMAUpgradeIndication, $.BER)(value.mAUpgradeIndication, $.BER);
    }
    if (value.ePSPDNCnxInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_SMFEPSPDNCnxInfo, $.BER)(value.ePSPDNCnxInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_SMFMAAcceptedIndication, $.BER)(value.mAAcceptedIndication, $.BER);
    if (value.aTSSSContainer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_ATSSSContainer, $.BER)(value.aTSSSContainer, $.BER);
    }
    if (value.uEEPSPDNConnection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_UEEPSPDNConnection, $.BER)(value.uEEPSPDNConnection, $.BER);
    }
    if (value.ePS5GSComboInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER);
    }
    if (value.handoverState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER);
    }
    if (value.pCCRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_PCCRuleSet, $.BER)(value.pCCRules, $.BER);
    }
    if (value.uPPathChange !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_UPPathChange, $.BER)(value.uPPathChange, $.BER);
    }
    if (value.pFDDataForApp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_PFDDataForApp, $.BER)(value.pFDDataForApp, $.BER);
    }
    if (value.ePSPDNConnectionModification !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_EPSPDNConnectionModification, $.BER)(value.ePSPDNConnectionModification, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFMAPDUSessionModification(value, elGetter);
}


/* eslint-enable */
