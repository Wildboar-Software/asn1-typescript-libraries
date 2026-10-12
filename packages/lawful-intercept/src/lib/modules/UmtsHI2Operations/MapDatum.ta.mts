/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MapDatum {
    wGS84 = 0,
    wGS72 = 1,
    eD50 = 2,
}

/**
 * @summary MapDatum
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MapDatum  ::=  ENUMERATED
 * {
 *     wGS84,
 *     wGS72,
 *     eD50,     -- European Datum 50
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MapDatum = _enum_for_MapDatum | ENUMERATED;

/**
 * @summary MapDatum_wGS84
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS84: MapDatum = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS84
 * @constant
 * @type {number}
 */
export
const wGS84: MapDatum = MapDatum_wGS84; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_wGS72
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS72: MapDatum = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS72
 * @constant
 * @type {number}
 */
export
const wGS72: MapDatum = MapDatum_wGS72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_eD50
 * @constant
 * @type {number}
 */
export
const MapDatum_eD50: MapDatum = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eD50
 * @constant
 * @type {number}
 */
export
const eD50: MapDatum = MapDatum_eD50; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MapDatum: $.ASN1Decoder<MapDatum> = $._decodeEnumerated;
export const _encode_MapDatum: $.ASN1Encoder<MapDatum> = $._encodeEnumerated;


/* eslint-enable */
