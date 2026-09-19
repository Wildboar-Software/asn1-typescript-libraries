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
 * @summary CancelSessionResponseEsipa_cancelSessionError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseEsipa-cancelSessionError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CancelSessionResponseEsipa_cancelSessionError = INTEGER;

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId: CancelSessionResponseEsipa_cancelSessionError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponseEsipa_cancelSessionError = CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid: CancelSessionResponseEsipa_cancelSessionError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: CancelSessionResponseEsipa_cancelSessionError = CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_undefinedError: CancelSessionResponseEsipa_cancelSessionError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponseEsipa_cancelSessionError = CancelSessionResponseEsipa_cancelSessionError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CancelSessionResponseEsipa_cancelSessionError: $.ASN1Decoder<CancelSessionResponseEsipa_cancelSessionError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponseEsipa_cancelSessionError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponseEsipa_cancelSessionError (el: _Element): CancelSessionResponseEsipa_cancelSessionError {
    if (!_cached_decoder_for_CancelSessionResponseEsipa_cancelSessionError) { _cached_decoder_for_CancelSessionResponseEsipa_cancelSessionError = $._decodeInteger; }
    return _cached_decoder_for_CancelSessionResponseEsipa_cancelSessionError(el);
}

let _cached_encoder_for_CancelSessionResponseEsipa_cancelSessionError: $.ASN1Encoder<CancelSessionResponseEsipa_cancelSessionError> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponseEsipa_cancelSessionError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponseEsipa_cancelSessionError, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponseEsipa_cancelSessionError (value: CancelSessionResponseEsipa_cancelSessionError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponseEsipa_cancelSessionError) { _cached_encoder_for_CancelSessionResponseEsipa_cancelSessionError = $._encodeInteger; }
    return _cached_encoder_for_CancelSessionResponseEsipa_cancelSessionError(value, elGetter);
}


/* eslint-enable */
