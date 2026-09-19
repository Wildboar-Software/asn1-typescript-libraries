/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KerberosString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KerberosString   ::=  GeneralString (IA5String)
 * ```
 */
export
type KerberosString = GeneralString; // GeneralString

let _cached_decoder_for_KerberosString: $.ASN1Decoder<KerberosString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KerberosString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KerberosString (el: _Element): KerberosString {
    if (!_cached_decoder_for_KerberosString) { _cached_decoder_for_KerberosString = $._decodeGeneralString; }
    return _cached_decoder_for_KerberosString(el);
}

let _cached_encoder_for_KerberosString: $.ASN1Encoder<KerberosString> | null = null;

/**
 * @summary Encodes a(n) KerberosString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KerberosString, encoded as an ASN.1 Element.
 */
export
function _encode_KerberosString (value: KerberosString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KerberosString) { _cached_encoder_for_KerberosString = $._encodeGeneralString; }
    return _cached_encoder_for_KerberosString(value, elGetter);
}


/* eslint-enable */
