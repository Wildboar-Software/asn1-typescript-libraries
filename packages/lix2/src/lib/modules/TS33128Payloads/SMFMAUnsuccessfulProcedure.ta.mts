/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMFFailedProcedureType, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType, _enum_for_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
// export { SMFFailedProcedureType, _enum_for_SMFFailedProcedureType, SMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMFFailedProcedureType_pDUSessionRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMFFailedProcedureType, _encode_SMFFailedProcedureType } from "../TS33128Payloads/SMFFailedProcedureType.ta.mjs";
import { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
// export { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { Initiator, _decode_Initiator, _encode_Initiator, _enum_for_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
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
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../TS33128Payloads/AccessInfo.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
// export { HSMFURI, _decode_HSMFURI, _encode_HSMFURI } from "../TS33128Payloads/HSMFURI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";
// export { SMPDUDNRequest, _decode_SMPDUDNRequest, _encode_SMPDUDNRequest } from "../TS33128Payloads/SMPDUDNRequest.ta.mjs";


/**
 * @summary SMFMAUnsuccessfulProcedure
 * @description
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
 *     sMPDUDNRequest              [17] SMPDUDNRequest OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAUnsuccessfulProcedure {
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
         * @summary `requestedSlice`.
         * @public
         * @readonly
         */
        readonly requestedSlice: OPTIONAL<NSSAI>,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: Initiator,
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
         * @summary `accessInfo`.
         * @public
         * @readonly
         */
        readonly accessInfo: AccessInfo[],
        /**
         * @summary `uEEndpoint`.
         * @public
         * @readonly
         */
        readonly uEEndpoint: OPTIONAL<UEEndpointAddress[]>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
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
         * @summary `sMPDUDNRequest`.
         * @public
         * @readonly
         */
        readonly sMPDUDNRequest: OPTIONAL<SMPDUDNRequest>
    ) {}

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
        return new SMFMAUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.requestedSlice, _o.initiator, _o.sUPI, _o.sUPIUnauthenticated, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.accessInfo, _o.uEEndpoint, _o.location, _o.dNN, _o.aMFID, _o.hSMFURI, _o.requestType, _o.sMPDUDNRequest);
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
    new $.ComponentSpec("sMPDUDNRequest", true, $.hasTag(_TagClass.context, 17))
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
        "sMPDUDNRequest": (_el: _Element): void => { sMPDUDNRequest = $._decode_implicit<SMPDUDNRequest>(() => _decode_SMPDUDNRequest)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAUnsuccessfulProcedure,
        _extension_additions_list_spec_for_SMFMAUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_SMFMAUnsuccessfulProcedure,
        undefined,
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
        sMPDUDNRequest
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMFFailedProcedureType, $.BER)(value.failedProcedureType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSMCause, $.BER)(value.failureCause, $.BER),
            /* IF_ABSENT  */ ((value.requestedSlice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NSSAI, $.BER)(value.requestedSlice, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Initiator, $.BER)(value.initiator, $.BER),
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SUPIUnauthenticatedIndication, $.BER)(value.sUPIUnauthenticated, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.pDUSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<AccessInfo>(() => _encode_AccessInfo, $.BER), $.BER)(value.accessInfo, $.BER),
            /* IF_ABSENT  */ ((value.uEEndpoint === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<UEEndpointAddress>(() => _encode_UEEndpointAddress, $.BER), $.BER)(value.uEEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.dNN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_DNN, $.BER)(value.dNN, $.BER)),
            /* IF_ABSENT  */ ((value.aMFID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_AMFID, $.BER)(value.aMFID, $.BER)),
            /* IF_ABSENT  */ ((value.hSMFURI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_HSMFURI, $.BER)(value.hSMFURI, $.BER)),
            /* IF_ABSENT  */ ((value.requestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_FiveGSMRequestType, $.BER)(value.requestType, $.BER)),
            /* IF_ABSENT  */ ((value.sMPDUDNRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SMPDUDNRequest, $.BER)(value.sMPDUDNRequest, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFMAUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
