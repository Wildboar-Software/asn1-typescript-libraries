/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BillingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BillingIndicator  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type BillingIndicator = OCTET_STRING; // OctetStringType

let _cached_decoder_for_BillingIndicator: $.ASN1Decoder<BillingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BillingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BillingIndicator (el: _Element): BillingIndicator {
    if (!_cached_decoder_for_BillingIndicator) { _cached_decoder_for_BillingIndicator = $._decodeOctetString; }
    return _cached_decoder_for_BillingIndicator(el);
}

let _cached_encoder_for_BillingIndicator: $.ASN1Encoder<BillingIndicator> | null = null;

/**
 * @summary Encodes a(n) BillingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BillingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_BillingIndicator (value: BillingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BillingIndicator) { _cached_encoder_for_BillingIndicator = $._encodeOctetString; }
    return _cached_encoder_for_BillingIndicator(value, elGetter);
}


/* eslint-enable */
