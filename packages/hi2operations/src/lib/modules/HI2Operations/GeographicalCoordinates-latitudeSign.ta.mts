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
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates-latitudeSign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GeographicalCoordinates_latitudeSign {
    north = 0,
    south = 1,
}

/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates-latitudeSign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type GeographicalCoordinates_latitudeSign = _enum_for_GeographicalCoordinates_latitudeSign;

/**
 * @summary GeographicalCoordinates_latitudeSign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates-latitudeSign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const GeographicalCoordinates_latitudeSign = _enum_for_GeographicalCoordinates_latitudeSign;

/**
 * @summary GeographicalCoordinates_latitudeSign_north
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_north: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.north; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary north
 * @constant
 * @type {number}
 */
export
const north: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.north; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GeographicalCoordinates_latitudeSign_south
 * @constant
 * @type {number}
 */
export
const GeographicalCoordinates_latitudeSign_south: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.south; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary south
 * @constant
 * @type {number}
 */
export
const south: GeographicalCoordinates_latitudeSign = GeographicalCoordinates_latitudeSign.south; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GeographicalCoordinates_latitudeSign: $.ASN1Decoder<GeographicalCoordinates_latitudeSign> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicalCoordinates_latitudeSign
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeographicalCoordinates_latitudeSign (el: _Element): GeographicalCoordinates_latitudeSign {
    if (!_cached_decoder_for_GeographicalCoordinates_latitudeSign) { _cached_decoder_for_GeographicalCoordinates_latitudeSign = $._decodeEnumerated; }
    return _cached_decoder_for_GeographicalCoordinates_latitudeSign(el);
}

let _cached_encoder_for_GeographicalCoordinates_latitudeSign: $.ASN1Encoder<GeographicalCoordinates_latitudeSign> | null = null;

/**
 * @summary Encodes a(n) GeographicalCoordinates_latitudeSign into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalCoordinates_latitudeSign, encoded as an ASN.1 Element.
 */
export
function _encode_GeographicalCoordinates_latitudeSign (value: GeographicalCoordinates_latitudeSign, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeographicalCoordinates_latitudeSign) { _cached_encoder_for_GeographicalCoordinates_latitudeSign = $._encodeEnumerated; }
    return _cached_encoder_for_GeographicalCoordinates_latitudeSign(value, elGetter);
}


/* eslint-enable */
