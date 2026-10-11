/* eslint-disable */
import {
    INTEGER
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
const LDSSecurityObjectVersion_v0: LDSSecurityObjectVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: LDSSecurityObjectVersion = LDSSecurityObjectVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v1: LDSSecurityObjectVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: LDSSecurityObjectVersion = LDSSecurityObjectVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LDSSecurityObjectVersion = $._decodeInteger;
export const _encode_LDSSecurityObjectVersion = $._encodeInteger;


/* eslint-enable */
