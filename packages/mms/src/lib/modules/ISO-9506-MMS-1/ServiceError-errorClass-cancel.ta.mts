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
 * @summary ServiceError_errorClass_cancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-cancel ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceError_errorClass_cancel = INTEGER;

/**
 * @summary ServiceError_errorClass_cancel_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_other: ServiceError_errorClass_cancel = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_invoke_id_unknown
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_invoke_id_unknown: ServiceError_errorClass_cancel = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_invoke_id_unknown
 * @constant
 * @type {number}
 */
export
const invoke_id_unknown: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_invoke_id_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_cancel_not_possible
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_cancel_not_possible: ServiceError_errorClass_cancel = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_cancel_not_possible
 * @constant
 * @type {number}
 */
export
const cancel_not_possible: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_cancel_not_possible; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceError_errorClass_cancel: $.ASN1Decoder<ServiceError_errorClass_cancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError_errorClass_cancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError_errorClass_cancel (el: _Element): ServiceError_errorClass_cancel {
    if (!_cached_decoder_for_ServiceError_errorClass_cancel) { _cached_decoder_for_ServiceError_errorClass_cancel = $._decodeInteger; }
    return _cached_decoder_for_ServiceError_errorClass_cancel(el);
}

let _cached_encoder_for_ServiceError_errorClass_cancel: $.ASN1Encoder<ServiceError_errorClass_cancel> | null = null;

/**
 * @summary Encodes a(n) ServiceError_errorClass_cancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError_errorClass_cancel, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError_errorClass_cancel (value: ServiceError_errorClass_cancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError_errorClass_cancel) { _cached_encoder_for_ServiceError_errorClass_cancel = $._encodeInteger; }
    return _cached_encoder_for_ServiceError_errorClass_cancel(value, elGetter);
}


/* eslint-enable */
