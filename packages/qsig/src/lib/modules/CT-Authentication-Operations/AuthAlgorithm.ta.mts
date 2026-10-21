/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthAlgorithm  ::=  INTEGER {
 *     -- type of authentication algorithm --
 *     ct2(0),
 *     dect(1),
 *     gsm(2),
 *     us-ct2(3),
 *     us-dect(4),
 *     us-gsm(5)
 * } (0..255)
 * ```
 */
export
type AuthAlgorithm = INTEGER;

/**
 * @summary AuthAlgorithm_ct2
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_ct2: AuthAlgorithm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_ct2
 * @constant
 * @type {number}
 */
export
const ct2: AuthAlgorithm = AuthAlgorithm_ct2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_dect
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_dect: AuthAlgorithm = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_dect
 * @constant
 * @type {number}
 */
export
const dect: AuthAlgorithm = AuthAlgorithm_dect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_gsm
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_gsm: AuthAlgorithm = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_gsm
 * @constant
 * @type {number}
 */
export
const gsm: AuthAlgorithm = AuthAlgorithm_gsm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_ct2
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_us_ct2: AuthAlgorithm = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_ct2
 * @constant
 * @type {number}
 */
export
const us_ct2: AuthAlgorithm = AuthAlgorithm_us_ct2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_dect
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_us_dect: AuthAlgorithm = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_dect
 * @constant
 * @type {number}
 */
export
const us_dect: AuthAlgorithm = AuthAlgorithm_us_dect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_gsm
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_us_gsm: AuthAlgorithm = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_gsm
 * @constant
 * @type {number}
 */
export
const us_gsm: AuthAlgorithm = AuthAlgorithm_us_gsm; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_AuthAlgorithm: $.ASN1Decoder<AuthAlgorithm> = $._decodeInteger;

export
const _encode_AuthAlgorithm: $.ASN1Encoder<AuthAlgorithm> = $._encodeInteger;

/* eslint-enable */
