/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedControlWordTypeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedControlWordTypeNumber    ::=    INTEGER
 * {  allControlWords                        (0)
 * ,  clcw                                   (1)
 * ,  notClcw                                (2)
 * }
 * ```
 */
export
type RequestedControlWordTypeNumber = INTEGER;

/**
 * @summary RequestedControlWordTypeNumber_allControlWords
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_allControlWords: RequestedControlWordTypeNumber = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_allControlWords
 * @constant
 * @type {number}
 */
export
const allControlWords: RequestedControlWordTypeNumber = RequestedControlWordTypeNumber_allControlWords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_clcw
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_clcw: RequestedControlWordTypeNumber = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_clcw
 * @constant
 * @type {number}
 */
export
const clcw: RequestedControlWordTypeNumber = RequestedControlWordTypeNumber_clcw; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_notClcw
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_notClcw: RequestedControlWordTypeNumber = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_notClcw
 * @constant
 * @type {number}
 */
export
const notClcw: RequestedControlWordTypeNumber = RequestedControlWordTypeNumber_notClcw; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RequestedControlWordTypeNumber: $.ASN1Decoder<RequestedControlWordTypeNumber> = $._decodeInteger;
export const _encode_RequestedControlWordTypeNumber: $.ASN1Encoder<RequestedControlWordTypeNumber> = $._encodeInteger;


/* eslint-enable */
