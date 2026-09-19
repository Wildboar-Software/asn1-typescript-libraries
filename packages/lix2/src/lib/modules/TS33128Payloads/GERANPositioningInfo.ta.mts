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
import { GERANPositioningData, _decode_GERANPositioningData, _encode_GERANPositioningData } from "../TS33128Payloads/GERANPositioningData.ta.mjs";
// export { GERANPositioningData, _decode_GERANPositioningData, _encode_GERANPositioningData } from "../TS33128Payloads/GERANPositioningData.ta.mjs";
import { GERANGANSSPositioningData, _decode_GERANGANSSPositioningData, _encode_GERANGANSSPositioningData } from "../TS33128Payloads/GERANGANSSPositioningData.ta.mjs";
// export { GERANGANSSPositioningData, _decode_GERANGANSSPositioningData, _encode_GERANGANSSPositioningData } from "../TS33128Payloads/GERANGANSSPositioningData.ta.mjs";


/**
 * @summary GERANPositioningInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANPositioningInfo ::= SEQUENCE
 * {
 *     gERANPositioningData      [1] GERANPositioningData OPTIONAL,
 *     gERANGANSSPositioningData [2] GERANGANSSPositioningData OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GERANPositioningInfo {
    constructor (
        /**
         * @summary `gERANPositioningData`.
         * @public
         * @readonly
         */
        readonly gERANPositioningData: OPTIONAL<GERANPositioningData>,
        /**
         * @summary `gERANGANSSPositioningData`.
         * @public
         * @readonly
         */
        readonly gERANGANSSPositioningData: OPTIONAL<GERANGANSSPositioningData>
    ) {}

    /**
     * @summary Restructures an object into a GERANPositioningInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GERANPositioningInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GERANPositioningInfo`.
     * @returns {GERANPositioningInfo}
     */
    public static _from_object (_o: { [_K in keyof (GERANPositioningInfo)]: (GERANPositioningInfo)[_K] }): GERANPositioningInfo {
        return new GERANPositioningInfo(_o.gERANPositioningData, _o.gERANGANSSPositioningData);
    }


}

/**
 * @summary The Leading Root Component Types of GERANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GERANPositioningInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("gERANPositioningData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gERANGANSSPositioningData", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GERANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GERANPositioningInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GERANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GERANPositioningInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GERANPositioningInfo: $.ASN1Decoder<GERANPositioningInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GERANPositioningInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GERANPositioningInfo (el: _Element): GERANPositioningInfo {
    if (!_cached_decoder_for_GERANPositioningInfo) { _cached_decoder_for_GERANPositioningInfo = function (el: _Element): GERANPositioningInfo {
    let gERANPositioningData: OPTIONAL<GERANPositioningData>;
    let gERANGANSSPositioningData: OPTIONAL<GERANGANSSPositioningData>;
    const callbacks: $.DecodingMap = {
        "gERANPositioningData": (_el: _Element): void => { gERANPositioningData = $._decode_implicit<GERANPositioningData>(() => _decode_GERANPositioningData)(_el); },
        "gERANGANSSPositioningData": (_el: _Element): void => { gERANGANSSPositioningData = $._decode_implicit<GERANGANSSPositioningData>(() => _decode_GERANGANSSPositioningData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GERANPositioningInfo,
        _extension_additions_list_spec_for_GERANPositioningInfo,
        _root_component_type_list_2_spec_for_GERANPositioningInfo,
        undefined,
    );
    return new GERANPositioningInfo(
        gERANPositioningData,
        gERANGANSSPositioningData
    );
}; }
    return _cached_decoder_for_GERANPositioningInfo(el);
}

let _cached_encoder_for_GERANPositioningInfo: $.ASN1Encoder<GERANPositioningInfo> | null = null;

/**
 * @summary Encodes a(n) GERANPositioningInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERANPositioningInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GERANPositioningInfo (value: GERANPositioningInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GERANPositioningInfo) { _cached_encoder_for_GERANPositioningInfo = function (value: GERANPositioningInfo, elGetter: $.ASN1Encoder<GERANPositioningInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gERANPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GERANPositioningData, $.BER)(value.gERANPositioningData, $.BER)),
            /* IF_ABSENT  */ ((value.gERANGANSSPositioningData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GERANGANSSPositioningData, $.BER)(value.gERANGANSSPositioningData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GERANPositioningInfo(value, elGetter);
}


/* eslint-enable */
