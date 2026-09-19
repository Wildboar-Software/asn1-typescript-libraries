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
 * @summary DiagFormat_extServices_immediate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-immediate ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices_immediate = INTEGER;

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_failed: DiagFormat_extServices_immediate = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @constant
 * @type {number}
 */
export
const failed: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_service: DiagFormat_extServices_immediate = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @constant
 * @type {number}
 */
export
const service: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_parameters: DiagFormat_extServices_immediate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @constant
 * @type {number}
 */
export
const parameters: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_parameters; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_extServices_immediate: $.ASN1Decoder<DiagFormat_extServices_immediate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_extServices_immediate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_extServices_immediate (el: _Element): DiagFormat_extServices_immediate {
    if (!_cached_decoder_for_DiagFormat_extServices_immediate) { _cached_decoder_for_DiagFormat_extServices_immediate = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_extServices_immediate(el);
}

let _cached_encoder_for_DiagFormat_extServices_immediate: $.ASN1Encoder<DiagFormat_extServices_immediate> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_extServices_immediate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_extServices_immediate, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_extServices_immediate (value: DiagFormat_extServices_immediate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_extServices_immediate) { _cached_encoder_for_DiagFormat_extServices_immediate = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_extServices_immediate(value, elGetter);
}


/* eslint-enable */
