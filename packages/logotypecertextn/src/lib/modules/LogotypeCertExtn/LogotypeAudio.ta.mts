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
import { LogotypeDetails, _decode_LogotypeDetails, _encode_LogotypeDetails } from "../LogotypeCertExtn/LogotypeDetails.ta.mjs";
// export { LogotypeDetails, _decode_LogotypeDetails, _encode_LogotypeDetails } from "../LogotypeCertExtn/LogotypeDetails.ta.mjs";
import { LogotypeAudioInfo, _decode_LogotypeAudioInfo, _encode_LogotypeAudioInfo } from "../LogotypeCertExtn/LogotypeAudioInfo.ta.mjs";
// export { LogotypeAudioInfo, _decode_LogotypeAudioInfo, _encode_LogotypeAudioInfo } from "../LogotypeCertExtn/LogotypeAudioInfo.ta.mjs";


/**
 * @summary LogotypeAudio
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeAudio ::= SEQUENCE {
 *    audioDetails    LogotypeDetails,
 *    audioInfo       LogotypeAudioInfo OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeAudio {
    constructor (
        /**
         * @summary `audioDetails`.
         * @public
         * @readonly
         */
        readonly audioDetails: LogotypeDetails,
        /**
         * @summary `audioInfo`.
         * @public
         * @readonly
         */
        readonly audioInfo: OPTIONAL<LogotypeAudioInfo>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeAudio
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeAudio`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeAudio`.
     * @returns {LogotypeAudio}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeAudio)]: (LogotypeAudio)[_K] }): LogotypeAudio {
        return new LogotypeAudio(_o.audioDetails, _o.audioInfo);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeAudio
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeAudio: $.ComponentSpec[] = [
    new $.ComponentSpec("audioDetails", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("audioInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of LogotypeAudio
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeAudio: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeAudio
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeAudio: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeAudio: $.ASN1Decoder<LogotypeAudio> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeAudio
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeAudio (el: _Element): LogotypeAudio {
    if (!_cached_decoder_for_LogotypeAudio) { _cached_decoder_for_LogotypeAudio = function (el: _Element): LogotypeAudio {
    let audioDetails!: LogotypeDetails;
    let audioInfo: OPTIONAL<LogotypeAudioInfo>;
    const callbacks: $.DecodingMap = {
        "audioDetails": (_el: _Element): void => { audioDetails = _decode_LogotypeDetails(_el); },
        "audioInfo": (_el: _Element): void => { audioInfo = _decode_LogotypeAudioInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeAudio,
        _extension_additions_list_spec_for_LogotypeAudio,
        _root_component_type_list_2_spec_for_LogotypeAudio,
        undefined,
    );
    return new LogotypeAudio(
        audioDetails,
        audioInfo
    );
}; }
    return _cached_decoder_for_LogotypeAudio(el);
}

let _cached_encoder_for_LogotypeAudio: $.ASN1Encoder<LogotypeAudio> | null = null;

/**
 * @summary Encodes a(n) LogotypeAudio into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeAudio, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeAudio (value: LogotypeAudio, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeAudio) { _cached_encoder_for_LogotypeAudio = function (value: LogotypeAudio, elGetter: $.ASN1Encoder<LogotypeAudio>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogotypeDetails(value.audioDetails, $.BER),
            /* IF_ABSENT  */ ((value.audioInfo === undefined) ? undefined : _encode_LogotypeAudioInfo(value.audioInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeAudio(value, elGetter);
}


/* eslint-enable */
