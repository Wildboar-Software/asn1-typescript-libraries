/* eslint-disable */
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
const EstablishmentStatus: typeof _enum_for_EstablishmentStatus = _enum_for_EstablishmentStatus;

/**
 * @summary EstablishmentStatus_established
 * @constant
 * @type {number}
 */
export
const EstablishmentStatus_established: _enum_for_EstablishmentStatus.established = EstablishmentStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: _enum_for_EstablishmentStatus.established = EstablishmentStatus.established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentStatus_released
 * @constant
 * @type {number}
 */
export
const EstablishmentStatus_released: _enum_for_EstablishmentStatus.released = EstablishmentStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: _enum_for_EstablishmentStatus.released = EstablishmentStatus.released; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EstablishmentStatus: $.ASN1Decoder<EstablishmentStatus> = $._decodeEnumerated;
export const _encode_EstablishmentStatus: $.ASN1Encoder<EstablishmentStatus> = $._encodeEnumerated;


/* eslint-enable */
