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
import { LocationData, _decode_LocationData, _encode_LocationData } from "../TS33128Payloads/LocationData.ta.mjs";
// export { LocationData, _decode_LocationData, _encode_LocationData } from "../TS33128Payloads/LocationData.ta.mjs";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
import { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
// export { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
import { ESMLCCellInfo, _decode_ESMLCCellInfo, _encode_ESMLCCellInfo } from "../TS33128Payloads/ESMLCCellInfo.ta.mjs";
// export { ESMLCCellInfo, _decode_ESMLCCellInfo, _encode_ESMLCCellInfo } from "../TS33128Payloads/ESMLCCellInfo.ta.mjs";
import { GERANPositioningInfo, _decode_GERANPositioningInfo, _encode_GERANPositioningInfo } from "../TS33128Payloads/GERANPositioningInfo.ta.mjs";
// export { GERANPositioningInfo, _decode_GERANPositioningInfo, _encode_GERANPositioningInfo } from "../TS33128Payloads/GERANPositioningInfo.ta.mjs";
import { UTRANPositioningInfo, _decode_UTRANPositioningInfo, _encode_UTRANPositioningInfo } from "../TS33128Payloads/UTRANPositioningInfo.ta.mjs";
// export { UTRANPositioningInfo, _decode_UTRANPositioningInfo, _encode_UTRANPositioningInfo } from "../TS33128Payloads/UTRANPositioningInfo.ta.mjs";
import { RawMLPResponse, _decode_RawMLPResponse, _encode_RawMLPResponse } from "../TS33128Payloads/RawMLPResponse.ta.mjs";
// export { RawMLPResponse, _decode_RawMLPResponse, _encode_RawMLPResponse } from "../TS33128Payloads/RawMLPResponse.ta.mjs";


/**
 * @summary FourGPositioningInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FourGPositioningInfo ::= SEQUENCE
 * {
 *     locationData              [1] LocationData,
 *     cGI                       [2] CGI OPTIONAL,
 *     sAI                       [3] SAI OPTIONAL,
 *     eSMLCCellInfo             [4] ESMLCCellInfo OPTIONAL,
 *     gERANPositioningInfo      [5] GERANPositioningInfo OPTIONAL,
 *     uTRANPositioningInfo      [6] UTRANPositioningInfo OPTIONAL,
 *     rawMLPResponse            [7] RawMLPResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FourGPositioningInfo {
    constructor (
        /**
         * @summary `locationData`.
         * @public
         * @readonly
         */
        readonly locationData: LocationData,
        /**
         * @summary `cGI`.
         * @public
         * @readonly
         */
        readonly cGI: OPTIONAL<CGI>,
        /**
         * @summary `sAI`.
         * @public
         * @readonly
         */
        readonly sAI: OPTIONAL<SAI>,
        /**
         * @summary `eSMLCCellInfo`.
         * @public
         * @readonly
         */
        readonly eSMLCCellInfo: OPTIONAL<ESMLCCellInfo>,
        /**
         * @summary `gERANPositioningInfo`.
         * @public
         * @readonly
         */
        readonly gERANPositioningInfo: OPTIONAL<GERANPositioningInfo>,
        /**
         * @summary `uTRANPositioningInfo`.
         * @public
         * @readonly
         */
        readonly uTRANPositioningInfo: OPTIONAL<UTRANPositioningInfo>,
        /**
         * @summary `rawMLPResponse`.
         * @public
         * @readonly
         */
        readonly rawMLPResponse: OPTIONAL<RawMLPResponse>
    ) {}

    /**
     * @summary Restructures an object into a FourGPositioningInfo
     * @description
     * 
     * This takes an `object` and converts it to a `FourGPositioningInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FourGPositioningInfo`.
     * @returns {FourGPositioningInfo}
     */
    public static _from_object (_o: { [_K in keyof (FourGPositioningInfo)]: (FourGPositioningInfo)[_K] }): FourGPositioningInfo {
        return new FourGPositioningInfo(_o.locationData, _o.cGI, _o.sAI, _o.eSMLCCellInfo, _o.gERANPositioningInfo, _o.uTRANPositioningInfo, _o.rawMLPResponse);
    }


}

/**
 * @summary The Leading Root Component Types of FourGPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FourGPositioningInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cGI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eSMLCCellInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gERANPositioningInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uTRANPositioningInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rawMLPResponse", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of FourGPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FourGPositioningInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FourGPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FourGPositioningInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FourGPositioningInfo: $.ASN1Decoder<FourGPositioningInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FourGPositioningInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FourGPositioningInfo (el: _Element): FourGPositioningInfo {
    if (!_cached_decoder_for_FourGPositioningInfo) { _cached_decoder_for_FourGPositioningInfo = function (el: _Element): FourGPositioningInfo {
    let locationData!: LocationData;
    let cGI: OPTIONAL<CGI>;
    let sAI: OPTIONAL<SAI>;
    let eSMLCCellInfo: OPTIONAL<ESMLCCellInfo>;
    let gERANPositioningInfo: OPTIONAL<GERANPositioningInfo>;
    let uTRANPositioningInfo: OPTIONAL<UTRANPositioningInfo>;
    let rawMLPResponse: OPTIONAL<RawMLPResponse>;
    const callbacks: $.DecodingMap = {
        "locationData": (_el: _Element): void => { locationData = $._decode_implicit<LocationData>(() => _decode_LocationData)(_el); },
        "cGI": (_el: _Element): void => { cGI = $._decode_implicit<CGI>(() => _decode_CGI)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<SAI>(() => _decode_SAI)(_el); },
        "eSMLCCellInfo": (_el: _Element): void => { eSMLCCellInfo = $._decode_implicit<ESMLCCellInfo>(() => _decode_ESMLCCellInfo)(_el); },
        "gERANPositioningInfo": (_el: _Element): void => { gERANPositioningInfo = $._decode_implicit<GERANPositioningInfo>(() => _decode_GERANPositioningInfo)(_el); },
        "uTRANPositioningInfo": (_el: _Element): void => { uTRANPositioningInfo = $._decode_implicit<UTRANPositioningInfo>(() => _decode_UTRANPositioningInfo)(_el); },
        "rawMLPResponse": (_el: _Element): void => { rawMLPResponse = $._decode_explicit<RawMLPResponse>(() => _decode_RawMLPResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FourGPositioningInfo,
        _extension_additions_list_spec_for_FourGPositioningInfo,
        _root_component_type_list_2_spec_for_FourGPositioningInfo,
        undefined,
    );
    return new FourGPositioningInfo(
        locationData,
        cGI,
        sAI,
        eSMLCCellInfo,
        gERANPositioningInfo,
        uTRANPositioningInfo,
        rawMLPResponse
    );
}; }
    return _cached_decoder_for_FourGPositioningInfo(el);
}

let _cached_encoder_for_FourGPositioningInfo: $.ASN1Encoder<FourGPositioningInfo> | null = null;

/**
 * @summary Encodes a(n) FourGPositioningInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FourGPositioningInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FourGPositioningInfo (value: FourGPositioningInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FourGPositioningInfo) { _cached_encoder_for_FourGPositioningInfo = function (value: FourGPositioningInfo, elGetter: $.ASN1Encoder<FourGPositioningInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocationData, $.BER)(value.locationData, $.BER),
            /* IF_ABSENT  */ ((value.cGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CGI, $.BER)(value.cGI, $.BER)),
            /* IF_ABSENT  */ ((value.sAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SAI, $.BER)(value.sAI, $.BER)),
            /* IF_ABSENT  */ ((value.eSMLCCellInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ESMLCCellInfo, $.BER)(value.eSMLCCellInfo, $.BER)),
            /* IF_ABSENT  */ ((value.gERANPositioningInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GERANPositioningInfo, $.BER)(value.gERANPositioningInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uTRANPositioningInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_UTRANPositioningInfo, $.BER)(value.uTRANPositioningInfo, $.BER)),
            /* IF_ABSENT  */ ((value.rawMLPResponse === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_RawMLPResponse, $.BER)(value.rawMLPResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FourGPositioningInfo(value, elGetter);
}


/* eslint-enable */
