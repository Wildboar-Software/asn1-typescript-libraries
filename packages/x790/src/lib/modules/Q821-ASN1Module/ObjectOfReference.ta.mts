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
 * @summary ObjectOfReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectOfReference  ::= 
 *   ObjectInstance
 * ```
 */
export
type ObjectOfReference = ObjectInstance; // DefinedType

let _cached_decoder_for_ObjectOfReference: $.ASN1Decoder<ObjectOfReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectOfReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectOfReference (el: _Element): ObjectOfReference {
    if (!_cached_decoder_for_ObjectOfReference) { _cached_decoder_for_ObjectOfReference = _decode_ObjectInstance; }
    return _cached_decoder_for_ObjectOfReference(el);
}

let _cached_encoder_for_ObjectOfReference: $.ASN1Encoder<ObjectOfReference> | null = null;

/**
 * @summary Encodes a(n) ObjectOfReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectOfReference, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectOfReference (value: ObjectOfReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectOfReference) { _cached_encoder_for_ObjectOfReference = _encode_ObjectInstance; }
    return _cached_encoder_for_ObjectOfReference(value, elGetter);
}


/* eslint-enable */
