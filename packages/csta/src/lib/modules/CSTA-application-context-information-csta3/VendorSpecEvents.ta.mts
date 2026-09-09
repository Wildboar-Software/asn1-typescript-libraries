/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VendorSpecEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecEvents ::=  BIT STRING
 * {    privateEvent                         (0) }
 * ```
 */
export
type VendorSpecEvents = BIT_STRING;

/**
 * @summary VendorSpecEvents_privateEvent
 * @constant
 */
export
const VendorSpecEvents_privateEvent: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateEvent
 * @constant
 */
export
const privateEvent: number = VendorSpecEvents_privateEvent; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VendorSpecEvents: $.ASN1Decoder<VendorSpecEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecEvents (el: _Element): VendorSpecEvents {
    if (!_cached_decoder_for_VendorSpecEvents) { _cached_decoder_for_VendorSpecEvents = $._decodeBitString; }
    return _cached_decoder_for_VendorSpecEvents(el);
}

let _cached_encoder_for_VendorSpecEvents: $.ASN1Encoder<VendorSpecEvents> | null = null;

/**
 * @summary Encodes a(n) VendorSpecEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorSpecEvents, encoded as an ASN.1 Element.
 */
export
function _encode_VendorSpecEvents (value: VendorSpecEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VendorSpecEvents) { _cached_encoder_for_VendorSpecEvents = $._encodeBitString; }
    return _cached_encoder_for_VendorSpecEvents(value, elGetter);
}


/* eslint-enable */
