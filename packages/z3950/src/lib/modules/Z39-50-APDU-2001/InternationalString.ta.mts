/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalString  ::=  GeneralString
 * ```
 */
export
type InternationalString = GeneralString; // GeneralString

let _cached_decoder_for_InternationalString: $.ASN1Decoder<InternationalString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternationalString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InternationalString (el: _Element): InternationalString {
    if (!_cached_decoder_for_InternationalString) { _cached_decoder_for_InternationalString = $._decodeGeneralString; }
    return _cached_decoder_for_InternationalString(el);
}

let _cached_encoder_for_InternationalString: $.ASN1Encoder<InternationalString> | null = null;

/**
 * @summary Encodes a(n) InternationalString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternationalString, encoded as an ASN.1 Element.
 */
export
function _encode_InternationalString (value: InternationalString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InternationalString) { _cached_encoder_for_InternationalString = $._encodeGeneralString; }
    return _cached_encoder_for_InternationalString(value, elGetter);
}


/* eslint-enable */
