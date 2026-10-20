/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType  ::=  ENUMERATED {
 *    currentLocation      ( 0 ),
 *    lastKnownLocation    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocationType {
    currentLocation = 0,
    lastKnownLocation = 1,
}

/**
 * @summary LocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType  ::=  ENUMERATED {
 *    currentLocation      ( 0 ),
 *    lastKnownLocation    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type LocationType = _enum_for_LocationType;

/**
 * @summary LocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType  ::=  ENUMERATED {
 *    currentLocation      ( 0 ),
 *    lastKnownLocation    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const LocationType = _enum_for_LocationType;

/**
 * @summary LocationType_currentLocation
 * @constant
 * @type {number}
 */
export
const LocationType_currentLocation: LocationType = LocationType.currentLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentLocation
 * @constant
 * @type {number}
 */
export
const currentLocation: LocationType = LocationType.currentLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_lastKnownLocation
 * @constant
 * @type {number}
 */
export
const LocationType_lastKnownLocation: LocationType = LocationType.lastKnownLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastKnownLocation
 * @constant
 * @type {number}
 */
export
const lastKnownLocation: LocationType = LocationType.lastKnownLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LocationType: $.ASN1Decoder<LocationType> = $._decodeEnumerated;

export
const _encode_LocationType: $.ASN1Encoder<LocationType> = $._encodeEnumerated;

/* eslint-enable */
