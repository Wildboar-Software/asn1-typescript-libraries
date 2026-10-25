/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMFFailedProcedureType, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType, _enum_for_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
// export { SMFFailedProcedureType, _enum_for_SMFFailedProcedureType, SMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
import { type FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
// export { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
import { Initiator, _decode_Initiator, _encode_Initiator, _enum_for_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
import { type NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { type SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
// export { SUPIUnauthenticatedIndication, _decode_SUPIUnauthenticatedIndication, _encode_SUPIUnauthenticatedIndication } from "../TS33128Payloads/SUPIUnauthenticatedIndication.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { type PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { type UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { type DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { type HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { type SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EPSPDNUnsuccessfulProcedure, _decode_EPSPDNUnsuccessfulProcedure, _encode_EPSPDNUnsuccessfulProcedure } from "../TS33128Payloads/EPSPDNUnsuccessfulProcedure.ta.mjs";
// export { EPSPDNUnsuccessfulProcedure, _decode_EPSPDNUnsuccessfulProcedure, _encode_EPSPDNUnsuccessfulProcedure } from "../TS33128Payloads/EPSPDNUnsuccessfulProcedure.ta.mjs";
import { type AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary SMFUnsuccessfulProcedure
 * @description
 * 
 * The IRI-POI in the SMF shall generate an xIRI containing an
 * SMFUnsuccessfulProcedure record when the IRI-POI present in the SMF detects
 * an unsuccessful procedure or error condition for a UE matching one of the
 * target identifiers provided via LI_X1.
 *
 * Accordingly, the IRI-POI in the SMF generates the xIRI when one of the
 * following events are detected:
 *
 * - SMF sends a PDU SESSION ESTABLISHMENT REJECT message to the target UE.
 *
 * - SMF sends a PDU SESSION MODIFICATION REJECT message to the target UE.
 *
 * - SMF sends a PDU SESSION RELEASE REJECT message to the target UE.
 *
 * - SMF receives a PDU SESSION MODIFICATION COMMAND REJECT message from the
 *   target UE.
 *
 * - An ongoing SM procedure is aborted at the SMF, due to e.g. a 5GSM STATUS
 *   message sent from or received by the SMF.
 *
 * NOTE: At least one identity shall be provided, the others shall be provided
 * if available.
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 *     ePSPDNUnsuccessfulProcedure [20] EPSPDNUnsuccessfulProcedure OPTIONAL,
 *     alternativeNSSAI            [21] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFUnsuccessfulProcedure {
    /**
     * @summary `failedProcedureType`.
     * @description
     *
     * Specifies the procedure which failed or is aborted at the SMF.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly failedProcedureType: SMFFailedProcedureType;
    /**
     * @summary `failureCause`.
     * @description
     *
     * Provides the value of the 5GSM cause, see TS 24.501 [13] clause 9.11.4.2.
     * In case the procedure is aborted due to a 5GSM STATUS message, the 5GSM
     * cause is the one included in the 5GSM status message.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly failureCause: FiveGSMCause;
    /**
     * @summary `initiator`.
     * @description
     *
     * Specifies whether the network (SMF) or the UE is initiating the rejection
     * or indicating the failure.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly initiator: Initiator;
    /**
     * @summary `requestedSlice`.
     * @description
     *
     * Slice requested for the procedure, if available, given as a NSSAI (a list
     * of S-NSSAI values as described in TS 24.501 [13] clause 9.11.3.37).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly requestedSlice: OPTIONAL<NSSAI>;
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the procedure, if available (see NOTE). NOTE: At
     * least one identity shall be provided, the others shall be provided if
     * available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `sUPIUnauthenticated`.
     * @description
     *
     * Shall be present if a SUPI is present in the message and set to "true" if
     * the SUPI has not been authenticated, or "false" if it has been
     * authenticated.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI used in the procedure, if available (see NOTE). NOTE: At least one
     * identity shall be provided, the others shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI used in the procedure, if available (see NOTE). NOTE: At least one
     * identity shall be provided, the others shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID See clause 9.4 of TS 24.501 [13], if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: OPTIONAL<PDUSessionID>;
    /**
     * @summary `uEEndpoint`.
     * @description
     *
     * UE endpoint address(es) if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    /**
     * @summary `non3GPPAccessEndpoint`.
     * @description
     *
     * UE's local IP address used to reach the N3IWF, TNGF or TWIF, if
     * available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    /**
     * @summary `dNN`.
     * @description
     *
     * Data Network Name associated with the target traffic, as defined in TS
     * 23.003 [19] clause 9A and described in TS 23.501 [2] clause 4.3.2.2, if
     * available. Shall be given in dotted-label presentation format as
     * described in TS 23.003 [19] clause 9.1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly dNN: OPTIONAL<DNN>;
    /**
     * @summary `aMFID`.
     * @description
     *
     * Identifier of the AMF associated with the target UE, as defined in TS
     * 23.003 [19] clause 2.10.1 when available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly aMFID: OPTIONAL<AMFID>;
    /**
     * @summary `hSMFURI`.
     * @description
     *
     * URI of the Nsmf_PDUSession service of the selected H-SMF, if available.
     * See TS 29.502 [16] clause 6.1.6.2.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly hSMFURI: OPTIONAL<HSMFURI>;
    /**
     * @summary `requestType`.
     * @description
     *
     * Type of request as described in TS 24.501 [13] clause 9.11.3.47, if
     * available. Otherwise depending on the REJECT event the following request
     * type shall be reported: PDU SESSION ESTABLISHMENT REJECT: The request
     * type shall be set to the one reported within the PDU SESSION
     * ESTABLISHMENT or if there hasn't been one reported or is no longer
     * available it should be set to "initial request". PDU SESSION MODIFICATION
     * REJECT: "modification request". PDU SESSION RELEASE REJECT: no request
     * type shall be set. PDU SESSION MODIFICATION COMMAND REJECT: "modification
     * request".
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly requestType: OPTIONAL<FiveGSMRequestType>;
    /**
     * @summary `accessType`.
     * @description
     *
     * Access type associated with the session (i.e. 3GPP or non-3GPP access) if
     * provided by the AMF (see TS 24.501 [13] clause 9.11.2.1A).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly accessType: OPTIONAL<AccessType>;
    /**
     * @summary `rATType`.
     * @description
     *
     * RAT Type associated with the access if provided by the AMF as part of
     * session establishment (see TS 23.502 [4] clause 4.3.2). Values given as
     * per TS 29.571 [17] clause 5.4.3.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<RATType>;
    /**
     * @summary `sMPDUDNRequest`.
     * @description
     *
     * Contents of the SM PDU DN Request container, if available, as described
     * in TS 24.501 [13] clause 9.11.4.15.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information provided by the AMF or present in the context at the
     * SMF, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `ePSPDNUnsuccessfulProcedure`.
     * @description
     *
     * Provides details about unsuccessful EPS procedures. Shall be present when
     * the SMFUnsuccessfulProcedure xIRI message is used to report EPS PDN
     * unsuccessful procedure. See table 6.3.3.2.10-1 and clause 6.3.3.2.10.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly ePSPDNUnsuccessfulProcedure: OPTIONAL<EPSPDNUnsuccessfulProcedure>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI, if available. See TS 24.501 [13] clause
     * 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        failedProcedureType: SMFFailedProcedureType,
        failureCause: FiveGSMCause,
        initiator: Initiator,
        requestedSlice?: OPTIONAL<NSSAI>,
        sUPI?: OPTIONAL<SUPI>,
        sUPIUnauthenticated?: OPTIONAL<SUPIUnauthenticatedIndication>,
        pEI?: OPTIONAL<PEI>,
        gPSI?: OPTIONAL<GPSI>,
        pDUSessionID?: OPTIONAL<PDUSessionID>,
        uEEndpoint?: OPTIONAL<UEEndpointAddress[]>,
        non3GPPAccessEndpoint?: OPTIONAL<UEEndpointAddress>,
        dNN?: OPTIONAL<DNN>,
        aMFID?: OPTIONAL<AMFID>,
        hSMFURI?: OPTIONAL<HSMFURI>,
        requestType?: OPTIONAL<FiveGSMRequestType>,
        accessType?: OPTIONAL<AccessType>,
        rATType?: OPTIONAL<RATType>,
        sMPDUDNRequest?: OPTIONAL<SMPDUDNRequest>,
        location?: OPTIONAL<Location>,
        ePSPDNUnsuccessfulProcedure?: OPTIONAL<EPSPDNUnsuccessfulProcedure>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.failedProcedureType = failedProcedureType;
        this.failureCause = failureCause;
        this.initiator = initiator;
        this.requestedSlice = requestedSlice;
        this.sUPI = sUPI;
        this.sUPIUnauthenticated = sUPIUnauthenticated;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.uEEndpoint = uEEndpoint;
        this.non3GPPAccessEndpoint = non3GPPAccessEndpoint;
        this.dNN = dNN;
        this.aMFID = aMFID;
        this.hSMFURI = hSMFURI;
        this.requestType = requestType;
        this.accessType = accessType;
        this.rATType = rATType;
        this.sMPDUDNRequest = sMPDUDNRequest;
        this.location = location;
        this.ePSPDNUnsuccessfulProcedure = ePSPDNUnsuccessfulProcedure;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new SMFUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.initiator, _o.requestedSlice, _o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.uEEndpoint, _o.non3GPPAccessEndpoint, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.accessType, _o.rATType, _o.sMPDUDNRequest, _o.location, _o.ePSPDNUnsuccessfulProcedure, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("ePSPDNUnsuccessfulProcedure", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 21))
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
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
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
        "ePSPDNUnsuccessfulProcedure": (_el: _Element): void => { ePSPDNUnsuccessfulProcedure = $._decode_implicit<EPSPDNUnsuccessfulProcedure>(() => _decode_EPSPDNUnsuccessfulProcedure)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_SMFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_SMFUnsuccessfulProcedure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
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
        ePSPDNUnsuccessfulProcedure,
        alternativeNSSAI,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(21 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMFFailedProcedureType, $.BER)(value.failedProcedureType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSMCause, $.BER)(value.failureCause, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Initiator, $.BER)(value.initiator, $.BER);
    if (value.requestedSlice !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_NSSAI, $.BER)(value.requestedSlice, $.BER);
    }
    if (value.sUPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    }
    if (value.sUPIUnauthenticated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.pDUSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    }
    if (value.uEEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER);
    }
    if (value.non3GPPAccessEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER);
    }
    if (value.dNN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    }
    if (value.aMFID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_AMFID, $.BER)(value.aMFID, $.BER);
    }
    if (value.hSMFURI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER);
    }
    if (value.requestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER);
    }
    if (value.accessType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_AccessType, $.BER)(value.accessType, $.BER);
    }
    if (value.rATType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_RATType, $.BER)(value.rATType, $.BER);
    }
    if (value.sMPDUDNRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.ePSPDNUnsuccessfulProcedure !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_EPSPDNUnsuccessfulProcedure, $.BER)(value.ePSPDNUnsuccessfulProcedure, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
