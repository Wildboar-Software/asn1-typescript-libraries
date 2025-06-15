/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary Operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operation  ::=  INTEGER {onlyOne(1), oneOrMore(2), all(3)
 * }(onlyOne | oneOrMore | all)
 * ```
 */
export type Operation = INTEGER;


/**
 * @summary Operation_onlyOne
 * @constant
 * @type {number}
 */
export const Operation_onlyOne: Operation = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_onlyOne
 * @constant
 * @type {number}
 */
export const onlyOne: Operation = Operation_onlyOne; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_oneOrMore
 * @constant
 * @type {number}
 */
export const Operation_oneOrMore: Operation = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_oneOrMore
 * @constant
 * @type {number}
 */
export const oneOrMore: Operation = Operation_oneOrMore; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_all
 * @constant
 * @type {number}
 */
export const Operation_all: Operation = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_all
 * @constant
 * @type {number}
 */
export const all: Operation = Operation_all; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Operation = $._decodeInteger;




export const _encode_Operation = $._encodeInteger;


/* eslint-enable */
