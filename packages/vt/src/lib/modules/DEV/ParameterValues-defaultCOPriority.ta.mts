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
 * @summary ParameterValues_defaultCOPriority
 * @description
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
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_normal: ParameterValues_defaultCOPriority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_normal
 * @constant
 * @type {number}
 */
export
const normal: ParameterValues_defaultCOPriority = ParameterValues_defaultCOPriority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_high
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_high: ParameterValues_defaultCOPriority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_high
 * @constant
 * @type {number}
 */
export
const high: ParameterValues_defaultCOPriority = ParameterValues_defaultCOPriority_high; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_urgent
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_urgent: ParameterValues_defaultCOPriority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_urgent
 * @constant
 * @type {number}
 */
export
const urgent: ParameterValues_defaultCOPriority = ParameterValues_defaultCOPriority_urgent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_defaultCOPriority = $._decodeInteger;
export const _encode_ParameterValues_defaultCOPriority = $._encodeInteger;


/* eslint-enable */
