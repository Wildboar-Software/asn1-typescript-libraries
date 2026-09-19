/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PortNumber  ::=  INTEGER (0..65535)
 * ```
 */
export
type PortNumber = INTEGER;

let _cached_decoder_for_PortNumber: $.ASN1Decoder<PortNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PortNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PortNumber (el: _Element): PortNumber {
    if (!_cached_decoder_for_PortNumber) { _cached_decoder_for_PortNumber = $._decodeInteger; }
    return _cached_decoder_for_PortNumber(el);
}

let _cached_encoder_for_PortNumber: $.ASN1Encoder<PortNumber> | null = null;

/**
 * @summary Encodes a(n) PortNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PortNumber (value: PortNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PortNumber) { _cached_encoder_for_PortNumber = $._encodeInteger; }
    return _cached_encoder_for_PortNumber(value, elGetter);
}


/* eslint-enable */
