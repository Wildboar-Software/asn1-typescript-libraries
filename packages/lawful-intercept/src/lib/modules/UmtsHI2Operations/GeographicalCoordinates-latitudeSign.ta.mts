/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * Hemisphere of the latitude for a UMTS geographical point: north or south.
 * Annex B.3 defines no other sign.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * Hemisphere of the latitude for a UMTS geographical point: north or south.
 * Annex B.3 defines no other sign.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * Hemisphere of the latitude for a UMTS geographical point: north or south.
 * Annex B.3 defines no other sign.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * @description
 * 
 * The latitude is in the northern hemisphere.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_north = GeographicalCoordinates_latitudeSign.north satisfies GeographicalCoordinates_latitudeSign; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary north
 * @description
 * 
 * Northern hemisphere (annex B.3).
 * @constant
 * @type {number}
 */
export
const north = GeographicalCoordinates_latitudeSign.north satisfies GeographicalCoordinates_latitudeSign; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GeographicalCoordinates_latitudeSign_south
 * @description
 * 
 * The latitude is in the southern hemisphere.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_south = GeographicalCoordinates_latitudeSign.south satisfies GeographicalCoordinates_latitudeSign; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary south
 * @description
 * 
 * Southern hemisphere (annex B.3).
 * @constant
 * @type {number}
 */
export
const south = GeographicalCoordinates_latitudeSign.south satisfies GeographicalCoordinates_latitudeSign; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GeographicalCoordinates_latitudeSign: $.ASN1Decoder<GeographicalCoordinates_latitudeSign> = $._decodeEnumerated;
export const _encode_GeographicalCoordinates_latitudeSign: $.ASN1Encoder<GeographicalCoordinates_latitudeSign> = $._encodeEnumerated;


/* eslint-enable */
