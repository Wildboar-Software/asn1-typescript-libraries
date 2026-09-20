/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlertReason
 * @description
 *
 * ms-Present or memoryAvailable (3GPP TS 29.002 V19.1.0 clauses 12.4 and
 * 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertReason  ::=  ENUMERATED {
 *     ms-Present  (0),
 *     memoryAvailable  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AlertReason {
    ms_Present = 0,
    memoryAvailable = 1,
}

/**
 * @summary AlertReason
 * @description
 *
 * ms-Present or memoryAvailable (3GPP TS 29.002 V19.1.0 clauses 12.4 and
 * 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertReason  ::=  ENUMERATED {
 *     ms-Present  (0),
 *     memoryAvailable  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type AlertReason = _enum_for_AlertReason;

/**
 * @summary AlertReason
 * @description
 *
 * ms-Present or memoryAvailable (3GPP TS 29.002 V19.1.0 clauses 12.4 and
 * 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertReason  ::=  ENUMERATED {
 *     ms-Present  (0),
 *     memoryAvailable  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const AlertReason = _enum_for_AlertReason;

/**
 * @summary AlertReason_ms_Present
 * @description
 *
 * `ms-Present (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const AlertReason_ms_Present: AlertReason = AlertReason.ms_Present; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ms_Present
 * @description
 *
 * `ms-Present (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const ms_Present: AlertReason = AlertReason.ms_Present; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertReason_memoryAvailable
 * @description
 *
 * `memoryAvailable (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const AlertReason_memoryAvailable: AlertReason = AlertReason.memoryAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary memoryAvailable
 * @description
 *
 * `memoryAvailable (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const memoryAvailable: AlertReason = AlertReason.memoryAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AlertReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AlertReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AlertReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertReason, encoded as an ASN.1 Element.
 */
export const _encode_AlertReason = $._encodeEnumerated;


/* eslint-enable */
