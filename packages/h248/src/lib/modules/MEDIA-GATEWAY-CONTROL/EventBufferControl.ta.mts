/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EventBufferControl {
    /**
     * Events are processed immediately against the active Events descriptor.
     * This is the default. Setting Off discards anything already buffered
     * (clauses 7.1.5.1.2 and 7.1.9.4).
     */
    off = 0,
    /**
     * After a recognized event, further events that are listed in the
     * EventBuffer descriptor are queued, with detection time, until a new
     * Events descriptor arrives (clause 7.1.9.4). The queued event's Notify
     * timestamp is the detection time, not the time the new descriptor was
     * loaded.
     */
    lockStep = 1,
}

/**
 * @summary EventBufferControl
 * @description
 * 
 * Whether events that arrive after one has been recognized are queued or
 * processed at once (ITU-T Rec. H.248.1 (03/2013) clause 7.1.5.1.2 and
 * 7.1.9.4).
 *
 * Off, the default, keeps using the active Events descriptor. LockStep stops
 * ordinary handling, appends later events that appear in the EventBuffer
 * descriptor to a FIFO with their detection time, and waits for a new Events
 * descriptor. Setting Off discards the buffer. An empty Events descriptor while
 * LockStep is active also clears it.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventBufferControl  ::=  ENUMERATED
 *     {
 *         off(0),
 *         lockStep(1),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type EventBufferControl = _enum_for_EventBufferControl | ENUMERATED;

/**
 * @summary EventBufferControl_off
 * @description
 *
 * Events are processed immediately against the active Events descriptor. This
 * is the default. Setting Off discards anything already buffered (clauses
 * 7.1.5.1.2 and 7.1.9.4).
 *
 * @constant
 * @type {number}
 */
export
const EventBufferControl_off: EventBufferControl = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off
 * @constant
 * @type {number}
 */
export
const off: EventBufferControl = EventBufferControl_off; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventBufferControl_lockStep
 * @description
 *
 * After a recognized event, further events that are listed in the EventBuffer
 * descriptor are queued, with detection time, until a new Events descriptor
 * arrives (clause 7.1.9.4). The queued event's Notify timestamp is the
 * detection time, not the time the new descriptor was loaded.
 *
 * @constant
 * @type {number}
 */
export
const EventBufferControl_lockStep: EventBufferControl = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lockStep
 * @constant
 * @type {number}
 */
export
const lockStep: EventBufferControl = EventBufferControl_lockStep; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EventBufferControl = $._decodeEnumerated;
export const _encode_EventBufferControl = $._encodeEnumerated;


/* eslint-enable */
