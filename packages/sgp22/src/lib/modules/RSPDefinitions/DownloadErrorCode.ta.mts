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
 * @summary DownloadErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DownloadErrorCode  ::=  INTEGER {invalidCertificate(1), invalidSignature(2), unsupportedCurve(3), noSessionContext(4), invalidTransactionId(5), undefinedError(127)}
 * ```
 */
export
type DownloadErrorCode = INTEGER;

/**
 * @summary DownloadErrorCode_invalidCertificate
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_invalidCertificate: DownloadErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidCertificate
 * @constant
 * @type {number}
 */
export
const invalidCertificate: DownloadErrorCode = DownloadErrorCode_invalidCertificate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidSignature
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_invalidSignature: DownloadErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: DownloadErrorCode = DownloadErrorCode_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_unsupportedCurve
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_unsupportedCurve: DownloadErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_unsupportedCurve
 * @constant
 * @type {number}
 */
export
const unsupportedCurve: DownloadErrorCode = DownloadErrorCode_unsupportedCurve; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_noSessionContext
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_noSessionContext: DownloadErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_noSessionContext
 * @constant
 * @type {number}
 */
export
const noSessionContext: DownloadErrorCode = DownloadErrorCode_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_invalidTransactionId: DownloadErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: DownloadErrorCode = DownloadErrorCode_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_undefinedError: DownloadErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DownloadErrorCode = DownloadErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DownloadErrorCode: $.ASN1Decoder<DownloadErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DownloadErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DownloadErrorCode (el: _Element): DownloadErrorCode {
    if (!_cached_decoder_for_DownloadErrorCode) { _cached_decoder_for_DownloadErrorCode = $._decodeInteger; }
    return _cached_decoder_for_DownloadErrorCode(el);
}

let _cached_encoder_for_DownloadErrorCode: $.ASN1Encoder<DownloadErrorCode> | null = null;

/**
 * @summary Encodes a(n) DownloadErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DownloadErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_DownloadErrorCode (value: DownloadErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DownloadErrorCode) { _cached_encoder_for_DownloadErrorCode = $._encodeInteger; }
    return _cached_encoder_for_DownloadErrorCode(value, elGetter);
}


/* eslint-enable */
