/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type MMSCorrelationNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MMSCorrelationNumber: $.ASN1Decoder<MMSCorrelationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSCorrelationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSCorrelationNumber (el: _Element): MMSCorrelationNumber {
    if (!_cached_decoder_for_MMSCorrelationNumber) { _cached_decoder_for_MMSCorrelationNumber = $._decodeOctetString; }
    return _cached_decoder_for_MMSCorrelationNumber(el);
}

let _cached_encoder_for_MMSCorrelationNumber: $.ASN1Encoder<MMSCorrelationNumber> | null = null;

/**
 * @summary Encodes a(n) MMSCorrelationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSCorrelationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_MMSCorrelationNumber (value: MMSCorrelationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSCorrelationNumber) { _cached_encoder_for_MMSCorrelationNumber = $._encodeOctetString; }
    return _cached_encoder_for_MMSCorrelationNumber(value, elGetter);
}


/* eslint-enable */
