/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
// export { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { RequestIndication, _enum_for_RequestIndication, RequestIndication_uEREQPDUSESMOD /* IMPORTED_LONG_ENUMERATION_ITEM */, uEREQPDUSESMOD /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_uEREQPDUSESREL /* IMPORTED_LONG_ENUMERATION_ITEM */, uEREQPDUSESREL /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_pDUSESMOB /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSESMOB /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_nWREQPDUSESAUTH /* IMPORTED_LONG_ENUMERATION_ITEM */, nWREQPDUSESAUTH /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_nWREQPDUSESMOD /* IMPORTED_LONG_ENUMERATION_ITEM */, nWREQPDUSESMOD /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_nWREQPDUSESREL /* IMPORTED_LONG_ENUMERATION_ITEM */, nWREQPDUSESREL /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_eBIASSIGNMENTREQ /* IMPORTED_LONG_ENUMERATION_ITEM */, eBIASSIGNMENTREQ /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_rELDUETO5GANREQUEST /* IMPORTED_LONG_ENUMERATION_ITEM */, rELDUETO5GANREQUEST /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestIndication, _encode_RequestIndication } from "../TS33128Payloads/RequestIndication.ta.mjs";
// export { RequestIndication, _enum_for_RequestIndication, RequestIndication_uEREQPDUSESMOD /* IMPORTED_LONG_ENUMERATION_ITEM */, uEREQPDUSESMOD /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_uEREQPDUSESREL /* IMPORTED_LONG_ENUMERATION_ITEM */, uEREQPDUSESREL /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_pDUSESMOB /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSESMOB /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_nWREQPDUSESAUTH /* IMPORTED_LONG_ENUMERATION_ITEM */, nWREQPDUSESAUTH /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_nWREQPDUSESMOD /* IMPORTED_LONG_ENUMERATION_ITEM */, nWREQPDUSESMOD /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_nWREQPDUSESREL /* IMPORTED_LONG_ENUMERATION_ITEM */, nWREQPDUSESREL /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_eBIASSIGNMENTREQ /* IMPORTED_LONG_ENUMERATION_ITEM */, eBIASSIGNMENTREQ /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestIndication_rELDUETO5GANREQUEST /* IMPORTED_LONG_ENUMERATION_ITEM */, rELDUETO5GANREQUEST /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestIndication, _encode_RequestIndication } from "../TS33128Payloads/RequestIndication.ta.mjs";
import { ATSSSContainer, _decode_ATSSSContainer, _encode_ATSSSContainer } from "../TS33128Payloads/ATSSSContainer.ta.mjs";
// export { ATSSSContainer, _decode_ATSSSContainer, _encode_ATSSSContainer } from "../TS33128Payloads/ATSSSContainer.ta.mjs";
import { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
// export { SMFServingNetwork, _decode_SMFServingNetwork, _encode_SMFServingNetwork } from "../TS33128Payloads/SMFServingNetwork.ta.mjs";
import { HandoverState, _enum_for_HandoverState, HandoverState_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_preparing /* IMPORTED_LONG_ENUMERATION_ITEM */, preparing /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_prepared /* IMPORTED_LONG_ENUMERATION_ITEM */, prepared /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverState, _encode_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
// export { HandoverState, _enum_for_HandoverState, HandoverState_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_preparing /* IMPORTED_LONG_ENUMERATION_ITEM */, preparing /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_prepared /* IMPORTED_LONG_ENUMERATION_ITEM */, prepared /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverState_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverState, _encode_HandoverState } from "../TS33128Payloads/HandoverState.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
// export { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";


/**
 * @summary SMFPDUtoMAPDUSessionModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFPDUtoMAPDUSessionModification ::= SEQUENCE
 * {
 *     sUPI                         [1] SUPI OPTIONAL,
 *     sUPIUnauthenticated          [2] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                          [3] PEI OPTIONAL,
 *     gPSI                         [4] GPSI OPTIONAL,
 *     sNSSAI                       [5] SNSSAI OPTIONAL,
 *     non3GPPAccessEndpoint        [6] UEEndpointAddress OPTIONAL,
 *     location                     [7] Location OPTIONAL,
 *     requestType                  [8] FiveGSMRequestType,
 *     accessType                   [9] AccessType OPTIONAL,
 *     rATType                      [10] RATType OPTIONAL,
 *     pDUSessionID                 [11] PDUSessionID,
 *     requestIndication            [12] RequestIndication,
 *     aTSSSContainer               [13] ATSSSContainer,
 *     uEEndpoint                   [14] UEEndpointAddress OPTIONAL,
 *     servingNetwork               [15] SMFServingNetwork OPTIONAL,
 *     handoverState                [16] HandoverState OPTIONAL,
 *     gTPTunnelInfo                [17] GTPTunnelInfo OPTIONAL,
 *     ePSPDNConnectionModification [18] EPSPDNConnectionModification OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFPDUtoMAPDUSessionModification {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `sUPIUnauthenticated`.
         * @public
         * @readonly
         */
        readonly sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: OPTIONAL<SNSSAI>,
        /**
         * @summary `non3GPPAccessEndpoint`.
         * @public
         * @readonly
         */
        readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `requestType`.
         * @public
         * @readonly
         */
        readonly requestType: FiveGSMRequestType,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: OPTIONAL<AccessType>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `requestIndication`.
         * @public
         * @readonly
         */
        readonly requestIndication: RequestIndication,
        /**
         * @summary `aTSSSContainer`.
         * @public
         * @readonly
         */
        readonly aTSSSContainer: ATSSSContainer,
        /**
         * @summary `uEEndpoint`.
         * @public
         * @readonly
         */
        readonly uEEndpoint: OPTIONAL<UEEndpointAddress>,
        /**
         * @summary `servingNetwork`.
         * @public
         * @readonly
         */
        readonly servingNetwork: OPTIONAL<SMFServingNetwork>,
        /**
         * @summary `handoverState`.
         * @public
         * @readonly
         */
        readonly handoverState: OPTIONAL<HandoverState>,
        /**
         * @summary `gTPTunnelInfo`.
         * @public
         * @readonly
         */
        readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        /**
         * @summary `ePSPDNConnectionModification`.
         * @public
         * @readonly
         */
        readonly ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>
    ) {}

    /**
     * @summary Restructures an object into a SMFPDUtoMAPDUSessionModification
     * @description
     * 
     * This takes an `object` and converts it to a `SMFPDUtoMAPDUSessionModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFPDUtoMAPDUSessionModification`.
     * @returns {SMFPDUtoMAPDUSessionModification}
     */
    public static _from_object (_o: { [_K in keyof (SMFPDUtoMAPDUSessionModification)]: (SMFPDUtoMAPDUSessionModification)[_K] }): SMFPDUtoMAPDUSessionModification {
        return new SMFPDUtoMAPDUSessionModification(_o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.sNSSAI, _o.non3GPPAccessEndpoint, _o.location, _o.requestType, _o.accessType, _o.rATType, _o.pDUSessionID, _o.requestIndication, _o.aTSSSContainer, _o.uEEndpoint, _o.servingNetwork, _o.handoverState, _o.gTPTunnelInfo, _o.ePSPDNConnectionModification);
    }

        /**
         * @summary The enum used as the type of the component `requestType`
         * @public
         * @static
         */

    public static _enum_for_requestType = _enum_for_FiveGSMRequestType;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;        /**
         * @summary The enum used as the type of the component `requestIndication`
         * @public
         * @static
         */

    public static _enum_for_requestIndication = _enum_for_RequestIndication;        /**
         * @summary The enum used as the type of the component `handoverState`
         * @public
         * @static
         */

    public static _enum_for_handoverState = _enum_for_HandoverState;
}

/**
 * @summary The Leading Root Component Types of SMFPDUtoMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFPDUtoMAPDUSessionModification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("requestType", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("requestIndication", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("aTSSSContainer", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("servingNetwork", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("handoverState", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("ePSPDNConnectionModification", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of SMFPDUtoMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFPDUtoMAPDUSessionModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFPDUtoMAPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFPDUtoMAPDUSessionModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFPDUtoMAPDUSessionModification: $.ASN1Decoder<SMFPDUtoMAPDUSessionModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFPDUtoMAPDUSessionModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFPDUtoMAPDUSessionModification (el: _Element): SMFPDUtoMAPDUSessionModification {
    if (!_cached_decoder_for_SMFPDUtoMAPDUSessionModification) { _cached_decoder_for_SMFPDUtoMAPDUSessionModification = function (el: _Element): SMFPDUtoMAPDUSessionModification {
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let location: OPTIONAL<Location>;
    let requestType!: FiveGSMRequestType;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    let pDUSessionID!: PDUSessionID;
    let requestIndication!: RequestIndication;
    let aTSSSContainer!: ATSSSContainer;
    let uEEndpoint: OPTIONAL<UEEndpointAddress>;
    let servingNetwork: OPTIONAL<SMFServingNetwork>;
    let handoverState: OPTIONAL<HandoverState>;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let ePSPDNConnectionModification: OPTIONAL<EPSPDNConnectionModification>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "requestIndication": (_el: _Element): void => { requestIndication = $._decode_implicit<RequestIndication>(() => _decode_RequestIndication)(_el); },
        "aTSSSContainer": (_el: _Element): void => { aTSSSContainer = $._decode_implicit<ATSSSContainer>(() => _decode_ATSSSContainer)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<SMFServingNetwork>(() => _decode_SMFServingNetwork)(_el); },
        "handoverState": (_el: _Element): void => { handoverState = $._decode_implicit<HandoverState>(() => _decode_HandoverState)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "ePSPDNConnectionModification": (_el: _Element): void => { ePSPDNConnectionModification = $._decode_implicit<EPSPDNConnectionModification>(() => _decode_EPSPDNConnectionModification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFPDUtoMAPDUSessionModification,
        _extension_additions_list_spec_for_SMFPDUtoMAPDUSessionModification,
        _root_component_type_list_2_spec_for_SMFPDUtoMAPDUSessionModification,
        undefined,
    );
    return new SMFPDUtoMAPDUSessionModification(
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        sNSSAI,
        non3GPPAccessEndpoint,
        location,
        requestType,
        accessType,
        rATType,
        pDUSessionID,
        requestIndication,
        aTSSSContainer,
        uEEndpoint,
        servingNetwork,
        handoverState,
        gTPTunnelInfo,
        ePSPDNConnectionModification
    );
}; }
    return _cached_decoder_for_SMFPDUtoMAPDUSessionModification(el);
}

let _cached_encoder_for_SMFPDUtoMAPDUSessionModification: $.ASN1Encoder<SMFPDUtoMAPDUSessionModification> | null = null;

/**
 * @summary Encodes a(n) SMFPDUtoMAPDUSessionModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFPDUtoMAPDUSessionModification, encoded as an ASN.1 Element.
 */
export
function _encode_SMFPDUtoMAPDUSessionModification (value: SMFPDUtoMAPDUSessionModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFPDUtoMAPDUSessionModification) { _cached_encoder_for_SMFPDUtoMAPDUSessionModification = function (value: SMFPDUtoMAPDUSessionModification, elGetter: $.ASN1Encoder<SMFPDUtoMAPDUSessionModification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.sNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.non3GPPAccessEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER),
            /* IF_ABSENT  */ ((value.accessType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AccessType, $.BER)(value.accessType, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_RequestIndication, $.BER)(value.requestIndication, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => _encode_ATSSSContainer, $.BER)(value.aTSSSContainer, $.BER),
            /* IF_ABSENT  */ ((value.uEEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 14, () => _encode_UEEndpointAddress, $.BER)(value.uEEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.servingNetwork === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SMFServingNetwork, $.BER)(value.servingNetwork, $.BER)),
            /* IF_ABSENT  */ ((value.handoverState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_HandoverState, $.BER)(value.handoverState, $.BER)),
            /* IF_ABSENT  */ ((value.gTPTunnelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNConnectionModification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_EPSPDNConnectionModification, $.BER)(value.ePSPDNConnectionModification, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFPDUtoMAPDUSessionModification(value, elGetter);
}


/* eslint-enable */
