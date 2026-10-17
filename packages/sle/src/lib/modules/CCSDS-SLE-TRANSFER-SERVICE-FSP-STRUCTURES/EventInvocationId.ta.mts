/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary EventInvocationId
 * @description
 * 
 * Event-invocation identification of the FSP-THROW-EVENT whose action-list
 * result is being reported. Present for action list completed, action list not
 * completed, and event condition evaluated to false. Omitted for every other
 * notification. Annex A types it as an unsigned long integer.
 * 
 * CCSDS 912.3-B-3, section 3.7.2.5 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventInvocationId        ::=    IntUnsignedLong
 * ```
 */
export
type EventInvocationId = IntUnsignedLong; // DefinedType

let _cached_decoder_for_EventInvocationId: $.ASN1Decoder<EventInvocationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventInvocationId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventInvocationId (el: _Element): EventInvocationId {
    if (!_cached_decoder_for_EventInvocationId) { _cached_decoder_for_EventInvocationId = _decode_IntUnsignedLong; }
    return _cached_decoder_for_EventInvocationId(el);
}

let _cached_encoder_for_EventInvocationId: $.ASN1Encoder<EventInvocationId> | null = null;

/**
 * @summary Encodes a(n) EventInvocationId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventInvocationId, encoded as an ASN.1 Element.
 */
export
function _encode_EventInvocationId (value: EventInvocationId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventInvocationId) { _cached_encoder_for_EventInvocationId = _encode_IntUnsignedLong; }
    return _cached_encoder_for_EventInvocationId(value, elGetter);
}


/* eslint-enable */
