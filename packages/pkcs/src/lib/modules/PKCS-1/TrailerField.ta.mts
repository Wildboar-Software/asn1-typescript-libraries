/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TrailerField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrailerField  ::=  INTEGER { trailerFieldBC(1) }
 * ```
 */
export type TrailerField = INTEGER;


/**
 * @summary TrailerField_trailerFieldBC
 * @constant
 * @type {number}
 */
export const TrailerField_trailerFieldBC = 1 satisfies TrailerField; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TrailerField_trailerFieldBC
 * @constant
 * @type {number}
 */
export const trailerFieldBC = TrailerField_trailerFieldBC satisfies TrailerField; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TrailerField = $._decodeInteger;




export const _encode_TrailerField = $._encodeInteger;


/* eslint-enable */
