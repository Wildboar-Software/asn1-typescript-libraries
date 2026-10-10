/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SignalDirection {
    internal = 0,
    external = 1,
    both = 2,
}

/**
 * @summary SignalDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalDirection  ::=  ENUMERATED
 *     {
 *         internal(0),
 *         external(1),
 *         both(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SignalDirection = _enum_for_SignalDirection | ENUMERATED;

/**
 * @summary SignalDirection_internal
 * @constant
 * @type {number}
 */
export
const SignalDirection_internal: SignalDirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: SignalDirection = SignalDirection_internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_external
 * @constant
 * @type {number}
 */
export
const SignalDirection_external: SignalDirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: SignalDirection = SignalDirection_external; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_both
 * @constant
 * @type {number}
 */
export
const SignalDirection_both: SignalDirection = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: SignalDirection = SignalDirection_both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SignalDirection = $._decodeEnumerated;
export const _encode_SignalDirection = $._encodeEnumerated;


/* eslint-enable */
