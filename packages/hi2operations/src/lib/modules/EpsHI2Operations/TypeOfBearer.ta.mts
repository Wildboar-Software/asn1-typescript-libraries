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
enum _enum_for_TypeOfBearer {
    defaultBearer = 1,
    dedicatedBearer = 2,
}

/**
 * @summary TypeOfBearer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfBearer  ::=  ENUMERATED
 * {
 *  defaultBearer (1),
 *  dedicatedBearer (2),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfBearer = _enum_for_TypeOfBearer | ENUMERATED;

/**
 * @summary TypeOfBearer_defaultBearer
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_defaultBearer: TypeOfBearer = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary defaultBearer
 * @constant
 * @type {number}
 */
export
const defaultBearer: TypeOfBearer = TypeOfBearer_defaultBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfBearer_dedicatedBearer
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_dedicatedBearer: TypeOfBearer = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dedicatedBearer
 * @constant
 * @type {number}
 */
export
const dedicatedBearer: TypeOfBearer = TypeOfBearer_dedicatedBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TypeOfBearer: $.ASN1Decoder<TypeOfBearer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfBearer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeOfBearer (el: _Element): TypeOfBearer {
    if (!_cached_decoder_for_TypeOfBearer) { _cached_decoder_for_TypeOfBearer = $._decodeEnumerated; }
    return _cached_decoder_for_TypeOfBearer(el);
}

let _cached_encoder_for_TypeOfBearer: $.ASN1Encoder<TypeOfBearer> | null = null;

/**
 * @summary Encodes a(n) TypeOfBearer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfBearer, encoded as an ASN.1 Element.
 */
export
function _encode_TypeOfBearer (value: TypeOfBearer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeOfBearer) { _cached_encoder_for_TypeOfBearer = $._encodeEnumerated; }
    return _cached_encoder_for_TypeOfBearer(value, elGetter);
}


/* eslint-enable */
