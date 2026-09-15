/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallBackEvent
 * @description
 * Capability bitmap for the Call Back event (ECMA-269 C.15.9, ECMA-285 §9.10).
 * Presence of this entry in `LogicalEvtsList` means the SF supports that event.
 * Each set bit is an optional parameter, enumerated value, initial connection
 * state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackEvent  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type CallBackEvent = BIT_STRING;

/**
 * @summary CallBackEvent_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const CallBackEvent_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CallBackEvent_privateData`.
 */
export
const privateData: number = CallBackEvent_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackEvent: $.ASN1Decoder<CallBackEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackEvent (el: _Element): CallBackEvent {
    if (!_cached_decoder_for_CallBackEvent) { _cached_decoder_for_CallBackEvent = $._decodeBitString; }
    return _cached_decoder_for_CallBackEvent(el);
}

let _cached_encoder_for_CallBackEvent: $.ASN1Encoder<CallBackEvent> | null = null;

/**
 * @summary Encodes a(n) CallBackEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackEvent (value: CallBackEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackEvent) { _cached_encoder_for_CallBackEvent = $._encodeBitString; }
    return _cached_encoder_for_CallBackEvent(value, elGetter);
}


/* eslint-enable */
