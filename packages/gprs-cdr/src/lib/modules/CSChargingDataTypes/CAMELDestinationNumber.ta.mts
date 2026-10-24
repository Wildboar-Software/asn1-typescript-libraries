/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELDestinationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELDestinationNumber  ::=  SEQUENCE  ( SIZE( 1 ) ) OF
 *    OCTET STRING ( SIZE( 1 .. 41 ) )
 * ```
 */
export
type CAMELDestinationNumber = OCTET_STRING[]; // SequenceOfType

let _cached_decoder_for_CAMELDestinationNumber: $.ASN1Decoder<CAMELDestinationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELDestinationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELDestinationNumber (el: _Element): CAMELDestinationNumber {
    if (!_cached_decoder_for_CAMELDestinationNumber) { _cached_decoder_for_CAMELDestinationNumber = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _decoded_CAMELDestinationNumber = _cached_decoder_for_CAMELDestinationNumber(el);
    if (_decoded_CAMELDestinationNumber.length !== 1) {
        throw new ASN1SizeError("CAMELDestinationNumber violates SIZE constraint");
    }
    for (const _item of _decoded_CAMELDestinationNumber) {
        if (_item.length < 1 || _item.length > 41) {
            throw new ASN1SizeError("CAMELDestinationNumber element violates SIZE constraint");
        }
    }
    return _decoded_CAMELDestinationNumber;
}

let _cached_encoder_for_CAMELDestinationNumber: $.ASN1Encoder<CAMELDestinationNumber> | null = null;

/**
 * @summary Encodes a(n) CAMELDestinationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELDestinationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELDestinationNumber (value: CAMELDestinationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELDestinationNumber) { _cached_encoder_for_CAMELDestinationNumber = $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_CAMELDestinationNumber(value, elGetter);
}


/* eslint-enable */
