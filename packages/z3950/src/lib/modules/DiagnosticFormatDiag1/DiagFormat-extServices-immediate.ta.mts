/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_immediate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-immediate ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices_immediate = INTEGER;

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_failed: DiagFormat_extServices_immediate = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @constant
 * @type {number}
 */
export
const failed: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_service: DiagFormat_extServices_immediate = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @constant
 * @type {number}
 */
export
const service: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_parameters: DiagFormat_extServices_immediate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @constant
 * @type {number}
 */
export
const parameters: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_parameters; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_extServices_immediate = $._decodeInteger;
export const _encode_DiagFormat_extServices_immediate = $._encodeInteger;


/* eslint-enable */
