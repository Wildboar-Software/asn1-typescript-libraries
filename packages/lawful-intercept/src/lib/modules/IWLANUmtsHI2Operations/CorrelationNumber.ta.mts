/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type CorrelationNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CorrelationNumber: $.ASN1Decoder<CorrelationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelationNumber (el: _Element): CorrelationNumber {
    if (!_cached_decoder_for_CorrelationNumber) { _cached_decoder_for_CorrelationNumber = $._decodeOctetString; }
    return _cached_decoder_for_CorrelationNumber(el);
}

let _cached_encoder_for_CorrelationNumber: $.ASN1Encoder<CorrelationNumber> | null = null;

/**
 * @summary Encodes a(n) CorrelationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelationNumber (value: CorrelationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelationNumber) { _cached_encoder_for_CorrelationNumber = $._encodeOctetString; }
    return _cached_encoder_for_CorrelationNumber(value, elGetter);
}


/* eslint-enable */
