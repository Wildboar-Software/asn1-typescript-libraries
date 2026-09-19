/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmConCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConCapability  ::=  BOOLEAN
 * ```
 */
export
type EmConCapability = BOOLEAN; // BooleanType

let _cached_decoder_for_EmConCapability: $.ASN1Decoder<EmConCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmConCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmConCapability (el: _Element): EmConCapability {
    if (!_cached_decoder_for_EmConCapability) { _cached_decoder_for_EmConCapability = $._decodeBoolean; }
    return _cached_decoder_for_EmConCapability(el);
}

let _cached_encoder_for_EmConCapability: $.ASN1Encoder<EmConCapability> | null = null;

/**
 * @summary Encodes a(n) EmConCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmConCapability, encoded as an ASN.1 Element.
 */
export
function _encode_EmConCapability (value: EmConCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmConCapability) { _cached_encoder_for_EmConCapability = $._encodeBoolean; }
    return _cached_encoder_for_EmConCapability(value, elGetter);
}


/* eslint-enable */
