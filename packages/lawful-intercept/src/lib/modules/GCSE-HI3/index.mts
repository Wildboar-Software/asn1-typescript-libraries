/**
 * @description
 * 
 * ASN.1 module `GCSE-HI3`, `IMPLICIT TAGS`. HI3 content of communication for
 * GCSE group communications.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2) threeGPP(4) hi3gcse(14) r17(17) version-0(0)}`.
 * 
 * 3GPP TS 33.108, clause 14.2.7 and annex B.14.2. Clause 14.2.1: when the GCS
 * AS is in the intercepting operator's network, interception is similar to IMS
 * conferencing, with the GCS AS as the single functional entity.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 */

export {
    Gcse_CC_PDU,
    _decode_Gcse_CC_PDU,
    _encode_Gcse_CC_PDU,
    _extension_additions_list_spec_for_Gcse_CC_PDU,
    _root_component_type_list_1_spec_for_Gcse_CC_PDU,
    _root_component_type_list_2_spec_for_Gcse_CC_PDU,
} from "./Gcse-CC-PDU.ta.mjs";

export {
    GcseLIC_header,
    _decode_GcseLIC_header,
    _encode_GcseLIC_header,
    _extension_additions_list_spec_for_GcseLIC_header,
    _root_component_type_list_1_spec_for_GcseLIC_header,
    _root_component_type_list_2_spec_for_GcseLIC_header,
} from "./GcseLIC-header.ta.mjs";

export {
    MediaID,
    _decode_MediaID,
    _encode_MediaID,
    _extension_additions_list_spec_for_MediaID,
    _root_component_type_list_1_spec_for_MediaID,
    _root_component_type_list_2_spec_for_MediaID,
} from "./MediaID.ta.mjs";

export {
    type TPDU_direction,
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
    hi3gcseDomainId,
} from "./hi3gcseDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
