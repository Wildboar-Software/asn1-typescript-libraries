/**
 * @module
 * @description
 * 
 * ASN.1 module `CONF-HI3-IMS`, `IMPLICIT TAGS`. HI3 content of communication
 * for IMS conferencing.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2) threeGPP(4) hi3conf(11) r17(17) version-0(0)}`.
 * 
 * 3GPP TS 33.108, clause 11.6, annex L, and annex B.11.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 */

export {
    Conf_CC_PDU,
    _decode_Conf_CC_PDU,
    _encode_Conf_CC_PDU,
    _extension_additions_list_spec_for_Conf_CC_PDU,
    _root_component_type_list_1_spec_for_Conf_CC_PDU,
    _root_component_type_list_2_spec_for_Conf_CC_PDU,
} from "./Conf-CC-PDU.ta.mjs";

export {
    ConfLIC_header,
    _decode_ConfLIC_header,
    _encode_ConfLIC_header,
    _extension_additions_list_spec_for_ConfLIC_header,
    _root_component_type_list_1_spec_for_ConfLIC_header,
    _root_component_type_list_2_spec_for_ConfLIC_header,
} from "./ConfLIC-header.ta.mjs";

export {
    MediaID,
    _decode_MediaID,
    _encode_MediaID,
    _extension_additions_list_spec_for_MediaID,
    _root_component_type_list_1_spec_for_MediaID,
    _root_component_type_list_2_spec_for_MediaID,
} from "./MediaID.ta.mjs";

export {
    TPDU_direction,
    TPDU_direction_combined,
    TPDU_direction_conftarget,
    TPDU_direction_from_mixer,
    TPDU_direction_from_target,
    TPDU_direction_to_mixer,
    TPDU_direction_to_target,
    TPDU_direction_unknown,
    _decode_TPDU_direction,
    _encode_TPDU_direction,
    _enum_for_TPDU_direction,
    combined,
    conftarget,
    from_mixer,
    from_target,
    to_mixer,
    to_target,
    unknown,
} from "./TPDU-direction.ta.mjs";

export {
    hi3confDomainId,
} from "./hi3confDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
