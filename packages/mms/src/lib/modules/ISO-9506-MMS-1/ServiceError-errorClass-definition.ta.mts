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
 * @summary ServiceError_errorClass_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-definition ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceError_errorClass_definition = INTEGER;

/**
 * @summary ServiceError_errorClass_definition_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_other: ServiceError_errorClass_definition = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_definition = ServiceError_errorClass_definition_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_undefined
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_undefined: ServiceError_errorClass_definition = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_undefined
 * @constant
 * @type {number}
 */
export
const object_undefined: ServiceError_errorClass_definition = ServiceError_errorClass_definition_object_undefined; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_invalid_address
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_invalid_address: ServiceError_errorClass_definition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_invalid_address
 * @constant
 * @type {number}
 */
export
const invalid_address: ServiceError_errorClass_definition = ServiceError_errorClass_definition_invalid_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_unsupported
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_type_unsupported: ServiceError_errorClass_definition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_unsupported
 * @constant
 * @type {number}
 */
export
const type_unsupported: ServiceError_errorClass_definition = ServiceError_errorClass_definition_type_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_inconsistent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_type_inconsistent: ServiceError_errorClass_definition = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_inconsistent
 * @constant
 * @type {number}
 */
export
const type_inconsistent: ServiceError_errorClass_definition = ServiceError_errorClass_definition_type_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_exists
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_exists: ServiceError_errorClass_definition = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_exists
 * @constant
 * @type {number}
 */
export
const object_exists: ServiceError_errorClass_definition = ServiceError_errorClass_definition_object_exists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_attribute_inconsistent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_attribute_inconsistent: ServiceError_errorClass_definition = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_attribute_inconsistent
 * @constant
 * @type {number}
 */
export
const object_attribute_inconsistent: ServiceError_errorClass_definition = ServiceError_errorClass_definition_object_attribute_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceError_errorClass_definition: $.ASN1Decoder<ServiceError_errorClass_definition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError_errorClass_definition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError_errorClass_definition (el: _Element): ServiceError_errorClass_definition {
    if (!_cached_decoder_for_ServiceError_errorClass_definition) { _cached_decoder_for_ServiceError_errorClass_definition = $._decodeInteger; }
    return _cached_decoder_for_ServiceError_errorClass_definition(el);
}

let _cached_encoder_for_ServiceError_errorClass_definition: $.ASN1Encoder<ServiceError_errorClass_definition> | null = null;

/**
 * @summary Encodes a(n) ServiceError_errorClass_definition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError_errorClass_definition, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError_errorClass_definition (value: ServiceError_errorClass_definition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError_errorClass_definition) { _cached_encoder_for_ServiceError_errorClass_definition = $._encodeInteger; }
    return _cached_encoder_for_ServiceError_errorClass_definition(value, elGetter);
}


/* eslint-enable */
