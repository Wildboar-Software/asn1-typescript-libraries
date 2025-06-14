/* eslint-disable */
import {
    INTEGER,
    NULL,
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

/* START_OF_SYMBOL_DEFINITION Timespec */
/**
 * @summary Timespec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Timespec  ::=  CHOICE {
 *   forever    [22]  NULL,
 *   hours      [23]  INTEGER,
 *   minutes    [24]  INTEGER,
 *   seconds    [25]  INTEGER,
 *   millisecs  [26]  INTEGER,
 *   microsecs  [27]  INTEGER,
 *   nanosecs   [28]  INTEGER
 * }
 * ```
 */
export type Timespec =
    | { forever: NULL } /* CHOICE_ALT_ROOT */
    | { hours: INTEGER } /* CHOICE_ALT_ROOT */
    | { minutes: INTEGER } /* CHOICE_ALT_ROOT */
    | { seconds: INTEGER } /* CHOICE_ALT_ROOT */
    | { millisecs: INTEGER } /* CHOICE_ALT_ROOT */
    | { microsecs: INTEGER } /* CHOICE_ALT_ROOT */
    | { nanosecs: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Timespec */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Timespec */
let _cached_decoder_for_Timespec: $.ASN1Decoder<Timespec> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Timespec */

/* START_OF_SYMBOL_DEFINITION _decode_Timespec */
/**
 * @summary Decodes an ASN.1 element into a(n) Timespec
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Timespec} The decoded data structure.
 */
export function _decode_Timespec(el: _Element) {
    if (!_cached_decoder_for_Timespec) {
        _cached_decoder_for_Timespec = $._decode_inextensible_choice<Timespec>({
            'CONTEXT 22': [
                'forever',
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            'CONTEXT 23': [
                'hours',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 24': [
                'minutes',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 25': [
                'seconds',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 26': [
                'millisecs',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 27': [
                'microsecs',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 28': [
                'nanosecs',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
        });
    }
    return _cached_decoder_for_Timespec(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Timespec */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Timespec */
let _cached_encoder_for_Timespec: $.ASN1Encoder<Timespec> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Timespec */

/* START_OF_SYMBOL_DEFINITION _encode_Timespec */
/**
 * @summary Encodes a(n) Timespec into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Timespec, encoded as an ASN.1 Element.
 */
export function _encode_Timespec(
    value: Timespec,
    elGetter: $.ASN1Encoder<Timespec>
) {
    if (!_cached_encoder_for_Timespec) {
        _cached_encoder_for_Timespec = $._encode_choice<Timespec>(
            {
                forever: $._encode_implicit(
                    _TagClass.context,
                    22,
                    () => $._encodeNull,
                    $.BER
                ),
                hours: $._encode_implicit(
                    _TagClass.context,
                    23,
                    () => $._encodeInteger,
                    $.BER
                ),
                minutes: $._encode_implicit(
                    _TagClass.context,
                    24,
                    () => $._encodeInteger,
                    $.BER
                ),
                seconds: $._encode_implicit(
                    _TagClass.context,
                    25,
                    () => $._encodeInteger,
                    $.BER
                ),
                millisecs: $._encode_implicit(
                    _TagClass.context,
                    26,
                    () => $._encodeInteger,
                    $.BER
                ),
                microsecs: $._encode_implicit(
                    _TagClass.context,
                    27,
                    () => $._encodeInteger,
                    $.BER
                ),
                nanosecs: $._encode_implicit(
                    _TagClass.context,
                    28,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Timespec(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Timespec */

/* eslint-enable */
