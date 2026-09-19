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
 * @summary DocumentTypeListVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentTypeListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type DocumentTypeListVersion = INTEGER;

/**
 * @summary DocumentTypeListVersion_v0
 * @constant
 * @type {number}
 */
export
const DocumentTypeListVersion_v0: DocumentTypeListVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentTypeListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: DocumentTypeListVersion = DocumentTypeListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DocumentTypeListVersion: $.ASN1Decoder<DocumentTypeListVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DocumentTypeListVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DocumentTypeListVersion (el: _Element): DocumentTypeListVersion {
    if (!_cached_decoder_for_DocumentTypeListVersion) { _cached_decoder_for_DocumentTypeListVersion = $._decodeInteger; }
    return _cached_decoder_for_DocumentTypeListVersion(el);
}

let _cached_encoder_for_DocumentTypeListVersion: $.ASN1Encoder<DocumentTypeListVersion> | null = null;

/**
 * @summary Encodes a(n) DocumentTypeListVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentTypeListVersion, encoded as an ASN.1 Element.
 */
export
function _encode_DocumentTypeListVersion (value: DocumentTypeListVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DocumentTypeListVersion) { _cached_encoder_for_DocumentTypeListVersion = $._encodeInteger; }
    return _cached_encoder_for_DocumentTypeListVersion(value, elGetter);
}


/* eslint-enable */
