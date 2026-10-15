/**
 * @description
 * 
 * ASN.1 module `ProSeHI2Operations`, IMPLICIT TAGS. HI2 intercept related
 * information for ProSe Direct Discovery. That service is IRI only; there is no
 * content of communication.
 *
 * 3GPP TS 33.108, clause 13.2 and annex B.13.
 * https://www.3gpp.org/DynaReport/33108.htm
 *
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2) threeGPP(4) hi2prose(15) r16(16) version0(0)}`
 *
 * Clause 13.3 (ProSe Remote UE communications) is not defined in this module.
 */
export {
    DirectDiscoveryData,
    _decode_DirectDiscoveryData,
    _encode_DirectDiscoveryData,
    _extension_additions_list_spec_for_DirectDiscoveryData,
    _root_component_type_list_1_spec_for_DirectDiscoveryData,
    _root_component_type_list_2_spec_for_DirectDiscoveryData,
} from "./DirectDiscoveryData.ta.mjs";

export {
    IRI_Parameters,
    _decode_IRI_Parameters,
    _encode_IRI_Parameters,
    _extension_additions_list_spec_for_IRI_Parameters,
    _root_component_type_list_1_spec_for_IRI_Parameters,
    _root_component_type_list_2_spec_for_IRI_Parameters,
} from "./IRI-Parameters.ta.mjs";

export {
    type ProSeAppMask,
    _decode_ProSeAppMask,
    _encode_ProSeAppMask,
} from "./ProSeAppMask.ta.mjs";

export {
    ProSeDirectDiscovery,
    _decode_ProSeDirectDiscovery,
    _encode_ProSeDirectDiscovery,
    _extension_additions_list_spec_for_ProSeDirectDiscovery,
    _root_component_type_list_1_spec_for_ProSeDirectDiscovery,
    _root_component_type_list_2_spec_for_ProSeDirectDiscovery,
} from "./ProSeDirectDiscovery.ta.mjs";

export {
    type ProSeDirectDiscoveryEvent,
    ProSeDirectDiscoveryEvent_proseDiscoveryRequest,
    ProSeDirectDiscoveryEvent_proseMatchReport,
    _decode_ProSeDirectDiscoveryEvent,
    _encode_ProSeDirectDiscoveryEvent,
    _enum_for_ProSeDirectDiscoveryEvent,
    proseDiscoveryRequest,
    proseMatchReport,
} from "./ProSeDirectDiscoveryEvent.ta.mjs";

export {
    type ProSeEventData,
    _decode_ProSeEventData,
    _encode_ProSeEventData,
} from "./ProSeEventData.ta.mjs";

export {
    type ProSeIRIContent,
    _decode_ProSeIRIContent,
    _encode_ProSeIRIContent,
} from "./ProSeIRIContent.ta.mjs";

export {
    type ProSeIRISequence,
    _decode_ProSeIRISequence,
    _encode_ProSeIRISequence,
} from "./ProSeIRISequence.ta.mjs";

export {
    type ProSeIRIsContent,
    _decode_ProSeIRIsContent,
    _encode_ProSeIRIsContent,
} from "./ProSeIRIsContent.ta.mjs";

export {
    type ProSeMaskSequence,
    _decode_ProSeMaskSequence,
    _encode_ProSeMaskSequence,
} from "./ProSeMaskSequence.ta.mjs";

export {
    type TargetRole,
    TargetRole_announcingUE,
    TargetRole_monitoringUE,
    _decode_TargetRole,
    _encode_TargetRole,
    _enum_for_TargetRole,
    announcingUE,
    monitoringUE,
} from "./TargetRole.ta.mjs";

export {
    hi2ProSeDomainId,
} from "./hi2ProSeDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
