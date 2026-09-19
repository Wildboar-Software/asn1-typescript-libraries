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
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateProfileEnablingResponse-configImmediateEnableResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = INTEGER;

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult: $.ASN1Decoder<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult (el: _Element): ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult {
    if (!_cached_decoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult) { _cached_decoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = $._decodeInteger; }
    return _cached_decoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult(el);
}

let _cached_encoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult: $.ASN1Encoder<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult> | null = null;

/**
 * @summary Encodes a(n) ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, encoded as an ASN.1 Element.
 */
export
function _encode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult (value: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult) { _cached_encoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = $._encodeInteger; }
    return _cached_encoder_for_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult(value, elGetter);
}


/* eslint-enable */
