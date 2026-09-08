/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Interval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Interval  ::=  CHOICE {
 *   days     [0]  INTEGER,
 *   hours    [1]  INTEGER,
 *   minutes  [2]  INTEGER,
 *   seconds  [3]  INTEGER
 * }
 * ```
 */
export
type Interval =
    { days: INTEGER } /* CHOICE_ALT_ROOT */
    | { hours: INTEGER } /* CHOICE_ALT_ROOT */
    | { minutes: INTEGER } /* CHOICE_ALT_ROOT */
    | { seconds: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Interval: $.ASN1Decoder<Interval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Interval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Interval (el: _Element): Interval {
    if (!_cached_decoder_for_Interval) { _cached_decoder_for_Interval = $._decode_inextensible_choice<Interval>({
    "CONTEXT 0": [ "days", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "hours", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "minutes", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "seconds", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_Interval(el);
}

let _cached_encoder_for_Interval: $.ASN1Encoder<Interval> | null = null;

/**
 * @summary Encodes a(n) Interval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Interval, encoded as an ASN.1 Element.
 */
export
function _encode_Interval (value: Interval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Interval) { _cached_encoder_for_Interval = $._encode_choice<Interval>({
    "days": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "hours": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "minutes": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "seconds": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_Interval(value, elGetter);
}


/* eslint-enable */
