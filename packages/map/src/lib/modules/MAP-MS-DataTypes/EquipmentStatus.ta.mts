/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EquipmentStatus
 * @description
 *
 * Status of the mobile equipment as defined in 3GPP TS 22.016:
 * permitted-listed, prohibited-listed or tracking-listed. Returned by
 * MAP_CHECK_IMEI if Equipment Status was requested (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.2 and 8.7.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentStatus  ::=  ENUMERATED {
 *     permittedListed  (0),
 *     prohibitedListed  (1),
 *     trackingListed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EquipmentStatus {
    permittedListed = 0,
    prohibitedListed = 1,
    trackingListed = 2,
}

/**
 * @summary EquipmentStatus
 * @description
 *
 * Status of the mobile equipment as defined in 3GPP TS 22.016:
 * permitted-listed, prohibited-listed or tracking-listed. Returned by
 * MAP_CHECK_IMEI if Equipment Status was requested (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.2 and 8.7.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentStatus  ::=  ENUMERATED {
 *     permittedListed  (0),
 *     prohibitedListed  (1),
 *     trackingListed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type EquipmentStatus = _enum_for_EquipmentStatus;

/**
 * @summary EquipmentStatus
 * @description
 *
 * Status of the mobile equipment as defined in 3GPP TS 22.016:
 * permitted-listed, prohibited-listed or tracking-listed. Returned by
 * MAP_CHECK_IMEI if Equipment Status was requested (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.2 and 8.7.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentStatus  ::=  ENUMERATED {
 *     permittedListed  (0),
 *     prohibitedListed  (1),
 *     trackingListed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const EquipmentStatus = _enum_for_EquipmentStatus;

/**
 * @summary EquipmentStatus_permittedListed
 * @constant
 * @type {number}
 */
export
const EquipmentStatus_permittedListed: EquipmentStatus = EquipmentStatus.permittedListed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permittedListed
 * @constant
 * @type {number}
 */
export
const permittedListed: EquipmentStatus = EquipmentStatus.permittedListed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EquipmentStatus_prohibitedListed
 * @constant
 * @type {number}
 */
export
const EquipmentStatus_prohibitedListed: EquipmentStatus = EquipmentStatus.prohibitedListed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prohibitedListed
 * @constant
 * @type {number}
 */
export
const prohibitedListed: EquipmentStatus = EquipmentStatus.prohibitedListed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EquipmentStatus_trackingListed
 * @constant
 * @type {number}
 */
export
const EquipmentStatus_trackingListed: EquipmentStatus = EquipmentStatus.trackingListed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingListed
 * @constant
 * @type {number}
 */
export
const trackingListed: EquipmentStatus = EquipmentStatus.trackingListed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) EquipmentStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EquipmentStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EquipmentStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquipmentStatus, encoded as an ASN.1 Element.
 */
export const _encode_EquipmentStatus = $._encodeEnumerated;


/* eslint-enable */
