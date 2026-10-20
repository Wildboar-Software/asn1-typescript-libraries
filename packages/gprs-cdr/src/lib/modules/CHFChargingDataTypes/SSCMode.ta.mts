/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSCMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCMode     ::=  INTEGER {
 *    sSCMode1    ( 1 ),
 *    sSCMode2    ( 2 ),
 *    sSCMode3    ( 3 )}
 * ```
 */
export
type SSCMode = INTEGER;

/**
 * @summary SSCMode_sSCMode1
 * @constant
 * @type {number}
 */
export
const SSCMode_sSCMode1: SSCMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SSCMode_sSCMode1
 * @constant
 * @type {number}
 */
export
const sSCMode1: SSCMode = SSCMode_sSCMode1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SSCMode_sSCMode2
 * @constant
 * @type {number}
 */
export
const SSCMode_sSCMode2: SSCMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SSCMode_sSCMode2
 * @constant
 * @type {number}
 */
export
const sSCMode2: SSCMode = SSCMode_sSCMode2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SSCMode_sSCMode3
 * @constant
 * @type {number}
 */
export
const SSCMode_sSCMode3: SSCMode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SSCMode_sSCMode3
 * @constant
 * @type {number}
 */
export
const sSCMode3: SSCMode = SSCMode_sSCMode3; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SSCMode: $.ASN1Decoder<SSCMode> = $._decodeInteger;

export
const _encode_SSCMode: $.ASN1Encoder<SSCMode> = $._encodeInteger;

/* eslint-enable */
