/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CscaMasterListVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CscaMasterListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type CscaMasterListVersion = INTEGER;

/**
 * @summary CscaMasterListVersion_v0
 * @constant
 * @type {number}
 */
export
const CscaMasterListVersion_v0: CscaMasterListVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CscaMasterListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: CscaMasterListVersion = CscaMasterListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CscaMasterListVersion = $._decodeInteger;
export const _encode_CscaMasterListVersion = $._encodeInteger;


/* eslint-enable */
