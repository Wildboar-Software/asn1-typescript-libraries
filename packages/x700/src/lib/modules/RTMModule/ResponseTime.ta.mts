/* eslint-disable */
import {
    INTEGER,
    REAL,
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

/* START_OF_SYMBOL_DEFINITION ResponseTime */
/**
 * @summary ResponseTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTime  ::=  CHOICE {
 *   seconds        [3]  INTEGER,
 *   milliSeconds   [4]  INTEGER,
 *   microSeconds   [5]  INTEGER,
 *   nanoSeconds    [6]  INTEGER,
 *   picoSeconds    [7]  INTEGER,
 *   secondsPerBit  [8]  REAL
 * }
 * ```
 */
export type ResponseTime =
    | { seconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { milliSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { microSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { nanoSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { picoSeconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { secondsPerBit: REAL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ResponseTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTime */
let _cached_decoder_for_ResponseTime: $.ASN1Decoder<ResponseTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTime */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseTime} The decoded data structure.
 */
export function _decode_ResponseTime(el: _Element) {
    if (!_cached_decoder_for_ResponseTime) {
        _cached_decoder_for_ResponseTime = $._decode_inextensible_choice<ResponseTime>(
            {
                'CONTEXT 3': [
                    'seconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 4': [
                    'milliSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 5': [
                    'microSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 6': [
                    'nanoSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 7': [
                    'picoSeconds',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 8': [
                    'secondsPerBit',
                    $._decode_implicit<REAL>(() => $._decodeReal),
                ],
            }
        );
    }
    return _cached_decoder_for_ResponseTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTime */
let _cached_encoder_for_ResponseTime: $.ASN1Encoder<ResponseTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTime */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseTime */
/**
 * @summary Encodes a(n) ResponseTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTime, encoded as an ASN.1 Element.
 */
export function _encode_ResponseTime(
    value: ResponseTime,
    elGetter: $.ASN1Encoder<ResponseTime>
) {
    if (!_cached_encoder_for_ResponseTime) {
        _cached_encoder_for_ResponseTime = $._encode_choice<ResponseTime>(
            {
                seconds: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeInteger,
                    $.BER
                ),
                milliSeconds: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeInteger,
                    $.BER
                ),
                microSeconds: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => $._encodeInteger,
                    $.BER
                ),
                nanoSeconds: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeInteger,
                    $.BER
                ),
                picoSeconds: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeInteger,
                    $.BER
                ),
                secondsPerBit: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => $._encodeReal,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResponseTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseTime */

/* eslint-enable */
