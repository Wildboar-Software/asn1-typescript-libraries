/**
 * Short named bits, integers, and enumeration items omitted because the
 * same short name is declared more than once in this module:
 * `unknown`
 */
export {
    type ICE_type,
    ICE_type_aGW,
    ICE_type_ggsn,
    ICE_type_lmISF,
    ICE_type_mGW,
    ICE_type_mRF,
    ICE_type_other,
    ICE_type_pDN_GW,
    ICE_type_sGW,
    ICE_type_trGW,
    ICE_type_unknown,
    _decode_ICE_type,
    _encode_ICE_type,
    _enum_for_ICE_type,
    aGW,
    ggsn,
    lmISF,
    mGW,
    mRF,
    other,
    pDN_GW,
    sGW,
    trGW,
} from "./ICE-type.ta.mjs";

export {
    Payload_description,
    _decode_Payload_description,
    _encode_Payload_description,
    _extension_additions_list_spec_for_Payload_description,
    _root_component_type_list_1_spec_for_Payload_description,
    _root_component_type_list_2_spec_for_Payload_description,
} from "./Payload-description.ta.mjs";

export {
    TPDU_direction,
    TPDU_direction_combined,
    TPDU_direction_from_target,
    TPDU_direction_to_target,
    TPDU_direction_unknown,
    _decode_TPDU_direction,
    _encode_TPDU_direction,
    _enum_for_TPDU_direction,
    combined,
    from_target,
    to_target,
} from "./TPDU-direction.ta.mjs";

export {
    Voip_CC_PDU,
    _decode_Voip_CC_PDU,
    _encode_Voip_CC_PDU,
    _extension_additions_list_spec_for_Voip_CC_PDU,
    _root_component_type_list_1_spec_for_Voip_CC_PDU,
    _root_component_type_list_2_spec_for_Voip_CC_PDU,
} from "./Voip-CC-PDU.ta.mjs";

export {
    type VoipCorrelationNumber,
    _decode_VoipCorrelationNumber,
    _encode_VoipCorrelationNumber,
} from "./VoipCorrelationNumber.ta.mjs";

export {
    VoipLIC_header,
    _decode_VoipLIC_header,
    _encode_VoipLIC_header,
    _extension_additions_list_spec_for_VoipLIC_header,
    _root_component_type_list_1_spec_for_VoipLIC_header,
    _root_component_type_list_2_spec_for_VoipLIC_header,
} from "./VoipLIC-header.ta.mjs";

export {
    hi3voipDomainId,
} from "./hi3voipDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
