/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127SuppInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127SuppInfo  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127SuppInfo = PrintableString; // PrintableString

let _cached_decoder_for_Acp127SuppInfo: $.ASN1Decoder<Acp127SuppInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127SuppInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Acp127SuppInfo (el: _Element): Acp127SuppInfo {
    if (!_cached_decoder_for_Acp127SuppInfo) { _cached_decoder_for_Acp127SuppInfo = $._decodePrintableString; }
    return _cached_decoder_for_Acp127SuppInfo(el);
}

let _cached_encoder_for_Acp127SuppInfo: $.ASN1Encoder<Acp127SuppInfo> | null = null;

/**
 * @summary Encodes a(n) Acp127SuppInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Acp127SuppInfo, encoded as an ASN.1 Element.
 */
export
function _encode_Acp127SuppInfo (value: Acp127SuppInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Acp127SuppInfo) { _cached_encoder_for_Acp127SuppInfo = $._encodePrintableString; }
    return _cached_encoder_for_Acp127SuppInfo(value, elGetter);
}


/* eslint-enable */
