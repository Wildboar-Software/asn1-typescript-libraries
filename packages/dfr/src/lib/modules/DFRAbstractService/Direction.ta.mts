/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Direction
 * @description
 *
 * Sort direction. Character ordering uses an unspecified collating sequence.
 * ISO/IEC 10166-1:1991 §8.1.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED {
 *     ascending   (0),
 *     descending  (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Direction {
    ascending = 0,
    descending = 1,
}

/**
 * @summary Direction
 * @description
 *
 * Sort direction. Character ordering uses an unspecified collating sequence.
 * ISO/IEC 10166-1:1991 §8.1.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED {
 *     ascending   (0),
 *     descending  (1)
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
 * Sort direction. Character ordering uses an unspecified collating sequence.
 * ISO/IEC 10166-1:1991 §8.1.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED {
 *     ascending   (0),
 *     descending  (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Direction: typeof _enum_for_Direction = _enum_for_Direction;

/**
 * @summary Direction_ascending
 * @description
 *
 * Ascending key order.
 * @constant
 * @type {number}
 */
export
const Direction_ascending: _enum_for_Direction.ascending = Direction.ascending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascending
 * @description
 *
 * Ascending key order.
 * @constant
 * @type {number}
 */
export
const ascending: _enum_for_Direction.ascending = Direction.ascending; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_descending
 * @description
 *
 * Descending key order.
 * @constant
 * @type {number}
 */
export
const Direction_descending: _enum_for_Direction.descending = Direction.descending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary descending
 * @description
 *
 * Descending key order.
 * @constant
 * @type {number}
 */
export
const descending: _enum_for_Direction.descending = Direction.descending; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_Direction(el: _Element): Direction {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Direction.ascending: return Direction.ascending;
        case Direction.descending: return Direction.descending;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Direction.",
                el,
            );
    }
}
export const _encode_Direction: $.ASN1Encoder<Direction> = $._encodeEnumerated as $.ASN1Encoder<Direction>;


/* eslint-enable */
