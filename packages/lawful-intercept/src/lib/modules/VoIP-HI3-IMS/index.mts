/**
 * Short enumerated names omitted from this barrel because they collide
 * with the same short name on another type in this module:
 * unknown
 */
export type {
    ICE_type,
} from "./ICE-type.ta.mjs";
export {
    _enum_for_ICE_type,
    ICE_type_ggsn,
    ggsn,
    ICE_type_pDN_GW,
    pDN_GW,
    ICE_type_aGW,
    aGW,
    ICE_type_trGW,
    trGW,
    ICE_type_mGW,
    mGW,
    ICE_type_other,
    other,
    ICE_type_unknown,
    ICE_type_mRF,
    mRF,
    ICE_type_lmISF,
    lmISF,
    ICE_type_sGW,
    sGW,
    _decode_ICE_type,
    _encode_ICE_type,
} from "./ICE-type.ta.mjs";
export * from "./Payload-description.ta.mjs";
export {
    _enum_for_TPDU_direction,
    TPDU_direction,
    TPDU_direction_from_target,
    from_target,
    TPDU_direction_to_target,
    to_target,
    TPDU_direction_combined,
    combined,
    TPDU_direction_unknown,
    _decode_TPDU_direction,
    _encode_TPDU_direction,
} from "./TPDU-direction.ta.mjs";
export * from "./Voip-CC-PDU.ta.mjs";
export * from "./VoipCorrelationNumber.ta.mjs";
export * from "./VoipLIC-header.ta.mjs";
export * from "./hi3voipDomainId.va.mjs";
export * from "./lawfulInterceptDomainId.va.mjs";
export * from "./threeGPPSUBDomainId.va.mjs";
