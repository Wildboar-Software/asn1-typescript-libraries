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
 * @summary TypeDocument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDocument  ::=  ENUMERATED {
 *     article             (1),
 *     technical-report    (2),
 *     in-proceedings      (3),
 *     abstract            (4),
 *     book                (5),
 *     in-book             (6),
 *     collection          (7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TypeDocument {
    article = 1,
    technical_report = 2,
    in_proceedings = 3,
    abstract = 4,
    book = 5,
    in_book = 6,
    collection = 7,
}

/**
 * @summary TypeDocument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDocument  ::=  ENUMERATED {
 *     article             (1),
 *     technical-report    (2),
 *     in-proceedings      (3),
 *     abstract            (4),
 *     book                (5),
 *     in-book             (6),
 *     collection          (7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TypeDocument = _enum_for_TypeDocument;

/**
 * @summary TypeDocument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDocument  ::=  ENUMERATED {
 *     article             (1),
 *     technical-report    (2),
 *     in-proceedings      (3),
 *     abstract            (4),
 *     book                (5),
 *     in-book             (6),
 *     collection          (7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TypeDocument = _enum_for_TypeDocument;

/**
 * @summary TypeDocument_article
 * @constant
 * @type {number}
 */
export
const TypeDocument_article: TypeDocument = TypeDocument.article; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary article
 * @constant
 * @type {number}
 */
export
const article: TypeDocument = TypeDocument.article; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_technical_report
 * @constant
 * @type {number}
 */
export
const TypeDocument_technical_report: TypeDocument = TypeDocument.technical_report; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary technical_report
 * @constant
 * @type {number}
 */
export
const technical_report: TypeDocument = TypeDocument.technical_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_in_proceedings
 * @constant
 * @type {number}
 */
export
const TypeDocument_in_proceedings: TypeDocument = TypeDocument.in_proceedings; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_proceedings
 * @constant
 * @type {number}
 */
export
const in_proceedings: TypeDocument = TypeDocument.in_proceedings; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_abstract
 * @constant
 * @type {number}
 */
export
const TypeDocument_abstract: TypeDocument = TypeDocument.abstract; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export
const abstract: TypeDocument = TypeDocument.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_book
 * @constant
 * @type {number}
 */
export
const TypeDocument_book: TypeDocument = TypeDocument.book; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary book
 * @constant
 * @type {number}
 */
export
const book: TypeDocument = TypeDocument.book; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_in_book
 * @constant
 * @type {number}
 */
export
const TypeDocument_in_book: TypeDocument = TypeDocument.in_book; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_book
 * @constant
 * @type {number}
 */
export
const in_book: TypeDocument = TypeDocument.in_book; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_collection
 * @constant
 * @type {number}
 */
export
const TypeDocument_collection: TypeDocument = TypeDocument.collection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collection
 * @constant
 * @type {number}
 */
export
const collection: TypeDocument = TypeDocument.collection; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) TypeDocument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TypeDocument = $._decodeEnumerated;


/**
 * @summary Encodes a(n) TypeDocument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDocument, encoded as an ASN.1 Element.
 */
export const _encode_TypeDocument = $._encodeEnumerated;


/* eslint-enable */
