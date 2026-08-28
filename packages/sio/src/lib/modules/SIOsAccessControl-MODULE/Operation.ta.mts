/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Operation
 * @description
 *
 * How many of an `OptionalCategoryGroup`'s members must appear
 * in the security label: exactly one, one or more, or all.
 * Constrained to these three values. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.6](https://www.itu.int/rec/T-REC-X.841-200010-I).
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
 * @description Exactly one of `categoryGroup` must appear in the label.
 * @constant
 * @type {number}
 */
export const Operation_onlyOne: Operation = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_onlyOne
 * @description Exactly one of `categoryGroup` must appear in the label.
 * @constant
 * @type {number}
 */
export const onlyOne: Operation = Operation_onlyOne; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_oneOrMore
 * @description One or more of `categoryGroup` must appear in the label.
 * @constant
 * @type {number}
 */
export const Operation_oneOrMore: Operation = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_oneOrMore
 * @description One or more of `categoryGroup` must appear in the label.
 * @constant
 * @type {number}
 */
export const oneOrMore: Operation = Operation_oneOrMore; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_all
 * @description Every member of `categoryGroup` must appear in the label.
 * @constant
 * @type {number}
 */
export const Operation_all: Operation = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Operation_all
 * @description Every member of `categoryGroup` must appear in the label.
 * @constant
 * @type {number}
 */
export const all: Operation = Operation_all; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Operation = $._decodeInteger;




export const _encode_Operation = $._encodeInteger;


/* eslint-enable */
