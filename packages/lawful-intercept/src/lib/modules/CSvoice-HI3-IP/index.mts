/**
 * @module
 * @description
 * 
 * ASN.1 module `CSvoice-HI3-IP`, `IMPLICIT TAGS`. IP-based handover of
 * circuit-switched voice content on HI3. The call itself remains on
 * circuit-switched connections.
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2) threeGPP(4) hi3CSvoice(18) r17(17) version-0(0)}`.
 * 
 * 3GPP TS 33.108, clause 5.7 and annex B.17.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 */

export {
    CSvoice_CC_PDU,
    _decode_CSvoice_CC_PDU,
    _encode_CSvoice_CC_PDU,
    _extension_additions_list_spec_for_CSvoice_CC_PDU,
    _root_component_type_list_1_spec_for_CSvoice_CC_PDU,
    _root_component_type_list_2_spec_for_CSvoice_CC_PDU,
} from "./CSvoice-CC-PDU.ta.mjs";

export {
    CSvoiceLIC_header,
    _decode_CSvoiceLIC_header,
    _encode_CSvoiceLIC_header,
    _extension_additions_list_spec_for_CSvoiceLIC_header,
    _root_component_type_list_1_spec_for_CSvoiceLIC_header,
    _root_component_type_list_2_spec_for_CSvoiceLIC_header,
} from "./CSvoiceLIC-header.ta.mjs";

export {
    hi3CSvoiceDomainId,
} from "./hi3CSvoiceDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
