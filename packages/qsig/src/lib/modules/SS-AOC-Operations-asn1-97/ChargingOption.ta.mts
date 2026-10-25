/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ChargingOption
 * @description
 *
 * Charging policy returned for call transfer (ECMA-212 §6.6.2.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingOption  ::=  ENUMERATED {
 *     aocFreeOfCharge(0),
 *     aocContinueCharging(1),
 *     aocStopCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargingOption {
    aocFreeOfCharge = 0,
    aocContinueCharging = 1,
    aocStopCharging = 2,
}

/**
 * @summary ChargingOption
 * @description
 *
 * Charging policy returned for call transfer (ECMA-212 §6.6.2.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingOption  ::=  ENUMERATED {
 *     aocFreeOfCharge(0),
 *     aocContinueCharging(1),
 *     aocStopCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ChargingOption = _enum_for_ChargingOption;

/**
 * @summary ChargingOption
 * @description
 *
 * Charging policy returned for call transfer (ECMA-212 §6.6.2.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingOption  ::=  ENUMERATED {
 *     aocFreeOfCharge(0),
 *     aocContinueCharging(1),
 *     aocStopCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ChargingOption = _enum_for_ChargingOption;

/**
 * @summary ChargingOption_aocFreeOfCharge
 * @description
 *
 * User A is not charged for the call before or after the transfer. The Gateway
 * then returns to idle (ECMA-212 §6.6.2.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargingOption_aocFreeOfCharge = ChargingOption.aocFreeOfCharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocFreeOfCharge
 * @description Alias of {@link ChargingOption_aocFreeOfCharge}.
 * @constant
 * @type {number}
 */
export
const aocFreeOfCharge = ChargingOption.aocFreeOfCharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingOption_aocContinueCharging
 * @description
 *
 * User A is charged both before and after the transfer. If final charge
 * provision is in operation, the final charge waits until the transferred call
 * ends (ECMA-212 §6.6.2.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargingOption_aocContinueCharging = ChargingOption.aocContinueCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocContinueCharging
 * @description Alias of {@link ChargingOption_aocContinueCharging}.
 * @constant
 * @type {number}
 */
export
const aocContinueCharging = ChargingOption.aocContinueCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingOption_aocStopCharging
 * @description
 *
 * User A is charged only for the call prior to transfer. If interim or final
 * provision is in operation, an aocFinal follows (ECMA-212 §6.6.2.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const ChargingOption_aocStopCharging = ChargingOption.aocStopCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocStopCharging
 * @description Alias of {@link ChargingOption_aocStopCharging}.
 * @constant
 * @type {number}
 */
export
const aocStopCharging = ChargingOption.aocStopCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargingOption: $.ASN1Decoder<ChargingOption> = $._decodeEnumerated;

export
const _encode_ChargingOption: $.ASN1Encoder<ChargingOption> = $._encodeEnumerated;

/* eslint-enable */
