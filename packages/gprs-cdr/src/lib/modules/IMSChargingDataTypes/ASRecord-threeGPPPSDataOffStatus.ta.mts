/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASRecord_threeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord-threeGPPPSDataOffStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ASRecord_threeGPPPSDataOffStatus {
    active = 0,
    inactive = 1,
}

/**
 * @summary ASRecord_threeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord-threeGPPPSDataOffStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ASRecord_threeGPPPSDataOffStatus = _enum_for_ASRecord_threeGPPPSDataOffStatus;

/**
 * @summary ASRecord_threeGPPPSDataOffStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord-threeGPPPSDataOffStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ASRecord_threeGPPPSDataOffStatus = _enum_for_ASRecord_threeGPPPSDataOffStatus;

/**
 * @summary ASRecord_threeGPPPSDataOffStatus_active
 * @constant
 * @type {number}
 */
export
const ASRecord_threeGPPPSDataOffStatus_active: ASRecord_threeGPPPSDataOffStatus = ASRecord_threeGPPPSDataOffStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: ASRecord_threeGPPPSDataOffStatus = ASRecord_threeGPPPSDataOffStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ASRecord_threeGPPPSDataOffStatus_inactive
 * @constant
 * @type {number}
 */
export
const ASRecord_threeGPPPSDataOffStatus_inactive: ASRecord_threeGPPPSDataOffStatus = ASRecord_threeGPPPSDataOffStatus.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: ASRecord_threeGPPPSDataOffStatus = ASRecord_threeGPPPSDataOffStatus.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ASRecord_threeGPPPSDataOffStatus: $.ASN1Decoder<ASRecord_threeGPPPSDataOffStatus> = $._decodeEnumerated;

export
const _encode_ASRecord_threeGPPPSDataOffStatus: $.ASN1Encoder<ASRecord_threeGPPPSDataOffStatus> = $._encodeEnumerated;

/* eslint-enable */
