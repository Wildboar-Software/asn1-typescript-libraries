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
 * @summary GetCertsResponse_getCertsError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsResponse-getCertsError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetCertsResponse_getCertsError = INTEGER;

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_invalidCiPKId: GetCertsResponse_getCertsError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @constant
 * @type {number}
 */
export
const invalidCiPKId: GetCertsResponse_getCertsError = GetCertsResponse_getCertsError_invalidCiPKId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_undfinedError: GetCertsResponse_getCertsError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @constant
 * @type {number}
 */
export
const undfinedError: GetCertsResponse_getCertsError = GetCertsResponse_getCertsError_undfinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GetCertsResponse_getCertsError: $.ASN1Decoder<GetCertsResponse_getCertsError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCertsResponse_getCertsError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCertsResponse_getCertsError (el: _Element): GetCertsResponse_getCertsError {
    if (!_cached_decoder_for_GetCertsResponse_getCertsError) { _cached_decoder_for_GetCertsResponse_getCertsError = $._decodeInteger; }
    return _cached_decoder_for_GetCertsResponse_getCertsError(el);
}

let _cached_encoder_for_GetCertsResponse_getCertsError: $.ASN1Encoder<GetCertsResponse_getCertsError> | null = null;

/**
 * @summary Encodes a(n) GetCertsResponse_getCertsError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCertsResponse_getCertsError, encoded as an ASN.1 Element.
 */
export
function _encode_GetCertsResponse_getCertsError (value: GetCertsResponse_getCertsError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCertsResponse_getCertsError) { _cached_encoder_for_GetCertsResponse_getCertsError = $._encodeInteger; }
    return _cached_encoder_for_GetCertsResponse_getCertsError(value, elGetter);
}


/* eslint-enable */
