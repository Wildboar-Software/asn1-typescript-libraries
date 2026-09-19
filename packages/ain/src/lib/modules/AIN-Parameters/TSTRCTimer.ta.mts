/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSTRCTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSTRCTimer  ::=  [156] IMPLICIT INTEGER(0..300)
 * ```
 */
export
type TSTRCTimer = INTEGER;

let _cached_decoder_for_TSTRCTimer: $.ASN1Decoder<TSTRCTimer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSTRCTimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSTRCTimer (el: _Element): TSTRCTimer {
    if (!_cached_decoder_for_TSTRCTimer) { _cached_decoder_for_TSTRCTimer = $._decode_implicit<TSTRCTimer>(() => $._decodeInteger); }
    return _cached_decoder_for_TSTRCTimer(el);
}

let _cached_encoder_for_TSTRCTimer: $.ASN1Encoder<TSTRCTimer> | null = null;

/**
 * @summary Encodes a(n) TSTRCTimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSTRCTimer, encoded as an ASN.1 Element.
 */
export
function _encode_TSTRCTimer (value: TSTRCTimer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSTRCTimer) { _cached_encoder_for_TSTRCTimer = $._encode_implicit(_TagClass.context, 156, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_TSTRCTimer(value, elGetter);
}


/* eslint-enable */
