/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TNoAnswerTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNoAnswerTimer  ::=  [99] IMPLICIT INTEGER(1..120)
 * ```
 */
export
type TNoAnswerTimer = INTEGER;

let _cached_decoder_for_TNoAnswerTimer: $.ASN1Decoder<TNoAnswerTimer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TNoAnswerTimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TNoAnswerTimer (el: _Element): TNoAnswerTimer {
    if (!_cached_decoder_for_TNoAnswerTimer) { _cached_decoder_for_TNoAnswerTimer = $._decode_implicit<TNoAnswerTimer>(() => $._decodeInteger); }
    return _cached_decoder_for_TNoAnswerTimer(el);
}

let _cached_encoder_for_TNoAnswerTimer: $.ASN1Encoder<TNoAnswerTimer> | null = null;

/**
 * @summary Encodes a(n) TNoAnswerTimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TNoAnswerTimer, encoded as an ASN.1 Element.
 */
export
function _encode_TNoAnswerTimer (value: TNoAnswerTimer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TNoAnswerTimer) { _cached_encoder_for_TNoAnswerTimer = $._encode_implicit(_TagClass.context, 99, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_TNoAnswerTimer(value, elGetter);
}


/* eslint-enable */
