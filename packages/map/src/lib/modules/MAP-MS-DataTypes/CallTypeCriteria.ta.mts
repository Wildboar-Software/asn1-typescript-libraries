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
 * @summary CallTypeCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeCriteria        ::=  ENUMERATED {
 *     forwarded    (0),
 *     notForwarded    (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallTypeCriteria {
    forwarded = 0,
    notForwarded = 1,
}

/**
 * @summary CallTypeCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeCriteria        ::=  ENUMERATED {
 *     forwarded    (0),
 *     notForwarded    (1)}
 * ```
 * 
 * @enum {number}
 */
export
type CallTypeCriteria = _enum_for_CallTypeCriteria;

/**
 * @summary CallTypeCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeCriteria        ::=  ENUMERATED {
 *     forwarded    (0),
 *     notForwarded    (1)}
 * ```
 * 
 * @enum {number}
 */
export
const CallTypeCriteria = _enum_for_CallTypeCriteria;

/**
 * @summary CallTypeCriteria_forwarded
 * @constant
 * @type {number}
 */
export
const CallTypeCriteria_forwarded: CallTypeCriteria = CallTypeCriteria.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: CallTypeCriteria = CallTypeCriteria.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallTypeCriteria_notForwarded
 * @constant
 * @type {number}
 */
export
const CallTypeCriteria_notForwarded: CallTypeCriteria = CallTypeCriteria.notForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notForwarded
 * @constant
 * @type {number}
 */
export
const notForwarded: CallTypeCriteria = CallTypeCriteria.notForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CallTypeCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallTypeCriteria = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CallTypeCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTypeCriteria, encoded as an ASN.1 Element.
 */
export const _encode_CallTypeCriteria = $._encodeEnumerated;


/* eslint-enable */
