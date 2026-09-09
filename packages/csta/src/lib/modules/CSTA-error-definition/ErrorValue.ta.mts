/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { UniversalFailure, _decode_UniversalFailure, _encode_UniversalFailure } from "../CSTA-error-definition/UniversalFailure.ta.mjs";



/**
 * @summary ErrorValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorValue  ::=  UniversalFailure
 * ```
 */
export
type ErrorValue = UniversalFailure; // DefinedType

let _cached_decoder_for_ErrorValue: $.ASN1Decoder<ErrorValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorValue (el: _Element): ErrorValue {
    if (!_cached_decoder_for_ErrorValue) { _cached_decoder_for_ErrorValue = _decode_UniversalFailure; }
    return _cached_decoder_for_ErrorValue(el);
}

let _cached_encoder_for_ErrorValue: $.ASN1Encoder<ErrorValue> | null = null;

/**
 * @summary Encodes a(n) ErrorValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorValue, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorValue (value: ErrorValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorValue) { _cached_encoder_for_ErrorValue = _encode_UniversalFailure; }
    return _cached_encoder_for_ErrorValue(value, elGetter);
}


/* eslint-enable */
