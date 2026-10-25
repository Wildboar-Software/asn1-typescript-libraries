/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASRecord_threeGPPPSDataOffStatus
 * @description
 *
 * 3GPP PS Data Off status of the registration, when the AS has it, as
 * defined in TS 23.228 (clause 6.1.3.9 and clause 6.3.1.1). TS 32.260 does
 * not further define active and inactive.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.9.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord-threeGPPPSDataOffStatus ::= ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 )
 * }
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
 * 3GPP PS Data Off status of the registration, when the AS has it, as
 * defined in TS 23.228 (clause 6.1.3.9 and clause 6.3.1.1). TS 32.260 does
 * not further define active and inactive.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.9.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord-threeGPPPSDataOffStatus ::= ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 )
 * }
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
 * 3GPP PS Data Off status of the registration, when the AS has it, as
 * defined in TS 23.228 (clause 6.1.3.9 and clause 6.3.1.1). TS 32.260 does
 * not further define active and inactive.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.9.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord-threeGPPPSDataOffStatus ::= ENUMERATED {
 *    active      ( 0 ),
 *    inactive    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ASRecord_threeGPPPSDataOffStatus = _enum_for_ASRecord_threeGPPPSDataOffStatus;

/**
 * @summary ASRecord_threeGPPPSDataOffStatus_active
 * @description
 *
 * 3GPP PS Data Off is active for the registration, as defined in TS 23.228
 * (clause 6.1.3.9). TS 32.260 does not further define this value..
 *
 * @constant
 * @type {number}
 */
export
const ASRecord_threeGPPPSDataOffStatus_active = ASRecord_threeGPPPSDataOffStatus.active satisfies ASRecord_threeGPPPSDataOffStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @description
 *
 * 3GPP PS Data Off is active for the registration, as defined in TS 23.228
 * (clause 6.1.3.9). TS 32.260 does not further define this value..
 *
 * @constant
 * @type {number}
 */
export
const active = ASRecord_threeGPPPSDataOffStatus.active satisfies ASRecord_threeGPPPSDataOffStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ASRecord_threeGPPPSDataOffStatus_inactive
 * @description
 *
 * 3GPP PS Data Off is inactive for the registration, as defined in TS
 * 23.228 (clause 6.1.3.9). TS 32.260 does not further define this value.
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const ASRecord_threeGPPPSDataOffStatus_inactive = ASRecord_threeGPPPSDataOffStatus.inactive satisfies ASRecord_threeGPPPSDataOffStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @description
 *
 * 3GPP PS Data Off is inactive for the registration, as defined in TS
 * 23.228 (clause 6.1.3.9). TS 32.260 does not further define this value.
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const inactive = ASRecord_threeGPPPSDataOffStatus.inactive satisfies ASRecord_threeGPPPSDataOffStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ASRecord_threeGPPPSDataOffStatus: $.ASN1Decoder<ASRecord_threeGPPPSDataOffStatus> = $._decodeEnumerated;

export
const _encode_ASRecord_threeGPPPSDataOffStatus: $.ASN1Encoder<ASRecord_threeGPPPSDataOffStatus> = $._encodeEnumerated;

/* eslint-enable */
