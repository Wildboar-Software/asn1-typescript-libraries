/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalE164
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalE164  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type InternationalE164 = NumericString; // NumericString

let _cached_decoder_for_InternationalE164: $.ASN1Decoder<InternationalE164> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternationalE164
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InternationalE164 (el: _Element): InternationalE164 {
    if (!_cached_decoder_for_InternationalE164) { _cached_decoder_for_InternationalE164 = $._decodeNumericString; }
    return _cached_decoder_for_InternationalE164(el);
}

let _cached_encoder_for_InternationalE164: $.ASN1Encoder<InternationalE164> | null = null;

/**
 * @summary Encodes a(n) InternationalE164 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternationalE164, encoded as an ASN.1 Element.
 */
export
function _encode_InternationalE164 (value: InternationalE164, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InternationalE164) { _cached_encoder_for_InternationalE164 = $._encodeNumericString; }
    return _cached_encoder_for_InternationalE164(value, elGetter);
}


/* eslint-enable */
