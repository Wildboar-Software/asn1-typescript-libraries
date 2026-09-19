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
 * @summary MMSRetrieveStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieveStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientMessageNotFound(3),
 *     errorTransientNetworkProblem(4),
 *     errorPermanentFailure(5),
 *     errorPermanentServiceDenied(6),
 *     errorPermanentMessageNotFound(7),
 *     errorPermanentContentUnsupported(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSRetrieveStatus {
    success = 1,
    errorTransientFailure = 2,
    errorTransientMessageNotFound = 3,
    errorTransientNetworkProblem = 4,
    errorPermanentFailure = 5,
    errorPermanentServiceDenied = 6,
    errorPermanentMessageNotFound = 7,
    errorPermanentContentUnsupported = 8,
}

/**
 * @summary MMSRetrieveStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieveStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientMessageNotFound(3),
 *     errorTransientNetworkProblem(4),
 *     errorPermanentFailure(5),
 *     errorPermanentServiceDenied(6),
 *     errorPermanentMessageNotFound(7),
 *     errorPermanentContentUnsupported(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSRetrieveStatus = _enum_for_MMSRetrieveStatus;

/**
 * @summary MMSRetrieveStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieveStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientMessageNotFound(3),
 *     errorTransientNetworkProblem(4),
 *     errorPermanentFailure(5),
 *     errorPermanentServiceDenied(6),
 *     errorPermanentMessageNotFound(7),
 *     errorPermanentContentUnsupported(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSRetrieveStatus = _enum_for_MMSRetrieveStatus;

/**
 * @summary MMSRetrieveStatus_success
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_success: MMSRetrieveStatus = MMSRetrieveStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: MMSRetrieveStatus = MMSRetrieveStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientNetworkProblem: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentServiceDenied: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentContentUnsupported
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentContentUnsupported: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentContentUnsupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentUnsupported
 * @constant
 * @type {number}
 */
export
const errorPermanentContentUnsupported: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentContentUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSRetrieveStatus: $.ASN1Decoder<MMSRetrieveStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSRetrieveStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSRetrieveStatus (el: _Element): MMSRetrieveStatus {
    if (!_cached_decoder_for_MMSRetrieveStatus) { _cached_decoder_for_MMSRetrieveStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSRetrieveStatus(el);
}

let _cached_encoder_for_MMSRetrieveStatus: $.ASN1Encoder<MMSRetrieveStatus> | null = null;

/**
 * @summary Encodes a(n) MMSRetrieveStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSRetrieveStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSRetrieveStatus (value: MMSRetrieveStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSRetrieveStatus) { _cached_encoder_for_MMSRetrieveStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSRetrieveStatus(value, elGetter);
}


/* eslint-enable */
