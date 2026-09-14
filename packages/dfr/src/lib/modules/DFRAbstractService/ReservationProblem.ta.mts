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
 * @summary ReservationProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationProblem  ::=  ENUMERATED {
 *     cannot-reserve          (0),
 *     already-reserved        (1),
 *     not-yet-reserved        (2),
 *     cannot-unreserve        (3),
 *     reservation-not-changed (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReservationProblem {
    cannot_reserve = 0,
    already_reserved = 1,
    not_yet_reserved = 2,
    cannot_unreserve = 3,
    reservation_not_changed = 4,
}

/**
 * @summary ReservationProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationProblem  ::=  ENUMERATED {
 *     cannot-reserve          (0),
 *     already-reserved        (1),
 *     not-yet-reserved        (2),
 *     cannot-unreserve        (3),
 *     reservation-not-changed (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReservationProblem = _enum_for_ReservationProblem;

/**
 * @summary ReservationProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationProblem  ::=  ENUMERATED {
 *     cannot-reserve          (0),
 *     already-reserved        (1),
 *     not-yet-reserved        (2),
 *     cannot-unreserve        (3),
 *     reservation-not-changed (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReservationProblem = _enum_for_ReservationProblem;

/**
 * @summary ReservationProblem_cannot_reserve
 * @constant
 * @type {number}
 */
export
const ReservationProblem_cannot_reserve: ReservationProblem = ReservationProblem.cannot_reserve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_reserve
 * @constant
 * @type {number}
 */
export
const cannot_reserve: ReservationProblem = ReservationProblem.cannot_reserve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_already_reserved
 * @constant
 * @type {number}
 */
export
const ReservationProblem_already_reserved: ReservationProblem = ReservationProblem.already_reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary already_reserved
 * @constant
 * @type {number}
 */
export
const already_reserved: ReservationProblem = ReservationProblem.already_reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_not_yet_reserved
 * @constant
 * @type {number}
 */
export
const ReservationProblem_not_yet_reserved: ReservationProblem = ReservationProblem.not_yet_reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_yet_reserved
 * @constant
 * @type {number}
 */
export
const not_yet_reserved: ReservationProblem = ReservationProblem.not_yet_reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_cannot_unreserve
 * @constant
 * @type {number}
 */
export
const ReservationProblem_cannot_unreserve: ReservationProblem = ReservationProblem.cannot_unreserve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_unreserve
 * @constant
 * @type {number}
 */
export
const cannot_unreserve: ReservationProblem = ReservationProblem.cannot_unreserve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_reservation_not_changed
 * @constant
 * @type {number}
 */
export
const ReservationProblem_reservation_not_changed: ReservationProblem = ReservationProblem.reservation_not_changed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservation_not_changed
 * @constant
 * @type {number}
 */
export
const reservation_not_changed: ReservationProblem = ReservationProblem.reservation_not_changed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReservationProblem = $._decodeEnumerated;
export const _encode_ReservationProblem = $._encodeEnumerated;


/* eslint-enable */
