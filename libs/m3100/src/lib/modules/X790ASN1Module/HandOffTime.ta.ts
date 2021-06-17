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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION HandOffTime */
/**
 * @summary HandOffTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandOffTime  ::=  CHOICE {null  NULL,
 *                         time  GeneralizedTime,
 *                         ...
 * }
 * ```
 */
export type HandOffTime =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION HandOffTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandOffTime */
let _cached_decoder_for_HandOffTime: $.ASN1Decoder<HandOffTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandOffTime */

/* START_OF_SYMBOL_DEFINITION _decode_HandOffTime */
/**
 * @summary Decodes an ASN.1 element into a(n) HandOffTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandOffTime} The decoded data structure.
 */
export function _decode_HandOffTime(el: _Element) {
    if (!_cached_decoder_for_HandOffTime) {
        _cached_decoder_for_HandOffTime = $._decode_extensible_choice<HandOffTime>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_HandOffTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HandOffTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandOffTime */
let _cached_encoder_for_HandOffTime: $.ASN1Encoder<HandOffTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandOffTime */

/* START_OF_SYMBOL_DEFINITION _encode_HandOffTime */
/**
 * @summary Encodes a(n) HandOffTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandOffTime, encoded as an ASN.1 Element.
 */
export function _encode_HandOffTime(
    value: HandOffTime,
    elGetter: $.ASN1Encoder<HandOffTime>
) {
    if (!_cached_encoder_for_HandOffTime) {
        _cached_encoder_for_HandOffTime = $._encode_choice<HandOffTime>(
            {
                null_: $._encodeNull,
                time: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_HandOffTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HandOffTime */

/* eslint-enable */
