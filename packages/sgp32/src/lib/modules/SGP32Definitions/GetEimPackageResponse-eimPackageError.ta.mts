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
 * @summary GetEimPackageResponse_eimPackageError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimPackageResponse-eimPackageError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetEimPackageResponse_eimPackageError = INTEGER;

/**
 * @summary GetEimPackageResponse_eimPackageError_noEimPackageAvailable
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_noEimPackageAvailable: GetEimPackageResponse_eimPackageError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_noEimPackageAvailable
 * @constant
 * @type {number}
 */
export
const noEimPackageAvailable: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_noEimPackageAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_eidNotFound
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_eidNotFound: GetEimPackageResponse_eimPackageError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_eidNotFound
 * @constant
 * @type {number}
 */
export
const eidNotFound: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_eidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_invalidEid
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_invalidEid: GetEimPackageResponse_eimPackageError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_invalidEid
 * @constant
 * @type {number}
 */
export
const invalidEid: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_missingEid
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_missingEid: GetEimPackageResponse_eimPackageError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_missingEid
 * @constant
 * @type {number}
 */
export
const missingEid: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_missingEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_undefinedError: GetEimPackageResponse_eimPackageError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GetEimPackageResponse_eimPackageError: $.ASN1Decoder<GetEimPackageResponse_eimPackageError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEimPackageResponse_eimPackageError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEimPackageResponse_eimPackageError (el: _Element): GetEimPackageResponse_eimPackageError {
    if (!_cached_decoder_for_GetEimPackageResponse_eimPackageError) { _cached_decoder_for_GetEimPackageResponse_eimPackageError = $._decodeInteger; }
    return _cached_decoder_for_GetEimPackageResponse_eimPackageError(el);
}

let _cached_encoder_for_GetEimPackageResponse_eimPackageError: $.ASN1Encoder<GetEimPackageResponse_eimPackageError> | null = null;

/**
 * @summary Encodes a(n) GetEimPackageResponse_eimPackageError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEimPackageResponse_eimPackageError, encoded as an ASN.1 Element.
 */
export
function _encode_GetEimPackageResponse_eimPackageError (value: GetEimPackageResponse_eimPackageError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEimPackageResponse_eimPackageError) { _cached_encoder_for_GetEimPackageResponse_eimPackageError = $._encodeInteger; }
    return _cached_encoder_for_GetEimPackageResponse_eimPackageError(value, elGetter);
}


/* eslint-enable */
