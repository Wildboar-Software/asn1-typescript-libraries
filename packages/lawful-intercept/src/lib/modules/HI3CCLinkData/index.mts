/**
 * @description
 * 
 * ASN.1 module `HI3CCLinkData`, `IMPLICIT TAGS`. User-to-user signalling 1
 * contents associated with the circuit-switched CC link. The module OID is
 * `hi3(2)` directly under `lawfulInterceptDomainId`.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2) hi3(2) cclinkLI(4) version4(4)}`.
 * 
 * 3GPP TS 33.108, clause 5.3.2, clause 5.1.3, and annex J. Annex J.2 is the
 * subaddress alternative when UUS1 cannot carry 128 octets.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 */

export {
    type Direction_Indication,
    Direction_Indication_cc_from_other_party,
    Direction_Indication_cc_from_target,
    Direction_Indication_direction_unknown,
    Direction_Indication_mono_mode,
    _decode_Direction_Indication,
    _encode_Direction_Indication,
    _enum_for_Direction_Indication,
    cc_from_other_party,
    cc_from_target,
    direction_unknown,
    mono_mode,
} from "./Direction-Indication.ta.mjs";

export {
    Service_Information,
    _decode_Service_Information,
    _encode_Service_Information,
    _extension_additions_list_spec_for_Service_Information,
    _root_component_type_list_1_spec_for_Service_Information,
    _root_component_type_list_2_spec_for_Service_Information,
} from "./Service-Information.ta.mjs";

export {
    UUS1_Content,
    _decode_UUS1_Content,
    _encode_UUS1_Content,
    _extension_additions_list_spec_for_UUS1_Content,
    _root_component_type_list_1_spec_for_UUS1_Content,
    _root_component_type_list_2_spec_for_UUS1_Content,
} from "./UUS1-Content.ta.mjs";

export {
    hi3CCLinkId,
} from "./hi3CCLinkId.va.mjs";

export {
    hi3CCLinkIdOperationId,
} from "./hi3CCLinkIdOperationId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";
