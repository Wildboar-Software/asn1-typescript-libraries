/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMTelRecord_threeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-threeGPPPSDataOffStatus ::= ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMTelRecord_threeGPPPSDataOffStatus {
    active = 0,
    inactive = 1,
}

/**
 * @summary MMTelRecord_threeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-threeGPPPSDataOffStatus ::= ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMTelRecord_threeGPPPSDataOffStatus = _enum_for_MMTelRecord_threeGPPPSDataOffStatus;

/**
 * @summary MMTelRecord_threeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-threeGPPPSDataOffStatus ::= ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMTelRecord_threeGPPPSDataOffStatus: typeof _enum_for_MMTelRecord_threeGPPPSDataOffStatus = _enum_for_MMTelRecord_threeGPPPSDataOffStatus;

/**
 * @summary MMTelRecord_threeGPPPSDataOffStatus_active
 * @constant
 * @type {number}
 */
export
const MMTelRecord_threeGPPPSDataOffStatus_active: _enum_for_MMTelRecord_threeGPPPSDataOffStatus.active = MMTelRecord_threeGPPPSDataOffStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: _enum_for_MMTelRecord_threeGPPPSDataOffStatus.active = MMTelRecord_threeGPPPSDataOffStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMTelRecord_threeGPPPSDataOffStatus_inactive
 * @constant
 * @type {number}
 */
export
const MMTelRecord_threeGPPPSDataOffStatus_inactive: _enum_for_MMTelRecord_threeGPPPSDataOffStatus.inactive = MMTelRecord_threeGPPPSDataOffStatus.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: _enum_for_MMTelRecord_threeGPPPSDataOffStatus.inactive = MMTelRecord_threeGPPPSDataOffStatus.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMTelRecord_threeGPPPSDataOffStatus: $.ASN1Decoder<MMTelRecord_threeGPPPSDataOffStatus> = $._decodeEnumerated;

export
const _encode_MMTelRecord_threeGPPPSDataOffStatus: $.ASN1Encoder<MMTelRecord_threeGPPPSDataOffStatus> = $._encodeEnumerated;

/* eslint-enable */
