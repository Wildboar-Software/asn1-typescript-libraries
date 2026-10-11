/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BodyPartSequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BodyPartSequenceNumber  ::=  INTEGER
 * ```
 */
export
type BodyPartSequenceNumber = INTEGER;

let _cached_decoder_for_BodyPartSequenceNumber: $.ASN1Decoder<BodyPartSequenceNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSequenceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BodyPartSequenceNumber (el: _Element): BodyPartSequenceNumber {
    if (!_cached_decoder_for_BodyPartSequenceNumber) { _cached_decoder_for_BodyPartSequenceNumber = $._decodeInteger; }
    return _cached_decoder_for_BodyPartSequenceNumber(el);
}

let _cached_encoder_for_BodyPartSequenceNumber: $.ASN1Encoder<BodyPartSequenceNumber> | null = null;

/**
 * @summary Encodes a(n) BodyPartSequenceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSequenceNumber, encoded as an ASN.1 Element.
 */
export
function _encode_BodyPartSequenceNumber (value: BodyPartSequenceNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BodyPartSequenceNumber) { _cached_encoder_for_BodyPartSequenceNumber = $._encodeInteger; }
    return _cached_encoder_for_BodyPartSequenceNumber(value, elGetter);
}


/* eslint-enable */
