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
import { SMFFailedProcedureType, _enum_for_SMFFailedProcedureType, SMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
// export { SMFFailedProcedureType, _enum_for_SMFFailedProcedureType, SMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
import { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
// export { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
import { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
// export { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EPSPDNUnsuccessfulProcedure, _decode_EPSPDNUnsuccessfulProcedure, _encode_EPSPDNUnsuccessfulProcedure } from "../TS33128Payloads/EPSPDNUnsuccessfulProcedure.ta.mjs";
// export { EPSPDNUnsuccessfulProcedure, _decode_EPSPDNUnsuccessfulProcedure, _encode_EPSPDNUnsuccessfulProcedure } from "../TS33128Payloads/EPSPDNUnsuccessfulProcedure.ta.mjs";


/**
 * @summary SMFUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failedProcedureType         [1] SMFFailedProcedureType,
 *     failureCause                [2] FiveGSMCause,
 *     initiator                   [3] Initiator,
 *     requestedSlice              [4] NSSAI OPTIONAL,
 *     sUPI                        [5] SUPI OPTIONAL,
 *     sUPIUnauthenticated         [6] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                         [7] PEI OPTIONAL,
 *     gPSI                        [8] GPSI OPTIONAL,
 *     pDUSessionID                [9] PDUSessionID OPTIONAL,
 *     uEEndpoint                  [10] SEQUENCE OF UEEndpointAddress OPTIONAL,
 *     non3GPPAccessEndpoint       [11] UEEndpointAddress OPTIONAL,
 *     dNN                         [12] DNN OPTIONAL,
 *     aMFID                       [13] AMFID OPTIONAL,
 *     hSMFURI                     [14] HSMFURI OPTIONAL,
 *     requestType                 [15] FiveGSMRequestType OPTIONAL,
 *     accessType                  [16] AccessType OPTIONAL,
 *     rATType                     [17] RATType OPTIONAL,
 *     sMPDUDNRequest              [18] SMPDUDNRequest OPTIONAL,
 *     location                    [19] Location OPTIONAL,
 *     ePSPDNUnsuccessfulProcedure [20] EPSPDNUnsuccessfulProcedure OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `failedProcedureType`.
         * @public
         * @readonly
         */
        readonly failedProcedureType: SMFFailedProcedureType,
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: FiveGSMCause,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: Initiator,
        /**
         * @summary `requestedSlice`.
         * @public
         * @readonly
         */
        readonly requestedSlice: OPTIONAL<NSSAI>,
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
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: OPTIONAL<PDUSessionID>,
        /**
         * @summary `uEEndpoint`.
         * @public
         * @readonly
         */
        readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>,
        /**
         * @summary `non3GPPAccessEndpoint`.
         * @public
         * @readonly
         */
        readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        /**
         * @summary `dNN`.
         * @public
         * @readonly
         */
        readonly dNN: OPTIONAL<DNN>,
        /**
         * @summary `aMFID`.
         * @public
         * @readonly
         */
        readonly aMFID: OPTIONAL<AMFID>,
        /**
         * @summary `hSMFURI`.
         * @public
         * @readonly
         */
        readonly hSMFURI: OPTIONAL<HSMFURI>,
        /**
         * @summary `requestType`.
         * @public
         * @readonly
         */
        readonly requestType: OPTIONAL<FiveGSMRequestType>,
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
         * @summary `sMPDUDNRequest`.
         * @public
         * @readonly
         */
        readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `ePSPDNUnsuccessfulProcedure`.
         * @public
         * @readonly
         */
        readonly ePSPDNUnsuccessfulProcedure: OPTIONAL<EPSPDNUnsuccessfulProcedure>
    ) {}

    /**
     * @summary Restructures an object into a SMFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `SMFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFUnsuccessfulProcedure`.
     * @returns {SMFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (SMFUnsuccessfulProcedure)]: (SMFUnsuccessfulProcedure)[_K] }): SMFUnsuccessfulProcedure {
        return new SMFUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.initiator, _o.requestedSlice, _o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.uEEndpoint, _o.non3GPPAccessEndpoint, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.accessType, _o.rATType, _o.sMPDUDNRequest, _o.location, _o.ePSPDNUnsuccessfulProcedure);
    }

        /**
         * @summary The enum used as the type of the component `failedProcedureType`
         * @public
         * @static
         */

    public static _enum_for_failedProcedureType = _enum_for_SMFFailedProcedureType;        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_Initiator;        /**
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

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of SMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failedProcedureType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("requestedSlice", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pDUSessionID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("dNN", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("aMFID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("hSMFURI", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("requestType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("ePSPDNUnsuccessfulProcedure", true, $.hasTag(_TagClass.context, 20))
];

/**
 * @summary The Trailing Root Component Types of SMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFUnsuccessfulProcedure: $.ASN1Decoder<SMFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFUnsuccessfulProcedure (el: _Element): SMFUnsuccessfulProcedure {
    if (!_cached_decoder_for_SMFUnsuccessfulProcedure) { _cached_decoder_for_SMFUnsuccessfulProcedure = function (el: _Element): SMFUnsuccessfulProcedure {
    let failedProcedureType!: SMFFailedProcedureType;
    let failureCause!: FiveGSMCause;
    let initiator!: Initiator;
    let requestedSlice: OPTIONAL<NSSAI>;
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID: OPTIONAL<PDUSessionID>;
    let uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let dNN: OPTIONAL<DNN>;
    let aMFID: OPTIONAL<AMFID>;
    let hSMFURI: OPTIONAL<HSMFURI>;
    let requestType: OPTIONAL<FiveGSMRequestType>;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let location: OPTIONAL<Location>;
    let ePSPDNUnsuccessfulProcedure: OPTIONAL<EPSPDNUnsuccessfulProcedure>;
    const callbacks: $.DecodingMap = {
        "failedProcedureType": (_el: _Element): void => { failedProcedureType = $._decode_implicit<SMFFailedProcedureType>(() => _decode_SMFFailedProcedureType)(_el); },
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<FiveGSMCause>(() => _decode_FiveGSMCause)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Initiator>(() => _decode_Initiator)(_el); },
        "requestedSlice": (_el: _Element): void => { requestedSlice = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "aMFID": (_el: _Element): void => { aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(_el); },
        "hSMFURI": (_el: _Element): void => { hSMFURI = $._decode_implicit<HSMFURI>(() => _decode_HSMFURI)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "ePSPDNUnsuccessfulProcedure": (_el: _Element): void => { ePSPDNUnsuccessfulProcedure = $._decode_implicit<EPSPDNUnsuccessfulProcedure>(() => _decode_EPSPDNUnsuccessfulProcedure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_SMFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_SMFUnsuccessfulProcedure,
        undefined,
    );
    return new SMFUnsuccessfulProcedure(
        failedProcedureType,
        failureCause,
        initiator,
        requestedSlice,
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        uEEndpoint,
        non3GPPAccessEndpoint,
        dNN,
        aMFID,
        hSMFURI,
        requestType,
        accessType,
        rATType,
        sMPDUDNRequest,
        location,
        ePSPDNUnsuccessfulProcedure
    );
}; }
    return _cached_decoder_for_SMFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_SMFUnsuccessfulProcedure: $.ASN1Encoder<SMFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) SMFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_SMFUnsuccessfulProcedure (value: SMFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFUnsuccessfulProcedure) { _cached_encoder_for_SMFUnsuccessfulProcedure = function (value: SMFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<SMFUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMFFailedProcedureType, $.BER)(value.failedProcedureType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSMCause, $.BER)(value.failureCause, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Initiator, $.BER)(value.initiator, $.BER),
            /* IF_ABSENT  */ ((value.requestedSlice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NSSAI, $.BER)(value.requestedSlice, $.BER)),
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.pDUSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER)),
            /* IF_ABSENT  */ ((value.uEEndpoint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.non3GPPAccessEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 11, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.dNN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_DNN, $.BER)(value.dNN, $.BER)),
            /* IF_ABSENT  */ ((value.aMFID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_AMFID, $.BER)(value.aMFID, $.BER)),
            /* IF_ABSENT  */ ((value.hSMFURI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER)),
            /* IF_ABSENT  */ ((value.requestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER)),
            /* IF_ABSENT  */ ((value.accessType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_AccessType, $.BER)(value.accessType, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.sMPDUDNRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNUnsuccessfulProcedure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_EPSPDNUnsuccessfulProcedure, $.BER)(value.ePSPDNUnsuccessfulProcedure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
