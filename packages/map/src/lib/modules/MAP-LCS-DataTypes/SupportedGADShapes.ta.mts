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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary SupportedGADShapes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedGADShapes  ::=  BIT STRING {
 *     ellipsoidPoint  (0),
 *     ellipsoidPointWithUncertaintyCircle (1),
 *     ellipsoidPointWithUncertaintyEllipse (2),
 *     polygon (3),
 *     ellipsoidPointWithAltitude (4),
 *     ellipsoidPointWithAltitudeAndUncertaintyElipsoid (5),
 *     ellipsoidArc  (6) } (SIZE (7..16))
 * ```
 */
export
type SupportedGADShapes = BIT_STRING;

/**
 * @summary SupportedGADShapes_ellipsoidPoint
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPoint: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPoint
 * @constant
 */
export
const ellipsoidPoint: number = SupportedGADShapes_ellipsoidPoint; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithUncertaintyCircle
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithUncertaintyCircle: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithUncertaintyCircle
 * @constant
 */
export
const ellipsoidPointWithUncertaintyCircle: number = SupportedGADShapes_ellipsoidPointWithUncertaintyCircle; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithUncertaintyEllipse
 * @constant
 */
export
const ellipsoidPointWithUncertaintyEllipse: number = SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_polygon
 * @constant
 */
export
const SupportedGADShapes_polygon: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary polygon
 * @constant
 */
export
const polygon: number = SupportedGADShapes_polygon; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithAltitude
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithAltitude: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithAltitude
 * @constant
 */
export
const ellipsoidPointWithAltitude: number = SupportedGADShapes_ellipsoidPointWithAltitude; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithAltitudeAndUncertaintyElipsoid
 * @constant
 */
export
const ellipsoidPointWithAltitudeAndUncertaintyElipsoid: number = SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidArc
 * @constant
 */
export
const SupportedGADShapes_ellipsoidArc: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidArc
 * @constant
 */
export
const ellipsoidArc: number = SupportedGADShapes_ellipsoidArc; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SupportedGADShapes: $.ASN1Decoder<SupportedGADShapes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedGADShapes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedGADShapes (el: _Element): SupportedGADShapes {
    if (!_cached_decoder_for_SupportedGADShapes) { _cached_decoder_for_SupportedGADShapes = $._decodeBitString; }
    return _cached_decoder_for_SupportedGADShapes(el);
}

let _cached_encoder_for_SupportedGADShapes: $.ASN1Encoder<SupportedGADShapes> | null = null;

/**
 * @summary Encodes a(n) SupportedGADShapes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedGADShapes, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedGADShapes (value: SupportedGADShapes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedGADShapes) { _cached_encoder_for_SupportedGADShapes = $._encodeBitString; }
    return _cached_encoder_for_SupportedGADShapes(value, elGetter);
}


/* eslint-enable */
