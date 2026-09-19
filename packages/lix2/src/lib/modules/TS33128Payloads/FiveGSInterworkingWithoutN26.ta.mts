/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSInterworkingWithoutN26
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingWithoutN26  ::=  BOOLEAN
 * ```
 */
export
type FiveGSInterworkingWithoutN26 = BOOLEAN; // BooleanType

let _cached_decoder_for_FiveGSInterworkingWithoutN26: $.ASN1Decoder<FiveGSInterworkingWithoutN26> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSInterworkingWithoutN26
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSInterworkingWithoutN26 (el: _Element): FiveGSInterworkingWithoutN26 {
    if (!_cached_decoder_for_FiveGSInterworkingWithoutN26) { _cached_decoder_for_FiveGSInterworkingWithoutN26 = $._decodeBoolean; }
    return _cached_decoder_for_FiveGSInterworkingWithoutN26(el);
}

let _cached_encoder_for_FiveGSInterworkingWithoutN26: $.ASN1Encoder<FiveGSInterworkingWithoutN26> | null = null;

/**
 * @summary Encodes a(n) FiveGSInterworkingWithoutN26 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSInterworkingWithoutN26, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSInterworkingWithoutN26 (value: FiveGSInterworkingWithoutN26, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSInterworkingWithoutN26) { _cached_encoder_for_FiveGSInterworkingWithoutN26 = $._encodeBoolean; }
    return _cached_encoder_for_FiveGSInterworkingWithoutN26(value, elGetter);
}


/* eslint-enable */
