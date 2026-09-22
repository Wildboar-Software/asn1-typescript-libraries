/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NsapEncodedNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NsapEncodedNumber  ::=  OCTET STRING(SIZE (20))
 * ```
 */
export
type NsapEncodedNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_NsapEncodedNumber: $.ASN1Decoder<NsapEncodedNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NsapEncodedNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NsapEncodedNumber (el: _Element): NsapEncodedNumber {
    if (!_cached_decoder_for_NsapEncodedNumber) { _cached_decoder_for_NsapEncodedNumber = $._decodeOctetString; }
    return _cached_decoder_for_NsapEncodedNumber(el);
}

let _cached_encoder_for_NsapEncodedNumber: $.ASN1Encoder<NsapEncodedNumber> | null = null;

/**
 * @summary Encodes a(n) NsapEncodedNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NsapEncodedNumber, encoded as an ASN.1 Element.
 */
export
function _encode_NsapEncodedNumber (value: NsapEncodedNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NsapEncodedNumber) { _cached_encoder_for_NsapEncodedNumber = $._encodeOctetString; }
    return _cached_encoder_for_NsapEncodedNumber(value, elGetter);
}


/* eslint-enable */
