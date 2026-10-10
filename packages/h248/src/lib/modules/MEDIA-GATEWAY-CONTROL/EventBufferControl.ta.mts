/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EventBufferControl {
    off = 0,
    lockStep = 1,
}

/**
 * @summary EventBufferControl
 * @description
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
