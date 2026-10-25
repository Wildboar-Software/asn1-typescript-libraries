/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_UnavailabilityCause {
    bearerServiceNotProvisioned = 1,
    teleserviceNotProvisioned = 2,
    absentSubscriber = 3,
    busySubscriber = 4,
    callBarred = 5,
    cug_Reject = 6,
}

/**
 * @summary UnavailabilityCause
 * @description
 *
 * Why a service is unavailable. Other values: service unavailable for that call
 * (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailabilityCause  ::=  ENUMERATED {
 *     bearerServiceNotProvisioned    (1),
 *     teleserviceNotProvisioned    (2),
 *     absentSubscriber    (3),
 *     busySubscriber    (4),
 *     callBarred    (5),
 *     cug-Reject    (6),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type UnavailabilityCause = _enum_for_UnavailabilityCause | ENUMERATED;

/**
 * @summary UnavailabilityCause_bearerServiceNotProvisioned
 * @description
 *
 * `bearerServiceNotProvisioned (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_bearerServiceNotProvisioned: _enum_for_UnavailabilityCause.bearerServiceNotProvisioned = _enum_for_UnavailabilityCause.bearerServiceNotProvisioned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerServiceNotProvisioned
 * @description
 *
 * `bearerServiceNotProvisioned (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const bearerServiceNotProvisioned: _enum_for_UnavailabilityCause.bearerServiceNotProvisioned = UnavailabilityCause_bearerServiceNotProvisioned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_teleserviceNotProvisioned
 * @description
 *
 * `teleserviceNotProvisioned (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_teleserviceNotProvisioned: _enum_for_UnavailabilityCause.teleserviceNotProvisioned = _enum_for_UnavailabilityCause.teleserviceNotProvisioned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teleserviceNotProvisioned
 * @description
 *
 * `teleserviceNotProvisioned (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const teleserviceNotProvisioned: _enum_for_UnavailabilityCause.teleserviceNotProvisioned = UnavailabilityCause_teleserviceNotProvisioned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_absentSubscriber
 * @description
 *
 * `absentSubscriber (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_absentSubscriber: _enum_for_UnavailabilityCause.absentSubscriber = _enum_for_UnavailabilityCause.absentSubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absentSubscriber
 * @description
 *
 * `absentSubscriber (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const absentSubscriber: _enum_for_UnavailabilityCause.absentSubscriber = UnavailabilityCause_absentSubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_busySubscriber
 * @description
 *
 * `busySubscriber (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_busySubscriber: _enum_for_UnavailabilityCause.busySubscriber = _enum_for_UnavailabilityCause.busySubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busySubscriber
 * @description
 *
 * `busySubscriber (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const busySubscriber: _enum_for_UnavailabilityCause.busySubscriber = UnavailabilityCause_busySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_callBarred
 * @description
 *
 * `callBarred (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_callBarred: _enum_for_UnavailabilityCause.callBarred = _enum_for_UnavailabilityCause.callBarred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBarred
 * @description
 *
 * `callBarred (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const callBarred: _enum_for_UnavailabilityCause.callBarred = UnavailabilityCause_callBarred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_cug_Reject
 * @description
 *
 * `cug-Reject (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_cug_Reject: _enum_for_UnavailabilityCause.cug_Reject = _enum_for_UnavailabilityCause.cug_Reject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cug_Reject
 * @description
 *
 * `cug-Reject (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const cug_Reject: _enum_for_UnavailabilityCause.cug_Reject = UnavailabilityCause_cug_Reject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) UnavailabilityCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnavailabilityCause: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UnavailabilityCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailabilityCause, encoded as an ASN.1 Element.
 */
export const _encode_UnavailabilityCause: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
