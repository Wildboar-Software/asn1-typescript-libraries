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
 * @summary InvalidBaseManagedObjectError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvalidBaseManagedObjectError  ::=  ObjectInstance
 * ```
 */
export
type InvalidBaseManagedObjectError = ObjectInstance; // DefinedType

let _cached_decoder_for_InvalidBaseManagedObjectError: $.ASN1Decoder<InvalidBaseManagedObjectError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvalidBaseManagedObjectError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvalidBaseManagedObjectError (el: _Element): InvalidBaseManagedObjectError {
    if (!_cached_decoder_for_InvalidBaseManagedObjectError) { _cached_decoder_for_InvalidBaseManagedObjectError = _decode_ObjectInstance; }
    return _cached_decoder_for_InvalidBaseManagedObjectError(el);
}

let _cached_encoder_for_InvalidBaseManagedObjectError: $.ASN1Encoder<InvalidBaseManagedObjectError> | null = null;

/**
 * @summary Encodes a(n) InvalidBaseManagedObjectError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidBaseManagedObjectError, encoded as an ASN.1 Element.
 */
export
function _encode_InvalidBaseManagedObjectError (value: InvalidBaseManagedObjectError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvalidBaseManagedObjectError) { _cached_encoder_for_InvalidBaseManagedObjectError = _encode_ObjectInstance; }
    return _cached_encoder_for_InvalidBaseManagedObjectError(value, elGetter);
}


/* eslint-enable */
