/**
 * @module
 * @description
 * 
 * ASN.1 module `Mms-HI3-PS`, `IMPLICIT TAGS`. HI3 content of communication for
 * MMS, separated from other services.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulintercept(2) threeGPP(4) hi3mms(17) r16(16) version-0(0)}`.
 * 
 * 3GPP TS 33.108, clause 15.3.7 and annex B.16. Clause 15.3.1 says the CC is
 * reported using a ULIC header; annex B.16 defines this MMS header for that CC.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 */

export {
    CC_PDU,
    _decode_CC_PDU,
    _encode_CC_PDU,
    _extension_additions_list_spec_for_CC_PDU,
    _root_component_type_list_1_spec_for_CC_PDU,
    _root_component_type_list_2_spec_for_CC_PDU,
} from "./CC-PDU.ta.mjs";

export {
    type ICE_type,
    ICE_type_mMSC,
    ICE_type_mMSProxyRelay,
    _decode_ICE_type,
    _encode_ICE_type,
    _enum_for_ICE_type,
    mMSC,
    mMSProxyRelay,
} from "./ICE-type.ta.mjs";

export {
    MMSLIC_header,
    _decode_MMSLIC_header,
    _encode_MMSLIC_header,
    _extension_additions_list_spec_for_MMSLIC_header,
    _root_component_type_list_1_spec_for_MMSLIC_header,
    _root_component_type_list_2_spec_for_MMSLIC_header,
} from "./MMSLIC-header.ta.mjs";

export {
    National_HI3_ASN1parameters,
    _decode_National_HI3_ASN1parameters,
    _encode_National_HI3_ASN1parameters,
    _extension_additions_list_spec_for_National_HI3_ASN1parameters,
    _root_component_type_list_1_spec_for_National_HI3_ASN1parameters,
    _root_component_type_list_2_spec_for_National_HI3_ASN1parameters,
} from "./National-HI3-ASN1parameters.ta.mjs";

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
    hi3DomainId,
} from "./hi3DomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
