/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingOption
 * @description
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
 * @constant
 * @type {number}
 */
export
const ChargingOption_aocFreeOfCharge: ChargingOption = ChargingOption.aocFreeOfCharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocFreeOfCharge
 * @constant
 * @type {number}
 */
export
const aocFreeOfCharge: ChargingOption = ChargingOption.aocFreeOfCharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingOption_aocContinueCharging
 * @constant
 * @type {number}
 */
export
const ChargingOption_aocContinueCharging: ChargingOption = ChargingOption.aocContinueCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocContinueCharging
 * @constant
 * @type {number}
 */
export
const aocContinueCharging: ChargingOption = ChargingOption.aocContinueCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingOption_aocStopCharging
 * @constant
 * @type {number}
 */
export
const ChargingOption_aocStopCharging: ChargingOption = ChargingOption.aocStopCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocStopCharging
 * @constant
 * @type {number}
 */
export
const aocStopCharging: ChargingOption = ChargingOption.aocStopCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargingOption: $.ASN1Decoder<ChargingOption> = $._decodeEnumerated;

export
const _encode_ChargingOption: $.ASN1Encoder<ChargingOption> = $._encodeEnumerated;

/* eslint-enable */
