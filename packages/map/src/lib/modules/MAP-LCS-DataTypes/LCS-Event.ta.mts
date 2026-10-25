/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LCS_Event {
    emergencyCallOrigination = 0,
    emergencyCallRelease = 1,
    mo_lr = 2,
    deferredmt_lrResponse = 3,
    deferredmo_lrTTTPInitiation = 4,
    emergencyCallHandover = 5,
}

/**
 * @summary LCS_Event
 * @description
 *
 * deferredmt-lrResponse delivers an estimate for an LDR from MT-LR activate
 * deferred location or deferred MO-LR TTTP. Unrecognized value: reject with
 * unexpected data value (3GPP TS 29.002 V19.1.0 clauses 7.6.11.5 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-Event  ::=  ENUMERATED {
 *     emergencyCallOrigination  (0),
 *     emergencyCallRelease  (1), 
 *     mo-lr  (2),
 *     ...,
 *     deferredmt-lrResponse  (3) ,
 *     deferredmo-lrTTTPInitiation  (4),
 *     emergencyCallHandover (5)  }
 * ```
 * 
 * @enum {number}
 */
export
type LCS_Event = _enum_for_LCS_Event | ENUMERATED;

/**
 * @summary LCS_Event_emergencyCallOrigination
 * @description
 *
 * `emergencyCallOrigination (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_Event_emergencyCallOrigination = _enum_for_LCS_Event.emergencyCallOrigination satisfies LCS_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCallOrigination
 * @description
 *
 * `emergencyCallOrigination (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const emergencyCallOrigination = LCS_Event_emergencyCallOrigination satisfies LCS_Event; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_emergencyCallRelease
 * @description
 *
 * `emergencyCallRelease (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_Event_emergencyCallRelease = _enum_for_LCS_Event.emergencyCallRelease satisfies LCS_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCallRelease
 * @description
 *
 * `emergencyCallRelease (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const emergencyCallRelease = LCS_Event_emergencyCallRelease satisfies LCS_Event; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_mo_lr
 * @description
 *
 * `mo-lr (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_Event_mo_lr = _enum_for_LCS_Event.mo_lr satisfies LCS_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mo_lr
 * @description
 *
 * `mo-lr (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const mo_lr = LCS_Event_mo_lr satisfies LCS_Event; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_deferredmt_lrResponse
 * @description
 *
 * `deferredmt-lrResponse (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_Event_deferredmt_lrResponse = _enum_for_LCS_Event.deferredmt_lrResponse satisfies LCS_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredmt_lrResponse
 * @description
 *
 * `deferredmt-lrResponse (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const deferredmt_lrResponse = LCS_Event_deferredmt_lrResponse satisfies LCS_Event; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_deferredmo_lrTTTPInitiation
 * @description
 *
 * `deferredmo-lrTTTPInitiation (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_Event_deferredmo_lrTTTPInitiation = _enum_for_LCS_Event.deferredmo_lrTTTPInitiation satisfies LCS_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredmo_lrTTTPInitiation
 * @description
 *
 * `deferredmo-lrTTTPInitiation (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const deferredmo_lrTTTPInitiation = LCS_Event_deferredmo_lrTTTPInitiation satisfies LCS_Event; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_Event_emergencyCallHandover
 * @description
 *
 * `emergencyCallHandover (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_Event_emergencyCallHandover = _enum_for_LCS_Event.emergencyCallHandover satisfies LCS_Event; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCallHandover
 * @description
 *
 * `emergencyCallHandover (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const emergencyCallHandover = LCS_Event_emergencyCallHandover satisfies LCS_Event; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_Event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCS_Event = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LCS_Event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_Event, encoded as an ASN.1 Element.
 */
export const _encode_LCS_Event = $._encodeEnumerated;


/* eslint-enable */
