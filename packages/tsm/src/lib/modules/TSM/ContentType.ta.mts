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



export
enum _enum_for_ContentType {
    change_cipher_spec = 20,
    alert = 21,
    handshake = 22,
    application_data = 23,
}

/**
 * @summary ContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType     ::=     ENUMERATED {
 * change-cipher-spec     (20),
 * alert             (21),
 * handshake             (22),
 * application-data         (23),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ContentType = _enum_for_ContentType | ENUMERATED;

/**
 * @summary ContentType_change_cipher_spec
 * @constant
 * @type {number}
 */
export
const ContentType_change_cipher_spec: ContentType = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change_cipher_spec
 * @constant
 * @type {number}
 */
export
const change_cipher_spec: ContentType = ContentType_change_cipher_spec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentType_alert
 * @constant
 * @type {number}
 */
export
const ContentType_alert: ContentType = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alert
 * @constant
 * @type {number}
 */
export
const alert: ContentType = ContentType_alert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentType_handshake
 * @constant
 * @type {number}
 */
export
const ContentType_handshake: ContentType = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handshake
 * @constant
 * @type {number}
 */
export
const handshake: ContentType = ContentType_handshake; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentType_application_data
 * @constant
 * @type {number}
 */
export
const ContentType_application_data: ContentType = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary application_data
 * @constant
 * @type {number}
 */
export
const application_data: ContentType = ContentType_application_data; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ContentType: $.ASN1Decoder<ContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContentType (el: _Element): ContentType {
    if (!_cached_decoder_for_ContentType) { _cached_decoder_for_ContentType = $._decodeEnumerated; }
    return _cached_decoder_for_ContentType(el);
}

let _cached_encoder_for_ContentType: $.ASN1Encoder<ContentType> | null = null;

/**
 * @summary Encodes a(n) ContentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentType, encoded as an ASN.1 Element.
 */
export
function _encode_ContentType (value: ContentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContentType) { _cached_encoder_for_ContentType = $._encodeEnumerated; }
    return _cached_encoder_for_ContentType(value, elGetter);
}


/* eslint-enable */
