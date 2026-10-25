/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthAlgorithm
 * @description
 *
 * Integer identifier of the authentication algorithm, range 0 to 255 (ECMA-243
 * §6.3.1). Named values are `ct2`, `dect`, `gsm`, `us-ct2`, `us-dect`, and
 * `us-gsm`. Other name values may be defined in the future. ECMA-243 does not
 * expand these names. Algorithm behaviour is outside its scope (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
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
 * @description Identifier `ct2` (0). ECMA-243 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_ct2: AuthAlgorithm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_ct2
 * @description Alias of {@link AuthAlgorithm_ct2}.
 * @constant
 * @type {number}
 */
export
const ct2: AuthAlgorithm = AuthAlgorithm_ct2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_dect
 * @description
 * Identifier `dect` (1). ECMA-243 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_dect: AuthAlgorithm = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_dect
 * @description Alias of {@link AuthAlgorithm_dect}.
 * @constant
 * @type {number}
 */
export
const dect: AuthAlgorithm = AuthAlgorithm_dect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_gsm
 * @description Identifier `gsm` (2). ECMA-243 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_gsm: AuthAlgorithm = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_gsm
 * @description Alias of {@link AuthAlgorithm_gsm}.
 * @constant
 * @type {number}
 */
export
const gsm: AuthAlgorithm = AuthAlgorithm_gsm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_ct2
 * @description
 * Identifier `us-ct2` (3). ECMA-243 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_us_ct2: AuthAlgorithm = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_ct2
 * @description Alias of {@link AuthAlgorithm_us_ct2}.
 * @constant
 * @type {number}
 */
export
const us_ct2: AuthAlgorithm = AuthAlgorithm_us_ct2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_dect
 * @description
 * Identifier `us-dect` (4). ECMA-243 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_us_dect: AuthAlgorithm = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_dect
 * @description Alias of {@link AuthAlgorithm_us_dect}.
 * @constant
 * @type {number}
 */
export
const us_dect: AuthAlgorithm = AuthAlgorithm_us_dect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_gsm
 * @description
 * Identifier `us-gsm` (5). ECMA-243 §6.3.1. Algorithm undefined (§1).
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthAlgorithm_us_gsm: AuthAlgorithm = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAlgorithm_us_gsm
 * @description Alias of {@link AuthAlgorithm_us_gsm}.
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
