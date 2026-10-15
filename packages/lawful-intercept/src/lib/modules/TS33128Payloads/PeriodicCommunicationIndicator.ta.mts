/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * Indicates whether the UE communicates periodically or on demand, if
 * available. See TS 38.413 [23] clause 9.3.1.144.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the UE communicates periodically or on demand, if
 * available. See TS 38.413 [23] clause 9.3.1.144.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the UE communicates periodically or on demand, if
 * available. See TS 38.413 [23] clause 9.3.1.144.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
export const _decode_PeriodicCommunicationIndicator: $.ASN1Decoder<PeriodicCommunicationIndicator> = $._decodeEnumerated;
export const _encode_PeriodicCommunicationIndicator: $.ASN1Encoder<PeriodicCommunicationIndicator> = $._encodeEnumerated;


/* eslint-enable */
