/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../modules/CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary EventInvocationId
 * @description
 * 
 * Unsigned long integer that identifies a thrown event.
 * 
 * CLTU uses it as the monotonic CLTU-THROW-EVENT sequence number. Zero for the
 * first accepted event after the first successful CLTU-BIND, then incremented
 * for each accepted invocation. The provider returns the next expected value,
 * the user copies that value into the next invocation, and the expected value
 * is kept across release and abort. The provider uses it to name the event in
 * later CLTU-ASYNC-NOTIFY reports. CCSDS 912.1-B-5, section 3.11.2.5.
 * 
 * FSP uses it to name the FSP-THROW-EVENT whose action-list result is being
 * reported. It is present for action list completed, action list not completed,
 * and event condition evaluated to false, and omitted for every other
 * notification. CCSDS 912.3-B-3, section 3.7.2.5 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventInvocationId                       ::=    IntUnsignedLong
 * ```
 */
export
type EventInvocationId = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EventInvocationId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EventInvocationId: $.ASN1Decoder<EventInvocationId> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) EventInvocationId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventInvocationId, encoded as an ASN.1 Element.
 */
export const _encode_EventInvocationId: $.ASN1Encoder<EventInvocationId> = _encode_IntUnsignedLong;


/* eslint-enable */
