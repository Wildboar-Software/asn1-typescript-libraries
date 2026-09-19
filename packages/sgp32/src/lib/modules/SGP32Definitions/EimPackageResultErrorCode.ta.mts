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
 * @summary EimPackageResultErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageResultErrorCode  ::=  INTEGER {
 *     invalidPackageFormat(1),
 *     unknownPackage(2),
 *     undefinedError(127) 
 * }
 * ```
 */
export
type EimPackageResultErrorCode = INTEGER;

/**
 * @summary EimPackageResultErrorCode_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const EimPackageResultErrorCode_invalidPackageFormat: EimPackageResultErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const invalidPackageFormat: EimPackageResultErrorCode = EimPackageResultErrorCode_invalidPackageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_unknownPackage
 * @constant
 * @type {number}
 */
export
const EimPackageResultErrorCode_unknownPackage: EimPackageResultErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_unknownPackage
 * @constant
 * @type {number}
 */
export
const unknownPackage: EimPackageResultErrorCode = EimPackageResultErrorCode_unknownPackage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const EimPackageResultErrorCode_undefinedError: EimPackageResultErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EimPackageResultErrorCode = EimPackageResultErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EimPackageResultErrorCode: $.ASN1Decoder<EimPackageResultErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageResultErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageResultErrorCode (el: _Element): EimPackageResultErrorCode {
    if (!_cached_decoder_for_EimPackageResultErrorCode) { _cached_decoder_for_EimPackageResultErrorCode = $._decodeInteger; }
    return _cached_decoder_for_EimPackageResultErrorCode(el);
}

let _cached_encoder_for_EimPackageResultErrorCode: $.ASN1Encoder<EimPackageResultErrorCode> | null = null;

/**
 * @summary Encodes a(n) EimPackageResultErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageResultErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageResultErrorCode (value: EimPackageResultErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageResultErrorCode) { _cached_encoder_for_EimPackageResultErrorCode = $._encodeInteger; }
    return _cached_encoder_for_EimPackageResultErrorCode(value, elGetter);
}


/* eslint-enable */
