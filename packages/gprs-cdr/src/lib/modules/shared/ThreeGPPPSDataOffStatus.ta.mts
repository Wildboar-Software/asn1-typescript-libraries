/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ThreeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPPPSDataOffStatus  ::=  ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ThreeGPPPSDataOffStatus {
    active = 0,
    inactive = 1,
}

/**
 * @summary ThreeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPPPSDataOffStatus  ::=  ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ThreeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;

/**
 * @summary ThreeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPPPSDataOffStatus  ::=  ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ThreeGPPPSDataOffStatus: typeof _enum_for_ThreeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;

/**
 * @summary ThreeGPPPSDataOffStatus_active
 * @constant
 * @type {number}
 */
export
const ThreeGPPPSDataOffStatus_active: _enum_for_ThreeGPPPSDataOffStatus.active = ThreeGPPPSDataOffStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: _enum_for_ThreeGPPPSDataOffStatus.active = ThreeGPPPSDataOffStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ThreeGPPPSDataOffStatus_inactive
 * @constant
 * @type {number}
 */
export
const ThreeGPPPSDataOffStatus_inactive: _enum_for_ThreeGPPPSDataOffStatus.inactive = ThreeGPPPSDataOffStatus.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: _enum_for_ThreeGPPPSDataOffStatus.inactive = ThreeGPPPSDataOffStatus.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ThreeGPPPSDataOffStatus: $.ASN1Decoder<ThreeGPPPSDataOffStatus> = $._decodeEnumerated;

export
const _encode_ThreeGPPPSDataOffStatus: $.ASN1Encoder<ThreeGPPPSDataOffStatus> = $._encodeEnumerated;

/* eslint-enable */
