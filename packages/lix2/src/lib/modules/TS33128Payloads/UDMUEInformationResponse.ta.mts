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
import { UEContextInfo, _decode_UEContextInfo, _encode_UEContextInfo } from "../TS33128Payloads/UEContextInfo.ta.mjs";
// export { UEContextInfo, _decode_UEContextInfo, _encode_UEContextInfo } from "../TS33128Payloads/UEContextInfo.ta.mjs";
import { FiveGSUserStateInfo, _decode_FiveGSUserStateInfo, _encode_FiveGSUserStateInfo } from "../TS33128Payloads/FiveGSUserStateInfo.ta.mjs";
// export { FiveGSUserStateInfo, _decode_FiveGSUserStateInfo, _encode_FiveGSUserStateInfo } from "../TS33128Payloads/FiveGSUserStateInfo.ta.mjs";
import { FiveGSRVCCInfo, _decode_FiveGSRVCCInfo, _encode_FiveGSRVCCInfo } from "../TS33128Payloads/FiveGSRVCCInfo.ta.mjs";
// export { FiveGSRVCCInfo, _decode_FiveGSRVCCInfo, _encode_FiveGSRVCCInfo } from "../TS33128Payloads/FiveGSRVCCInfo.ta.mjs";
import { UDMProblemDetails, _decode_UDMProblemDetails, _encode_UDMProblemDetails } from "../TS33128Payloads/UDMProblemDetails.ta.mjs";
// export { UDMProblemDetails, _decode_UDMProblemDetails, _encode_UDMProblemDetails } from "../TS33128Payloads/UDMProblemDetails.ta.mjs";


/**
 * @summary UDMUEInformationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMUEInformationResponse ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     tADSInfo                    [2] UEContextInfo OPTIONAL,
 *     fiveGSUserStateInfo         [3] FiveGSUserStateInfo OPTIONAL,
 *     fiveGSRVCCInfo              [4] FiveGSRVCCInfo OPTIONAL,
 *     problemDetails              [5] UDMProblemDetails OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMUEInformationResponse {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `tADSInfo`.
         * @public
         * @readonly
         */
        readonly tADSInfo: OPTIONAL<UEContextInfo>,
        /**
         * @summary `fiveGSUserStateInfo`.
         * @public
         * @readonly
         */
        readonly fiveGSUserStateInfo: OPTIONAL<FiveGSUserStateInfo>,
        /**
         * @summary `fiveGSRVCCInfo`.
         * @public
         * @readonly
         */
        readonly fiveGSRVCCInfo: OPTIONAL<FiveGSRVCCInfo>,
        /**
         * @summary `problemDetails`.
         * @public
         * @readonly
         */
        readonly problemDetails: OPTIONAL<UDMProblemDetails>
    ) {}

    /**
     * @summary Restructures an object into a UDMUEInformationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `UDMUEInformationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMUEInformationResponse`.
     * @returns {UDMUEInformationResponse}
     */
    public static _from_object (_o: { [_K in keyof (UDMUEInformationResponse)]: (UDMUEInformationResponse)[_K] }): UDMUEInformationResponse {
        return new UDMUEInformationResponse(_o.sUPI, _o.tADSInfo, _o.fiveGSUserStateInfo, _o.fiveGSRVCCInfo, _o.problemDetails);
    }


}

/**
 * @summary The Leading Root Component Types of UDMUEInformationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMUEInformationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tADSInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGSUserStateInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGSRVCCInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("problemDetails", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of UDMUEInformationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMUEInformationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMUEInformationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMUEInformationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMUEInformationResponse: $.ASN1Decoder<UDMUEInformationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMUEInformationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMUEInformationResponse (el: _Element): UDMUEInformationResponse {
    if (!_cached_decoder_for_UDMUEInformationResponse) { _cached_decoder_for_UDMUEInformationResponse = function (el: _Element): UDMUEInformationResponse {
    let sUPI!: SUPI;
    let tADSInfo: OPTIONAL<UEContextInfo>;
    let fiveGSUserStateInfo: OPTIONAL<FiveGSUserStateInfo>;
    let fiveGSRVCCInfo: OPTIONAL<FiveGSRVCCInfo>;
    let problemDetails: OPTIONAL<UDMProblemDetails>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "tADSInfo": (_el: _Element): void => { tADSInfo = $._decode_implicit<UEContextInfo>(() => _decode_UEContextInfo)(_el); },
        "fiveGSUserStateInfo": (_el: _Element): void => { fiveGSUserStateInfo = $._decode_implicit<FiveGSUserStateInfo>(() => _decode_FiveGSUserStateInfo)(_el); },
        "fiveGSRVCCInfo": (_el: _Element): void => { fiveGSRVCCInfo = $._decode_implicit<FiveGSRVCCInfo>(() => _decode_FiveGSRVCCInfo)(_el); },
        "problemDetails": (_el: _Element): void => { problemDetails = $._decode_implicit<UDMProblemDetails>(() => _decode_UDMProblemDetails)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMUEInformationResponse,
        _extension_additions_list_spec_for_UDMUEInformationResponse,
        _root_component_type_list_2_spec_for_UDMUEInformationResponse,
        undefined,
    );
    return new UDMUEInformationResponse(
        sUPI,
        tADSInfo,
        fiveGSUserStateInfo,
        fiveGSRVCCInfo,
        problemDetails
    );
}; }
    return _cached_decoder_for_UDMUEInformationResponse(el);
}

let _cached_encoder_for_UDMUEInformationResponse: $.ASN1Encoder<UDMUEInformationResponse> | null = null;

/**
 * @summary Encodes a(n) UDMUEInformationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMUEInformationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_UDMUEInformationResponse (value: UDMUEInformationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMUEInformationResponse) { _cached_encoder_for_UDMUEInformationResponse = function (value: UDMUEInformationResponse, elGetter: $.ASN1Encoder<UDMUEInformationResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.tADSInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_UEContextInfo, $.BER)(value.tADSInfo, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSUserStateInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_FiveGSUserStateInfo, $.BER)(value.fiveGSUserStateInfo, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSRVCCInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FiveGSRVCCInfo, $.BER)(value.fiveGSRVCCInfo, $.BER)),
            /* IF_ABSENT  */ ((value.problemDetails === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_UDMProblemDetails, $.BER)(value.problemDetails, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMUEInformationResponse(value, elGetter);
}


/* eslint-enable */
