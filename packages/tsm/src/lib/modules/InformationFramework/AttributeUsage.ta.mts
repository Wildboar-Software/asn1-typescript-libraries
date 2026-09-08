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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



export
enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}

/**
 * @summary AttributeUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;

/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export
const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export
const userApplications: AttributeUsage = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export
const directoryOperation: AttributeUsage = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export
const distributedOperation: AttributeUsage = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export
const dSAOperation: AttributeUsage = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AttributeUsage: $.ASN1Decoder<AttributeUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeUsage (el: _Element): AttributeUsage {
    if (!_cached_decoder_for_AttributeUsage) { _cached_decoder_for_AttributeUsage = $._decodeEnumerated; }
    return _cached_decoder_for_AttributeUsage(el);
}

let _cached_encoder_for_AttributeUsage: $.ASN1Encoder<AttributeUsage> | null = null;

/**
 * @summary Encodes a(n) AttributeUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeUsage, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeUsage (value: AttributeUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeUsage) { _cached_encoder_for_AttributeUsage = $._encodeEnumerated; }
    return _cached_encoder_for_AttributeUsage(value, elGetter);
}


/* eslint-enable */
