/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LDSSecurityObjectVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LDSSecurityObjectVersion  ::=  INTEGER {
 *     v0(0),
 *     v1(1)
 *     -- If LDSSecurityObjectVersion is V1, ldsVersionInfo MUST be present
 * }
 * ```
 */
export
type LDSSecurityObjectVersion = INTEGER;

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v0: 0 = 0 satisfies LDSSecurityObjectVersion; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: 0 = LDSSecurityObjectVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v1: 1 = 1 satisfies LDSSecurityObjectVersion; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: 1 = LDSSecurityObjectVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LDSSecurityObjectVersion: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_LDSSecurityObjectVersion: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
