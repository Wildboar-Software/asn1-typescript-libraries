/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicCommunicationIndicator  ::=  ENUMERATED
 * {
 *     periodic(1),
 *     nonPeriodic(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeriodicCommunicationIndicator {
    periodic = 1,
    nonPeriodic = 2,
}

/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicCommunicationIndicator  ::=  ENUMERATED
 * {
 *     periodic(1),
 *     nonPeriodic(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PeriodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;

/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicCommunicationIndicator  ::=  ENUMERATED
 * {
 *     periodic(1),
 *     nonPeriodic(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PeriodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;

/**
 * @summary PeriodicCommunicationIndicator_periodic
 * @constant
 * @type {number}
 */
export
const PeriodicCommunicationIndicator_periodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodicCommunicationIndicator_nonPeriodic
 * @constant
 * @type {number}
 */
export
const PeriodicCommunicationIndicator_nonPeriodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.nonPeriodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonPeriodic
 * @constant
 * @type {number}
 */
export
const nonPeriodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.nonPeriodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicCommunicationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PeriodicCommunicationIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PeriodicCommunicationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicCommunicationIndicator, encoded as an ASN.1 Element.
 */
export const _encode_PeriodicCommunicationIndicator = $._encodeEnumerated;


/* eslint-enable */
