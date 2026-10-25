/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Kind of cited external document (Clause 6.4.3): `article`(1),
 * `technical-report`(2), `in-proceedings`(3), `abstract`(4),
 * `book`(5), `in-book`(6), `collection`(7).
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
 * Kind of cited external document (Clause 6.4.3): `article`(1),
 * `technical-report`(2), `in-proceedings`(3), `abstract`(4),
 * `book`(5), `in-book`(6), `collection`(7).
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
 * Kind of cited external document (Clause 6.4.3): `article`(1),
 * `technical-report`(2), `in-proceedings`(3), `abstract`(4),
 * `book`(5), `in-book`(6), `collection`(7).
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
const TypeDocument: typeof _enum_for_TypeDocument = _enum_for_TypeDocument;

/**
 * @summary TypeDocument_article
 * @constant
 * @type {number}
 */
export
const TypeDocument_article: _enum_for_TypeDocument.article = TypeDocument.article; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary article
 * @constant
 * @type {number}
 */
export
const article: _enum_for_TypeDocument.article = TypeDocument.article; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_technical_report
 * @constant
 * @type {number}
 */
export
const TypeDocument_technical_report: _enum_for_TypeDocument.technical_report = TypeDocument.technical_report; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary technical_report
 * @constant
 * @type {number}
 */
export
const technical_report: _enum_for_TypeDocument.technical_report = TypeDocument.technical_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_in_proceedings
 * @constant
 * @type {number}
 */
export
const TypeDocument_in_proceedings: _enum_for_TypeDocument.in_proceedings = TypeDocument.in_proceedings; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_proceedings
 * @constant
 * @type {number}
 */
export
const in_proceedings: _enum_for_TypeDocument.in_proceedings = TypeDocument.in_proceedings; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_abstract
 * @constant
 * @type {number}
 */
export
const TypeDocument_abstract: _enum_for_TypeDocument.abstract = TypeDocument.abstract; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export
const abstract: _enum_for_TypeDocument.abstract = TypeDocument.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_book
 * @constant
 * @type {number}
 */
export
const TypeDocument_book: _enum_for_TypeDocument.book = TypeDocument.book; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary book
 * @constant
 * @type {number}
 */
export
const book: _enum_for_TypeDocument.book = TypeDocument.book; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_in_book
 * @constant
 * @type {number}
 */
export
const TypeDocument_in_book: _enum_for_TypeDocument.in_book = TypeDocument.in_book; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_book
 * @constant
 * @type {number}
 */
export
const in_book: _enum_for_TypeDocument.in_book = TypeDocument.in_book; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeDocument_collection
 * @constant
 * @type {number}
 */
export
const TypeDocument_collection: _enum_for_TypeDocument.collection = TypeDocument.collection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collection
 * @constant
 * @type {number}
 */
export
const collection: _enum_for_TypeDocument.collection = TypeDocument.collection; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) TypeDocument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TypeDocument: $.ASN1Decoder<number> = $._decodeEnumerated;


/**
 * @summary Encodes a(n) TypeDocument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDocument, encoded as an ASN.1 Element.
 */
export const _encode_TypeDocument: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
