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
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGAccessMode {
    closedMode = 1,
    hybridMode = 2,
}

/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode_closedMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @constant
 * @type {number}
 */
export
const closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGAccessMode_hybridMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @constant
 * @type {number}
 */
export
const hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CSGAccessMode: $.ASN1Decoder<CSGAccessMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSGAccessMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSGAccessMode (el: _Element): CSGAccessMode {
    if (!_cached_decoder_for_CSGAccessMode) { _cached_decoder_for_CSGAccessMode = $._decodeEnumerated; }
    return _cached_decoder_for_CSGAccessMode(el);
}

let _cached_encoder_for_CSGAccessMode: $.ASN1Encoder<CSGAccessMode> | null = null;

/**
 * @summary Encodes a(n) CSGAccessMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSGAccessMode, encoded as an ASN.1 Element.
 */
export
function _encode_CSGAccessMode (value: CSGAccessMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSGAccessMode) { _cached_encoder_for_CSGAccessMode = $._encodeEnumerated; }
    return _cached_encoder_for_CSGAccessMode(value, elGetter);
}


/* eslint-enable */
