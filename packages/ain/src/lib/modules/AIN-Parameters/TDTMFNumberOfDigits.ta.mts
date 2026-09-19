/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TDTMFNumberOfDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDTMFNumberOfDigits  ::=  [158] IMPLICIT INTEGER(1..4)
 * ```
 */
export
type TDTMFNumberOfDigits = INTEGER;

let _cached_decoder_for_TDTMFNumberOfDigits: $.ASN1Decoder<TDTMFNumberOfDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDTMFNumberOfDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDTMFNumberOfDigits (el: _Element): TDTMFNumberOfDigits {
    if (!_cached_decoder_for_TDTMFNumberOfDigits) { _cached_decoder_for_TDTMFNumberOfDigits = $._decode_implicit<TDTMFNumberOfDigits>(() => $._decodeInteger); }
    return _cached_decoder_for_TDTMFNumberOfDigits(el);
}

let _cached_encoder_for_TDTMFNumberOfDigits: $.ASN1Encoder<TDTMFNumberOfDigits> | null = null;

/**
 * @summary Encodes a(n) TDTMFNumberOfDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDTMFNumberOfDigits, encoded as an ASN.1 Element.
 */
export
function _encode_TDTMFNumberOfDigits (value: TDTMFNumberOfDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDTMFNumberOfDigits) { _cached_encoder_for_TDTMFNumberOfDigits = $._encode_implicit(_TagClass.context, 158, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_TDTMFNumberOfDigits(value, elGetter);
}


/* eslint-enable */
