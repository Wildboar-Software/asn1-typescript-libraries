/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScfTaskRefusedParameter_Type_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfTaskRefusedParameter-Type-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ScfTaskRefusedParameter_Type_reason {
    generic = 0,
    unobtainable = 1,
    congestion = 2,
}

/**
 * @summary ScfTaskRefusedParameter_Type_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfTaskRefusedParameter-Type-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ScfTaskRefusedParameter_Type_reason = _enum_for_ScfTaskRefusedParameter_Type_reason;

/**
 * @summary ScfTaskRefusedParameter_Type_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfTaskRefusedParameter-Type-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ScfTaskRefusedParameter_Type_reason = _enum_for_ScfTaskRefusedParameter_Type_reason;

/**
 * @summary ScfTaskRefusedParameter_Type_reason_generic
 * @constant
 * @type {number}
 */
export
const ScfTaskRefusedParameter_Type_reason_generic: ScfTaskRefusedParameter_Type_reason = ScfTaskRefusedParameter_Type_reason.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: ScfTaskRefusedParameter_Type_reason = ScfTaskRefusedParameter_Type_reason.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScfTaskRefusedParameter_Type_reason_unobtainable
 * @constant
 * @type {number}
 */
export
const ScfTaskRefusedParameter_Type_reason_unobtainable: ScfTaskRefusedParameter_Type_reason = ScfTaskRefusedParameter_Type_reason.unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unobtainable
 * @constant
 * @type {number}
 */
export
const unobtainable: ScfTaskRefusedParameter_Type_reason = ScfTaskRefusedParameter_Type_reason.unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScfTaskRefusedParameter_Type_reason_congestion
 * @constant
 * @type {number}
 */
export
const ScfTaskRefusedParameter_Type_reason_congestion: ScfTaskRefusedParameter_Type_reason = ScfTaskRefusedParameter_Type_reason.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: ScfTaskRefusedParameter_Type_reason = ScfTaskRefusedParameter_Type_reason.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ScfTaskRefusedParameter_Type_reason: $.ASN1Decoder<ScfTaskRefusedParameter_Type_reason> = $._decodeEnumerated;

export
const _encode_ScfTaskRefusedParameter_Type_reason: $.ASN1Encoder<ScfTaskRefusedParameter_Type_reason> = $._encodeEnumerated;

/* eslint-enable */
