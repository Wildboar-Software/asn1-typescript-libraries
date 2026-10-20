/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingType
 * @description
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
const ChargingType = _enum_for_ChargingType;

/**
 * @summary ChargingType_continuousCharging
 * @constant
 * @type {number}
 */
export
const ChargingType_continuousCharging: ChargingType = ChargingType.continuousCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continuousCharging
 * @constant
 * @type {number}
 */
export
const continuousCharging: ChargingType = ChargingType.continuousCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingType_stepFunction
 * @constant
 * @type {number}
 */
export
const ChargingType_stepFunction: ChargingType = ChargingType.stepFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stepFunction
 * @constant
 * @type {number}
 */
export
const stepFunction: ChargingType = ChargingType.stepFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargingType: $.ASN1Decoder<ChargingType> = $._decodeEnumerated;

export
const _encode_ChargingType: $.ASN1Encoder<ChargingType> = $._encodeEnumerated;

/* eslint-enable */
