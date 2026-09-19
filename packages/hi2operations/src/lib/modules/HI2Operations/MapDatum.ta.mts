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



export
enum _enum_for_MapDatum {
    wGS84 = 0,
    wGS72 = 1,
    eD50 = 2,
}

/**
 * @summary MapDatum
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MapDatum  ::=  ENUMERATED
 * {
 *     wGS84,
 *         -- World Geodetic System 1984
 *     wGS72,
 *     eD50,
 *         -- European Datum 50
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MapDatum = _enum_for_MapDatum | ENUMERATED;

/**
 * @summary MapDatum_wGS84
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS84: MapDatum = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS84
 * @constant
 * @type {number}
 */
export
const wGS84: MapDatum = MapDatum_wGS84; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_wGS72
 * @constant
 * @type {number}
 */
export
const MapDatum_wGS72: MapDatum = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wGS72
 * @constant
 * @type {number}
 */
export
const wGS72: MapDatum = MapDatum_wGS72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MapDatum_eD50
 * @constant
 * @type {number}
 */
export
const MapDatum_eD50: MapDatum = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eD50
 * @constant
 * @type {number}
 */
export
const eD50: MapDatum = MapDatum_eD50; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MapDatum: $.ASN1Decoder<MapDatum> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MapDatum
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MapDatum (el: _Element): MapDatum {
    if (!_cached_decoder_for_MapDatum) { _cached_decoder_for_MapDatum = $._decodeEnumerated; }
    return _cached_decoder_for_MapDatum(el);
}

let _cached_encoder_for_MapDatum: $.ASN1Encoder<MapDatum> | null = null;

/**
 * @summary Encodes a(n) MapDatum into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MapDatum, encoded as an ASN.1 Element.
 */
export
function _encode_MapDatum (value: MapDatum, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MapDatum) { _cached_encoder_for_MapDatum = $._encodeEnumerated; }
    return _cached_encoder_for_MapDatum(value, elGetter);
}


/* eslint-enable */
