/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SignatureValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export
type SignatureValue = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SignatureValue: $.ASN1Decoder<SignatureValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignatureValue (el: _Element): SignatureValue {
    if (!_cached_decoder_for_SignatureValue) { _cached_decoder_for_SignatureValue = $._decodeOctetString; }
    return _cached_decoder_for_SignatureValue(el);
}

let _cached_encoder_for_SignatureValue: $.ASN1Encoder<SignatureValue> | null = null;

/**
 * @summary Encodes a(n) SignatureValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureValue, encoded as an ASN.1 Element.
 */
export
function _encode_SignatureValue (value: SignatureValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignatureValue) { _cached_encoder_for_SignatureValue = $._encodeOctetString; }
    return _cached_encoder_for_SignatureValue(value, elGetter);
}


/* eslint-enable */
