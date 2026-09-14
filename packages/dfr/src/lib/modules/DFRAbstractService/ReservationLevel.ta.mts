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
 * @summary ReservationLevel
 * @description
 *
 * Increasing restriction on concurrent use. Attributes remain readable at
 * every level. Reserving a reference does not reserve the referent. ISO/IEC
 * 10166-1:1991 §8.1.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationLevel  ::=  ENUMERATED {
 *     unreserved       (0),
 *     exclusive-write  (1),
 *     exclusive-access (2),
 *     read-only1       (3),
 *     read-only2       (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReservationLevel {
    unreserved = 0,
    exclusive_write = 1,
    exclusive_access = 2,
    read_only1 = 3,
    read_only2 = 4,
}

/**
 * @summary ReservationLevel
 * @description
 *
 * Increasing restriction on concurrent use. Attributes remain readable at
 * every level. Reserving a reference does not reserve the referent. ISO/IEC
 * 10166-1:1991 §8.1.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationLevel  ::=  ENUMERATED {
 *     unreserved       (0),
 *     exclusive-write  (1),
 *     exclusive-access (2),
 *     read-only1       (3),
 *     read-only2       (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReservationLevel = _enum_for_ReservationLevel;

/**
 * @summary ReservationLevel
 * @description
 *
 * Increasing restriction on concurrent use. Attributes remain readable at
 * every level. Reserving a reference does not reserve the referent. ISO/IEC
 * 10166-1:1991 §8.1.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationLevel  ::=  ENUMERATED {
 *     unreserved       (0),
 *     exclusive-write  (1),
 *     exclusive-access (2),
 *     read-only1       (3),
 *     read-only2       (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReservationLevel = _enum_for_ReservationLevel;

/**
 * @summary ReservationLevel_unreserved
 * @description
 *
 * No extra restriction beyond access lists.
 * @constant
 * @type {number}
 */
export
const ReservationLevel_unreserved: ReservationLevel = ReservationLevel.unreserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreserved
 * @description
 *
 * No extra restriction beyond access lists.
 * @constant
 * @type {number}
 */
export
const unreserved: ReservationLevel = ReservationLevel.unreserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_exclusive_write
 * @description
 *
 * Others cannot delete, modify, or directly move the object; cannot insert
 * into / remove from a reserved group. Nested groups' descendants are not
 * reserved.
 * @constant
 * @type {number}
 */
export
const ReservationLevel_exclusive_write: ReservationLevel = ReservationLevel.exclusive_write; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exclusive_write
 * @description
 *
 * Others cannot delete, modify, or directly move the object; cannot insert
 * into / remove from a reserved group. Nested groups' descendants are not
 * reserved.
 * @constant
 * @type {number}
 */
export
const exclusive_write: ReservationLevel = ReservationLevel.exclusive_write; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_exclusive_access
 * @description
 *
 * exclusive-write plus others cannot read/copy content, list a group, or use
 * an SRL in Search.
 * @constant
 * @type {number}
 */
export
const ReservationLevel_exclusive_access: ReservationLevel = ReservationLevel.exclusive_access; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exclusive_access
 * @description
 *
 * exclusive-write plus others cannot read/copy content, list a group, or use
 * an SRL in Search.
 * @constant
 * @type {number}
 */
export
const exclusive_access: ReservationLevel = ReservationLevel.exclusive_access; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_read_only1
 * @description
 *
 * exclusive-write restrictions apply to others and to the reserver.
 * @constant
 * @type {number}
 */
export
const ReservationLevel_read_only1: ReservationLevel = ReservationLevel.read_only1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_only1
 * @description
 *
 * exclusive-write restrictions apply to others and to the reserver.
 * @constant
 * @type {number}
 */
export
const read_only1: ReservationLevel = ReservationLevel.read_only1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationLevel_read_only2
 * @description
 *
 * Others see exclusive-access; the reserver sees exclusive-write restrictions.
 * @constant
 * @type {number}
 */
export
const ReservationLevel_read_only2: ReservationLevel = ReservationLevel.read_only2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_only2
 * @description
 *
 * Others see exclusive-access; the reserver sees exclusive-write restrictions.
 * @constant
 * @type {number}
 */
export
const read_only2: ReservationLevel = ReservationLevel.read_only2; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReservationLevel = $._decodeEnumerated;
export const _encode_ReservationLevel = $._encodeEnumerated;


/* eslint-enable */
