/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Direction {
    fromTarget = 1,
    toTarget = 2,
}

/**
 * @summary Direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Direction = _enum_for_Direction;

/**
 * @summary Direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Direction = _enum_for_Direction;

/**
 * @summary Direction_fromTarget
 * @constant
 * @type {number}
 */
export
const Direction_fromTarget: Direction = Direction.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: Direction = Direction.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_toTarget
 * @constant
 * @type {number}
 */
export
const Direction_toTarget: Direction = Direction.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: Direction = Direction.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Direction: $.ASN1Decoder<Direction> = $._decodeEnumerated;

export const _encode_Direction: $.ASN1Encoder<Direction> = $._encodeEnumerated;


/* eslint-enable */
