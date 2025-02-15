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

/* START_OF_SYMBOL_DEFINITION RestoredTime */
/**
 * @summary RestoredTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestoredTime  ::=  CHOICE {null  NULL,
 *                          time  GeneralizedTime,
 *                          ...
 * }
 * ```
 */
export type RestoredTime =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RestoredTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RestoredTime */
let _cached_decoder_for_RestoredTime: $.ASN1Decoder<RestoredTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RestoredTime */

/* START_OF_SYMBOL_DEFINITION _decode_RestoredTime */
/**
 * @summary Decodes an ASN.1 element into a(n) RestoredTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestoredTime} The decoded data structure.
 */
export function _decode_RestoredTime(el: _Element) {
    if (!_cached_decoder_for_RestoredTime) {
        _cached_decoder_for_RestoredTime = $._decode_extensible_choice<RestoredTime>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_RestoredTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RestoredTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RestoredTime */
let _cached_encoder_for_RestoredTime: $.ASN1Encoder<RestoredTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RestoredTime */

/* START_OF_SYMBOL_DEFINITION _encode_RestoredTime */
/**
 * @summary Encodes a(n) RestoredTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestoredTime, encoded as an ASN.1 Element.
 */
export function _encode_RestoredTime(
    value: RestoredTime,
    elGetter: $.ASN1Encoder<RestoredTime>
) {
    if (!_cached_encoder_for_RestoredTime) {
        _cached_encoder_for_RestoredTime = $._encode_choice<RestoredTime>(
            {
                null_: $._encodeNull,
                time: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RestoredTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RestoredTime */

/* eslint-enable */
