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
 * @summary NotReachableReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotReachableReason  ::=  ENUMERATED {
 *     msPurged (0),
 *     imsiDetached (1),
 *     restrictedArea (2),
 *     notRegistered (3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NotReachableReason {
    msPurged = 0,
    imsiDetached = 1,
    restrictedArea = 2,
    notRegistered = 3,
}

/**
 * @summary NotReachableReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotReachableReason  ::=  ENUMERATED {
 *     msPurged (0),
 *     imsiDetached (1),
 *     restrictedArea (2),
 *     notRegistered (3)}
 * ```
 * 
 * @enum {number}
 */
export
type NotReachableReason = _enum_for_NotReachableReason;

/**
 * @summary NotReachableReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotReachableReason  ::=  ENUMERATED {
 *     msPurged (0),
 *     imsiDetached (1),
 *     restrictedArea (2),
 *     notRegistered (3)}
 * ```
 * 
 * @enum {number}
 */
export
const NotReachableReason = _enum_for_NotReachableReason;

/**
 * @summary NotReachableReason_msPurged
 * @constant
 * @type {number}
 */
export
const NotReachableReason_msPurged: NotReachableReason = NotReachableReason.msPurged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msPurged
 * @constant
 * @type {number}
 */
export
const msPurged: NotReachableReason = NotReachableReason.msPurged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotReachableReason_imsiDetached
 * @constant
 * @type {number}
 */
export
const NotReachableReason_imsiDetached: NotReachableReason = NotReachableReason.imsiDetached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsiDetached
 * @constant
 * @type {number}
 */
export
const imsiDetached: NotReachableReason = NotReachableReason.imsiDetached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotReachableReason_restrictedArea
 * @constant
 * @type {number}
 */
export
const NotReachableReason_restrictedArea: NotReachableReason = NotReachableReason.restrictedArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedArea
 * @constant
 * @type {number}
 */
export
const restrictedArea: NotReachableReason = NotReachableReason.restrictedArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotReachableReason_notRegistered
 * @constant
 * @type {number}
 */
export
const NotReachableReason_notRegistered: NotReachableReason = NotReachableReason.notRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notRegistered
 * @constant
 * @type {number}
 */
export
const notRegistered: NotReachableReason = NotReachableReason.notRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NotReachableReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NotReachableReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NotReachableReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotReachableReason, encoded as an ASN.1 Element.
 */
export const _encode_NotReachableReason = $._encodeEnumerated;


/* eslint-enable */
