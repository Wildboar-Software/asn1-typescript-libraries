/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIType  ::=  INTEGER (0..7)
 * ```
 */
export
type SUPIType = INTEGER;

let _cached_decoder_for_SUPIType: $.ASN1Decoder<SUPIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPIType (el: _Element): SUPIType {
    if (!_cached_decoder_for_SUPIType) { _cached_decoder_for_SUPIType = $._decodeInteger; }
    return _cached_decoder_for_SUPIType(el);
}

let _cached_encoder_for_SUPIType: $.ASN1Encoder<SUPIType> | null = null;

/**
 * @summary Encodes a(n) SUPIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPIType, encoded as an ASN.1 Element.
 */
export
function _encode_SUPIType (value: SUPIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPIType) { _cached_encoder_for_SUPIType = $._encodeInteger; }
    return _cached_encoder_for_SUPIType(value, elGetter);
}


/* eslint-enable */
