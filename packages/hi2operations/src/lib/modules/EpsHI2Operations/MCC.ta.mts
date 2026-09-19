/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC  ::=  NumericString (SIZE(3))
 * ```
 */
export
type MCC = NumericString; // NumericString

let _cached_decoder_for_MCC: $.ASN1Decoder<MCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCC (el: _Element): MCC {
    if (!_cached_decoder_for_MCC) { _cached_decoder_for_MCC = $._decodeNumericString; }
    return _cached_decoder_for_MCC(el);
}

let _cached_encoder_for_MCC: $.ASN1Encoder<MCC> | null = null;

/**
 * @summary Encodes a(n) MCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCC, encoded as an ASN.1 Element.
 */
export
function _encode_MCC (value: MCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCC) { _cached_encoder_for_MCC = $._encodeNumericString; }
    return _cached_encoder_for_MCC(value, elGetter);
}


/* eslint-enable */
