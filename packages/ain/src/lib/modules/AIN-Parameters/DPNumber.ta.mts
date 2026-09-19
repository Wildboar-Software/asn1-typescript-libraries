/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DPNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DPNumber  ::=  INTEGER(1..33)
 * ```
 */
export
type DPNumber = INTEGER;

let _cached_decoder_for_DPNumber: $.ASN1Decoder<DPNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DPNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DPNumber (el: _Element): DPNumber {
    if (!_cached_decoder_for_DPNumber) { _cached_decoder_for_DPNumber = $._decodeInteger; }
    return _cached_decoder_for_DPNumber(el);
}

let _cached_encoder_for_DPNumber: $.ASN1Encoder<DPNumber> | null = null;

/**
 * @summary Encodes a(n) DPNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DPNumber, encoded as an ASN.1 Element.
 */
export
function _encode_DPNumber (value: DPNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DPNumber) { _cached_encoder_for_DPNumber = $._encodeInteger; }
    return _cached_encoder_for_DPNumber(value, elGetter);
}


/* eslint-enable */
