/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGCNotRestrictedSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGCNotRestrictedSupport  ::=  BOOLEAN
 * ```
 */
export
type FiveGCNotRestrictedSupport = BOOLEAN; // BooleanType

let _cached_decoder_for_FiveGCNotRestrictedSupport: $.ASN1Decoder<FiveGCNotRestrictedSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGCNotRestrictedSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGCNotRestrictedSupport (el: _Element): FiveGCNotRestrictedSupport {
    if (!_cached_decoder_for_FiveGCNotRestrictedSupport) { _cached_decoder_for_FiveGCNotRestrictedSupport = $._decodeBoolean; }
    return _cached_decoder_for_FiveGCNotRestrictedSupport(el);
}

let _cached_encoder_for_FiveGCNotRestrictedSupport: $.ASN1Encoder<FiveGCNotRestrictedSupport> | null = null;

/**
 * @summary Encodes a(n) FiveGCNotRestrictedSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGCNotRestrictedSupport, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGCNotRestrictedSupport (value: FiveGCNotRestrictedSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGCNotRestrictedSupport) { _cached_encoder_for_FiveGCNotRestrictedSupport = $._encodeBoolean; }
    return _cached_encoder_for_FiveGCNotRestrictedSupport(value, elGetter);
}


/* eslint-enable */
