/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Direction
 * @description
 * 
 * Indicates the direction of the original MM (not of this message). This shall
 * be encoded either as "from target", or "to target", as appropriate.
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates the direction of the original MM (not of this message). This shall
 * be encoded either as "from target", or "to target", as appropriate.
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates the direction of the original MM (not of this message). This shall
 * be encoded either as "from target", or "to target", as appropriate.
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const Direction: typeof _enum_for_Direction = _enum_for_Direction;

/**
 * @summary Direction_fromTarget
 * @constant
 * @type {number}
 */
export
const Direction_fromTarget: _enum_for_Direction.fromTarget = Direction.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: _enum_for_Direction.fromTarget = Direction.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_toTarget
 * @constant
 * @type {number}
 */
export
const Direction_toTarget: _enum_for_Direction.toTarget = Direction.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: _enum_for_Direction.toTarget = Direction.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Direction: $.ASN1Decoder<Direction> = $._decodeEnumerated;
export const _encode_Direction: $.ASN1Encoder<Direction> = $._encodeEnumerated;


/* eslint-enable */
