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
 * @summary CCBS_RequestState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-RequestState  ::=  ENUMERATED {
 *     request     (0),
 *     recall     (1),
 *     active     (2),
 *     completed    (3),
 *     suspended    (4),
 *     frozen    (5),
 *     deleted    (6)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CCBS_RequestState {
    request = 0,
    recall = 1,
    active = 2,
    completed = 3,
    suspended = 4,
    frozen = 5,
    deleted = 6,
}

/**
 * @summary CCBS_RequestState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-RequestState  ::=  ENUMERATED {
 *     request     (0),
 *     recall     (1),
 *     active     (2),
 *     completed    (3),
 *     suspended    (4),
 *     frozen    (5),
 *     deleted    (6)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type CCBS_RequestState = _enum_for_CCBS_RequestState;

/**
 * @summary CCBS_RequestState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-RequestState  ::=  ENUMERATED {
 *     request     (0),
 *     recall     (1),
 *     active     (2),
 *     completed    (3),
 *     suspended    (4),
 *     frozen    (5),
 *     deleted    (6)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const CCBS_RequestState = _enum_for_CCBS_RequestState;

/**
 * @summary CCBS_RequestState_request
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_request: CCBS_RequestState = CCBS_RequestState.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: CCBS_RequestState = CCBS_RequestState.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_RequestState_recall
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_recall: CCBS_RequestState = CCBS_RequestState.recall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recall
 * @constant
 * @type {number}
 */
export
const recall: CCBS_RequestState = CCBS_RequestState.recall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_RequestState_active
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_active: CCBS_RequestState = CCBS_RequestState.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: CCBS_RequestState = CCBS_RequestState.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_RequestState_completed
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_completed: CCBS_RequestState = CCBS_RequestState.completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @constant
 * @type {number}
 */
export
const completed: CCBS_RequestState = CCBS_RequestState.completed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_RequestState_suspended
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_suspended: CCBS_RequestState = CCBS_RequestState.suspended; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspended
 * @constant
 * @type {number}
 */
export
const suspended: CCBS_RequestState = CCBS_RequestState.suspended; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_RequestState_frozen
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_frozen: CCBS_RequestState = CCBS_RequestState.frozen; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary frozen
 * @constant
 * @type {number}
 */
export
const frozen: CCBS_RequestState = CCBS_RequestState.frozen; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_RequestState_deleted
 * @constant
 * @type {number}
 */
export
const CCBS_RequestState_deleted: CCBS_RequestState = CCBS_RequestState.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export
const deleted: CCBS_RequestState = CCBS_RequestState.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_RequestState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CCBS_RequestState = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CCBS_RequestState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_RequestState, encoded as an ASN.1 Element.
 */
export const _encode_CCBS_RequestState = $._encodeEnumerated;


/* eslint-enable */
