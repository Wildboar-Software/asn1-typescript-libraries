/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingPerIPCANSessionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingPerIPCANSessionIndicator  ::=  ENUMERATED {
 *    inactive    ( 0 ),
 *    active      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargingPerIPCANSessionIndicator {
    inactive = 0,
    active = 1,
}

/**
 * @summary ChargingPerIPCANSessionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingPerIPCANSessionIndicator  ::=  ENUMERATED {
 *    inactive    ( 0 ),
 *    active      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChargingPerIPCANSessionIndicator = _enum_for_ChargingPerIPCANSessionIndicator;

/**
 * @summary ChargingPerIPCANSessionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingPerIPCANSessionIndicator  ::=  ENUMERATED {
 *    inactive    ( 0 ),
 *    active      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChargingPerIPCANSessionIndicator = _enum_for_ChargingPerIPCANSessionIndicator;

/**
 * @summary ChargingPerIPCANSessionIndicator_inactive
 * @constant
 * @type {number}
 */
export
const ChargingPerIPCANSessionIndicator_inactive: ChargingPerIPCANSessionIndicator = ChargingPerIPCANSessionIndicator.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: ChargingPerIPCANSessionIndicator = ChargingPerIPCANSessionIndicator.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargingPerIPCANSessionIndicator_active
 * @constant
 * @type {number}
 */
export
const ChargingPerIPCANSessionIndicator_active: ChargingPerIPCANSessionIndicator = ChargingPerIPCANSessionIndicator.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: ChargingPerIPCANSessionIndicator = ChargingPerIPCANSessionIndicator.active; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargingPerIPCANSessionIndicator: $.ASN1Decoder<ChargingPerIPCANSessionIndicator> = $._decodeEnumerated;

export
const _encode_ChargingPerIPCANSessionIndicator: $.ASN1Encoder<ChargingPerIPCANSessionIndicator> = $._encodeEnumerated;

/* eslint-enable */
