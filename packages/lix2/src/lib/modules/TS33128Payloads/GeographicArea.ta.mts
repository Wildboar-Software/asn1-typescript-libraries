/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
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
    { point: Point } /* CHOICE_ALT_ROOT */
    | { pointUncertaintyCircle: PointUncertaintyCircle } /* CHOICE_ALT_ROOT */
    | { pointUncertaintyEllipse: PointUncertaintyEllipse } /* CHOICE_ALT_ROOT */
    | { polygon: Polygon } /* CHOICE_ALT_ROOT */
    | { pointAltitude: PointAltitude } /* CHOICE_ALT_ROOT */
    | { pointAltitudeUncertainty: PointAltitudeUncertainty } /* CHOICE_ALT_ROOT */
    | { ellipsoidArc: EllipsoidArc } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GeographicArea: $.ASN1Decoder<GeographicArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeographicArea (el: _Element): GeographicArea {
    if (!_cached_decoder_for_GeographicArea) { _cached_decoder_for_GeographicArea = $._decode_inextensible_choice<GeographicArea>({
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
