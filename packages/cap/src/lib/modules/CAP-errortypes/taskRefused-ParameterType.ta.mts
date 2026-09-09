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
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_unobtainable
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unobtainable
 * @constant
 * @type {number}
 */
export
const unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_congestion
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_taskRefused_ParameterType = $._decodeEnumerated;
export const _encode_taskRefused_ParameterType = $._encodeEnumerated;


/* eslint-enable */
