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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Running_Mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Running-Mode  ::=  INTEGER {
 *     free-run         (0),
 *     cycle-limited    (1),
 *     step-limited     (2)
 * } (0..2)
 * ```
 */
export
type Running_Mode = INTEGER;

/**
 * @summary Running_Mode_free_run
 * @constant
 * @type {number}
 */
export
const Running_Mode_free_run: Running_Mode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_free_run
 * @constant
 * @type {number}
 */
export
const free_run: Running_Mode = Running_Mode_free_run; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_cycle_limited
 * @constant
 * @type {number}
 */
export
const Running_Mode_cycle_limited: Running_Mode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_cycle_limited
 * @constant
 * @type {number}
 */
export
const cycle_limited: Running_Mode = Running_Mode_cycle_limited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_step_limited
 * @constant
 * @type {number}
 */
export
const Running_Mode_step_limited: Running_Mode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_step_limited
 * @constant
 * @type {number}
 */
export
const step_limited: Running_Mode = Running_Mode_step_limited; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Running_Mode = $._decodeInteger;
export const _encode_Running_Mode = $._encodeInteger;


/* eslint-enable */
