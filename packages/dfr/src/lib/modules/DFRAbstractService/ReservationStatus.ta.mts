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
 * @summary ReservationStatus
 * @description
 *
 * Quality of a reservation. `committed` is owner-only and survives until
 * expiry; it cannot be withdrawn. ISO/IEC 10166-1:1991 §8.1.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationStatus  ::=  ENUMERATED {
 *     uncommitted (0),
 *     committed   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReservationStatus {
    uncommitted = 0,
    committed = 1,
}

/**
 * @summary ReservationStatus
 * @description
 *
 * Quality of a reservation. `committed` is owner-only and survives until
 * expiry; it cannot be withdrawn. ISO/IEC 10166-1:1991 §8.1.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationStatus  ::=  ENUMERATED {
 *     uncommitted (0),
 *     committed   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReservationStatus = _enum_for_ReservationStatus;

/**
 * @summary ReservationStatus
 * @description
 *
 * Quality of a reservation. `committed` is owner-only and survives until
 * expiry; it cannot be withdrawn. ISO/IEC 10166-1:1991 §8.1.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationStatus  ::=  ENUMERATED {
 *     uncommitted (0),
 *     committed   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReservationStatus = _enum_for_ReservationStatus;

/**
 * @summary ReservationStatus_uncommitted
 * @description
 *
 * Reserver may unreserve or lower the level.
 * @constant
 * @type {number}
 */
export
const ReservationStatus_uncommitted: ReservationStatus = ReservationStatus.uncommitted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uncommitted
 * @description
 *
 * Reserver may unreserve or lower the level.
 * @constant
 * @type {number}
 */
export
const uncommitted: ReservationStatus = ReservationStatus.uncommitted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReservationStatus_committed
 * @description
 *
 * Owner-only. Level may only increase; duration may only extend. Cannot become
 * uncommitted.
 * @constant
 * @type {number}
 */
export
const ReservationStatus_committed: ReservationStatus = ReservationStatus.committed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary committed
 * @description
 *
 * Owner-only. Level may only increase; duration may only extend. Cannot become
 * uncommitted.
 * @constant
 * @type {number}
 */
export
const committed: ReservationStatus = ReservationStatus.committed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReservationStatus = $._decodeEnumerated;
export const _encode_ReservationStatus = $._encodeEnumerated;


/* eslint-enable */
