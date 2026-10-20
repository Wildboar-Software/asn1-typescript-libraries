/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RTMTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RTMTypes  ::=  BIT STRING {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     virtual (3),
 *     hardwareStatic (4),
 *     bMC (5)
 * }
 * ```
 */
export
type RTMTypes = BIT_STRING;

/**
 * @summary RTMTypes_static_
 * @constant
 */
export
const RTMTypes_static_: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary static_
 * @constant
 */
export
const static_: number = RTMTypes_static_; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_dynamic
 * @constant
 */
export
const RTMTypes_dynamic: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dynamic
 * @constant
 */
export
const dynamic: number = RTMTypes_dynamic; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_nonHost
 * @constant
 */
export
const RTMTypes_nonHost: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary nonHost
 * @constant
 */
export
const nonHost: number = RTMTypes_nonHost; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_virtual
 * @constant
 */
export
const RTMTypes_virtual: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary virtual
 * @constant
 */
export
const virtual: number = RTMTypes_virtual; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_hardwareStatic
 * @constant
 */
export
const RTMTypes_hardwareStatic: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary hardwareStatic
 * @constant
 */
export
const hardwareStatic: number = RTMTypes_hardwareStatic; /* SHORT_NAMED_BIT */

/**
 * @summary RTMTypes_bMC
 * @constant
 */
export
const RTMTypes_bMC: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary bMC
 * @constant
 */
export
const bMC: number = RTMTypes_bMC; /* SHORT_NAMED_BIT */

export
const _decode_RTMTypes: $.ASN1Decoder<RTMTypes> = $._decodeBitString;

export
const _encode_RTMTypes: $.ASN1Encoder<RTMTypes> = $._encodeBitString;

/* eslint-enable */
