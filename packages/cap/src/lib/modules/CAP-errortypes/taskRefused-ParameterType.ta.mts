/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary taskRefused_ParameterType
 * @description
 *
 * Parameter of `taskRefused`: `generic` (0), `unobtainable` (1),
 * `congestion` (2). Includes congestion and unobtainable address as used
 * e.g. on Connect.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= SEQUENCE {
 *     generic			(0),
 *     unobtainable		(1),
 *     congestion			(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_taskRefused_ParameterType {
    generic = 0,
    unobtainable = 1,
    congestion = 2,
}

/**
 * @summary taskRefused_ParameterType
 * @description
 *
 * Parameter of `taskRefused`: `generic` (0), `unobtainable` (1),
 * `congestion` (2). Includes congestion and unobtainable address as used
 * e.g. on Connect.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= SEQUENCE {
 *     generic			(0),
 *     unobtainable		(1),
 *     congestion			(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type taskRefused_ParameterType = _enum_for_taskRefused_ParameterType;

/**
 * @summary taskRefused_ParameterType
 * @description
 *
 * Parameter of `taskRefused`: `generic` (0), `unobtainable` (1),
 * `congestion` (2). Includes congestion and unobtainable address as used
 * e.g. on Connect.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= SEQUENCE {
 *     generic			(0),
 *     unobtainable		(1),
 *     congestion			(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const taskRefused_ParameterType = _enum_for_taskRefused_ParameterType;

/**
 * @summary taskRefused_ParameterType_generic
 * @description
 *
 * Generic refusal; the entity will not perform the task at this time.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description
 *
 * Generic refusal; the entity will not perform the task at this time.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * @constant
 * @type {number}
 */
export
const generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_unobtainable
 * @description
 *
 * Unobtainable address, as used e.g. on Connect.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unobtainable
 * @description
 *
 * Unobtainable address, as used e.g. on Connect.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * @constant
 * @type {number}
 */
export
const unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_congestion
 * @description
 *
 * Congestion at the serving entity.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @description
 *
 * Congestion at the serving entity.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.10).
 *
 * @constant
 * @type {number}
 */
export
const congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_taskRefused_ParameterType = $._decodeEnumerated;
export const _encode_taskRefused_ParameterType = $._encodeEnumerated;


/* eslint-enable */
