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

/* START_OF_SYMBOL_DEFINITION TroubleDetectionTime */
/**
 * @summary TroubleDetectionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleDetectionTime  ::=  CHOICE {null  NULL,
 *                                  time  GeneralizedTime,
 *                                  ...
 * }
 * ```
 */
export type TroubleDetectionTime =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TroubleDetectionTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleDetectionTime */
let _cached_decoder_for_TroubleDetectionTime: $.ASN1Decoder<TroubleDetectionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleDetectionTime */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleDetectionTime */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleDetectionTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleDetectionTime} The decoded data structure.
 */
export function _decode_TroubleDetectionTime(el: _Element) {
    if (!_cached_decoder_for_TroubleDetectionTime) {
        _cached_decoder_for_TroubleDetectionTime = $._decode_extensible_choice<TroubleDetectionTime>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_TroubleDetectionTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleDetectionTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleDetectionTime */
let _cached_encoder_for_TroubleDetectionTime: $.ASN1Encoder<TroubleDetectionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleDetectionTime */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleDetectionTime */
/**
 * @summary Encodes a(n) TroubleDetectionTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleDetectionTime, encoded as an ASN.1 Element.
 */
export function _encode_TroubleDetectionTime(
    value: TroubleDetectionTime,
    elGetter: $.ASN1Encoder<TroubleDetectionTime>
) {
    if (!_cached_encoder_for_TroubleDetectionTime) {
        _cached_encoder_for_TroubleDetectionTime = $._encode_choice<TroubleDetectionTime>(
            {
                null_: $._encodeNull,
                time: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleDetectionTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleDetectionTime */

/* eslint-enable */
