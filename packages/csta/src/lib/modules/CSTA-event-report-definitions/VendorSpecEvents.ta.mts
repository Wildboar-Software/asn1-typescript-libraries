/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { PrivateEvent, _decode_PrivateEvent, _encode_PrivateEvent } from "../CSTA-private-event/PrivateEvent.ta.mjs";



/**
 * @summary VendorSpecEvents
 * @description
 *
 * Vendor-specific event body of `cSTAEventReport` (ECMA-285 §10). Alternative:
 * Private Event.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecEvents ::=  CHOICE
 * {    privateEvent            [ 0] IMPLICIT PrivateEvent }
 * ```
 */
export
type VendorSpecEvents =
    { privateEvent: PrivateEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VendorSpecEvents: $.ASN1Decoder<VendorSpecEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecEvents (el: _Element): VendorSpecEvents {
    if (!_cached_decoder_for_VendorSpecEvents) { _cached_decoder_for_VendorSpecEvents = $._decode_inextensible_choice<VendorSpecEvents>({
    "CONTEXT 0": [ "privateEvent", $._decode_implicit<PrivateEvent>(() => _decode_PrivateEvent) ]
}); }
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
    if (!_cached_encoder_for_VendorSpecEvents) { _cached_encoder_for_VendorSpecEvents = $._encode_choice<VendorSpecEvents>({
    "privateEvent": $._encode_implicit(_TagClass.context, 0, () => _encode_PrivateEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_VendorSpecEvents(value, elGetter);
}


/* eslint-enable */
