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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupportedGADShapes
 * @description
 *
 * Mark all 3GPP TS 23.032 shapes supported. Bits 7–15 ignored. If omitted,
 * assume ellipsoid point variants and ellipsoid arc (3GPP TS 29.002 V19.1.0
 * clauses 7.6.11.20 and 17.7.13).
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
 * @description
 *
 * `ellipsoidPoint (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPoint: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPoint
 * @description
 *
 * `ellipsoidPoint (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const ellipsoidPoint: number = SupportedGADShapes_ellipsoidPoint; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithUncertaintyCircle
 * @description
 *
 * `ellipsoidPointWithUncertaintyCircle (1)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithUncertaintyCircle: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithUncertaintyCircle
 * @description
 *
 * `ellipsoidPointWithUncertaintyCircle (1)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 */
export
const ellipsoidPointWithUncertaintyCircle: number = SupportedGADShapes_ellipsoidPointWithUncertaintyCircle; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse
 * @description
 *
 * `ellipsoidPointWithUncertaintyEllipse (2)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithUncertaintyEllipse
 * @description
 *
 * `ellipsoidPointWithUncertaintyEllipse (2)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 */
export
const ellipsoidPointWithUncertaintyEllipse: number = SupportedGADShapes_ellipsoidPointWithUncertaintyEllipse; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_polygon
 * @description
 *
 * `polygon (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_polygon: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary polygon
 * @description
 *
 * `polygon (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const polygon: number = SupportedGADShapes_polygon; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithAltitude
 * @description
 *
 * `ellipsoidPointWithAltitude (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithAltitude: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithAltitude
 * @description
 *
 * `ellipsoidPointWithAltitude (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const ellipsoidPointWithAltitude: number = SupportedGADShapes_ellipsoidPointWithAltitude; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid
 * @description
 *
 * `ellipsoidPointWithAltitudeAndUncertaintyElipsoid (5)` (3GPP TS 29.002
 * V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidPointWithAltitudeAndUncertaintyElipsoid
 * @description
 *
 * `ellipsoidPointWithAltitudeAndUncertaintyElipsoid (5)` (3GPP TS 29.002
 * V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const ellipsoidPointWithAltitudeAndUncertaintyElipsoid: number = SupportedGADShapes_ellipsoidPointWithAltitudeAndUncertaintyElipsoid; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedGADShapes_ellipsoidArc
 * @description
 *
 * `ellipsoidArc (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const SupportedGADShapes_ellipsoidArc: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ellipsoidArc
 * @description
 *
 * `ellipsoidArc (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 */
export
const ellipsoidArc: number = SupportedGADShapes_ellipsoidArc; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedGADShapes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SupportedGADShapes = (el: _Element): SupportedGADShapes => {
    const value = $._decodeBitString(el);
    if (value.length < 7 || value.length > 16) {
        throw new ASN1SizeError("SupportedGADShapes violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SupportedGADShapes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedGADShapes, encoded as an ASN.1 Element.
 */
export const _encode_SupportedGADShapes = $._encodeBitString;


/* eslint-enable */
