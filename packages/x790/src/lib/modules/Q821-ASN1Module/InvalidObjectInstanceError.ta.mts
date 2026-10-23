/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary InvalidObjectInstanceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvalidObjectInstanceError  ::= 
 *   ObjectInstance
 * ```
 */
export
type InvalidObjectInstanceError = ObjectInstance; // DefinedType

let _cached_decoder_for_InvalidObjectInstanceError: $.ASN1Decoder<InvalidObjectInstanceError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvalidObjectInstanceError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvalidObjectInstanceError (el: _Element): InvalidObjectInstanceError {
    if (!_cached_decoder_for_InvalidObjectInstanceError) { _cached_decoder_for_InvalidObjectInstanceError = _decode_ObjectInstance; }
    return _cached_decoder_for_InvalidObjectInstanceError(el);
}

let _cached_encoder_for_InvalidObjectInstanceError: $.ASN1Encoder<InvalidObjectInstanceError> | null = null;

/**
 * @summary Encodes a(n) InvalidObjectInstanceError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidObjectInstanceError, encoded as an ASN.1 Element.
 */
export
function _encode_InvalidObjectInstanceError (value: InvalidObjectInstanceError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvalidObjectInstanceError) { _cached_encoder_for_InvalidObjectInstanceError = _encode_ObjectInstance; }
    return _cached_encoder_for_InvalidObjectInstanceError(value, elGetter);
}


/* eslint-enable */
