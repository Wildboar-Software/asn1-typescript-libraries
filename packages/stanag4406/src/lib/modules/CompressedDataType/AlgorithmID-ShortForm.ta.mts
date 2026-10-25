/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlgorithmID_ShortForm
 * @description
 * 
 * Integer names for compression algorithms. Only ZLIB (0) is assigned. STANAG
 * 4406 (Ed. 2), Annex E, clause 4.2.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlgorithmID-ShortForm  ::=  INTEGER  {
 *     zlibCompress (0)
 * }
 * ```
 */
export
type AlgorithmID_ShortForm = INTEGER;

/**
 * @summary AlgorithmID_ShortForm_zlibCompress
 * @description
 *
 * Integer 0, ZLIB. Annex E says this integer form should be used; the object
 * identifier form is optional on origination. Support of ZLIB is mandatory.
 * STANAG 4406 (Ed. 2), Annex E, clause 4.2.6.3.
 * @constant
 * @type {number}
 */
export
const AlgorithmID_ShortForm_zlibCompress: 0 = 0 satisfies AlgorithmID_ShortForm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlgorithmID_ShortForm_zlibCompress
 * @description
 *
 * Integer 0, ZLIB. Annex E says this integer form should be used; the object
 * identifier form is optional on origination. Support of ZLIB is mandatory.
 * STANAG 4406 (Ed. 2), Annex E, clause 4.2.6.3.
 * @constant
 * @type {number}
 */
export
const zlibCompress: 0 = AlgorithmID_ShortForm_zlibCompress; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlgorithmID_ShortForm: $.ASN1Decoder<AlgorithmID_ShortForm> = $._decodeInteger;
export const _encode_AlgorithmID_ShortForm: $.ASN1Encoder<AlgorithmID_ShortForm> = $._encodeInteger;


/* eslint-enable */
