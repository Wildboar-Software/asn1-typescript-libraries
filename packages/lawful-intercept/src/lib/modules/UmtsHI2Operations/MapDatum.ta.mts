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
 * Geodetic datum for the geographical coordinates of a GSM location. Annex B.3
 * defaults those coordinates to WGS 84. 3GPP TS 33.108, annex B.3.
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
 * WGS 84 datum. Annex B.3 defaults the geographical coordinates of a GSM
 * location to this datum. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS84: _enum_for_MapDatum.wGS84 = _enum_for_MapDatum.wGS84; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS84
 * @description
 * 
 * WGS 84 datum, the annex B.3 default for GSM location coordinates (3GPP TS
 * 33.108).
 * 
 * @constant
 * @type {number}
 */
export
const wGS84: _enum_for_MapDatum.wGS84 = MapDatum_wGS84; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_wGS72
 * @description
 * 
 * WGS 72 datum for GSM location coordinates. Annex B.3 names the datum and
 * does not state when to select it. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS72: _enum_for_MapDatum.wGS72 = _enum_for_MapDatum.wGS72; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS72
 * @description
 * 
 * WGS 72 datum for GSM location coordinates (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const wGS72: _enum_for_MapDatum.wGS72 = MapDatum_wGS72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_eD50
 * @description
 * 
 * European Datum 50, for GSM location coordinates. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const MapDatum_eD50: _enum_for_MapDatum.eD50 = _enum_for_MapDatum.eD50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eD50
 * @description
 * 
 * European Datum 50 (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const eD50: _enum_for_MapDatum.eD50 = MapDatum_eD50; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MapDatum: $.ASN1Decoder<MapDatum> = $._decodeEnumerated;
export const _encode_MapDatum: $.ASN1Encoder<MapDatum> = $._encodeEnumerated;


/* eslint-enable */
