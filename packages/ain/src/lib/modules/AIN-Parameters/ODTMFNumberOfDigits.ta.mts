/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ODTMFNumberOfDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODTMFNumberOfDigits  ::=  [155] IMPLICIT INTEGER(1..4)
 * ```
 */
export
type ODTMFNumberOfDigits = INTEGER;

let _cached_decoder_for_ODTMFNumberOfDigits: $.ASN1Decoder<ODTMFNumberOfDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODTMFNumberOfDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODTMFNumberOfDigits (el: _Element): ODTMFNumberOfDigits {
    if (!_cached_decoder_for_ODTMFNumberOfDigits) { _cached_decoder_for_ODTMFNumberOfDigits = $._decode_implicit<ODTMFNumberOfDigits>(() => $._decodeInteger); }
    return _cached_decoder_for_ODTMFNumberOfDigits(el);
}

let _cached_encoder_for_ODTMFNumberOfDigits: $.ASN1Encoder<ODTMFNumberOfDigits> | null = null;

/**
 * @summary Encodes a(n) ODTMFNumberOfDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODTMFNumberOfDigits, encoded as an ASN.1 Element.
 */
export
function _encode_ODTMFNumberOfDigits (value: ODTMFNumberOfDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODTMFNumberOfDigits) { _cached_encoder_for_ODTMFNumberOfDigits = $._encode_implicit(_TagClass.context, 155, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ODTMFNumberOfDigits(value, elGetter);
}


/* eslint-enable */
