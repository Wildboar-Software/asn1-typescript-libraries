/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMASetHexABIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMASetHexABIndicator  ::=  [82] IMPLICIT BOOLEAN
 * ```
 */
export
type AMASetHexABIndicator = BOOLEAN; // BooleanType

let _cached_decoder_for_AMASetHexABIndicator: $.ASN1Decoder<AMASetHexABIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMASetHexABIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMASetHexABIndicator (el: _Element): AMASetHexABIndicator {
    if (!_cached_decoder_for_AMASetHexABIndicator) { _cached_decoder_for_AMASetHexABIndicator = $._decode_implicit<AMASetHexABIndicator>(() => $._decodeBoolean); }
    return _cached_decoder_for_AMASetHexABIndicator(el);
}

let _cached_encoder_for_AMASetHexABIndicator: $.ASN1Encoder<AMASetHexABIndicator> | null = null;

/**
 * @summary Encodes a(n) AMASetHexABIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMASetHexABIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AMASetHexABIndicator (value: AMASetHexABIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMASetHexABIndicator) { _cached_encoder_for_AMASetHexABIndicator = $._encode_implicit(_TagClass.context, 82, () => $._encodeBoolean, $.BER); }
    return _cached_encoder_for_AMASetHexABIndicator(value, elGetter);
}


/* eslint-enable */
