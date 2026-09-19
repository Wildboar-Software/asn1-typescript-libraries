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
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse-resetImmediateEnableConfigResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetResponse_resetImmediateEnableConfigResult = INTEGER;

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported
 * @constant
 * @type {number}
 */
export
const resetIECNotSupported: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_resetIECNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccMemoryResetResponse_resetImmediateEnableConfigResult = EuiccMemoryResetResponse_resetImmediateEnableConfigResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Decoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetResponse_resetImmediateEnableConfigResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult (el: _Element): EuiccMemoryResetResponse_resetImmediateEnableConfigResult {
    if (!_cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult) { _cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult = $._decodeInteger; }
    return _cached_decoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult(el);
}

let _cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult: $.ASN1Encoder<EuiccMemoryResetResponse_resetImmediateEnableConfigResult> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetResponse_resetImmediateEnableConfigResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetResponse_resetImmediateEnableConfigResult, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult (value: EuiccMemoryResetResponse_resetImmediateEnableConfigResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult) { _cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult = $._encodeInteger; }
    return _cached_encoder_for_EuiccMemoryResetResponse_resetImmediateEnableConfigResult(value, elGetter);
}


/* eslint-enable */
