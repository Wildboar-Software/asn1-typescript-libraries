/* eslint-disable */
import {
    ASN1Element as _Element,
    RELATIVE_OID
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PackedNumbers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PackedNumbers  ::= 
 *     RELATIVE-OID
 * ```
 */
export
type PackedNumbers = RELATIVE_OID; // RelativeOIDType

let _cached_decoder_for_PackedNumbers: $.ASN1Decoder<PackedNumbers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PackedNumbers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PackedNumbers (el: _Element): PackedNumbers {
    if (!_cached_decoder_for_PackedNumbers) { _cached_decoder_for_PackedNumbers = $._decodeRelativeOID; }
    return _cached_decoder_for_PackedNumbers(el);
}

let _cached_encoder_for_PackedNumbers: $.ASN1Encoder<PackedNumbers> | null = null;

/**
 * @summary Encodes a(n) PackedNumbers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PackedNumbers, encoded as an ASN.1 Element.
 */
export
function _encode_PackedNumbers (value: PackedNumbers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PackedNumbers) { _cached_encoder_for_PackedNumbers = $._encodeRelativeOID; }
    return _cached_encoder_for_PackedNumbers(value, elGetter);
}


/* eslint-enable */
