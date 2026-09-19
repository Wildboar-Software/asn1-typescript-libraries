/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSCorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type GPRSCorrelationNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GPRSCorrelationNumber: $.ASN1Decoder<GPRSCorrelationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSCorrelationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSCorrelationNumber (el: _Element): GPRSCorrelationNumber {
    if (!_cached_decoder_for_GPRSCorrelationNumber) { _cached_decoder_for_GPRSCorrelationNumber = $._decodeOctetString; }
    return _cached_decoder_for_GPRSCorrelationNumber(el);
}

let _cached_encoder_for_GPRSCorrelationNumber: $.ASN1Encoder<GPRSCorrelationNumber> | null = null;

/**
 * @summary Encodes a(n) GPRSCorrelationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSCorrelationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSCorrelationNumber (value: GPRSCorrelationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSCorrelationNumber) { _cached_encoder_for_GPRSCorrelationNumber = $._encodeOctetString; }
    return _cached_encoder_for_GPRSCorrelationNumber(value, elGetter);
}


/* eslint-enable */
