/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary ParameterValues_defaultCOPriority
 * @description
 *
 * Agreed default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-defaultCOPriority ::= INTEGER { normal (0), high (1), urgent (2) }
 * ```
 */
export
type ParameterValues_defaultCOPriority = INTEGER;

/**
 * @summary ParameterValues_defaultCOPriority_normal
 * @description
 *
 * `normal` default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_normal = 0 satisfies ParameterValues_defaultCOPriority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_normal
 * @description
 *
 * `normal` default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 * @type {number}
 */
export
const normal = ParameterValues_defaultCOPriority_normal satisfies ParameterValues_defaultCOPriority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_high
 * @description
 *
 * `high` default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_high = 1 satisfies ParameterValues_defaultCOPriority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_high
 * @description
 *
 * `high` default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 * @type {number}
 */
export
const high = ParameterValues_defaultCOPriority_high satisfies ParameterValues_defaultCOPriority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_urgent
 * @description
 *
 * `urgent` default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_urgent = 2 satisfies ParameterValues_defaultCOPriority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_urgent
 * @description
 *
 * `urgent` default-CO priority. Same meaning as CO-priority. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 * @type {number}
 */
export
const urgent = ParameterValues_defaultCOPriority_urgent satisfies ParameterValues_defaultCOPriority; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_defaultCOPriority = $._decodeInteger;
export const _encode_ParameterValues_defaultCOPriority = $._encodeInteger;


/* eslint-enable */
