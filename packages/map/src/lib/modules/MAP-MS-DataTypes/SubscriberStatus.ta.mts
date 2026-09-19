/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriberStatus
 * @description
 *
 * Barring status of the subscriber: service granted, or Operator Determined
 * Barring.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.7 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberStatus  ::=  ENUMERATED {
 *     serviceGranted  (0),
 *     operatorDeterminedBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriberStatus {
    serviceGranted = 0,
    operatorDeterminedBarring = 1,
}

/**
 * @summary SubscriberStatus
 * @description
 *
 * Barring status of the subscriber: service granted, or Operator Determined
 * Barring.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.7 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberStatus  ::=  ENUMERATED {
 *     serviceGranted  (0),
 *     operatorDeterminedBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type SubscriberStatus = _enum_for_SubscriberStatus;

/**
 * @summary SubscriberStatus
 * @description
 *
 * Barring status of the subscriber: service granted, or Operator Determined
 * Barring.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.7 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberStatus  ::=  ENUMERATED {
 *     serviceGranted  (0),
 *     operatorDeterminedBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const SubscriberStatus = _enum_for_SubscriberStatus;

/**
 * @summary SubscriberStatus_serviceGranted
 * @constant
 * @type {number}
 */
export
const SubscriberStatus_serviceGranted: SubscriberStatus = SubscriberStatus.serviceGranted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceGranted
 * @constant
 * @type {number}
 */
export
const serviceGranted: SubscriberStatus = SubscriberStatus.serviceGranted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberStatus_operatorDeterminedBarring
 * @constant
 * @type {number}
 */
export
const SubscriberStatus_operatorDeterminedBarring: SubscriberStatus = SubscriberStatus.operatorDeterminedBarring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorDeterminedBarring
 * @constant
 * @type {number}
 */
export
const operatorDeterminedBarring: SubscriberStatus = SubscriberStatus.operatorDeterminedBarring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubscriberStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SubscriberStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberStatus, encoded as an ASN.1 Element.
 */
export const _encode_SubscriberStatus = $._encodeEnumerated;


/* eslint-enable */
