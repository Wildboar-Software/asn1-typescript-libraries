/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSPortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSPortNumber  ::=  INTEGER (0..15)
 * ```
 */
export
type RDSPortNumber = INTEGER;

let _cached_decoder_for_RDSPortNumber: $.ASN1Decoder<RDSPortNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RDSPortNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RDSPortNumber (el: _Element): RDSPortNumber {
    if (!_cached_decoder_for_RDSPortNumber) { _cached_decoder_for_RDSPortNumber = $._decodeInteger; }
    return _cached_decoder_for_RDSPortNumber(el);
}

let _cached_encoder_for_RDSPortNumber: $.ASN1Encoder<RDSPortNumber> | null = null;

/**
 * @summary Encodes a(n) RDSPortNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDSPortNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RDSPortNumber (value: RDSPortNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RDSPortNumber) { _cached_encoder_for_RDSPortNumber = $._encodeInteger; }
    return _cached_encoder_for_RDSPortNumber(value, elGetter);
}


/* eslint-enable */
