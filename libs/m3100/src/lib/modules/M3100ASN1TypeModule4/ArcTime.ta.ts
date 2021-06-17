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
import {
    ArcInterval,
    _decode_ArcInterval,
    _encode_ArcInterval,
} from '../M3100ASN1TypeModule4/ArcInterval.ta';
export {
    ArcInterval,
    _decode_ArcInterval,
    _encode_ArcInterval,
} from '../M3100ASN1TypeModule4/ArcInterval.ta';

/* START_OF_SYMBOL_DEFINITION ArcTime */
/**
 * @summary ArcTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcTime  ::=  CHOICE {
 *   noAdjustment  [0]  NULL,
 *   time          [1]  ArcInterval -- minutes
 * }
 * ```
 */
export type ArcTime =
    | { noAdjustment: NULL } /* CHOICE_ALT_ROOT */
    | { time: ArcInterval } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ArcTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcTime */
let _cached_decoder_for_ArcTime: $.ASN1Decoder<ArcTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcTime */

/* START_OF_SYMBOL_DEFINITION _decode_ArcTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcTime} The decoded data structure.
 */
export function _decode_ArcTime(el: _Element) {
    if (!_cached_decoder_for_ArcTime) {
        _cached_decoder_for_ArcTime = $._decode_inextensible_choice<ArcTime>({
            'CONTEXT 0': [
                'noAdjustment',
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            'CONTEXT 1': [
                'time',
                $._decode_implicit<ArcInterval>(() => _decode_ArcInterval),
            ],
        });
    }
    return _cached_decoder_for_ArcTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcTime */
let _cached_encoder_for_ArcTime: $.ASN1Encoder<ArcTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcTime */

/* START_OF_SYMBOL_DEFINITION _encode_ArcTime */
/**
 * @summary Encodes a(n) ArcTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcTime, encoded as an ASN.1 Element.
 */
export function _encode_ArcTime(
    value: ArcTime,
    elGetter: $.ASN1Encoder<ArcTime>
) {
    if (!_cached_encoder_for_ArcTime) {
        _cached_encoder_for_ArcTime = $._encode_choice<ArcTime>(
            {
                noAdjustment: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ArcInterval,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ArcTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcTime */

/* eslint-enable */
