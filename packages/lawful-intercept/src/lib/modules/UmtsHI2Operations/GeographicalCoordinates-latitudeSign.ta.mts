/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates-latitudeSign ::= ENUMERATED {
 *     north,
 *     south
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GeographicalCoordinates_latitudeSign {
    north = 0,
    south = 1,
}

/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates-latitudeSign ::= ENUMERATED {
 *     north,
 *     south
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GeographicalCoordinates_latitudeSign = _enum_for_GeographicalCoordinates_latitudeSign;

/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates-latitudeSign ::= ENUMERATED {
 *     north,
 *     south
 * }
 * ```
 * 
 * @enum {number}
 */
export
const GeographicalCoordinates_latitudeSign = _enum_for_GeographicalCoordinates_latitudeSign;

/**
 * @summary GeographicalCoordinates_latitudeSign_north
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_north: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.north; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary north
 * @constant
 * @type {number}
 */
export
const north: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.north; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GeographicalCoordinates_latitudeSign_south
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_south: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.south; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary south
 * @constant
 * @type {number}
 */
export
const south: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.south; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GeographicalCoordinates_latitudeSign: $.ASN1Decoder<GeographicalCoordinates_latitudeSign> = $._decodeEnumerated;
export const _encode_GeographicalCoordinates_latitudeSign: $.ASN1Encoder<GeographicalCoordinates_latitudeSign> = $._encodeEnumerated;


/* eslint-enable */
