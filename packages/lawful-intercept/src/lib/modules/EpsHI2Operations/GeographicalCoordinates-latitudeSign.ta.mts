/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * Which hemisphere the latitude integer of a UMTS geographical area refers to.
 * The specification text does not add meaning beyond north and south. 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * Which hemisphere the latitude integer of a UMTS geographical area refers to.
 * The specification text does not add meaning beyond north and south. 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * Which hemisphere the latitude integer of a UMTS geographical area refers to.
 * The specification text does not add meaning beyond north and south. 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
const GeographicalCoordinates_latitudeSign: typeof _enum_for_GeographicalCoordinates_latitudeSign = _enum_for_GeographicalCoordinates_latitudeSign;

/**
 * @summary GeographicalCoordinates_latitudeSign_north
 * @description
 * 
 * The latitude integer is in the northern hemisphere.
 * 
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_north: _enum_for_GeographicalCoordinates_latitudeSign.north = GeographicalCoordinates_latitudeSign.north; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary north
 * @description
 * 
 * Northern hemisphere.
 * 
 * @constant
 * @type {number}
 */
export
const north: _enum_for_GeographicalCoordinates_latitudeSign.north = GeographicalCoordinates_latitudeSign.north; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GeographicalCoordinates_latitudeSign_south
 * @description
 * 
 * The latitude integer is in the southern hemisphere.
 * 
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_south: _enum_for_GeographicalCoordinates_latitudeSign.south = GeographicalCoordinates_latitudeSign.south; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary south
 * @description
 * 
 * Southern hemisphere.
 * 
 * @constant
 * @type {number}
 */
export
const south: _enum_for_GeographicalCoordinates_latitudeSign.south = GeographicalCoordinates_latitudeSign.south; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GeographicalCoordinates_latitudeSign: $.ASN1Decoder<GeographicalCoordinates_latitudeSign> = $._decodeEnumerated;
export const _encode_GeographicalCoordinates_latitudeSign: $.ASN1Encoder<GeographicalCoordinates_latitudeSign> = $._encodeEnumerated;


/* eslint-enable */
