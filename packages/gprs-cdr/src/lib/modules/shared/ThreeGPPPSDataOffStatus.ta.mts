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
const ThreeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;

/**
 * @summary ThreeGPPPSDataOffStatus_active
 * @constant
 * @type {number}
 */
export
const ThreeGPPPSDataOffStatus_active = ThreeGPPPSDataOffStatus.active satisfies ThreeGPPPSDataOffStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active = ThreeGPPPSDataOffStatus.active satisfies ThreeGPPPSDataOffStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ThreeGPPPSDataOffStatus_inactive
 * @constant
 * @type {number}
 */
export
const ThreeGPPPSDataOffStatus_inactive = ThreeGPPPSDataOffStatus.inactive satisfies ThreeGPPPSDataOffStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive = ThreeGPPPSDataOffStatus.inactive satisfies ThreeGPPPSDataOffStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ThreeGPPPSDataOffStatus: $.ASN1Decoder<ThreeGPPPSDataOffStatus> = $._decodeEnumerated;

export
const _encode_ThreeGPPPSDataOffStatus: $.ASN1Encoder<ThreeGPPPSDataOffStatus> = $._encodeEnumerated;

/* eslint-enable */
