/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GA_Point, _decode_GA_Point, _encode_GA_Point } from "../TETRA-HI2Operations/GA-Point.ta.mjs";
// export { GA_Point, _decode_GA_Point, _encode_GA_Point } from "../TETRA-HI2Operations/GA-Point.ta.mjs";
import { GA_PointWithUnCertainty, _decode_GA_PointWithUnCertainty, _encode_GA_PointWithUnCertainty } from "../TETRA-HI2Operations/GA-PointWithUnCertainty.ta.mjs";
// export { GA_PointWithUnCertainty, _decode_GA_PointWithUnCertainty, _encode_GA_PointWithUnCertainty } from "../TETRA-HI2Operations/GA-PointWithUnCertainty.ta.mjs";
import { type GA_Polygon, _decode_GA_Polygon, _encode_GA_Polygon } from "../TETRA-HI2Operations/GA-Polygon.ta.mjs";
// export { GA_Polygon, _decode_GA_Polygon, _encode_GA_Polygon } from "../TETRA-HI2Operations/GA-Polygon.ta.mjs";


/**
 * @summary UMTSLocation
 * @description
 * 
 * UMTS geographic area: a point, a point with an uncertainty code, or a polygon
 * of at most `maxNrOfPoints` points. The present document does not state when
 * each shape is used. An extension marker follows the named shapes.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTSLocation  ::=  CHOICE
 * {
 *     point                     [1] GA-Point,
 *     pointWithUnCertainty     [2] GA-PointWithUnCertainty,
 *     polygon                 [3] GA-Polygon,
 *     ...
 * }
 * ```
 */
export
type UMTSLocation =
    { point: GA_Point } /* CHOICE_ALT_ROOT */
    | { pointWithUnCertainty: GA_PointWithUnCertainty } /* CHOICE_ALT_ROOT */
    | { polygon: GA_Polygon } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UMTSLocation: $.ASN1Decoder<UMTSLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UMTSLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UMTSLocation (el: _Element): UMTSLocation {
    if (!_cached_decoder_for_UMTSLocation) { _cached_decoder_for_UMTSLocation = $._decode_extensible_choice<UMTSLocation>({
    "CONTEXT 1": [ "point", $._decode_implicit<GA_Point>(() => _decode_GA_Point) ],
    "CONTEXT 2": [ "pointWithUnCertainty", $._decode_implicit<GA_PointWithUnCertainty>(() => _decode_GA_PointWithUnCertainty) ],
    "CONTEXT 3": [ "polygon", $._decode_implicit<GA_Polygon>(() => _decode_GA_Polygon) ]
}); }
    return _cached_decoder_for_UMTSLocation(el);
}

let _cached_encoder_for_UMTSLocation: $.ASN1Encoder<UMTSLocation> | null = null;

/**
 * @summary Encodes a(n) UMTSLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UMTSLocation, encoded as an ASN.1 Element.
 */
export
function _encode_UMTSLocation (value: UMTSLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UMTSLocation) { _cached_encoder_for_UMTSLocation = $._encode_choice<UMTSLocation>({
    "point": $._encode_implicit(_TagClass.context, 1, () => _encode_GA_Point, $.BER),
    "pointWithUnCertainty": $._encode_implicit(_TagClass.context, 2, () => _encode_GA_PointWithUnCertainty, $.BER),
    "polygon": $._encode_implicit(_TagClass.context, 3, () => _encode_GA_Polygon, $.BER),
}, $.BER); }
    return _cached_encoder_for_UMTSLocation(value, elGetter);
}


/* eslint-enable */
