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



/**
 * @summary LogotypeAudioInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeAudioInfo ::= SEQUENCE {
 *    fileSize        INTEGER,  -- In octets
 *    playTime        INTEGER,  -- In milliseconds
 *    channels        INTEGER,  -- 1=mono, 2=stereo, 4=quad
 *    sampleRate      [3] INTEGER OPTIONAL,  -- Samples per second
 *    language        [4] IA5String OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeAudioInfo {
    constructor (
        /**
         * @summary `fileSize`.
         * @public
         * @readonly
         */
        readonly fileSize: INTEGER,
        /**
         * @summary `playTime`.
         * @public
         * @readonly
         */
        readonly playTime: INTEGER,
        /**
         * @summary `channels`.
         * @public
         * @readonly
         */
        readonly channels: INTEGER,
        /**
         * @summary `sampleRate`.
         * @public
         * @readonly
         */
        readonly sampleRate: OPTIONAL<INTEGER>,
        /**
         * @summary `language`.
         * @public
         * @readonly
         */
        readonly language: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeAudioInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeAudioInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeAudioInfo`.
     * @returns {LogotypeAudioInfo}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeAudioInfo)]: (LogotypeAudioInfo)[_K] }): LogotypeAudioInfo {
        return new LogotypeAudioInfo(_o.fileSize, _o.playTime, _o.channels, _o.sampleRate, _o.language);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeAudioInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeAudioInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("fileSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("playTime", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("channels", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sampleRate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("language", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of LogotypeAudioInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeAudioInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeAudioInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeAudioInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeAudioInfo: $.ASN1Decoder<LogotypeAudioInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeAudioInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeAudioInfo (el: _Element): LogotypeAudioInfo {
    if (!_cached_decoder_for_LogotypeAudioInfo) { _cached_decoder_for_LogotypeAudioInfo = function (el: _Element): LogotypeAudioInfo {
    let fileSize!: INTEGER;
    let playTime!: INTEGER;
    let channels!: INTEGER;
    let sampleRate: OPTIONAL<INTEGER>;
    let language: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "fileSize": (_el: _Element): void => { fileSize = $._decodeInteger(_el); },
        "playTime": (_el: _Element): void => { playTime = $._decodeInteger(_el); },
        "channels": (_el: _Element): void => { channels = $._decodeInteger(_el); },
        "sampleRate": (_el: _Element): void => { sampleRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "language": (_el: _Element): void => { language = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeAudioInfo,
        _extension_additions_list_spec_for_LogotypeAudioInfo,
        _root_component_type_list_2_spec_for_LogotypeAudioInfo,
        undefined,
    );
    return new LogotypeAudioInfo(
        fileSize,
        playTime,
        channels,
        sampleRate,
        language
    );
}; }
    return _cached_decoder_for_LogotypeAudioInfo(el);
}

let _cached_encoder_for_LogotypeAudioInfo: $.ASN1Encoder<LogotypeAudioInfo> | null = null;

/**
 * @summary Encodes a(n) LogotypeAudioInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeAudioInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeAudioInfo (value: LogotypeAudioInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeAudioInfo) { _cached_encoder_for_LogotypeAudioInfo = function (value: LogotypeAudioInfo, elGetter: $.ASN1Encoder<LogotypeAudioInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.fileSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.playTime, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.channels, $.BER),
            /* IF_ABSENT  */ ((value.sampleRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.sampleRate, $.BER)),
            /* IF_ABSENT  */ ((value.language === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.language, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeAudioInfo(value, elGetter);
}


/* eslint-enable */
