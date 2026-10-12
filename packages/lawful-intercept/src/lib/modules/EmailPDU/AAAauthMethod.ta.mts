/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AAAauthMethod {
    undefinedAuthMethod = 1,
    cramMD5 = 2,
    digestMD5 = 3,
}

/**
 * @summary AAAauthMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAAauthMethod  ::=  ENUMERATED
 * {
 *     undefinedAuthMethod(1),
 *     cramMD5(2),
 *     digestMD5(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AAAauthMethod = _enum_for_AAAauthMethod | ENUMERATED;

/**
 * @summary AAAauthMethod_undefinedAuthMethod
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_undefinedAuthMethod: AAAauthMethod = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefinedAuthMethod
 * @constant
 * @type {number}
 */
export
const undefinedAuthMethod: AAAauthMethod = AAAauthMethod_undefinedAuthMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAauthMethod_cramMD5
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_cramMD5: AAAauthMethod = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cramMD5
 * @constant
 * @type {number}
 */
export
const cramMD5: AAAauthMethod = AAAauthMethod_cramMD5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAauthMethod_digestMD5
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_digestMD5: AAAauthMethod = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digestMD5
 * @constant
 * @type {number}
 */
export
const digestMD5: AAAauthMethod = AAAauthMethod_digestMD5; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AAAauthMethod: $.ASN1Decoder<AAAauthMethod> = $._decodeEnumerated;
export const _encode_AAAauthMethod: $.ASN1Encoder<AAAauthMethod> = $._encodeEnumerated;


/* eslint-enable */
