/**
 * @module
 * @description
 * 
 * ASN.1 module `UMTS-HI3CircuitLIOperations`, `IMPLICIT TAGS`. User-data packet
 * transfer on HI3 for UMTS circuit-switched interception (DSS1, ISUP, or MAP
 * signalling, for example UUS).
 * 
 * Module OID `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulintercept(2) threeGPP(4) hi3CS(4) r16(16) version0(0)}`.
 * 
 * 3GPP TS 33.108, annex B.6, clause 5.3, and annex J. Clause 5.3.1 delivers CS
 * bearer content on ISDN calls; annex J defines the UUS1 correlation on those
 * calls.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 */

export {
    type UMTS_Content_Report_initiator,
    UMTS_Content_Report_initiator_forwarded_to_party,
    UMTS_Content_Report_initiator_originating_party,
    UMTS_Content_Report_initiator_terminating_party,
    UMTS_Content_Report_initiator_undefined_party,
    _decode_UMTS_Content_Report_initiator,
    _encode_UMTS_Content_Report_initiator,
    _enum_for_UMTS_Content_Report_initiator,
    forwarded_to_party,
    originating_party,
    terminating_party,
    undefined_party,
} from "./UMTS-Content-Report-initiator.ta.mjs";

export {
    type UMTS_Content_Report_version,
    UMTS_Content_Report_version_version1,
    UMTS_Content_Report_version_version8,
    _decode_UMTS_Content_Report_version,
    _encode_UMTS_Content_Report_version,
    _enum_for_UMTS_Content_Report_version,
    version1,
    version8,
} from "./UMTS-Content-Report-version.ta.mjs";

export {
    UMTS_Content_Report,
    _decode_UMTS_Content_Report,
    _encode_UMTS_Content_Report,
    _extension_additions_list_spec_for_UMTS_Content_Report,
    _root_component_type_list_1_spec_for_UMTS_Content_Report,
    _root_component_type_list_2_spec_for_UMTS_Content_Report,
} from "./UMTS-Content-Report.ta.mjs";

export {
    hi3CSDomainId,
} from "./hi3CSDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
