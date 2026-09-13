/* eslint-disable */
import {
    ASN1Element as _Element,
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
const Direction = _enum_for_Direction;

/**
 * @summary Direction_ascending
 * @constant
 * @type {number}
 */
export
const Direction_ascending: Direction = Direction.ascending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascending
 * @constant
 * @type {number}
 */
export
const ascending: Direction = Direction.ascending; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_descending
 * @constant
 * @type {number}
 */
export
const Direction_descending: Direction = Direction.descending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary descending
 * @constant
 * @type {number}
 */
export
const descending: Direction = Direction.descending; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Direction = $._decodeEnumerated;
export const _encode_Direction = $._encodeEnumerated;


/* eslint-enable */
