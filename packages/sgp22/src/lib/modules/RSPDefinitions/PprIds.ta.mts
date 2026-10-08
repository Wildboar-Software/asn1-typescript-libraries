/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PprIds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PprIds  ::=  BIT STRING {-- Definition of Profile Policy Rules identifiers
 *     pprUpdateControl(0), -- defines how to update PPRs via ES6
 *     ppr1(1), -- Indicator for PPR1 'Disabling of this Profile is not allowed'
 *     ppr2(2) -- Indicator for PPR2 'Deletion of this Profile is not allowed'
 * }
 * ```
 */
export
type PprIds = BIT_STRING;

/**
 * @summary PprIds_pprUpdateControl
 * @constant
 */
export
const PprIds_pprUpdateControl: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pprUpdateControl
 * @constant
 */
export
const pprUpdateControl: number = PprIds_pprUpdateControl; /* SHORT_NAMED_BIT */

/**
 * @summary PprIds_ppr1
 * @constant
 */
export
const PprIds_ppr1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ppr1
 * @constant
 */
export
const ppr1: number = PprIds_ppr1; /* SHORT_NAMED_BIT */

/**
 * @summary PprIds_ppr2
 * @constant
 */
export
const PprIds_ppr2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ppr2
 * @constant
 */
export
const ppr2: number = PprIds_ppr2; /* SHORT_NAMED_BIT */
export const _decode_PprIds = $._decodeBitString;
export const _encode_PprIds = $._encodeBitString;


/* eslint-enable */
