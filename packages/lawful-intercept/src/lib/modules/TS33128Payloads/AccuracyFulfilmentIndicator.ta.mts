/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 * 
 * The AccuracyFulfilmentIndicator indicates whether the requested accuracy was
 * fulfilled or not the AccuracyFulfilmentIndicator is derived from the data
 * present in the AccuracyFulfilmentIndicator type defined in TS 29.572 [24]
 * clause 6.1.6.3.12.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED
 * {
 *     requestedAccuracyFulfilled(1),
 *     requestedAccuracyNotFulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccuracyFulfilmentIndicator {
    /**
     * @description
     *
     * Requested accuracy is fulfilled.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.51.
     */
    requestedAccuracyFulfilled = 1,
    /**
     * @description
     *
     * Requested accuracy is not fulfilled.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.51.
     */
    requestedAccuracyNotFulfilled = 2,
}

/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 * 
 * The AccuracyFulfilmentIndicator indicates whether the requested accuracy was
 * fulfilled or not the AccuracyFulfilmentIndicator is derived from the data
 * present in the AccuracyFulfilmentIndicator type defined in TS 29.572 [24]
 * clause 6.1.6.3.12.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED
 * {
 *     requestedAccuracyFulfilled(1),
 *     requestedAccuracyNotFulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;

/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 * 
 * The AccuracyFulfilmentIndicator indicates whether the requested accuracy was
 * fulfilled or not the AccuracyFulfilmentIndicator is derived from the data
 * present in the AccuracyFulfilmentIndicator type defined in TS 29.572 [24]
 * clause 6.1.6.3.12.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED
 * {
 *     requestedAccuracyFulfilled(1),
 *     requestedAccuracyNotFulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;

/**
 * @summary AccuracyFulfilmentIndicator_requestedAccuracyFulfilled
 * @description
 *
 * Requested accuracy is fulfilled.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 *
 * @constant
 * @type {number}
 */
export
const AccuracyFulfilmentIndicator_requestedAccuracyFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyFulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedAccuracyFulfilled
 * @description
 *
 * Requested accuracy is fulfilled.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 *
 * @constant
 * @type {number}
 */
export
const requestedAccuracyFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyFulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled
 * @description
 *
 * Requested accuracy is not fulfilled.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 *
 * @constant
 * @type {number}
 */
export
const AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedAccuracyNotFulfilled
 * @description
 *
 * Requested accuracy is not fulfilled.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.51.
 *
 * @constant
 * @type {number}
 */
export
const requestedAccuracyNotFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccuracyFulfilmentIndicator: $.ASN1Decoder<AccuracyFulfilmentIndicator> = $._decodeEnumerated;
export const _encode_AccuracyFulfilmentIndicator: $.ASN1Encoder<AccuracyFulfilmentIndicator> = $._encodeEnumerated;


/* eslint-enable */
