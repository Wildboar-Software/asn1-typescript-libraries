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
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { UDMLocationInfoRequest, _decode_UDMLocationInfoRequest, _encode_UDMLocationInfoRequest } from "../TS33128Payloads/UDMLocationInfoRequest.ta.mjs";
// export { UDMLocationInfoRequest, _decode_UDMLocationInfoRequest, _encode_UDMLocationInfoRequest } from "../TS33128Payloads/UDMLocationInfoRequest.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";
// export { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { UDMProblemDetails, _decode_UDMProblemDetails, _encode_UDMProblemDetails } from "../TS33128Payloads/UDMProblemDetails.ta.mjs";
// export { UDMProblemDetails, _decode_UDMProblemDetails, _encode_UDMProblemDetails } from "../TS33128Payloads/UDMProblemDetails.ta.mjs";


/**
 * @summary UDMLocationInformationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMLocationInformationResult ::= SEQUENCE
 * {
 *     sUPI                     [1] SUPI,
 *     pEI                      [2] PEI OPTIONAL,
 *     gPSI                     [3] GPSI OPTIONAL,
 *     locationInfoRequest      [4] UDMLocationInfoRequest,
 *     vPLMNID                  [5] PLMNID OPTIONAL,
 *     currentLocationIndicator [6] BOOLEAN OPTIONAL,
 *     aMFInstanceID            [7] NFID OPTIONAL,
 *     sMSFInstanceID           [8] NFID OPTIONAL,
 *     location                 [9] Location OPTIONAL,
 *     rATType                  [10] RATType OPTIONAL,
 *     problemDetails           [11] UDMProblemDetails OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMLocationInformationResult {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
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
         * @summary `locationInfoRequest`.
         * @public
         * @readonly
         */
        readonly locationInfoRequest: UDMLocationInfoRequest,
        /**
         * @summary `vPLMNID`.
         * @public
         * @readonly
         */
        readonly vPLMNID: OPTIONAL<PLMNID>,
        /**
         * @summary `currentLocationIndicator`.
         * @public
         * @readonly
         */
        readonly currentLocationIndicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `aMFInstanceID`.
         * @public
         * @readonly
         */
        readonly aMFInstanceID: OPTIONAL<NFID>,
        /**
         * @summary `sMSFInstanceID`.
         * @public
         * @readonly
         */
        readonly sMSFInstanceID: OPTIONAL<NFID>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `problemDetails`.
         * @public
         * @readonly
         */
        readonly problemDetails: OPTIONAL<UDMProblemDetails>
    ) {}

    /**
     * @summary Restructures an object into a UDMLocationInformationResult
     * @description
     * 
     * This takes an `object` and converts it to a `UDMLocationInformationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMLocationInformationResult`.
     * @returns {UDMLocationInformationResult}
     */
    public static _from_object (_o: { [_K in keyof (UDMLocationInformationResult)]: (UDMLocationInformationResult)[_K] }): UDMLocationInformationResult {
        return new UDMLocationInformationResult(_o.sUPI, _o.pEI, _o.gPSI, _o.locationInfoRequest, _o.vPLMNID, _o.currentLocationIndicator, _o.aMFInstanceID, _o.sMSFInstanceID, _o.location, _o.rATType, _o.problemDetails);
    }

        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of UDMLocationInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMLocationInformationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("locationInfoRequest", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("vPLMNID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("currentLocationIndicator", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aMFInstanceID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sMSFInstanceID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("problemDetails", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of UDMLocationInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMLocationInformationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMLocationInformationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMLocationInformationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMLocationInformationResult: $.ASN1Decoder<UDMLocationInformationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMLocationInformationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMLocationInformationResult (el: _Element): UDMLocationInformationResult {
    if (!_cached_decoder_for_UDMLocationInformationResult) { _cached_decoder_for_UDMLocationInformationResult = function (el: _Element): UDMLocationInformationResult {
    let sUPI!: SUPI;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let locationInfoRequest!: UDMLocationInfoRequest;
    let vPLMNID: OPTIONAL<PLMNID>;
    let currentLocationIndicator: OPTIONAL<BOOLEAN>;
    let aMFInstanceID: OPTIONAL<NFID>;
    let sMSFInstanceID: OPTIONAL<NFID>;
    let location: OPTIONAL<Location>;
    let rATType: OPTIONAL<RATType>;
    let problemDetails: OPTIONAL<UDMProblemDetails>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "locationInfoRequest": (_el: _Element): void => { locationInfoRequest = $._decode_implicit<UDMLocationInfoRequest>(() => _decode_UDMLocationInfoRequest)(_el); },
        "vPLMNID": (_el: _Element): void => { vPLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "currentLocationIndicator": (_el: _Element): void => { currentLocationIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "aMFInstanceID": (_el: _Element): void => { aMFInstanceID = $._decode_implicit<NFID>(() => _decode_NFID)(_el); },
        "sMSFInstanceID": (_el: _Element): void => { sMSFInstanceID = $._decode_implicit<NFID>(() => _decode_NFID)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "problemDetails": (_el: _Element): void => { problemDetails = $._decode_implicit<UDMProblemDetails>(() => _decode_UDMProblemDetails)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMLocationInformationResult,
        _extension_additions_list_spec_for_UDMLocationInformationResult,
        _root_component_type_list_2_spec_for_UDMLocationInformationResult,
        undefined,
    );
    return new UDMLocationInformationResult(
        sUPI,
        pEI,
        gPSI,
        locationInfoRequest,
        vPLMNID,
        currentLocationIndicator,
        aMFInstanceID,
        sMSFInstanceID,
        location,
        rATType,
        problemDetails
    );
}; }
    return _cached_decoder_for_UDMLocationInformationResult(el);
}

let _cached_encoder_for_UDMLocationInformationResult: $.ASN1Encoder<UDMLocationInformationResult> | null = null;

/**
 * @summary Encodes a(n) UDMLocationInformationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMLocationInformationResult, encoded as an ASN.1 Element.
 */
export
function _encode_UDMLocationInformationResult (value: UDMLocationInformationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMLocationInformationResult) { _cached_encoder_for_UDMLocationInformationResult = function (value: UDMLocationInformationResult, elGetter: $.ASN1Encoder<UDMLocationInformationResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_UDMLocationInfoRequest, $.BER)(value.locationInfoRequest, $.BER),
            /* IF_ABSENT  */ ((value.vPLMNID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PLMNID, $.BER)(value.vPLMNID, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.currentLocationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.aMFInstanceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_NFID, $.BER)(value.aMFInstanceID, $.BER)),
            /* IF_ABSENT  */ ((value.sMSFInstanceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_NFID, $.BER)(value.sMSFInstanceID, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.problemDetails === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_UDMProblemDetails, $.BER)(value.problemDetails, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMLocationInformationResult(value, elGetter);
}


/* eslint-enable */
