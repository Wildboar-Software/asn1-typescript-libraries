/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MCMMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMMode  ::=  INTEGER {
 *     compressed(0),
 *     complete(1)
 * }
 * ```
 */
export
type MCMMode = INTEGER;

/**
 * @summary MCMMode_compressed
 * @constant
 * @type {number}
 */
export
const MCMMode_compressed: MCMMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MCMMode_compressed
 * @constant
 * @type {number}
 */
export
const compressed: MCMMode = MCMMode_compressed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MCMMode_complete
 * @constant
 * @type {number}
 */
export
const MCMMode_complete: MCMMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MCMMode_complete
 * @constant
 * @type {number}
 */
export
const complete: MCMMode = MCMMode_complete; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MCMMode: $.ASN1Decoder<MCMMode> = $._decodeInteger;

export
const _encode_MCMMode: $.ASN1Encoder<MCMMode> = $._encodeInteger;

/* eslint-enable */
