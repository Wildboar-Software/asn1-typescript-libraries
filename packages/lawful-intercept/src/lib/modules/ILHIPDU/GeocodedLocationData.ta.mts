/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as Common_Parameters from "../Common-Parameters/index.mjs";
// export { WGS84CoordinateDecimal, _decode_WGS84CoordinateDecimal, _encode_WGS84CoordinateDecimal } from "../Common-Parameters/WGS84CoordinateDecimal.ta.mjs";
// export { WGS84CoordinateAngular, _decode_WGS84CoordinateAngular, _encode_WGS84CoordinateAngular } from "../Common-Parameters/WGS84CoordinateAngular.ta.mjs";


/**
 * @summary GeocodedLocationData
 * @description
 *
 * WGS84 coordinates from ETSI TS 103 280. `wGS84CoordinateDecimal` and
 * `wGS84CoordinateAngular` are the two permitted forms. The mapping function
 * produces them from geographical coordinates and does not change their
 * resolution. V1.1.1 does not say which form to choose. Postal-address
 * mapping is for further study.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeocodedLocationData     ::=  CHOICE
 * {
 *     wGS84CoordinateDecimal    [1] Common-Parameters.WGS84CoordinateDecimal,
 *     wGS84CoordinateAngular    [2] Common-Parameters.WGS84CoordinateAngular,
 *     ...
 * }
 * ```
 */
export
type GeocodedLocationData =
    { wGS84CoordinateDecimal: Common_Parameters.WGS84CoordinateDecimal } /* CHOICE_ALT_ROOT */
    | { wGS84CoordinateAngular: Common_Parameters.WGS84CoordinateAngular } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GeocodedLocationData: $.ASN1Decoder<GeocodedLocationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeocodedLocationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeocodedLocationData (el: _Element): GeocodedLocationData {
    if (!_cached_decoder_for_GeocodedLocationData) { _cached_decoder_for_GeocodedLocationData = $._decode_extensible_choice<GeocodedLocationData>({
    "CONTEXT 1": [ "wGS84CoordinateDecimal", $._decode_implicit<Common_Parameters.WGS84CoordinateDecimal>(() => Common_Parameters._decode_WGS84CoordinateDecimal) ],
    "CONTEXT 2": [ "wGS84CoordinateAngular", $._decode_implicit<Common_Parameters.WGS84CoordinateAngular>(() => Common_Parameters._decode_WGS84CoordinateAngular) ]
}); }
    return _cached_decoder_for_GeocodedLocationData(el);
}

let _cached_encoder_for_GeocodedLocationData: $.ASN1Encoder<GeocodedLocationData> | null = null;

/**
 * @summary Encodes a(n) GeocodedLocationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeocodedLocationData, encoded as an ASN.1 Element.
 */
export
function _encode_GeocodedLocationData (value: GeocodedLocationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeocodedLocationData) { _cached_encoder_for_GeocodedLocationData = $._encode_choice<GeocodedLocationData>({
    "wGS84CoordinateDecimal": $._encode_implicit(_TagClass.context, 1, () => Common_Parameters._encode_WGS84CoordinateDecimal, $.BER),
    "wGS84CoordinateAngular": $._encode_implicit(_TagClass.context, 2, () => Common_Parameters._encode_WGS84CoordinateAngular, $.BER),
}, $.BER); }
    return _cached_encoder_for_GeocodedLocationData(value, elGetter);
}


/* eslint-enable */
