/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KerberosFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KerberosFlags    ::=  BIT STRING (SIZE (32..MAX))
 * ```
 */
export
type KerberosFlags = BIT_STRING;

let _cached_decoder_for_KerberosFlags: $.ASN1Decoder<KerberosFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KerberosFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KerberosFlags (el: _Element): KerberosFlags {
    if (!_cached_decoder_for_KerberosFlags) { _cached_decoder_for_KerberosFlags = $._decodeBitString; }
    return _cached_decoder_for_KerberosFlags(el);
}

let _cached_encoder_for_KerberosFlags: $.ASN1Encoder<KerberosFlags> | null = null;

/**
 * @summary Encodes a(n) KerberosFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KerberosFlags, encoded as an ASN.1 Element.
 */
export
function _encode_KerberosFlags (value: KerberosFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KerberosFlags) { _cached_encoder_for_KerberosFlags = $._encodeBitString; }
    return _cached_encoder_for_KerberosFlags(value, elGetter);
}


/* eslint-enable */
