/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_DeliveryOutcome
 * @description
 *
 * memoryCapacityExceeded, absentSubscriber, or successfulTransfer (3GPP TS
 * 29.002 V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryOutcome  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     absentSubscriber  (1),
 *     successfulTransfer  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SM_DeliveryOutcome {
    memoryCapacityExceeded = 0,
    absentSubscriber = 1,
    successfulTransfer = 2,
}

/**
 * @summary SM_DeliveryOutcome
 * @description
 *
 * memoryCapacityExceeded, absentSubscriber, or successfulTransfer (3GPP TS
 * 29.002 V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryOutcome  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     absentSubscriber  (1),
 *     successfulTransfer  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type SM_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;

/**
 * @summary SM_DeliveryOutcome
 * @description
 *
 * memoryCapacityExceeded, absentSubscriber, or successfulTransfer (3GPP TS
 * 29.002 V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryOutcome  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     absentSubscriber  (1),
 *     successfulTransfer  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const SM_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;

/**
 * @summary SM_DeliveryOutcome_memoryCapacityExceeded
 * @description
 *
 * `memoryCapacityExceeded (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const SM_DeliveryOutcome_memoryCapacityExceeded: SM_DeliveryOutcome = SM_DeliveryOutcome.memoryCapacityExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary memoryCapacityExceeded
 * @description
 *
 * `memoryCapacityExceeded (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const memoryCapacityExceeded: SM_DeliveryOutcome = SM_DeliveryOutcome.memoryCapacityExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_DeliveryOutcome_absentSubscriber
 * @description
 *
 * `absentSubscriber (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const SM_DeliveryOutcome_absentSubscriber: SM_DeliveryOutcome = SM_DeliveryOutcome.absentSubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absentSubscriber
 * @description
 *
 * `absentSubscriber (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const absentSubscriber: SM_DeliveryOutcome = SM_DeliveryOutcome.absentSubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_DeliveryOutcome_successfulTransfer
 * @description
 *
 * `successfulTransfer (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const SM_DeliveryOutcome_successfulTransfer: SM_DeliveryOutcome = SM_DeliveryOutcome.successfulTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successfulTransfer
 * @description
 *
 * `successfulTransfer (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * @constant
 * @type {number}
 */
export
const successfulTransfer: SM_DeliveryOutcome = SM_DeliveryOutcome.successfulTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SM_DeliveryOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_DeliveryOutcome = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SM_DeliveryOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_DeliveryOutcome, encoded as an ASN.1 Element.
 */
export const _encode_SM_DeliveryOutcome = $._encodeEnumerated;


/* eslint-enable */
