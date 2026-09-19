/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WakeUpDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WakeUpDuration  ::=  [131] IMPLICIT INTEGER(1..999)
 * ```
 */
export
type WakeUpDuration = INTEGER;

let _cached_decoder_for_WakeUpDuration: $.ASN1Decoder<WakeUpDuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WakeUpDuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WakeUpDuration (el: _Element): WakeUpDuration {
    if (!_cached_decoder_for_WakeUpDuration) { _cached_decoder_for_WakeUpDuration = $._decode_implicit<WakeUpDuration>(() => $._decodeInteger); }
    return _cached_decoder_for_WakeUpDuration(el);
}

let _cached_encoder_for_WakeUpDuration: $.ASN1Encoder<WakeUpDuration> | null = null;

/**
 * @summary Encodes a(n) WakeUpDuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WakeUpDuration, encoded as an ASN.1 Element.
 */
export
function _encode_WakeUpDuration (value: WakeUpDuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WakeUpDuration) { _cached_encoder_for_WakeUpDuration = $._encode_implicit(_TagClass.context, 131, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_WakeUpDuration(value, elGetter);
}


/* eslint-enable */
