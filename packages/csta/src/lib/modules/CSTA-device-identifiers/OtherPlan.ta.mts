/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary OtherPlan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherPlan  ::=  OCTET STRING
 * ```
 */
export
type OtherPlan = OCTET_STRING; // OctetStringType

let _cached_decoder_for_OtherPlan: $.ASN1Decoder<OtherPlan> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherPlan
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherPlan (el: _Element): OtherPlan {
    if (!_cached_decoder_for_OtherPlan) { _cached_decoder_for_OtherPlan = $._decodeOctetString; }
    return _cached_decoder_for_OtherPlan(el);
}

let _cached_encoder_for_OtherPlan: $.ASN1Encoder<OtherPlan> | null = null;

/**
 * @summary Encodes a(n) OtherPlan into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherPlan, encoded as an ASN.1 Element.
 */
export
function _encode_OtherPlan (value: OtherPlan, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherPlan) { _cached_encoder_for_OtherPlan = $._encodeOctetString; }
    return _cached_encoder_for_OtherPlan(value, elGetter);
}


/* eslint-enable */
