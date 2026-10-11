/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeviationListVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviationListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type DeviationListVersion = INTEGER;

/**
 * @summary DeviationListVersion_v0
 * @constant
 * @type {number}
 */
export
const DeviationListVersion_v0: DeviationListVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeviationListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: DeviationListVersion = DeviationListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeviationListVersion = $._decodeInteger;
export const _encode_DeviationListVersion = $._encodeInteger;


/* eslint-enable */
