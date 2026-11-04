/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Version  ::=  INTEGER {v1(0), v2(1), v3(2)}
 * ```
 */
export
type Version = INTEGER;

/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export
const Version_v1: number = 0 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export
const v1: number = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export
const Version_v2: number = 1 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export
const v2: number = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export
const Version_v3: number = 2 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export
const v3: number = Version_v3; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Version: $.ASN1Decoder<Version> = $._decodeInteger;

export
const _encode_Version: $.ASN1Encoder<Version> = $._encodeInteger;

/* eslint-enable */
