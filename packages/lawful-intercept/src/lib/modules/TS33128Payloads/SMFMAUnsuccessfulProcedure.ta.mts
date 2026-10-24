/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMFFailedProcedureType, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType, _enum_for_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
// export { SMFFailedProcedureType, _enum_for_SMFFailedProcedureType, SMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
import { type FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
// export { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
import { type NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { Initiator, _decode_Initiator, _encode_Initiator, _enum_for_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
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
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
import { type UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { type DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { type HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { type SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
import { type AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary SMFMAUnsuccessfulProcedure
 * @description
 * 
 * 6.2.3.2.7.6 SMF MA unsuccessful procedure
 *
 * The IRI-POI in the SMF shall generate an xIRI containing an
 * SMFMAUnsuccessfulProcedure record when the IRI-POI present in the SMF detects
 * an unsuccessful procedure or error condition for a UE matching one of the
 * target identifiers provided via LI_X1.
 *
 * Accordingly, the IRI-POI in the SMF generates the xIRI when one of the
 * following events are detected:
 *
 * - SMF sends a PDU SESSION ESTABLISHMENT REJECT message to the target UE for
 *   MA-Confirmed and MA-Upgrade-Allowed MA PDU sessions.
 *
 * - SMF sends a PDU SESSION MODIFICATION REJECT message to the target UE for
 *   MA-Confirmed and MA-Upgrade-Allowed MA PDU sessions.
 *
 * - SMF sends a PDU SESSION RELEASE REJECT message to the target UE for
 *   MA-Confirmed and MA-Upgrade-Allowed MA PDU sessions.
 *
 * - SMF receives a PDU SESSION MODIFICATION COMMAND REJECT message from the
 *   target UE for MA-Confirmed and MA-Upgrade-Allowed MA PDU sessions.
 *
 * - An ongoing SM procedure is aborted at the SMF, due to e.g. a 5GSM STATUS
 *   message sent from or received by the SMF for MA-Confirmed and
 *   MA-Upgrade-Allowed MA PDU sessions.
 *
 * NOTE: At least one identity shall be provided, the others shall be provided
 * if available.
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.7.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failedProcedureType         [1] SMFFailedProcedureType,
 *     failureCause                [2] FiveGSMCause,
 *     requestedSlice              [3] NSSAI OPTIONAL,
 *     initiator                   [4] Initiator,
 *     sUPI                        [5] SUPI OPTIONAL,
 *     sUPIUnauthenticated         [6] SUPIUnauthenticatedIndication OPTIONAL,
 *     pEI                         [7] PEI OPTIONAL,
 *     gPSI                        [8] GPSI OPTIONAL,
 *     pDUSessionID                [9] PDUSessionID OPTIONAL,
 *     accessInfo                  [10] SEQUENCE OF AccessInfo,
 *     uEEndpoint                  [11] SEQUENCE OF UEEndpointAddress OPTIONAL,
 *     location                    [12] Location OPTIONAL,
 *     dNN                         [13] DNN OPTIONAL,
 *     aMFID                       [14] AMFID OPTIONAL,
 *     hSMFURI                     [15] HSMFURI OPTIONAL,
 *     requestType                 [16] FiveGSMRequestType OPTIONAL,
 *     sMPDUDNRequest              [17] SMPDUDNRequest OPTIONAL,
 *     alternativeNSSAI            [18] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAUnsuccessfulProcedure {
    /**
     * @summary `failedProcedureType`.
     * @description
     *
     * Specifies the procedure which failed or is aborted at the SMF.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly failureCause: FiveGSMCause;
    /**
     * @summary `requestedSlice`.
     * @description
     *
     * Slice requested for the procedure, if available, given as a NSSAI (a list
     * of S-NSSAI values as described in TS 24.501 [13] clause 9.11.3.37).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly requestedSlice: OPTIONAL<NSSAI>;
    /**
     * @summary `initiator`.
     * @description
     *
     * Specifies whether the network (SMF) or the UE is initiating the rejection
     * or indicating the failure.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly initiator: Initiator;
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the procedure, if available (see NOTE). NOTE: At
     * least one identity shall be provided, the others shall be provided if
     * available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID, see TS 24.501 [13] clause 9.4, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: OPTIONAL<PDUSessionID>;
    /**
     * @summary `accessInfo`.
     * @description
     *
     * Identifies the access(es) associated with the PDU session including the
     * information for each specific access (see table 6.2.3.2.7.2-2).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly accessInfo: AccessInfo[];
    /**
     * @summary `uEEndpoint`.
     * @description
     *
     * UE endpoint address(es) if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information provided by the AMF or present in the context at the
     * SMF, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `dNN`.
     * @description
     *
     * Data Network Name associated with the target traffic, as defined in TS
     * 23.003 [19] clause 9A and described in TS 23.501 [2] clause 4.3.2.2, if
     * available. Shall be given in dotted-label presentation format as
     * described in TS 23.003 [19] clause 9.1.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
     * ESTABLISHMENT or if there hasn't been one reported it should be set to
     * "MA PDU request". PDU SESSION MODIFICATION REJECT: "modification
     * request". PDU SESSION RELEASE REJECT: no request type shall be set. PDU
     * SESSION MODIFICATION COMMAND REJECT: "modification request".
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly requestType: OPTIONAL<FiveGSMRequestType>;
    /**
     * @summary `sMPDUDNRequest`.
     * @description
     *
     * Contents of the SM PDU DN Request container, if available, as described
     * in TS 24.501 [13] clause 9.11.4.15.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
     *
     * @public
     * @readonly
     */
    readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI, if available. See TS 24.501 [13] clause
     * 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.7.6.
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
        requestedSlice: OPTIONAL<NSSAI>,
        initiator: Initiator,
        sUPI: OPTIONAL<SUPI>,
        sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        pDUSessionID: OPTIONAL<PDUSessionID>,
        accessInfo: AccessInfo[],
        uEEndpoint?: OPTIONAL<UEEndpointAddress[]>,
        location?: OPTIONAL<Location>,
        dNN?: OPTIONAL<DNN>,
        aMFID?: OPTIONAL<AMFID>,
        hSMFURI?: OPTIONAL<HSMFURI>,
        requestType?: OPTIONAL<FiveGSMRequestType>,
        sMPDUDNRequest?: OPTIONAL<SMPDUDNRequest>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.failedProcedureType = failedProcedureType;
        this.failureCause = failureCause;
        this.requestedSlice = requestedSlice;
        this.initiator = initiator;
        this.sUPI = sUPI;
        this.sUPIUnauthenticated = sUPIUnauthenticated;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.accessInfo = accessInfo;
        this.uEEndpoint = uEEndpoint;
        this.location = location;
        this.dNN = dNN;
        this.aMFID = aMFID;
        this.hSMFURI = hSMFURI;
        this.requestType = requestType;
        this.sMPDUDNRequest = sMPDUDNRequest;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMFMAUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `SMFMAUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFMAUnsuccessfulProcedure`.
     * @returns {SMFMAUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (SMFMAUnsuccessfulProcedure)]: (SMFMAUnsuccessfulProcedure)[_K] }): SMFMAUnsuccessfulProcedure {
        return new SMFMAUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.requestedSlice, _o.initiator, _o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.accessInfo, _o.uEEndpoint, _o.location, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.sMPDUDNRequest, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
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

    public static _enum_for_requestType = _enum_for_FiveGSMRequestType;
}

/**
 * @summary The Leading Root Component Types of SMFMAUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFMAUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failedProcedureType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("requestedSlice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sUPIUnauthenticated", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pDUSessionID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("accessInfo", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("uEEndpoint", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("dNN", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("aMFID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("hSMFURI", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("requestType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of SMFMAUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFMAUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFMAUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFMAUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFMAUnsuccessfulProcedure: $.ASN1Decoder<SMFMAUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAUnsuccessfulProcedure (el: _Element): SMFMAUnsuccessfulProcedure {
    if (!_cached_decoder_for_SMFMAUnsuccessfulProcedure) { _cached_decoder_for_SMFMAUnsuccessfulProcedure = function (el: _Element): SMFMAUnsuccessfulProcedure {
    let failedProcedureType!: SMFFailedProcedureType;
    let failureCause!: FiveGSMCause;
    let requestedSlice: OPTIONAL<NSSAI>;
    let initiator!: Initiator;
    let sUPI: OPTIONAL<SUPI>;
    let sUPIUnauthenticated: OPTIONAL<SUPIUnauthenticatedIndication>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID: OPTIONAL<PDUSessionID>;
    let accessInfo!: AccessInfo[];
    let uEEndpoint: OPTIONAL<UEEndpointAddress[]>;
    let location: OPTIONAL<Location>;
    let dNN: OPTIONAL<DNN>;
    let aMFID: OPTIONAL<AMFID>;
    let hSMFURI: OPTIONAL<HSMFURI>;
    let requestType: OPTIONAL<FiveGSMRequestType>;
    let sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>;
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failedProcedureType": (_el: _Element): void => { failedProcedureType = $._decode_implicit<SMFFailedProcedureType>(() => _decode_SMFFailedProcedureType)(_el); },
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<FiveGSMCause>(() => _decode_FiveGSMCause)(_el); },
        "requestedSlice": (_el: _Element): void => { requestedSlice = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Initiator>(() => _decode_Initiator)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUPIUnauthenticated": (_el: _Element): void => { sUPIUnauthenticated = $._decode_implicit<SUPIUnauthenticatedIndication>(() => _decode_SUPIUnauthenticatedIndication)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<AccessInfo[]>(() => $._decodeSequenceOf<AccessInfo>(() => _decode_AccessInfo))(_el); },
        "uEEndpoint": (_el: _Element): void => { uEEndpoint = $._decode_implicit<UEEndpointAddress[]>(() => $._decodeSequenceOf<UEEndpointAddress>(() => _decode_UEEndpointAddress))(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "aMFID": (_el: _Element): void => { aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(_el); },
        "hSMFURI": (_el: _Element): void => { hSMFURI = $._decode_implicit<HSMFURI>(() => _decode_HSMFURI)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAUnsuccessfulProcedure,
        _extension_additions_list_spec_for_SMFMAUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_SMFMAUnsuccessfulProcedure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMFMAUnsuccessfulProcedure(
        failedProcedureType,
        failureCause,
        requestedSlice,
        initiator,
        sUPI,
        sUPIUnauthenticated,
        pEI,
        gPSI,
        pDUSessionID,
        accessInfo,
        uEEndpoint,
        location,
        dNN,
        aMFID,
        hSMFURI,
        requestType,
        sMPDUDNRequest,
        alternativeNSSAI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMFMAUnsuccessfulProcedure(el);
}

let _cached_encoder_for_SMFMAUnsuccessfulProcedure: $.ASN1Encoder<SMFMAUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) SMFMAUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAUnsuccessfulProcedure (value: SMFMAUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAUnsuccessfulProcedure) { _cached_encoder_for_SMFMAUnsuccessfulProcedure = function (value: SMFMAUnsuccessfulProcedure, elGetter: $.ASN1Encoder<SMFMAUnsuccessfulProcedure>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(18 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMFFailedProcedureType, $.BER)(value.failedProcedureType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSMCause, $.BER)(value.failureCause, $.BER);
    if (value.requestedSlice !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NSSAI, $.BER)(value.requestedSlice, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Initiator, $.BER)(value.initiator, $.BER);
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
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<AccessInfo>(() => _encode_AccessInfo, $.BER), $.BER)(value.accessInfo, $.BER);
    if (value.uEEndpoint !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.dNN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    }
    if (value.aMFID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_AMFID, $.BER)(value.aMFID, $.BER);
    }
    if (value.hSMFURI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER);
    }
    if (value.requestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER);
    }
    if (value.sMPDUDNRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFMAUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
