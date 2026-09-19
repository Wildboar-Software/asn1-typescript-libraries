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
