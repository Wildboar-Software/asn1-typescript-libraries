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
 * @summary MMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatus  ::=  ENUMERATED
 * {
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     unrecognized(5),
 *     indeterminate(6),
 *     forwarded(7),
 *     unreachable(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStatus {
    expired = 1,
    retrieved = 2,
    rejected = 3,
    deferred = 4,
    unrecognized = 5,
    indeterminate = 6,
    forwarded = 7,
    unreachable = 8,
}

/**
 * @summary MMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatus  ::=  ENUMERATED
 * {
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     unrecognized(5),
 *     indeterminate(6),
 *     forwarded(7),
 *     unreachable(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStatus = _enum_for_MMStatus;

/**
 * @summary MMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatus  ::=  ENUMERATED
 * {
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     unrecognized(5),
 *     indeterminate(6),
 *     forwarded(7),
 *     unreachable(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStatus = _enum_for_MMStatus;

/**
 * @summary MMStatus_expired
 * @constant
 * @type {number}
 */
export
const MMStatus_expired: MMStatus = MMStatus.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: MMStatus = MMStatus.expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_retrieved
 * @constant
 * @type {number}
 */
export
const MMStatus_retrieved: MMStatus = MMStatus.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: MMStatus = MMStatus.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_rejected
 * @constant
 * @type {number}
 */
export
const MMStatus_rejected: MMStatus = MMStatus.rejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: MMStatus = MMStatus.rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_deferred
 * @constant
 * @type {number}
 */
export
const MMStatus_deferred: MMStatus = MMStatus.deferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred: MMStatus = MMStatus.deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_unrecognized
 * @constant
 * @type {number}
 */
export
const MMStatus_unrecognized: MMStatus = MMStatus.unrecognized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognized
 * @constant
 * @type {number}
 */
export
const unrecognized: MMStatus = MMStatus.unrecognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_indeterminate
 * @constant
 * @type {number}
 */
export
const MMStatus_indeterminate: MMStatus = MMStatus.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: MMStatus = MMStatus.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_forwarded
 * @constant
 * @type {number}
 */
export
const MMStatus_forwarded: MMStatus = MMStatus.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMStatus = MMStatus.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_unreachable
 * @constant
 * @type {number}
 */
export
const MMStatus_unreachable: MMStatus = MMStatus.unreachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @constant
 * @type {number}
 */
export
const unreachable: MMStatus = MMStatus.unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMStatus: $.ASN1Decoder<MMStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMStatus (el: _Element): MMStatus {
    if (!_cached_decoder_for_MMStatus) { _cached_decoder_for_MMStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMStatus(el);
}

let _cached_encoder_for_MMStatus: $.ASN1Encoder<MMStatus> | null = null;

/**
 * @summary Encodes a(n) MMStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMStatus (value: MMStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMStatus) { _cached_encoder_for_MMStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMStatus(value, elGetter);
}


/* eslint-enable */
