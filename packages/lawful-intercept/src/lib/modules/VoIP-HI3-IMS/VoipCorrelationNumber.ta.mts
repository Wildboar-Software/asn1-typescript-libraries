/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VoipCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoipCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type VoipCorrelationNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_VoipCorrelationNumber: $.ASN1Decoder<VoipCorrelationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoipCorrelationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoipCorrelationNumber (el: _Element): VoipCorrelationNumber {
    if (!_cached_decoder_for_VoipCorrelationNumber) { _cached_decoder_for_VoipCorrelationNumber = $._decodeOctetString; }
    return _cached_decoder_for_VoipCorrelationNumber(el);
}

let _cached_encoder_for_VoipCorrelationNumber: $.ASN1Encoder<VoipCorrelationNumber> | null = null;

/**
 * @summary Encodes a(n) VoipCorrelationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoipCorrelationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_VoipCorrelationNumber (value: VoipCorrelationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoipCorrelationNumber) { _cached_encoder_for_VoipCorrelationNumber = $._encodeOctetString; }
    return _cached_encoder_for_VoipCorrelationNumber(value, elGetter);
}


/* eslint-enable */
