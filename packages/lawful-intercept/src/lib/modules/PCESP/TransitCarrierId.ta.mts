/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCarrierId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCarrierId  ::=  VisibleString (SIZE(3..7, ...))
 * ```
 */
export
type TransitCarrierId = VisibleString; // VisibleString

let _cached_decoder_for_TransitCarrierId: $.ASN1Decoder<TransitCarrierId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransitCarrierId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransitCarrierId (el: _Element): TransitCarrierId {
    if (!_cached_decoder_for_TransitCarrierId) { _cached_decoder_for_TransitCarrierId = $._decodeVisibleString; }
    return _cached_decoder_for_TransitCarrierId(el);
}

let _cached_encoder_for_TransitCarrierId: $.ASN1Encoder<TransitCarrierId> | null = null;

/**
 * @summary Encodes a(n) TransitCarrierId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitCarrierId, encoded as an ASN.1 Element.
 */
export
function _encode_TransitCarrierId (value: TransitCarrierId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransitCarrierId) { _cached_encoder_for_TransitCarrierId = $._encodeVisibleString; }
    return _cached_encoder_for_TransitCarrierId(value, elGetter);
}


/* eslint-enable */
