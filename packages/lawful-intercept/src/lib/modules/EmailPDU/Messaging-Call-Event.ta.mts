/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Call_Event {
    callout = 1,
}

/**
 * @summary Messaging_Call_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Call-Event  ::=  ENUMERATED
 * {
 *     callout(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Call_Event = _enum_for_Messaging_Call_Event | ENUMERATED;

/**
 * @summary Messaging_Call_Event_callout
 * @constant
 * @type {number}
 */
export
const Messaging_Call_Event_callout: Messaging_Call_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callout
 * @constant
 * @type {number}
 */
export
const callout: Messaging_Call_Event = Messaging_Call_Event_callout; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Call_Event: $.ASN1Decoder<Messaging_Call_Event> = $._decodeEnumerated;
export const _encode_Messaging_Call_Event: $.ASN1Encoder<Messaging_Call_Event> = $._encodeEnumerated;


/* eslint-enable */
