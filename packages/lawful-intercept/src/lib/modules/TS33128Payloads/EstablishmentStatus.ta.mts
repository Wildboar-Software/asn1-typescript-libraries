/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EstablishmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentStatus  ::=  ENUMERATED
 * {
 *     established(0),
 *     released(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EstablishmentStatus {
    established = 0,
    released = 1,
}

/**
 * @summary EstablishmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentStatus  ::=  ENUMERATED
 * {
 *     established(0),
 *     released(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EstablishmentStatus = _enum_for_EstablishmentStatus;

/**
 * @summary EstablishmentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentStatus  ::=  ENUMERATED
 * {
 *     established(0),
 *     released(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EstablishmentStatus = _enum_for_EstablishmentStatus;

/**
 * @summary EstablishmentStatus_established
 * @constant
 * @type {number}
 */
export
const EstablishmentStatus_established: EstablishmentStatus = EstablishmentStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: EstablishmentStatus = EstablishmentStatus.established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentStatus_released
 * @constant
 * @type {number}
 */
export
const EstablishmentStatus_released: EstablishmentStatus = EstablishmentStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: EstablishmentStatus = EstablishmentStatus.released; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_EstablishmentStatus: $.ASN1Decoder<EstablishmentStatus> = $._decodeEnumerated;

export const _encode_EstablishmentStatus: $.ASN1Encoder<EstablishmentStatus> = $._encodeEnumerated;


/* eslint-enable */
