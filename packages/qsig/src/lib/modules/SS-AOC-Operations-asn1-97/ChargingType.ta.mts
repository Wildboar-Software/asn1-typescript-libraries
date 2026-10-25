/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ChargingType
 * @description
 *
 * How a duration rate accrues (ECMA-211 §A.1.3.1). Step function charges for
 * each time unit, or part of one, at the start of the unit. Continuous charging
 * accrues evenly through the unit.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingType  ::=  ENUMERATED {
 *     continuousCharging(0),
 *     stepFunction(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargingType {
    continuousCharging = 0,
    stepFunction = 1,
}

/**
 * @summary ChargingType
 * @description
 *
 * How a duration rate accrues (ECMA-211 §A.1.3.1). Step function charges for
 * each time unit, or part of one, at the start of the unit. Continuous charging
 * accrues evenly through the unit.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingType  ::=  ENUMERATED {
 *     continuousCharging(0),
 *     stepFunction(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ChargingType = _enum_for_ChargingType;

/**
 * @summary ChargingType
 * @description
 *
 * How a duration rate accrues (ECMA-211 §A.1.3.1). Step function charges for
 * each time unit, or part of one, at the start of the unit. Continuous charging
 * accrues evenly through the unit.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingType  ::=  ENUMERATED {
 *     continuousCharging(0),
 *     stepFunction(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ChargingType: typeof _enum_for_ChargingType = _enum_for_ChargingType;

/**
 * @summary ChargingType_continuousCharging
 * @description
 *
 * Charges accrue evenly throughout the time unit (ECMA-211 §A.1.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargingType_continuousCharging: _enum_for_ChargingType.continuousCharging = ChargingType.continuousCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continuousCharging
 * @description Alias of {@link ChargingType_continuousCharging}.
 * @constant
 * @type {number}
 */
export
const continuousCharging: _enum_for_ChargingType.continuousCharging = ChargingType.continuousCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingType_stepFunction
 * @description
 *
 * A charge is incurred at the start of each time unit, including a partial unit
 * (ECMA-211 §A.1.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargingType_stepFunction: _enum_for_ChargingType.stepFunction = ChargingType.stepFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stepFunction
 * @description Alias of {@link ChargingType_stepFunction}.
 * @constant
 * @type {number}
 */
export
const stepFunction: _enum_for_ChargingType.stepFunction = ChargingType.stepFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargingType: $.ASN1Decoder<ChargingType> = $._decodeEnumerated;

export
const _encode_ChargingType: $.ASN1Encoder<ChargingType> = $._encodeEnumerated;

/* eslint-enable */
