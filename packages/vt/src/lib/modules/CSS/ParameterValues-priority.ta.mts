/* eslint-disable */
import {
    INTEGER,
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
 * @summary ParameterValues_priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-priority ::= INTEGER { normal (0), high (1), urgent (2) }
 * ```
 */
export
type ParameterValues_priority = INTEGER;

/**
 * @summary ParameterValues_priority_normal
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_normal: ParameterValues_priority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_normal
 * @constant
 * @type {number}
 */
export
const normal: ParameterValues_priority = ParameterValues_priority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_high
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_high: ParameterValues_priority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_high
 * @constant
 * @type {number}
 */
export
const high: ParameterValues_priority = ParameterValues_priority_high; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_urgent
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_urgent: ParameterValues_priority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_urgent
 * @constant
 * @type {number}
 */
export
const urgent: ParameterValues_priority = ParameterValues_priority_urgent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_priority = $._decodeInteger;
export const _encode_ParameterValues_priority = $._encodeInteger;


/* eslint-enable */
