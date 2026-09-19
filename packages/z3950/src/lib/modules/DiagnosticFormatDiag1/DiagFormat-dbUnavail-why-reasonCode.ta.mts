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
 * @summary DiagFormat_dbUnavail_why_reasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-dbUnavail-why-reasonCode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_dbUnavail_why_reasonCode = INTEGER;

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_doesNotExist: DiagFormat_dbUnavail_why_reasonCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @constant
 * @type {number}
 */
export
const doesNotExist: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_doesNotExist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @constant
 * @type {number}
 */
export
const existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_existsButUnavail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_locked: DiagFormat_dbUnavail_why_reasonCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @constant
 * @type {number}
 */
export
const locked: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_locked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_accessDenied: DiagFormat_dbUnavail_why_reasonCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @constant
 * @type {number}
 */
export
const accessDenied: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode: $.ASN1Decoder<DiagFormat_dbUnavail_why_reasonCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_dbUnavail_why_reasonCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_dbUnavail_why_reasonCode (el: _Element): DiagFormat_dbUnavail_why_reasonCode {
    if (!_cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode) { _cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode(el);
}

let _cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode: $.ASN1Encoder<DiagFormat_dbUnavail_why_reasonCode> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_dbUnavail_why_reasonCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_dbUnavail_why_reasonCode, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_dbUnavail_why_reasonCode (value: DiagFormat_dbUnavail_why_reasonCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode) { _cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode(value, elGetter);
}


/* eslint-enable */
