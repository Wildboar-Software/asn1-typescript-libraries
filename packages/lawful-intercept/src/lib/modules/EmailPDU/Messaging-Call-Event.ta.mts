/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * A call event related to the unified-messaging system. The only named event is
 * `callout`. The enumeration is extensible. Table 5 does not list this event as
 * requiring captured content.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Call_Event {
    /**
     * The target instructed the UM system to set up a call with the sender of a
     * messaging event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.5.
     */
    callout = 1,
}

/**
 * @summary Messaging_Call_Event
 * @description
 *
 * A call event related to the unified-messaging system. The only named event is
 * `callout`. The enumeration is extensible. Table 5 does not list this event as
 * requiring captured content.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * @description
 *
 * The target instructed the UM system to set up a call with the sender of a
 * messaging event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.5.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Call_Event_callout = _enum_for_Messaging_Call_Event.callout satisfies Messaging_Call_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callout
 * @description
 *
 * The target instructed the UM system to set up a call with the sender of a
 * messaging event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.5.
 *
 * @constant
 * @type {number}
 */
export
const callout = Messaging_Call_Event_callout satisfies Messaging_Call_Event; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Call_Event: $.ASN1Decoder<Messaging_Call_Event> = $._decodeEnumerated;
export const _encode_Messaging_Call_Event: $.ASN1Encoder<Messaging_Call_Event> = $._encodeEnumerated;


/* eslint-enable */
