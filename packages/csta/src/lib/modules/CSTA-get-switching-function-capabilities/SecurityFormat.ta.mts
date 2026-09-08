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
 * @summary SecurityFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityFormat  ::=  BIT STRING
 * {     octetStringFromSF                 (0),
 *     otherTypeFromSF                 (1),
 *     octetStringToSF                 (2),
 *     otherTypeToSF                     (3) }
 * ```
 */
export
type SecurityFormat = BIT_STRING;

/**
 * @summary SecurityFormat_octetStringFromSF
 * @constant
 */
export
const SecurityFormat_octetStringFromSF: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary octetStringFromSF
 * @constant
 */
export
const octetStringFromSF: number = SecurityFormat_octetStringFromSF; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityFormat_otherTypeFromSF
 * @constant
 */
export
const SecurityFormat_otherTypeFromSF: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary otherTypeFromSF
 * @constant
 */
export
const otherTypeFromSF: number = SecurityFormat_otherTypeFromSF; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityFormat_octetStringToSF
 * @constant
 */
export
const SecurityFormat_octetStringToSF: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary octetStringToSF
 * @constant
 */
export
const octetStringToSF: number = SecurityFormat_octetStringToSF; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityFormat_otherTypeToSF
 * @constant
 */
export
const SecurityFormat_otherTypeToSF: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary otherTypeToSF
 * @constant
 */
export
const otherTypeToSF: number = SecurityFormat_otherTypeToSF; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SecurityFormat: $.ASN1Decoder<SecurityFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityFormat (el: _Element): SecurityFormat {
    if (!_cached_decoder_for_SecurityFormat) { _cached_decoder_for_SecurityFormat = $._decodeBitString; }
    return _cached_decoder_for_SecurityFormat(el);
}

let _cached_encoder_for_SecurityFormat: $.ASN1Encoder<SecurityFormat> | null = null;

/**
 * @summary Encodes a(n) SecurityFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityFormat, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityFormat (value: SecurityFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityFormat) { _cached_encoder_for_SecurityFormat = $._encodeBitString; }
    return _cached_encoder_for_SecurityFormat(value, elGetter);
}


/* eslint-enable */
