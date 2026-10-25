/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_MapDatum
 * @description
 *
 * Datum for a GSM location. `wGS84` is World Geodetic System 1984. `eD50` is
 * European Datum 50. `wGS72` is named and the module does not expand that
 * name. Geographic and UTM coordinates default to World Geodetic System 1984
 * when the datum is omitted.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_MapDatum {
    /**
     * World Geodetic System 1984. Default when a GSM geographic or UTM
     * coordinate omits the datum.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    wGS84 = 0,
    /**
     * Named in the enumeration. The module does not expand this name and
     * states no further coding.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    wGS72 = 1,
    /**
     * European Datum 50.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    eD50 = 2,
}

/**
 * @summary MapDatum
 * @description
 *
 * Datum for a GSM location. `wGS84` is World Geodetic System 1984. `eD50` is
 * European Datum 50. `wGS72` is named and the module does not expand that
 * name. Geographic and UTM coordinates default to World Geodetic System 1984
 * when the datum is omitted.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules. Both assign `wGS84` 0, `wGS72` 1, and `eD50` 2.
 * `HI2Operations` leaves those numbers implicit; `TETRA-HI2Operations`
 * writes them in the enumeration.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MapDatum  ::=  ENUMERATED
 * {
 *     wGS84,
 *         -- World Geodetic System 1984
 *     wGS72,
 *     eD50,
 *         -- European Datum 50
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
 * World Geodetic System 1984. Default when a GSM geographic or UTM coordinate
 * omits the datum.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS84 = _enum_for_MapDatum.wGS84 satisfies MapDatum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS84
 * @description
 *
 * World Geodetic System 1984. Default when a GSM geographic or UTM coordinate
 * omits the datum.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const wGS84 = MapDatum_wGS84 satisfies MapDatum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_wGS72
 * @description
 *
 * Named in the enumeration. The module does not expand this name and states no
 * further coding.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS72 = _enum_for_MapDatum.wGS72 satisfies MapDatum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS72
 * @description
 *
 * Named in the enumeration. The module does not expand this name and states no
 * further coding.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const wGS72 = MapDatum_wGS72 satisfies MapDatum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_eD50
 * @description
 *
 * European Datum 50.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const MapDatum_eD50 = _enum_for_MapDatum.eD50 satisfies MapDatum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eD50
 * @description
 *
 * European Datum 50.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const eD50 = MapDatum_eD50 satisfies MapDatum; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MapDatum: $.ASN1Decoder<MapDatum> = $._decodeEnumerated;
export const _encode_MapDatum: $.ASN1Encoder<MapDatum> = $._encodeEnumerated;


/* eslint-enable */
