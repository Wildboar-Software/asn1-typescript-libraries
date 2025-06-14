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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_Requirements */
export enum _enum_for_Requirements {
    none = 0,
    with_2_way_voice = 1,
    with_reverse_video_and_2_way_voice = 2,
    with_2_way_video_and_voice = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Requirements */

/* START_OF_SYMBOL_DEFINITION Requirements */
/**
 * @summary Requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Requirements  ::=  ENUMERATED {
 *   none                               (0),
 *   with-2-way-voice                   (1),
 *   with-reverse-video-and-2-way-voice (2),
 *   with-2-way-video-and-voice         (3),
 *   ... }
 * ```@enum {number}
 */
export type Requirements = _enum_for_Requirements | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION Requirements */

/* START_OF_SYMBOL_DEFINITION Requirements_none */
/**
 * @summary Requirements_none
 * @constant
 * @type {number}
 */
export const Requirements_none: Requirements = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Requirements_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary none
 * @constant
 * @type {number}
 */
export const none: Requirements = Requirements_none; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION Requirements_with_2_way_voice */
/**
 * @summary Requirements_with_2_way_voice
 * @constant
 * @type {number}
 */
export const Requirements_with_2_way_voice: Requirements = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Requirements_with_2_way_voice */

/* START_OF_SYMBOL_DEFINITION with_2_way_voice */
/**
 * @summary with_2_way_voice
 * @constant
 * @type {number}
 */
export const with_2_way_voice: Requirements = Requirements_with_2_way_voice; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION with_2_way_voice */

/* START_OF_SYMBOL_DEFINITION Requirements_with_reverse_video_and_2_way_voice */
/**
 * @summary Requirements_with_reverse_video_and_2_way_voice
 * @constant
 * @type {number}
 */
export const Requirements_with_reverse_video_and_2_way_voice: Requirements = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Requirements_with_reverse_video_and_2_way_voice */

/* START_OF_SYMBOL_DEFINITION with_reverse_video_and_2_way_voice */
/**
 * @summary with_reverse_video_and_2_way_voice
 * @constant
 * @type {number}
 */
export const with_reverse_video_and_2_way_voice: Requirements = Requirements_with_reverse_video_and_2_way_voice; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION with_reverse_video_and_2_way_voice */

/* START_OF_SYMBOL_DEFINITION Requirements_with_2_way_video_and_voice */
/**
 * @summary Requirements_with_2_way_video_and_voice
 * @constant
 * @type {number}
 */
export const Requirements_with_2_way_video_and_voice: Requirements = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Requirements_with_2_way_video_and_voice */

/* START_OF_SYMBOL_DEFINITION with_2_way_video_and_voice */
/**
 * @summary with_2_way_video_and_voice
 * @constant
 * @type {number}
 */
export const with_2_way_video_and_voice: Requirements = Requirements_with_2_way_video_and_voice; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION with_2_way_video_and_voice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Requirements */
let _cached_decoder_for_Requirements: $.ASN1Decoder<Requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Requirements */

/* START_OF_SYMBOL_DEFINITION _decode_Requirements */
/**
 * @summary Decodes an ASN.1 element into a(n) Requirements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Requirements} The decoded data structure.
 */
export function _decode_Requirements(el: _Element) {
    if (!_cached_decoder_for_Requirements) {
        _cached_decoder_for_Requirements = $._decodeEnumerated;
    }
    return _cached_decoder_for_Requirements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Requirements */
let _cached_encoder_for_Requirements: $.ASN1Encoder<Requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Requirements */

/* START_OF_SYMBOL_DEFINITION _encode_Requirements */
/**
 * @summary Encodes a(n) Requirements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Requirements, encoded as an ASN.1 Element.
 */
export function _encode_Requirements(
    value: Requirements,
    elGetter: $.ASN1Encoder<Requirements>
) {
    if (!_cached_encoder_for_Requirements) {
        _cached_encoder_for_Requirements = $._encodeEnumerated;
    }
    return _cached_encoder_for_Requirements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Requirements */

/* eslint-enable */
