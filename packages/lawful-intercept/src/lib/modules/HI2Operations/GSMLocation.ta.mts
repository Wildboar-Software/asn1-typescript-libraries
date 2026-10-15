/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GSMLocation_geoCoordinates, _decode_GSMLocation_geoCoordinates, _encode_GSMLocation_geoCoordinates } from "../HI2Operations/GSMLocation-geoCoordinates.ta.mjs";
// export { GSMLocation_geoCoordinates, _decode_GSMLocation_geoCoordinates, _encode_GSMLocation_geoCoordinates } from "../HI2Operations/GSMLocation-geoCoordinates.ta.mjs";
import { GSMLocation_utmCoordinates, _decode_GSMLocation_utmCoordinates, _encode_GSMLocation_utmCoordinates } from "../HI2Operations/GSMLocation-utmCoordinates.ta.mjs";
// export { GSMLocation_utmCoordinates, _decode_GSMLocation_utmCoordinates, _encode_GSMLocation_utmCoordinates } from "../HI2Operations/GSMLocation-utmCoordinates.ta.mjs";
import { GSMLocation_utmRefCoordinates, _decode_GSMLocation_utmRefCoordinates, _encode_GSMLocation_utmRefCoordinates } from "../HI2Operations/GSMLocation-utmRefCoordinates.ta.mjs";
// export { GSMLocation_utmRefCoordinates, _decode_GSMLocation_utmRefCoordinates, _encode_GSMLocation_utmRefCoordinates } from "../HI2Operations/GSMLocation-utmRefCoordinates.ta.mjs";


/**
 * @summary GSMLocation
 * @description
 *
 * GSM location as geographic coordinates, UTM coordinates, a UTM reference
 * string, or a WGS 84 octet string.
 *
 * Geographic text: latitude `XDDMMSS.SS` (7 to 10 characters), longitude
 * `XDDDMMSS.SS` (8 to 11 characters). `X` is N, S, E, or W. `DD` or `DDD` is
 * degrees, numeric. `MM` is minutes, numeric. `SS.SS` is seconds; `.SS` is
 * optional. Examples: latitude short form `N502312`, longitude long form
 * `E1122312.18`.
 *
 * UTM: easting 10 characters, example `32U0439955`; northing 7 characters,
 * example `5540736`. UTM reference: 13 characters, example `32UPU91294045`.
 *
 * Azimuth, on the geographic and UTM forms, is the bearing relative to true
 * north, from 0 to 359. The datum defaults to World Geodetic System 1984.
 *
 * The WGS 84 alternative is an octet string whose format is defined in 3GPP TS
 * 03.32. This document does not copy that format. Because that format is
 * imported, clause D.1 keeps the half-octet order of 3GPP TS 03.32. Annex A.8
 * places cell identity and location area code on `locationOfTheTarget`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.4, table A.8.2, clause D.1,
 * annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSMLocation  ::=  CHOICE
 * {
 *     geoCoordinates        [1] SEQUENCE
 *     {
 *         latitude    [1] PrintableString (SIZE(7..10)),
 *             -- format: XDDMMSS.SS
 *         longitude    [2] PrintableString (SIZE(8..11)),
 *             -- format: XDDDMMSS.SS
 *         mapDatum    [3] MapDatum DEFAULT wGS84,
 *         ...,
 *         azimuth        [4] INTEGER (0..359) OPTIONAL
 *             -- The azimuth is the bearing, relative to true north
 *     },
 *         -- format: XDDDMMSS.SS
 *         --         X            : N(orth), S(outh), E(ast), W(est)
 *         --         DD or DDD    : degrees (numeric characters)
 *         --         MM            : minutes (numeric characters)
 *         --         SS.SS        : seconds, the second part (.SS) is optional
 *         -- Example:
 *         --         latitude short form        N502312
 *         --         longitude long form        E1122312.18
 * 
 *     utmCoordinates        [2] SEQUENCE
 *     {
 *         utm-East    [1] PrintableString (SIZE(10)),
 *         utm-North    [2] PrintableString (SIZE(7)),
 *             -- Universal Transverse Mercator
 *             -- example    utm-East    32U0439955
 *             --             utm-North    5540736
 *         mapDatum    [3] MapDatum DEFAULT wGS84,
 *         ...,
 *         azimuth        [4] INTEGER (0..359) OPTIONAL
 *             -- The azimuth is the bearing, relative to true north
 *     },
 * 
 *     utmRefCoordinates    [3] SEQUENCE
 *     {
 *         utmref-string    PrintableString (SIZE(13)),
 *         mapDatum        MapDatum DEFAULT wGS84,
 *         ...
 *     },
 *         -- example 32UPU91294045
 * 
 *     wGS84Coordinates    [4] OCTET STRING
 *     -- format is as defined in 3GPP TS 03.32 [57]
 * }
 * ```
 */
export
type GSMLocation =
    { geoCoordinates: GSMLocation_geoCoordinates } /* CHOICE_ALT_ROOT */
    | { utmCoordinates: GSMLocation_utmCoordinates } /* CHOICE_ALT_ROOT */
    | { utmRefCoordinates: GSMLocation_utmRefCoordinates } /* CHOICE_ALT_ROOT */
    | { wGS84Coordinates: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GSMLocation: $.ASN1Decoder<GSMLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSMLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSMLocation (el: _Element): GSMLocation {
    if (!_cached_decoder_for_GSMLocation) { _cached_decoder_for_GSMLocation = $._decode_inextensible_choice<GSMLocation>({
    "CONTEXT 1": [ "geoCoordinates", $._decode_implicit<GSMLocation_geoCoordinates>(() => _decode_GSMLocation_geoCoordinates) ],
    "CONTEXT 2": [ "utmCoordinates", $._decode_implicit<GSMLocation_utmCoordinates>(() => _decode_GSMLocation_utmCoordinates) ],
    "CONTEXT 3": [ "utmRefCoordinates", $._decode_implicit<GSMLocation_utmRefCoordinates>(() => _decode_GSMLocation_utmRefCoordinates) ],
    "CONTEXT 4": [ "wGS84Coordinates", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_GSMLocation(el);
}

let _cached_encoder_for_GSMLocation: $.ASN1Encoder<GSMLocation> | null = null;

/**
 * @summary Encodes a(n) GSMLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSMLocation, encoded as an ASN.1 Element.
 */
export
function _encode_GSMLocation (value: GSMLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSMLocation) { _cached_encoder_for_GSMLocation = $._encode_choice<GSMLocation>({
    "geoCoordinates": $._encode_implicit(_TagClass.context, 1, () => _encode_GSMLocation_geoCoordinates, $.BER),
    "utmCoordinates": $._encode_implicit(_TagClass.context, 2, () => _encode_GSMLocation_utmCoordinates, $.BER),
    "utmRefCoordinates": $._encode_implicit(_TagClass.context, 3, () => _encode_GSMLocation_utmRefCoordinates, $.BER),
    "wGS84Coordinates": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_GSMLocation(value, elGetter);
}


/* eslint-enable */
