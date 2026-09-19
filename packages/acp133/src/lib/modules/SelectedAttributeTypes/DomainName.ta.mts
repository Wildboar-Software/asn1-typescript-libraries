/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainName  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of a domain name. -- })
 * ```
 */
export
type DomainName = UTF8String; // UTF8String

let _cached_decoder_for_DomainName: $.ASN1Decoder<DomainName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DomainName (el: _Element): DomainName {
    if (!_cached_decoder_for_DomainName) { _cached_decoder_for_DomainName = $._decodeUTF8String; }
    return _cached_decoder_for_DomainName(el);
}

let _cached_encoder_for_DomainName: $.ASN1Encoder<DomainName> | null = null;

/**
 * @summary Encodes a(n) DomainName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainName, encoded as an ASN.1 Element.
 */
export
function _encode_DomainName (value: DomainName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DomainName) { _cached_encoder_for_DomainName = $._encodeUTF8String; }
    return _cached_encoder_for_DomainName(value, elGetter);
}


/* eslint-enable */
