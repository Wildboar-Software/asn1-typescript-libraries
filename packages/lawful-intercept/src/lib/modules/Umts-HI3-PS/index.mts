/**
 * @description
 * 
 * ASN.1 module `Umts-HI3-PS`, `IMPLICIT TAGS`. HI3 content of communication for
 * the UMTS packet domain. This module is ULIC version 1. Version 0 is the
 * separate octet header in annex C.1.2.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulintercept(2) threeGPP(4) hi3(2) r7(7) version-0(0)}`.
 * 
 * 3GPP TS 33.108, clause 6.7, annex C, and annex B.4. GGSN interception of CC
 * is a national option, and is required when 3G direct tunnel is used.
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
    ICE_type_ggsn,
    ICE_type_sgsn,
    _decode_ICE_type,
    _encode_ICE_type,
    _enum_for_ICE_type,
    ggsn,
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
    type Version,
    Version_lastVersion,
    Version_version1,
    Version_version3,
    _decode_Version,
    _encode_Version,
    _enum_for_Version,
    lastVersion,
    version1,
    version3,
} from "./Version.ta.mjs";

export {
    hi3DomainId,
} from "./hi3DomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
