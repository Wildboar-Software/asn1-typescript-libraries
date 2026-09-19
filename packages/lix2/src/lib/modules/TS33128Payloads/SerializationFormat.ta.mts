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
 * @summary SerializationFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SerializationFormat  ::=  ENUMERATED
 * {
 *     xml(1),
 *     json(2),
 *     cbor(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SerializationFormat {
    xml = 1,
    json = 2,
    cbor = 3,
}

/**
 * @summary SerializationFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SerializationFormat  ::=  ENUMERATED
 * {
 *     xml(1),
 *     json(2),
 *     cbor(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SerializationFormat = _enum_for_SerializationFormat;

/**
 * @summary SerializationFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SerializationFormat  ::=  ENUMERATED
 * {
 *     xml(1),
 *     json(2),
 *     cbor(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SerializationFormat = _enum_for_SerializationFormat;

/**
 * @summary SerializationFormat_xml
 * @constant
 * @type {number}
 */
export
const SerializationFormat_xml: SerializationFormat = SerializationFormat.xml; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xml
 * @constant
 * @type {number}
 */
export
const xml: SerializationFormat = SerializationFormat.xml; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SerializationFormat_json
 * @constant
 * @type {number}
 */
export
const SerializationFormat_json: SerializationFormat = SerializationFormat.json; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary json
 * @constant
 * @type {number}
 */
export
const json: SerializationFormat = SerializationFormat.json; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SerializationFormat_cbor
 * @constant
 * @type {number}
 */
export
const SerializationFormat_cbor: SerializationFormat = SerializationFormat.cbor; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cbor
 * @constant
 * @type {number}
 */
export
const cbor: SerializationFormat = SerializationFormat.cbor; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SerializationFormat: $.ASN1Decoder<SerializationFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SerializationFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SerializationFormat (el: _Element): SerializationFormat {
    if (!_cached_decoder_for_SerializationFormat) { _cached_decoder_for_SerializationFormat = $._decodeEnumerated; }
    return _cached_decoder_for_SerializationFormat(el);
}

let _cached_encoder_for_SerializationFormat: $.ASN1Encoder<SerializationFormat> | null = null;

/**
 * @summary Encodes a(n) SerializationFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SerializationFormat, encoded as an ASN.1 Element.
 */
export
function _encode_SerializationFormat (value: SerializationFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SerializationFormat) { _cached_encoder_for_SerializationFormat = $._encodeEnumerated; }
    return _cached_encoder_for_SerializationFormat(value, elGetter);
}


/* eslint-enable */
