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
 * @summary ObjectClassKind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}

/**
 * @summary ObjectClassKind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type ObjectClassKind = _enum_for_ObjectClassKind;

/**
 * @summary ObjectClassKind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const ObjectClassKind = _enum_for_ObjectClassKind;

/**
 * @summary ObjectClassKind_abstract
 * @constant
 * @type {number}
 */
export
const ObjectClassKind_abstract: ObjectClassKind = ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export
const abstract: ObjectClassKind = ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export
const ObjectClassKind_structural: ObjectClassKind = ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary structural
 * @constant
 * @type {number}
 */
export
const structural: ObjectClassKind = ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export
const ObjectClassKind_auxiliary: ObjectClassKind = ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auxiliary
 * @constant
 * @type {number}
 */
export
const auxiliary: ObjectClassKind = ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ObjectClassKind: $.ASN1Decoder<ObjectClassKind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassKind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectClassKind (el: _Element): ObjectClassKind {
    if (!_cached_decoder_for_ObjectClassKind) { _cached_decoder_for_ObjectClassKind = $._decodeEnumerated; }
    return _cached_decoder_for_ObjectClassKind(el);
}

let _cached_encoder_for_ObjectClassKind: $.ASN1Encoder<ObjectClassKind> | null = null;

/**
 * @summary Encodes a(n) ObjectClassKind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassKind, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectClassKind (value: ObjectClassKind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectClassKind) { _cached_encoder_for_ObjectClassKind = $._encodeEnumerated; }
    return _cached_encoder_for_ObjectClassKind(value, elGetter);
}


/* eslint-enable */
