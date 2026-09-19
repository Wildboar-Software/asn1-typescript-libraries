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
import { LogotypeImageType, LogotypeImageType_grayScale /* IMPORTED_LONG_NAMED_INTEGER */, grayScale /* IMPORTED_SHORT_NAMED_INTEGER */, LogotypeImageType_color /* IMPORTED_LONG_NAMED_INTEGER */, color /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LogotypeImageType, _encode_LogotypeImageType } from "../LogotypeCertExtn/LogotypeImageType.ta.mjs";
// export { LogotypeImageType, LogotypeImageType_grayScale /* IMPORTED_LONG_NAMED_INTEGER */, grayScale /* IMPORTED_SHORT_NAMED_INTEGER */, LogotypeImageType_color /* IMPORTED_LONG_NAMED_INTEGER */, color /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LogotypeImageType, _encode_LogotypeImageType } from "../LogotypeCertExtn/LogotypeImageType.ta.mjs";
import { LogotypeImageResolution, _decode_LogotypeImageResolution, _encode_LogotypeImageResolution } from "../LogotypeCertExtn/LogotypeImageResolution.ta.mjs";
// export { LogotypeImageResolution, _decode_LogotypeImageResolution, _encode_LogotypeImageResolution } from "../LogotypeCertExtn/LogotypeImageResolution.ta.mjs";


/**
 * @summary LogotypeImageInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeImageInfo ::= SEQUENCE {
 *    type            [0] LogotypeImageType DEFAULT color,
 *    fileSize        INTEGER,  -- In octets
 *    xSize           INTEGER,  -- Horizontal size in pixels
 *    ySize           INTEGER,  -- Vertical size in pixels
 *    resolution      LogotypeImageResolution OPTIONAL,
 *    language        [4] IA5String OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeImageInfo {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<LogotypeImageType>,
        /**
         * @summary `fileSize`.
         * @public
         * @readonly
         */
        readonly fileSize: INTEGER,
        /**
         * @summary `xSize`.
         * @public
         * @readonly
         */
        readonly xSize: INTEGER,
        /**
         * @summary `ySize`.
         * @public
         * @readonly
         */
        readonly ySize: INTEGER,
        /**
         * @summary `resolution`.
         * @public
         * @readonly
         */
        readonly resolution: OPTIONAL<LogotypeImageResolution>,
        /**
         * @summary `language`.
         * @public
         * @readonly
         */
        readonly language: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeImageInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeImageInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeImageInfo`.
     * @returns {LogotypeImageInfo}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeImageInfo)]: (LogotypeImageInfo)[_K] }): LogotypeImageInfo {
        return new LogotypeImageInfo(_o.type_, _o.fileSize, _o.xSize, _o.ySize, _o.resolution, _o.language);
    }

    /**
     * @summary Getter that returns the default value for `type_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_type_ () { return color; }
}

/**
 * @summary The Leading Root Component Types of LogotypeImageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeImageInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fileSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("xSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("ySize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("resolution", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("language", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of LogotypeImageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeImageInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeImageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeImageInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeImageInfo: $.ASN1Decoder<LogotypeImageInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeImageInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeImageInfo (el: _Element): LogotypeImageInfo {
    if (!_cached_decoder_for_LogotypeImageInfo) { _cached_decoder_for_LogotypeImageInfo = function (el: _Element): LogotypeImageInfo {
    let type_: OPTIONAL<LogotypeImageType> = LogotypeImageInfo._default_value_for_type_;
    let fileSize!: INTEGER;
    let xSize!: INTEGER;
    let ySize!: INTEGER;
    let resolution: OPTIONAL<LogotypeImageResolution>;
    let language: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<LogotypeImageType>(() => _decode_LogotypeImageType)(_el); },
        "fileSize": (_el: _Element): void => { fileSize = $._decodeInteger(_el); },
        "xSize": (_el: _Element): void => { xSize = $._decodeInteger(_el); },
        "ySize": (_el: _Element): void => { ySize = $._decodeInteger(_el); },
        "resolution": (_el: _Element): void => { resolution = _decode_LogotypeImageResolution(_el); },
        "language": (_el: _Element): void => { language = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeImageInfo,
        _extension_additions_list_spec_for_LogotypeImageInfo,
        _root_component_type_list_2_spec_for_LogotypeImageInfo,
        undefined,
    );
    return new LogotypeImageInfo(
        type_,
        fileSize,
        xSize,
        ySize,
        resolution,
        language
    );
}; }
    return _cached_decoder_for_LogotypeImageInfo(el);
}

let _cached_encoder_for_LogotypeImageInfo: $.ASN1Encoder<LogotypeImageInfo> | null = null;

/**
 * @summary Encodes a(n) LogotypeImageInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeImageInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeImageInfo (value: LogotypeImageInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeImageInfo) { _cached_encoder_for_LogotypeImageInfo = function (value: LogotypeImageInfo, elGetter: $.ASN1Encoder<LogotypeImageInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.type_ === undefined || $.deepEq(value.type_, LogotypeImageInfo._default_value_for_type_) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LogotypeImageType, $.BER)(value.type_, $.BER)),
            /* REQUIRED   */ $._encodeInteger(value.fileSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.xSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.ySize, $.BER),
            /* IF_ABSENT  */ ((value.resolution === undefined) ? undefined : _encode_LogotypeImageResolution(value.resolution, $.BER)),
            /* IF_ABSENT  */ ((value.language === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.language, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeImageInfo(value, elGetter);
}


/* eslint-enable */
