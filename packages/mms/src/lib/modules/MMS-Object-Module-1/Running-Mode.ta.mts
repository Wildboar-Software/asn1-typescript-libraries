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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Running_Mode
 * @description
 * 
 * csr CBB, controlling PIs only. free-run
 * until a local/remote event stops it; cycle-limited until remaining
 * cycle count reaches 0 (then idle); step-limited until remaining step
 * count reaches 0 (then stopped; typically debug). ISO 9506-1:2003 §12.1.1.16.
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
 * @description
 *
 * Stay running until a local or remote event stops execution. ISO 9506-1:2003
 * §12.1.1.16.
 *
 * @constant
 * @type {number}
 */
export
const Running_Mode_free_run: 0 = 0 satisfies Running_Mode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_free_run
 * @description
 *
 * Stay running until a local or remote event stops execution. ISO 9506-1:2003
 * §12.1.1.16.
 *
 * @constant
 * @type {number}
 */
export
const free_run: 0 = Running_Mode_free_run; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_cycle_limited
 * @description
 *
 * Stop and return to idle when remaining cycle count reaches 0. ISO 9506-1:2003
 * §12.1.1.16.
 *
 * @constant
 * @type {number}
 */
export
const Running_Mode_cycle_limited: 1 = 1 satisfies Running_Mode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_cycle_limited
 * @description
 *
 * Stop and return to idle when remaining cycle count reaches 0. ISO 9506-1:2003
 * §12.1.1.16.
 *
 * @constant
 * @type {number}
 */
export
const cycle_limited: 1 = Running_Mode_cycle_limited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_step_limited
 * @description
 *
 * Stop (stopped state) when remaining step count reaches 0; typically debug.
 * ISO 9506-1:2003 §12.1.1.16.
 *
 * @constant
 * @type {number}
 */
export
const Running_Mode_step_limited: 2 = 2 satisfies Running_Mode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_step_limited
 * @description
 *
 * Stop (stopped state) when remaining step count reaches 0; typically debug.
 * ISO 9506-1:2003 §12.1.1.16.
 *
 * @constant
 * @type {number}
 */
export
const step_limited: 2 = Running_Mode_step_limited; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Running_Mode: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_Running_Mode: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
