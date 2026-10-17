/**
 * @module
 * @description
 * 
 * ASN.1 module `IWLANUmtsHI2Operations` from 3GPP TS 33.108. The module is
 * declared with IMPLICIT TAGS.
 * 
 * HI2 intercept-related information for 3GPP WLAN interworking. A delivery is
 * one `IWLANUmtsIRIContent` record or an optional `IWLANUmtsIRISequence`.
 * Aggregation is optional. A record that is ready to send is not withheld in
 * order to aggregate it.
 * 
 * Begin is a successful I-WLAN tunnel, or start of intercept when a tunnel is
 * already up. End is tunnel disconnect. Report covers access initiation and
 * termination, unsuccessful tunnel setup, start of intercept with no tunnel,
 * and packet-data headers.
 * 
 * Clause 8 is not maintained from Release 12 onwards.
 * 
 * 3GPP TS 33.108, clause 8 and annex B.7.
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulintercept(2) threeGPP(4) hi2wlan(6) r16(16) version-0(0)}`
 */
export {
    type CorrelationNumber,
    _decode_CorrelationNumber,
    _encode_CorrelationNumber,
} from "./CorrelationNumber.ta.mjs";

export {
    I_WLAN_parameters,
    _decode_I_WLAN_parameters,
    _encode_I_WLAN_parameters,
    _extension_additions_list_spec_for_I_WLAN_parameters,
    _root_component_type_list_1_spec_for_I_WLAN_parameters,
    _root_component_type_list_2_spec_for_I_WLAN_parameters,
} from "./I-WLAN-parameters.ta.mjs";

export {
    type I_WLANEvent,
    I_WLANEvent_i_WLANAccessInitiation,
    I_WLANEvent_i_WLANAccessTermination,
    I_WLANEvent_i_WLANTunnelDisconnect,
    I_WLANEvent_i_WLANTunnelEstablishment,
    I_WLANEvent_packetDataHeaderInformation,
    I_WLANEvent_startOfInterceptionCommunicationActive,
    _decode_I_WLANEvent,
    _encode_I_WLANEvent,
    _enum_for_I_WLANEvent,
    i_WLANAccessInitiation,
    i_WLANAccessTermination,
    i_WLANTunnelDisconnect,
    i_WLANTunnelEstablishment,
    packetDataHeaderInformation,
    startOfInterceptionCommunicationActive,
} from "./I-WLANEvent.ta.mjs";

export {
    type I_WLANOperationErrorCode,
    _decode_I_WLANOperationErrorCode,
    _encode_I_WLANOperationErrorCode,
} from "./I-WLANOperationErrorCode.ta.mjs";

export {
    I_WLANinformation,
    _decode_I_WLANinformation,
    _encode_I_WLANinformation,
    _extension_additions_list_spec_for_I_WLANinformation,
    _root_component_type_list_1_spec_for_I_WLANinformation,
    _root_component_type_list_2_spec_for_I_WLANinformation,
} from "./I-WLANinformation.ta.mjs";

export {
    type IRI_Parameters_initiator,
    IRI_Parameters_initiator_not_Available,
    IRI_Parameters_initiator_originating_Target,
    IRI_Parameters_initiator_terminating_Target,
    _decode_IRI_Parameters_initiator,
    _encode_IRI_Parameters_initiator,
    _enum_for_IRI_Parameters_initiator,
    not_Available,
    originating_Target,
    terminating_Target,
} from "./IRI-Parameters-initiator.ta.mjs";

export {
    IRI_Parameters,
    _decode_IRI_Parameters,
    _encode_IRI_Parameters,
    _extension_additions_list_spec_for_IRI_Parameters,
    _root_component_type_list_1_spec_for_IRI_Parameters,
    _root_component_type_list_2_spec_for_IRI_Parameters,
} from "./IRI-Parameters.ta.mjs";

export {
    type IWLANUmtsIRIContent,
    _decode_IWLANUmtsIRIContent,
    _encode_IWLANUmtsIRIContent,
} from "./IWLANUmtsIRIContent.ta.mjs";

export {
    type IWLANUmtsIRISequence,
    _decode_IWLANUmtsIRISequence,
    _encode_IWLANUmtsIRISequence,
} from "./IWLANUmtsIRISequence.ta.mjs";

export {
    type IWLANUmtsIRIsContent,
    _decode_IWLANUmtsIRIsContent,
    _encode_IWLANUmtsIRIsContent,
} from "./IWLANUmtsIRIsContent.ta.mjs";

export {
    PacketDataHeaderCopy,
    _decode_PacketDataHeaderCopy,
    _encode_PacketDataHeaderCopy,
    _extension_additions_list_spec_for_PacketDataHeaderCopy,
    _root_component_type_list_1_spec_for_PacketDataHeaderCopy,
    _root_component_type_list_2_spec_for_PacketDataHeaderCopy,
} from "./PacketDataHeaderCopy.ta.mjs";

export {
    type PacketDataHeaderInformation,
    _decode_PacketDataHeaderInformation,
    _encode_PacketDataHeaderInformation,
} from "./PacketDataHeaderInformation.ta.mjs";

export {
    PacketDataHeaderMapped,
    _decode_PacketDataHeaderMapped,
    _encode_PacketDataHeaderMapped,
    _extension_additions_list_spec_for_PacketDataHeaderMapped,
    _root_component_type_list_1_spec_for_PacketDataHeaderMapped,
    _root_component_type_list_2_spec_for_PacketDataHeaderMapped,
} from "./PacketDataHeaderMapped.ta.mjs";

export {
    type PacketDataHeaderReport,
    _decode_PacketDataHeaderReport,
    _encode_PacketDataHeaderReport,
} from "./PacketDataHeaderReport.ta.mjs";

export {
    type PacketDataSummaryReport,
    _decode_PacketDataSummaryReport,
    _encode_PacketDataSummaryReport,
} from "./PacketDataSummaryReport.ta.mjs";

export {
    PacketFlowSummary,
    _decode_PacketFlowSummary,
    _encode_PacketFlowSummary,
    _extension_additions_list_spec_for_PacketFlowSummary,
    _root_component_type_list_1_spec_for_PacketFlowSummary,
    _root_component_type_list_2_spec_for_PacketFlowSummary,
} from "./PacketFlowSummary.ta.mjs";

export {
    type PartyInformation_party_Qualifier,
    PartyInformation_party_Qualifier_iWLAN_Target,
    _decode_PartyInformation_party_Qualifier,
    _encode_PartyInformation_party_Qualifier,
    _enum_for_PartyInformation_party_Qualifier,
    iWLAN_Target,
} from "./PartyInformation-party-Qualifier.ta.mjs";

export {
    PartyInformation_partyIdentity,
    _decode_PartyInformation_partyIdentity,
    _encode_PartyInformation_partyIdentity,
    _extension_additions_list_spec_for_PartyInformation_partyIdentity,
    _root_component_type_list_1_spec_for_PartyInformation_partyIdentity,
    _root_component_type_list_2_spec_for_PartyInformation_partyIdentity,
} from "./PartyInformation-partyIdentity.ta.mjs";

export {
    PartyInformation,
    _decode_PartyInformation,
    _encode_PartyInformation,
    _extension_additions_list_spec_for_PartyInformation,
    _root_component_type_list_1_spec_for_PartyInformation,
    _root_component_type_list_2_spec_for_PartyInformation,
} from "./PartyInformation.ta.mjs";

export {
    ReportInterval,
    _decode_ReportInterval,
    _encode_ReportInterval,
    _extension_additions_list_spec_for_ReportInterval,
    _root_component_type_list_1_spec_for_ReportInterval,
    _root_component_type_list_2_spec_for_ReportInterval,
} from "./ReportInterval.ta.mjs";

export {
    type ReportReason,
    ReportReason_countThresholdHit,
    ReportReason_otherOrUnknown,
    ReportReason_pDPComtextDeactivated,
    ReportReason_pDPContextModification,
    ReportReason_timerExpired,
    _decode_ReportReason,
    _encode_ReportReason,
    _enum_for_ReportReason,
    countThresholdHit,
    otherOrUnknown,
    pDPComtextDeactivated,
    pDPContextModification,
    timerExpired,
} from "./ReportReason.ta.mjs";

export {
    Services_Data_Information,
    _decode_Services_Data_Information,
    _encode_Services_Data_Information,
    _extension_additions_list_spec_for_Services_Data_Information,
    _root_component_type_list_1_spec_for_Services_Data_Information,
    _root_component_type_list_2_spec_for_Services_Data_Information,
} from "./Services-Data-Information.ta.mjs";

export {
    type SessionAliveTime,
    _decode_SessionAliveTime,
    _encode_SessionAliveTime,
} from "./SessionAliveTime.ta.mjs";

export {
    TPDU_direction,
    TPDU_direction_from_target,
    TPDU_direction_to_target,
    TPDU_direction_unknown,
    _decode_TPDU_direction,
    _encode_TPDU_direction,
    _enum_for_TPDU_direction,
    from_target,
    to_target,
    unknown,
} from "./TPDU-direction.ta.mjs";

export {
    type VisitedPLMNID,
    _decode_VisitedPLMNID,
    _encode_VisitedPLMNID,
} from "./VisitedPLMNID.ta.mjs";

export {
    hi2wlanDomainId,
} from "./hi2wlanDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
