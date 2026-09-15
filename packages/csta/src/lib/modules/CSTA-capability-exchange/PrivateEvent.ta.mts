/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PrivateEvent
 * @description
 * Capability bitmap for the Private Event (ECMA-269 Annex C.24.1, ECMA-285
 * §9.10). Presence in `VendorSpecificEvtsList` means the SF supports Private
 * Event. This BIT STRING has no named bits in ECMA-285 §9.10.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEvent  ::=  BIT STRING
 * ```
 */
export
type PrivateEvent = BIT_STRING;

let _cached_decoder_for_PrivateEvent: $.ASN1Decoder<PrivateEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateEvent (el: _Element): PrivateEvent {
    if (!_cached_decoder_for_PrivateEvent) { _cached_decoder_for_PrivateEvent = $._decodeBitString; }
    return _cached_decoder_for_PrivateEvent(el);
}

let _cached_encoder_for_PrivateEvent: $.ASN1Encoder<PrivateEvent> | null = null;

/**
 * @summary Encodes a(n) PrivateEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateEvent, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateEvent (value: PrivateEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateEvent) { _cached_encoder_for_PrivateEvent = $._encodeBitString; }
    return _cached_encoder_for_PrivateEvent(value, elGetter);
}


/* eslint-enable */
