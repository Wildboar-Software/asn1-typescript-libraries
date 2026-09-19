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
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageResponse-getBoundProfilePackageError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetBoundProfilePackageResponse_getBoundProfilePackageError = INTEGER;

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid: GetBoundProfilePackageResponse_getBoundProfilePackageError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing: GetBoundProfilePackageResponse_getBoundProfilePackageError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing
 * @constant
 * @type {number}
 */
export
const confirmationCodeMissing: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused: GetBoundProfilePackageResponse_getBoundProfilePackageError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused
 * @constant
 * @type {number}
 */
export
const confirmationCodeRefused: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded: GetBoundProfilePackageResponse_getBoundProfilePackageError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded
 * @constant
 * @type {number}
 */
export
const confirmationCodeRetriesExceeded: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused: GetBoundProfilePackageResponse_getBoundProfilePackageError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused
 * @constant
 * @type {number}
 */
export
const bppRebindingRefused: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated: GetBoundProfilePackageResponse_getBoundProfilePackageError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated
 * @constant
 * @type {number}
 */
export
const deprecated: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId: GetBoundProfilePackageResponse_getBoundProfilePackageError = 95; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError: GetBoundProfilePackageResponse_getBoundProfilePackageError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: GetBoundProfilePackageResponse_getBoundProfilePackageError = GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError: $.ASN1Decoder<GetBoundProfilePackageResponse_getBoundProfilePackageError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetBoundProfilePackageResponse_getBoundProfilePackageError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetBoundProfilePackageResponse_getBoundProfilePackageError (el: _Element): GetBoundProfilePackageResponse_getBoundProfilePackageError {
    if (!_cached_decoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError) { _cached_decoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError = $._decodeInteger; }
    return _cached_decoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError(el);
}

let _cached_encoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError: $.ASN1Encoder<GetBoundProfilePackageResponse_getBoundProfilePackageError> | null = null;

/**
 * @summary Encodes a(n) GetBoundProfilePackageResponse_getBoundProfilePackageError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBoundProfilePackageResponse_getBoundProfilePackageError, encoded as an ASN.1 Element.
 */
export
function _encode_GetBoundProfilePackageResponse_getBoundProfilePackageError (value: GetBoundProfilePackageResponse_getBoundProfilePackageError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError) { _cached_encoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError = $._encodeInteger; }
    return _cached_encoder_for_GetBoundProfilePackageResponse_getBoundProfilePackageError(value, elGetter);
}


/* eslint-enable */
