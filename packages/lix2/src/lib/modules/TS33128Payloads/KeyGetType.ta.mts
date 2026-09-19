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
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_KeyGetType {
    internal = 1,
    external = 2,
}

/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type KeyGetType = _enum_for_KeyGetType;

/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const KeyGetType = _enum_for_KeyGetType;

/**
 * @summary KeyGetType_internal
 * @constant
 * @type {number}
 */
export
const KeyGetType_internal: KeyGetType = KeyGetType.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: KeyGetType = KeyGetType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KeyGetType_external
 * @constant
 * @type {number}
 */
export
const KeyGetType_external: KeyGetType = KeyGetType.external; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: KeyGetType = KeyGetType.external; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_KeyGetType: $.ASN1Decoder<KeyGetType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyGetType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyGetType (el: _Element): KeyGetType {
    if (!_cached_decoder_for_KeyGetType) { _cached_decoder_for_KeyGetType = $._decodeEnumerated; }
    return _cached_decoder_for_KeyGetType(el);
}

let _cached_encoder_for_KeyGetType: $.ASN1Encoder<KeyGetType> | null = null;

/**
 * @summary Encodes a(n) KeyGetType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyGetType, encoded as an ASN.1 Element.
 */
export
function _encode_KeyGetType (value: KeyGetType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyGetType) { _cached_encoder_for_KeyGetType = $._encodeEnumerated; }
    return _cached_encoder_for_KeyGetType(value, elGetter);
}


/* eslint-enable */
