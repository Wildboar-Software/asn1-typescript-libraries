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
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideEimPackageResultResponse-provideEimPackageResultError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProvideEimPackageResultResponse_provideEimPackageResultError = INTEGER;

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound: ProvideEimPackageResultResponse_provideEimPackageResultError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound
 * @constant
 * @type {number}
 */
export
const eidNotFound: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid: ProvideEimPackageResultResponse_provideEimPackageResultError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid
 * @constant
 * @type {number}
 */
export
const invalidEid: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid: ProvideEimPackageResultResponse_provideEimPackageResultError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid
 * @constant
 * @type {number}
 */
export
const missingEid: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError: ProvideEimPackageResultResponse_provideEimPackageResultError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError: $.ASN1Decoder<ProvideEimPackageResultResponse_provideEimPackageResultError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideEimPackageResultResponse_provideEimPackageResultError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideEimPackageResultResponse_provideEimPackageResultError (el: _Element): ProvideEimPackageResultResponse_provideEimPackageResultError {
    if (!_cached_decoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError) { _cached_decoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError = $._decodeInteger; }
    return _cached_decoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError(el);
}

let _cached_encoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError: $.ASN1Encoder<ProvideEimPackageResultResponse_provideEimPackageResultError> | null = null;

/**
 * @summary Encodes a(n) ProvideEimPackageResultResponse_provideEimPackageResultError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideEimPackageResultResponse_provideEimPackageResultError, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideEimPackageResultResponse_provideEimPackageResultError (value: ProvideEimPackageResultResponse_provideEimPackageResultError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError) { _cached_encoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError = $._encodeInteger; }
    return _cached_encoder_for_ProvideEimPackageResultResponse_provideEimPackageResultError(value, elGetter);
}


/* eslint-enable */
