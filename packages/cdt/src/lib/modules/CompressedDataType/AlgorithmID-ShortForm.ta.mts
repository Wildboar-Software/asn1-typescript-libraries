/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlgorithmID_ShortForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlgorithmID-ShortForm  ::=  INTEGER  {
 *     zlibCompress (0) }
 * ```
 */
export
type AlgorithmID_ShortForm = INTEGER;

/**
 * @summary AlgorithmID_ShortForm_zlibCompress
 * @constant
 * @type {number}
 */
export
const AlgorithmID_ShortForm_zlibCompress: AlgorithmID_ShortForm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlgorithmID_ShortForm_zlibCompress
 * @constant
 * @type {number}
 */
export
const zlibCompress: AlgorithmID_ShortForm = AlgorithmID_ShortForm_zlibCompress; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlgorithmID_ShortForm = $._decodeInteger;
export const _encode_AlgorithmID_ShortForm = $._encodeInteger;


/* eslint-enable */
