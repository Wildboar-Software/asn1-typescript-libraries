/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ONoAnswerTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ONoAnswerTimer  ::=  [91] IMPLICIT INTEGER(1..120)
 * ```
 */
export
type ONoAnswerTimer = INTEGER;

let _cached_decoder_for_ONoAnswerTimer: $.ASN1Decoder<ONoAnswerTimer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ONoAnswerTimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ONoAnswerTimer (el: _Element): ONoAnswerTimer {
    if (!_cached_decoder_for_ONoAnswerTimer) { _cached_decoder_for_ONoAnswerTimer = $._decode_implicit<ONoAnswerTimer>(() => $._decodeInteger); }
    return _cached_decoder_for_ONoAnswerTimer(el);
}

let _cached_encoder_for_ONoAnswerTimer: $.ASN1Encoder<ONoAnswerTimer> | null = null;

/**
 * @summary Encodes a(n) ONoAnswerTimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ONoAnswerTimer, encoded as an ASN.1 Element.
 */
export
function _encode_ONoAnswerTimer (value: ONoAnswerTimer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ONoAnswerTimer) { _cached_encoder_for_ONoAnswerTimer = $._encode_implicit(_TagClass.context, 91, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ONoAnswerTimer(value, elGetter);
}


/* eslint-enable */
