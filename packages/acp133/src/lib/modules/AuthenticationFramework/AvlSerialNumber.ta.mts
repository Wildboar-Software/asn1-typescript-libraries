/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AvlSerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvlSerialNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export
type AvlSerialNumber = INTEGER;

let _cached_decoder_for_AvlSerialNumber: $.ASN1Decoder<AvlSerialNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AvlSerialNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AvlSerialNumber (el: _Element): AvlSerialNumber {
    if (!_cached_decoder_for_AvlSerialNumber) { _cached_decoder_for_AvlSerialNumber = $._decodeInteger; }
    return _cached_decoder_for_AvlSerialNumber(el);
}

let _cached_encoder_for_AvlSerialNumber: $.ASN1Encoder<AvlSerialNumber> | null = null;

/**
 * @summary Encodes a(n) AvlSerialNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlSerialNumber, encoded as an ASN.1 Element.
 */
export
function _encode_AvlSerialNumber (value: AvlSerialNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AvlSerialNumber) { _cached_encoder_for_AvlSerialNumber = $._encodeInteger; }
    return _cached_encoder_for_AvlSerialNumber(value, elGetter);
}


/* eslint-enable */
