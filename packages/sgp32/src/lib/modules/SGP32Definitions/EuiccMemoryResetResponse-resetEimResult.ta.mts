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
 * @summary EuiccMemoryResetResponse_resetEimResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetEimResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetResponse_resetEimResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_ok
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_ok: EuiccMemoryResetResponse_resetEimResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_nothingToDelete: EuiccMemoryResetResponse_resetEimResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_nothingToDelete
 * @constant
 * @type {number}
 */
export
const nothingToDelete: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported: EuiccMemoryResetResponse_resetEimResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported
 * @constant
 * @type {number}
 */
export
const eimResetNotSupported: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_eimResetNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetEimResult_undefinedError: EuiccMemoryResetResponse_resetEimResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccMemoryResetResponse_resetEimResult = EuiccMemoryResetResponse_resetEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EuiccMemoryResetResponse_resetEimResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetEimResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetResponse_resetEimResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetResponse_resetEimResult (el: _Element): EuiccMemoryResetResponse_resetEimResult {
    if (!_cached_decoder_for_EuiccMemoryResetResponse_resetEimResult) { _cached_decoder_for_EuiccMemoryResetResponse_resetEimResult = $._decodeInteger; }
    return _cached_decoder_for_EuiccMemoryResetResponse_resetEimResult(el);
}

let _cached_encoder_for_EuiccMemoryResetResponse_resetEimResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetEimResult> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetResponse_resetEimResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetResponse_resetEimResult, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetResponse_resetEimResult (value: EuiccMemoryResetResponse_resetEimResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetResponse_resetEimResult) { _cached_encoder_for_EuiccMemoryResetResponse_resetEimResult = $._encodeInteger; }
    return _cached_encoder_for_EuiccMemoryResetResponse_resetEimResult(value, elGetter);
}


/* eslint-enable */
