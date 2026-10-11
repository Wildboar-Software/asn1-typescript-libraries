/* eslint-disable */
import {
    ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_IPADirection {
    toTarget = 0,
    fromTarget = 1,
}

/**
 * @summary IPADirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPADirection             ::=  ENUMERATED
 * {
 *     toTarget        (0),
 *     fromTarget        (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPADirection = _enum_for_IPADirection | ENUMERATED;

/**
 * @summary IPADirection_toTarget
 * @constant
 * @type {number}
 */
export
const IPADirection_toTarget: IPADirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: IPADirection = IPADirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPADirection_fromTarget
 * @constant
 * @type {number}
 */
export
const IPADirection_fromTarget: IPADirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: IPADirection = IPADirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_IPADirection: $.ASN1Decoder<IPADirection> = $._decodeEnumerated;

export const _encode_IPADirection: $.ASN1Encoder<IPADirection> = $._encodeEnumerated;

/* eslint-enable */
