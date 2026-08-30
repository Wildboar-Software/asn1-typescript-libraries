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
 * @summary FailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  ENUMERATED {
 *     wrongUserResponse  (0),
 *     wrongNetworkSignature  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FailureCause {
    wrongUserResponse = 0,
    wrongNetworkSignature = 1,
}

/**
 * @summary FailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  ENUMERATED {
 *     wrongUserResponse  (0),
 *     wrongNetworkSignature  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type FailureCause = _enum_for_FailureCause;

/**
 * @summary FailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  ENUMERATED {
 *     wrongUserResponse  (0),
 *     wrongNetworkSignature  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const FailureCause = _enum_for_FailureCause;

/**
 * @summary FailureCause_wrongUserResponse
 * @constant
 * @type {number}
 */
export
const FailureCause_wrongUserResponse: FailureCause = FailureCause.wrongUserResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongUserResponse
 * @constant
 * @type {number}
 */
export
const wrongUserResponse: FailureCause = FailureCause.wrongUserResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureCause_wrongNetworkSignature
 * @constant
 * @type {number}
 */
export
const FailureCause_wrongNetworkSignature: FailureCause = FailureCause.wrongNetworkSignature; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongNetworkSignature
 * @constant
 * @type {number}
 */
export
const wrongNetworkSignature: FailureCause = FailureCause.wrongNetworkSignature; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FailureCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureCause, encoded as an ASN.1 Element.
 */
export const _encode_FailureCause = $._encodeEnumerated;


/* eslint-enable */
