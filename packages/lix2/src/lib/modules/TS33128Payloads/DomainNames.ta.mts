/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainNames  ::=  SET OF UTF8String
 * ```
 */
export
type DomainNames = UTF8String[]; // SetOfType

let _cached_decoder_for_DomainNames: $.ASN1Decoder<DomainNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DomainNames (el: _Element): DomainNames {
    if (!_cached_decoder_for_DomainNames) { _cached_decoder_for_DomainNames = $._decodeSetOf<UTF8String>(() => $._decodeUTF8String); }
    return _cached_decoder_for_DomainNames(el);
}

let _cached_encoder_for_DomainNames: $.ASN1Encoder<DomainNames> | null = null;

/**
 * @summary Encodes a(n) DomainNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainNames, encoded as an ASN.1 Element.
 */
export
function _encode_DomainNames (value: DomainNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DomainNames) { _cached_encoder_for_DomainNames = $._encodeSetOf<UTF8String>(() => $._encodeUTF8String, $.BER); }
    return _cached_encoder_for_DomainNames(value, elGetter);
}


/* eslint-enable */
