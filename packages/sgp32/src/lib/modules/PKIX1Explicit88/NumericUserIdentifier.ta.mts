/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumericUserIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumericUserIdentifier  ::=  NumericString
 *                             (SIZE (1..ub-numeric-user-id-length))
 * ```
 */
export
type NumericUserIdentifier = NumericString; // NumericString

let _cached_decoder_for_NumericUserIdentifier: $.ASN1Decoder<NumericUserIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumericUserIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumericUserIdentifier (el: _Element): NumericUserIdentifier {
    if (!_cached_decoder_for_NumericUserIdentifier) { _cached_decoder_for_NumericUserIdentifier = $._decodeNumericString; }
    return _cached_decoder_for_NumericUserIdentifier(el);
}

let _cached_encoder_for_NumericUserIdentifier: $.ASN1Encoder<NumericUserIdentifier> | null = null;

/**
 * @summary Encodes a(n) NumericUserIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericUserIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_NumericUserIdentifier (value: NumericUserIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumericUserIdentifier) { _cached_encoder_for_NumericUserIdentifier = $._encodeNumericString; }
    return _cached_encoder_for_NumericUserIdentifier(value, elGetter);
}


/* eslint-enable */
