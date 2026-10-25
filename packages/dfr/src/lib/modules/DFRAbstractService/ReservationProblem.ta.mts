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
 * @summary ReservationProblem
 * @description
 *
 * Why Reserve failed. ISO/IEC 10166-1:1991 §8.3.7.
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
 * Why Reserve failed. ISO/IEC 10166-1:1991 §8.3.7.
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
 * Why Reserve failed. ISO/IEC 10166-1:1991 §8.3.7.
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
 * @description
 *
 * Insufficient rights for the requested level/status.
 * @constant
 * @type {number}
 */
export
const ReservationProblem_cannot_reserve = ReservationProblem.cannot_reserve satisfies ReservationProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_reserve
 * @description
 *
 * Insufficient rights for the requested level/status.
 * @constant
 * @type {number}
 */
export
const cannot_reserve = ReservationProblem.cannot_reserve satisfies ReservationProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_already_reserved
 * @description
 *
 * Another user already holds a reservation.
 * @constant
 * @type {number}
 */
export
const ReservationProblem_already_reserved = ReservationProblem.already_reserved satisfies ReservationProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary already_reserved
 * @description
 *
 * Another user already holds a reservation.
 * @constant
 * @type {number}
 */
export
const already_reserved = ReservationProblem.already_reserved satisfies ReservationProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_not_yet_reserved
 * @description
 *
 * Unreserve requested but the entry is not reserved.
 * @constant
 * @type {number}
 */
export
const ReservationProblem_not_yet_reserved = ReservationProblem.not_yet_reserved satisfies ReservationProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_yet_reserved
 * @description
 *
 * Unreserve requested but the entry is not reserved.
 * @constant
 * @type {number}
 */
export
const not_yet_reserved = ReservationProblem.not_yet_reserved satisfies ReservationProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_cannot_unreserve
 * @description
 *
 * Reservation status is committed.
 * @constant
 * @type {number}
 */
export
const ReservationProblem_cannot_unreserve = ReservationProblem.cannot_unreserve satisfies ReservationProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_unreserve
 * @description
 *
 * Reservation status is committed.
 * @constant
 * @type {number}
 */
export
const cannot_unreserve = ReservationProblem.cannot_unreserve satisfies ReservationProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationProblem_reservation_not_changed
 * @description
 *
 * Cannot lower a committed reservation, or cannot switch committed to
 * uncommitted.
 * @constant
 * @type {number}
 */
export
const ReservationProblem_reservation_not_changed = ReservationProblem.reservation_not_changed satisfies ReservationProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservation_not_changed
 * @description
 *
 * Cannot lower a committed reservation, or cannot switch committed to
 * uncommitted.
 * @constant
 * @type {number}
 */
export
const reservation_not_changed = ReservationProblem.reservation_not_changed satisfies ReservationProblem; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_ReservationProblem(el: _Element): ReservationProblem {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ReservationProblem.cannot_reserve: return ReservationProblem.cannot_reserve;
        case ReservationProblem.already_reserved: return ReservationProblem.already_reserved;
        case ReservationProblem.not_yet_reserved: return ReservationProblem.not_yet_reserved;
        case ReservationProblem.cannot_unreserve: return ReservationProblem.cannot_unreserve;
        case ReservationProblem.reservation_not_changed: return ReservationProblem.reservation_not_changed;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ReservationProblem.",
                el,
            );
    }
}
export const _encode_ReservationProblem: $.ASN1Encoder<ReservationProblem> = $._encodeEnumerated as $.ASN1Encoder<ReservationProblem>;


/* eslint-enable */
