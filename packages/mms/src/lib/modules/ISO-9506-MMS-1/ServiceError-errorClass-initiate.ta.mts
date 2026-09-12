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
 * @summary ServiceError_errorClass_initiate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-initiate ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceError_errorClass_initiate = INTEGER;

/**
 * @summary ServiceError_errorClass_initiate_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_other: ServiceError_errorClass_initiate = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient: ServiceError_errorClass_initiate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient
 * @constant
 * @type {number}
 */
export
const max_services_outstanding_calling_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient: ServiceError_errorClass_initiate = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient
 * @constant
 * @type {number}
 */
export
const max_services_outstanding_called_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_service_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_service_CBB_insufficient: ServiceError_errorClass_initiate = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_service_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const service_CBB_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_service_CBB_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_parameter_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_parameter_CBB_insufficient: ServiceError_errorClass_initiate = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_parameter_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const parameter_CBB_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_parameter_CBB_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_nesting_level_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_nesting_level_insufficient: ServiceError_errorClass_initiate = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_nesting_level_insufficient
 * @constant
 * @type {number}
 */
export
const nesting_level_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_nesting_level_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceError_errorClass_initiate: $.ASN1Decoder<ServiceError_errorClass_initiate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError_errorClass_initiate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError_errorClass_initiate (el: _Element): ServiceError_errorClass_initiate {
    if (!_cached_decoder_for_ServiceError_errorClass_initiate) { _cached_decoder_for_ServiceError_errorClass_initiate = $._decodeInteger; }
    return _cached_decoder_for_ServiceError_errorClass_initiate(el);
}

let _cached_encoder_for_ServiceError_errorClass_initiate: $.ASN1Encoder<ServiceError_errorClass_initiate> | null = null;

/**
 * @summary Encodes a(n) ServiceError_errorClass_initiate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError_errorClass_initiate, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError_errorClass_initiate (value: ServiceError_errorClass_initiate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError_errorClass_initiate) { _cached_encoder_for_ServiceError_errorClass_initiate = $._encodeInteger; }
    return _cached_encoder_for_ServiceError_errorClass_initiate(value, elGetter);
}


/* eslint-enable */
