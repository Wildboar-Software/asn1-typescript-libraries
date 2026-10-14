/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parRfAvailableRequired-parameterValue ::= INTEGER
 *       {  yes                                    (0)
 *       ,  no                                     (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parRfAvailableRequired_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parRfAvailableRequired_parameterValue_yes: CltuGetParameter_parRfAvailableRequired_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: CltuGetParameter_parRfAvailableRequired_parameterValue = CltuGetParameter_parRfAvailableRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parRfAvailableRequired_parameterValue_no: CltuGetParameter_parRfAvailableRequired_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: CltuGetParameter_parRfAvailableRequired_parameterValue = CltuGetParameter_parRfAvailableRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Decoder<CltuGetParameter_parRfAvailableRequired_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Encoder<CltuGetParameter_parRfAvailableRequired_parameterValue> = $._encodeInteger;


/* eslint-enable */
