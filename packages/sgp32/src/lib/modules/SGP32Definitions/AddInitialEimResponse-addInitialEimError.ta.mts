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
 * @summary AddInitialEimResponse_addInitialEimError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddInitialEimResponse-addInitialEimError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AddInitialEimResponse_addInitialEimError = INTEGER;

/**
 * @summary AddInitialEimResponse_addInitialEimError_insufficientMemory
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_insufficientMemory: AddInitialEimResponse_addInitialEimError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists: AddInitialEimResponse_addInitialEimError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_ciPKUnknown: AddInitialEimResponse_addInitialEimError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_invalidAssociationToken
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_invalidAssociationToken: AddInitialEimResponse_addInitialEimError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_invalidAssociationToken
 * @constant
 * @type {number}
 */
export
const invalidAssociationToken: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_invalidAssociationToken; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_counterValueOutOfRange: AddInitialEimResponse_addInitialEimError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_commandError
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_commandError: AddInitialEimResponse_addInitialEimError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_commandError
 * @constant
 * @type {number}
 */
export
const commandError: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_undefinedError
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_undefinedError: AddInitialEimResponse_addInitialEimError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AddInitialEimResponse_addInitialEimError: $.ASN1Decoder<AddInitialEimResponse_addInitialEimError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddInitialEimResponse_addInitialEimError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddInitialEimResponse_addInitialEimError (el: _Element): AddInitialEimResponse_addInitialEimError {
    if (!_cached_decoder_for_AddInitialEimResponse_addInitialEimError) { _cached_decoder_for_AddInitialEimResponse_addInitialEimError = $._decodeInteger; }
    return _cached_decoder_for_AddInitialEimResponse_addInitialEimError(el);
}

let _cached_encoder_for_AddInitialEimResponse_addInitialEimError: $.ASN1Encoder<AddInitialEimResponse_addInitialEimError> | null = null;

/**
 * @summary Encodes a(n) AddInitialEimResponse_addInitialEimError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddInitialEimResponse_addInitialEimError, encoded as an ASN.1 Element.
 */
export
function _encode_AddInitialEimResponse_addInitialEimError (value: AddInitialEimResponse_addInitialEimError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddInitialEimResponse_addInitialEimError) { _cached_encoder_for_AddInitialEimResponse_addInitialEimError = $._encodeInteger; }
    return _cached_encoder_for_AddInitialEimResponse_addInitialEimError(value, elGetter);
}


/* eslint-enable */
