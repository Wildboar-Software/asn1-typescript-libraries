/* eslint-disable */
import {
    type ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PreferredPriority {
    undefined = 0,
    minor = 1,
    major = 2,
    serious = 3,
}

/**
 * @summary PreferredPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreferredPriority  ::=  ENUMERATED {
 *   undefined(0), minor(1), major(2), serious(3), ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type PreferredPriority = _enum_for_PreferredPriority | ENUMERATED;

/**
 * @summary PreferredPriority_undefined
 * @constant
 * @type {number}
 */
export
const PreferredPriority_undefined: _enum_for_PreferredPriority.undefined = _enum_for_PreferredPriority.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: _enum_for_PreferredPriority.undefined = PreferredPriority_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreferredPriority_minor
 * @constant
 * @type {number}
 */
export
const PreferredPriority_minor: _enum_for_PreferredPriority.minor = _enum_for_PreferredPriority.minor; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minor
 * @constant
 * @type {number}
 */
export
const minor: _enum_for_PreferredPriority.minor = PreferredPriority_minor; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreferredPriority_major
 * @constant
 * @type {number}
 */
export
const PreferredPriority_major: _enum_for_PreferredPriority.major = _enum_for_PreferredPriority.major; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary major
 * @constant
 * @type {number}
 */
export
const major: _enum_for_PreferredPriority.major = PreferredPriority_major; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreferredPriority_serious
 * @constant
 * @type {number}
 */
export
const PreferredPriority_serious: _enum_for_PreferredPriority.serious = _enum_for_PreferredPriority.serious; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serious
 * @constant
 * @type {number}
 */
export
const serious: _enum_for_PreferredPriority.serious = PreferredPriority_serious; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PreferredPriority: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_PreferredPriority: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
