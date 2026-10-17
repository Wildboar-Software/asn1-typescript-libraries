/**
 * @module
 * @description
 * 
 * ASN.1 module `Eps-HI3-PS`, `IMPLICIT TAGS`. HI3 content of communication for
 * the evolved packet system. ULIC version 0 is not specified for EPS. This
 * header is the version-1 family without the ASN.1 version component.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulintercept(2) threeGPP(4) hi3eps(9) r17(17) version-0(0)}`.
 * 
 * 3GPP TS 33.108, clause 10.7, annex C, and annex B.10. PDN-GW interception of
 * CC is a national option, except where the PDN-GW is the only ICE in the
 * accessed PLMN.
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
    ICE_type_colocated_SAE_GWs,
    ICE_type_ePDG,
    ICE_type_ggsn,
    ICE_type_pDN_GW,
    ICE_type_s_GW,
    ICE_type_sgsn,
    _decode_ICE_type,
    _encode_ICE_type,
    _enum_for_ICE_type,
    colocated_SAE_GWs,
    ePDG,
    ggsn,
    pDN_GW,
    s_GW,
    sgsn,
} from "./ICE-type.ta.mjs";

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
    ULIC_header,
    _decode_ULIC_header,
    _encode_ULIC_header,
    _extension_additions_list_spec_for_ULIC_header,
    _root_component_type_list_1_spec_for_ULIC_header,
    _root_component_type_list_2_spec_for_ULIC_header,
} from "./ULIC-header.ta.mjs";

export {
    hi3DomainId,
} from "./hi3DomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
