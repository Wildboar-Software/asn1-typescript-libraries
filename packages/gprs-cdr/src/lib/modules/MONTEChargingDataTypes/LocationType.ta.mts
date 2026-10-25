/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationType
 * @description
 *
 * Whether the configuration request asks for the current location
 * or the last known location. Category Oc. Applicable to
 * location reporting and to the number of UEs in a geographic
 * area. Sent on Rf for configuration only.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.3.3.
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
 * Whether the configuration request asks for the current location
 * or the last known location. Category Oc. Applicable to
 * location reporting and to the number of UEs in a geographic
 * area. Sent on Rf for configuration only.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.3.3.
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
 * Whether the configuration request asks for the current location
 * or the last known location. Category Oc. Applicable to
 * location reporting and to the number of UEs in a geographic
 * area. Sent on Rf for configuration only.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.3.3.
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
const LocationType: typeof _enum_for_LocationType = _enum_for_LocationType;

/**
 * @summary LocationType_currentLocation
 * @description
 *
 * The request is for the current location.
 *
 * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const LocationType_currentLocation: _enum_for_LocationType.currentLocation = LocationType.currentLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentLocation
 * @description
 *
 * Current location. See {@link LocationType_currentLocation}.
 *
 * @constant
 * @type {number}
 */
export
const currentLocation: _enum_for_LocationType.currentLocation = LocationType.currentLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_lastKnownLocation
 * @description
 *
 * The request is for the last known location.
 *
 * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const LocationType_lastKnownLocation: _enum_for_LocationType.lastKnownLocation = LocationType.lastKnownLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastKnownLocation
 * @description
 *
 * Last known location. See
 * {@link LocationType_lastKnownLocation}.
 *
 * @constant
 * @type {number}
 */
export
const lastKnownLocation: _enum_for_LocationType.lastKnownLocation = LocationType.lastKnownLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LocationType: $.ASN1Decoder<LocationType> = $._decodeEnumerated;

export
const _encode_LocationType: $.ASN1Encoder<LocationType> = $._encodeEnumerated;

/* eslint-enable */
