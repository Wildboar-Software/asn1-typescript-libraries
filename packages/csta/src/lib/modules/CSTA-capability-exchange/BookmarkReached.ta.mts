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
 * @summary BookmarkReached
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BookmarkReached  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type BookmarkReached = BIT_STRING;

/**
 * @summary BookmarkReached_resource
 * @constant
 */
export
const BookmarkReached_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = BookmarkReached_resource; /* SHORT_NAMED_BIT */

/**
 * @summary BookmarkReached_currentPosition
 * @constant
 */
export
const BookmarkReached_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = BookmarkReached_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary BookmarkReached_servicesPermitted
 * @constant
 */
export
const BookmarkReached_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = BookmarkReached_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary BookmarkReached_privateData
 * @constant
 */
export
const BookmarkReached_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = BookmarkReached_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BookmarkReached: $.ASN1Decoder<BookmarkReached> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BookmarkReached
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BookmarkReached (el: _Element): BookmarkReached {
    if (!_cached_decoder_for_BookmarkReached) { _cached_decoder_for_BookmarkReached = $._decodeBitString; }
    return _cached_decoder_for_BookmarkReached(el);
}

let _cached_encoder_for_BookmarkReached: $.ASN1Encoder<BookmarkReached> | null = null;

/**
 * @summary Encodes a(n) BookmarkReached into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BookmarkReached, encoded as an ASN.1 Element.
 */
export
function _encode_BookmarkReached (value: BookmarkReached, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BookmarkReached) { _cached_encoder_for_BookmarkReached = $._encodeBitString; }
    return _cached_encoder_for_BookmarkReached(value, elGetter);
}


/* eslint-enable */
