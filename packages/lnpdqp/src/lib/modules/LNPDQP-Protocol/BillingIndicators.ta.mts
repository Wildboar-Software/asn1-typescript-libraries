/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BillingIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BillingIndicators  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type BillingIndicators = OCTET_STRING; // OctetStringType

let _cached_decoder_for_BillingIndicators: $.ASN1Decoder<BillingIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BillingIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BillingIndicators (el: _Element): BillingIndicators {
    if (!_cached_decoder_for_BillingIndicators) { _cached_decoder_for_BillingIndicators = $._decodeOctetString; }
    return _cached_decoder_for_BillingIndicators(el);
}

let _cached_encoder_for_BillingIndicators: $.ASN1Encoder<BillingIndicators> | null = null;

/**
 * @summary Encodes a(n) BillingIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BillingIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_BillingIndicators (value: BillingIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BillingIndicators) { _cached_encoder_for_BillingIndicators = $._encodeOctetString; }
    return _cached_encoder_for_BillingIndicators(value, elGetter);
}


/* eslint-enable */
