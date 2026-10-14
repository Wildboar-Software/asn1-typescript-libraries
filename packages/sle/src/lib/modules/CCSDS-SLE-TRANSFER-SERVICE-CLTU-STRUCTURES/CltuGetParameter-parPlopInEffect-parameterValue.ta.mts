/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parPlopInEffect-parameterValue ::= INTEGER
 *       {  plop1                                  (0)
 *       ,  plop2                                  (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parPlopInEffect_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop1
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parPlopInEffect_parameterValue_plop1: CltuGetParameter_parPlopInEffect_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop1
 * @constant
 * @type {number}
 */
export
const plop1: CltuGetParameter_parPlopInEffect_parameterValue = CltuGetParameter_parPlopInEffect_parameterValue_plop1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop2
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parPlopInEffect_parameterValue_plop2: CltuGetParameter_parPlopInEffect_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop2
 * @constant
 * @type {number}
 */
export
const plop2: CltuGetParameter_parPlopInEffect_parameterValue = CltuGetParameter_parPlopInEffect_parameterValue_plop2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parPlopInEffect_parameterValue: $.ASN1Decoder<CltuGetParameter_parPlopInEffect_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parPlopInEffect_parameterValue: $.ASN1Encoder<CltuGetParameter_parPlopInEffect_parameterValue> = $._encodeInteger;


/* eslint-enable */
