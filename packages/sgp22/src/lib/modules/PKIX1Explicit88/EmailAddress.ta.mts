/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmailAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmailAddress  ::=          IA5String (SIZE (1..ub-emailaddress-length))
 * ```
 */
export
type EmailAddress = IA5String; // IA5String

let _cached_decoder_for_EmailAddress: $.ASN1Decoder<EmailAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmailAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmailAddress (el: _Element): EmailAddress {
    if (!_cached_decoder_for_EmailAddress) { _cached_decoder_for_EmailAddress = $._decodeIA5String; }
    return _cached_decoder_for_EmailAddress(el);
}

let _cached_encoder_for_EmailAddress: $.ASN1Encoder<EmailAddress> | null = null;

/**
 * @summary Encodes a(n) EmailAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmailAddress, encoded as an ASN.1 Element.
 */
export
function _encode_EmailAddress (value: EmailAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmailAddress) { _cached_encoder_for_EmailAddress = $._encodeIA5String; }
    return _cached_encoder_for_EmailAddress(value, elGetter);
}


/* eslint-enable */
