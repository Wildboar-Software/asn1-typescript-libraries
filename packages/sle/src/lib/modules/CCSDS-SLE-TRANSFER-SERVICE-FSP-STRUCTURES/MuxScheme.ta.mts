/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MuxScheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxScheme                ::=    INTEGER
 * {  fifo                          (0)
 * ,  absolute-priority             (1)
 * ,  polling-vector                (2)
 * }
 * ```
 */
export
type MuxScheme = INTEGER;

/**
 * @summary MuxScheme_fifo
 * @constant
 * @type {number}
 */
export
const MuxScheme_fifo: MuxScheme = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_fifo
 * @constant
 * @type {number}
 */
export
const fifo: MuxScheme = MuxScheme_fifo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_absolute_priority
 * @constant
 * @type {number}
 */
export
const MuxScheme_absolute_priority: MuxScheme = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_absolute_priority
 * @constant
 * @type {number}
 */
export
const absolute_priority: MuxScheme = MuxScheme_absolute_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_polling_vector
 * @constant
 * @type {number}
 */
export
const MuxScheme_polling_vector: MuxScheme = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_polling_vector
 * @constant
 * @type {number}
 */
export
const polling_vector: MuxScheme = MuxScheme_polling_vector; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_MuxScheme: $.ASN1Decoder<MuxScheme> = $._decodeInteger;
export const _encode_MuxScheme: $.ASN1Encoder<MuxScheme> = $._encodeInteger;


/* eslint-enable */
