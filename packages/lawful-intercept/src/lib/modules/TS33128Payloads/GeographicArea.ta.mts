/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Point, _decode_Point, _encode_Point } from "../TS33128Payloads/Point.ta.mjs";
// export { Point, _decode_Point, _encode_Point } from "../TS33128Payloads/Point.ta.mjs";
import { PointUncertaintyCircle, _decode_PointUncertaintyCircle, _encode_PointUncertaintyCircle } from "../TS33128Payloads/PointUncertaintyCircle.ta.mjs";
// export { PointUncertaintyCircle, _decode_PointUncertaintyCircle, _encode_PointUncertaintyCircle } from "../TS33128Payloads/PointUncertaintyCircle.ta.mjs";
import { PointUncertaintyEllipse, _decode_PointUncertaintyEllipse, _encode_PointUncertaintyEllipse } from "../TS33128Payloads/PointUncertaintyEllipse.ta.mjs";
// export { PointUncertaintyEllipse, _decode_PointUncertaintyEllipse, _encode_PointUncertaintyEllipse } from "../TS33128Payloads/PointUncertaintyEllipse.ta.mjs";
import { Polygon, _decode_Polygon, _encode_Polygon } from "../TS33128Payloads/Polygon.ta.mjs";
// export { Polygon, _decode_Polygon, _encode_Polygon } from "../TS33128Payloads/Polygon.ta.mjs";
import { PointAltitude, _decode_PointAltitude, _encode_PointAltitude } from "../TS33128Payloads/PointAltitude.ta.mjs";
// export { PointAltitude, _decode_PointAltitude, _encode_PointAltitude } from "../TS33128Payloads/PointAltitude.ta.mjs";
import { PointAltitudeUncertainty, _decode_PointAltitudeUncertainty, _encode_PointAltitudeUncertainty } from "../TS33128Payloads/PointAltitudeUncertainty.ta.mjs";
// export { PointAltitudeUncertainty, _decode_PointAltitudeUncertainty, _encode_PointAltitudeUncertainty } from "../TS33128Payloads/PointAltitudeUncertainty.ta.mjs";
import { EllipsoidArc, _decode_EllipsoidArc, _encode_EllipsoidArc } from "../TS33128Payloads/EllipsoidArc.ta.mjs";
// export { EllipsoidArc, _decode_EllipsoidArc, _encode_EllipsoidArc } from "../TS33128Payloads/EllipsoidArc.ta.mjs";


/**
 * @summary GeographicArea
 * @description
 * 
 * The GeographicArea type is derived from the data present in the
 * GeographicArea type defined in TS 29.572 [24] clause 6.1.6.2.5.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicArea  ::=  CHOICE
 * {
 *     point                       [1] Point,
 *     pointUncertaintyCircle      [2] PointUncertaintyCircle,
 *     pointUncertaintyEllipse     [3] PointUncertaintyEllipse,
 *     polygon                     [4] Polygon,
 *     pointAltitude               [5] PointAltitude,
 *     pointAltitudeUncertainty    [6] PointAltitudeUncertainty,
 *     ellipsoidArc                [7] EllipsoidArc
 * }
 * ```
 */
export
type GeographicArea =
    /**
     * @description
     *
     * Geographical area consisting of a single point, represented by its
     * longitude and latitude.
     */
    { point: Point } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Geographical area consisting of a point and an uncertainty value.
     */
    | { pointUncertaintyCircle: PointUncertaintyCircle } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Geographical area consisting of a point, plus an uncertainty ellipse and
     * a confidence value.
     */
    | { pointUncertaintyEllipse: PointUncertaintyEllipse } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Geographical area consisting of a list of points (between 3 to 15
     * points).
     */
    | { polygon: Polygon } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Geographical area consisting of a point and an altitude value.
     */
    | { pointAltitude: PointAltitude } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Geographical area consisting of a point, an altitude value and an
     * uncertainty value.
     */
    | { pointAltitudeUncertainty: PointAltitudeUncertainty } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The EllipsoidArc type is derived from the data present in the
     * EllipsoidArc type defined in TS 29.572 [24] clause 6.1.6.2.12. (3GPP TS
     * 33.128, clause 7.3.3.2.19.)
     */
    | { ellipsoidArc: EllipsoidArc } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GeographicArea: $.ASN1Decoder<GeographicArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeographicArea (el: _Element): GeographicArea {
    if (!_cached_decoder_for_GeographicArea) { _cached_decoder_for_GeographicArea = $._decode_extensible_choice<GeographicArea>({
    "CONTEXT 1": [ "point", $._decode_implicit<Point>(() => _decode_Point) ],
    "CONTEXT 2": [ "pointUncertaintyCircle", $._decode_implicit<PointUncertaintyCircle>(() => _decode_PointUncertaintyCircle) ],
    "CONTEXT 3": [ "pointUncertaintyEllipse", $._decode_implicit<PointUncertaintyEllipse>(() => _decode_PointUncertaintyEllipse) ],
    "CONTEXT 4": [ "polygon", $._decode_implicit<Polygon>(() => _decode_Polygon) ],
    "CONTEXT 5": [ "pointAltitude", $._decode_implicit<PointAltitude>(() => _decode_PointAltitude) ],
    "CONTEXT 6": [ "pointAltitudeUncertainty", $._decode_implicit<PointAltitudeUncertainty>(() => _decode_PointAltitudeUncertainty) ],
    "CONTEXT 7": [ "ellipsoidArc", $._decode_implicit<EllipsoidArc>(() => _decode_EllipsoidArc) ]
}); }
    return _cached_decoder_for_GeographicArea(el);
}

let _cached_encoder_for_GeographicArea: $.ASN1Encoder<GeographicArea> | null = null;

/**
 * @summary Encodes a(n) GeographicArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicArea, encoded as an ASN.1 Element.
 */
export
function _encode_GeographicArea (value: GeographicArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeographicArea) { _cached_encoder_for_GeographicArea = $._encode_choice<GeographicArea>({
    "point": $._encode_implicit(_TagClass.context, 1, () => _encode_Point, $.BER),
    "pointUncertaintyCircle": $._encode_implicit(_TagClass.context, 2, () => _encode_PointUncertaintyCircle, $.BER),
    "pointUncertaintyEllipse": $._encode_implicit(_TagClass.context, 3, () => _encode_PointUncertaintyEllipse, $.BER),
    "polygon": $._encode_implicit(_TagClass.context, 4, () => _encode_Polygon, $.BER),
    "pointAltitude": $._encode_implicit(_TagClass.context, 5, () => _encode_PointAltitude, $.BER),
    "pointAltitudeUncertainty": $._encode_implicit(_TagClass.context, 6, () => _encode_PointAltitudeUncertainty, $.BER),
    "ellipsoidArc": $._encode_implicit(_TagClass.context, 7, () => _encode_EllipsoidArc, $.BER),
}, $.BER); }
    return _cached_encoder_for_GeographicArea(value, elGetter);
}


/* eslint-enable */
