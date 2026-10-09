/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_immediate
 * @description
 * 
 * Immediate execution of an extended service failed or is not supported
 * (diag-1, DIAG.1 conditions 224, 225, and 226).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-immediate ::= INTEGER {
 *     -- immediate execution:
 *     failed (1),
 *     service (2),
 *     -- not supported for this service,
 *     parameters (3)  -- not supported for these parameters.
 * }
 * ```
 */
export
type DiagFormat_extServices_immediate = INTEGER;

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @description
 * 
 * Immediate execution failed (DIAG.1 condition 224).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_failed: DiagFormat_extServices_immediate = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @description
 * 
 * Immediate execution failed (DIAG.1 condition 224).
 * 
 * @constant
 * @type {number}
 */
export
const failed: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @description
 * 
 * Immediate execution is not supported for this service (DIAG.1 condition 225).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_service: DiagFormat_extServices_immediate = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @description
 * 
 * Immediate execution is not supported for this service (DIAG.1 condition 225).
 * 
 * @constant
 * @type {number}
 */
export
const service: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @description
 * 
 * Immediate execution is not supported for these parameters (DIAG.1 condition
 * 226).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_parameters: DiagFormat_extServices_immediate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @description
 * 
 * Immediate execution is not supported for these parameters (DIAG.1 condition
 * 226).
 * 
 * @constant
 * @type {number}
 */
export
const parameters: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_parameters; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_extServices_immediate: $.ASN1Decoder<DiagFormat_extServices_immediate> = $._decodeInteger;
export const _encode_DiagFormat_extServices_immediate: $.ASN1Encoder<DiagFormat_extServices_immediate> = $._encodeInteger;


/* eslint-enable */
