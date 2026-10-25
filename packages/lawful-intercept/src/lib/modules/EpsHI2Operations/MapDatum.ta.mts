/* eslint-disable */
import {
    type ENUMERATED
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
 * Geodetic datum for coordinates that include one. Those coordinate choices
 * default to WGS 84. Clause 16.1 places cell-site latitude and longitude in the
 * same coordinates when a cell-site record is enriched. The handover text does
 * not say when to select WGS 72 or European Datum 50.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * @description
 * 
 * WGS 84. Default datum on the coordinate choices that include a datum (annex
 * B.9). Clause 16.1 places cell-site latitude and longitude in those
 * coordinates and does not name the datum.
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS84 = _enum_for_MapDatum.wGS84 satisfies MapDatum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS84
 * @description
 * 
 * WGS 84, the default datum for coordinates that carry one (annex B.9).
 * @constant
 * @type {number}
 */
export
const wGS84 = MapDatum_wGS84 satisfies MapDatum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_wGS72
 * @description
 * 
 * WGS 72. The handover text does not say when to select this datum instead of
 * the WGS 84 default.
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS72 = _enum_for_MapDatum.wGS72 satisfies MapDatum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS72
 * @description
 * 
 * WGS 72. The handover text does not say when to use it.
 * @constant
 * @type {number}
 */
export
const wGS72 = MapDatum_wGS72 satisfies MapDatum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_eD50
 * @description
 * 
 * European Datum 50 (module comment). The handover text does not say when to
 * select this datum instead of the WGS 84 default.
 * @constant
 * @type {number}
 */
export
const MapDatum_eD50 = _enum_for_MapDatum.eD50 satisfies MapDatum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eD50
 * @description
 * 
 * European Datum 50. The handover text does not say when to use it.
 * @constant
 * @type {number}
 */
export
const eD50 = MapDatum_eD50 satisfies MapDatum; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MapDatum: $.ASN1Decoder<MapDatum> = $._decodeEnumerated;
export const _encode_MapDatum: $.ASN1Encoder<MapDatum> = $._encodeEnumerated;


/* eslint-enable */
