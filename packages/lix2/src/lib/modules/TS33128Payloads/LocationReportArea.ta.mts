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



/**
 * @summary LocationReportArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportArea  ::=  ENUMERATED
 * {
 *     cell(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocationReportArea {
    cell = 1,
}

/**
 * @summary LocationReportArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportArea  ::=  ENUMERATED
 * {
 *     cell(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LocationReportArea = _enum_for_LocationReportArea;

/**
 * @summary LocationReportArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportArea  ::=  ENUMERATED
 * {
 *     cell(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LocationReportArea = _enum_for_LocationReportArea;

/**
 * @summary LocationReportArea_cell
 * @constant
 * @type {number}
 */
export
const LocationReportArea_cell: LocationReportArea = LocationReportArea.cell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cell
 * @constant
 * @type {number}
 */
export
const cell: LocationReportArea = LocationReportArea.cell; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LocationReportArea: $.ASN1Decoder<LocationReportArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationReportArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationReportArea (el: _Element): LocationReportArea {
    if (!_cached_decoder_for_LocationReportArea) { _cached_decoder_for_LocationReportArea = $._decodeEnumerated; }
    return _cached_decoder_for_LocationReportArea(el);
}

let _cached_encoder_for_LocationReportArea: $.ASN1Encoder<LocationReportArea> | null = null;

/**
 * @summary Encodes a(n) LocationReportArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationReportArea, encoded as an ASN.1 Element.
 */
export
function _encode_LocationReportArea (value: LocationReportArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationReportArea) { _cached_encoder_for_LocationReportArea = $._encodeEnumerated; }
    return _cached_encoder_for_LocationReportArea(value, elGetter);
}


/* eslint-enable */
