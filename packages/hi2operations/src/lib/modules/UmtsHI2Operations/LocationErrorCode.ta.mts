/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationErrorCode  ::=  INTEGER (1..699)
 * ```
 */
export
type LocationErrorCode = INTEGER;

let _cached_decoder_for_LocationErrorCode: $.ASN1Decoder<LocationErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationErrorCode (el: _Element): LocationErrorCode {
    if (!_cached_decoder_for_LocationErrorCode) { _cached_decoder_for_LocationErrorCode = $._decodeInteger; }
    return _cached_decoder_for_LocationErrorCode(el);
}

let _cached_encoder_for_LocationErrorCode: $.ASN1Encoder<LocationErrorCode> | null = null;

/**
 * @summary Encodes a(n) LocationErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_LocationErrorCode (value: LocationErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationErrorCode) { _cached_encoder_for_LocationErrorCode = $._encodeInteger; }
    return _cached_encoder_for_LocationErrorCode(value, elGetter);
}


/* eslint-enable */
