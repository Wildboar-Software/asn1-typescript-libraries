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
 * @summary ServiceError_errorClass_access
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-access ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceError_errorClass_access = INTEGER;

/**
 * @summary ServiceError_errorClass_access_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_other: ServiceError_errorClass_access = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_access = ServiceError_errorClass_access_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_unsupported
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_access_unsupported: ServiceError_errorClass_access = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_unsupported
 * @constant
 * @type {number}
 */
export
const object_access_unsupported: ServiceError_errorClass_access = ServiceError_errorClass_access_object_access_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_non_existent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_non_existent: ServiceError_errorClass_access = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_non_existent
 * @constant
 * @type {number}
 */
export
const object_non_existent: ServiceError_errorClass_access = ServiceError_errorClass_access_object_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_denied
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_access_denied: ServiceError_errorClass_access = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_denied
 * @constant
 * @type {number}
 */
export
const object_access_denied: ServiceError_errorClass_access = ServiceError_errorClass_access_object_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_invalidated
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_invalidated: ServiceError_errorClass_access = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_invalidated
 * @constant
 * @type {number}
 */
export
const object_invalidated: ServiceError_errorClass_access = ServiceError_errorClass_access_object_invalidated; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceError_errorClass_access: $.ASN1Decoder<ServiceError_errorClass_access> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError_errorClass_access
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError_errorClass_access (el: _Element): ServiceError_errorClass_access {
    if (!_cached_decoder_for_ServiceError_errorClass_access) { _cached_decoder_for_ServiceError_errorClass_access = $._decodeInteger; }
    return _cached_decoder_for_ServiceError_errorClass_access(el);
}

let _cached_encoder_for_ServiceError_errorClass_access: $.ASN1Encoder<ServiceError_errorClass_access> | null = null;

/**
 * @summary Encodes a(n) ServiceError_errorClass_access into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError_errorClass_access, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError_errorClass_access (value: ServiceError_errorClass_access, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError_errorClass_access) { _cached_encoder_for_ServiceError_errorClass_access = $._encodeInteger; }
    return _cached_encoder_for_ServiceError_errorClass_access(value, elGetter);
}


/* eslint-enable */
