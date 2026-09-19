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
 * @summary NAOperationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAOperationType  ::=  ENUMERATED
 * {
 *     createNetworkAssistanceSession(1),
 *     retrieveNetworkAssistanceSession(2),
 *     updateNetworkAssistanceSession(3),
 *     patchNetworkAssistanceSession(4),
 *     destroyNetworkAssistanceSession(5),
 *     requestBitRateRecommendation(6),
 *     requestDeliveryBoost(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NAOperationType {
    createNetworkAssistanceSession = 1,
    retrieveNetworkAssistanceSession = 2,
    updateNetworkAssistanceSession = 3,
    patchNetworkAssistanceSession = 4,
    destroyNetworkAssistanceSession = 5,
    requestBitRateRecommendation = 6,
    requestDeliveryBoost = 7,
}

/**
 * @summary NAOperationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAOperationType  ::=  ENUMERATED
 * {
 *     createNetworkAssistanceSession(1),
 *     retrieveNetworkAssistanceSession(2),
 *     updateNetworkAssistanceSession(3),
 *     patchNetworkAssistanceSession(4),
 *     destroyNetworkAssistanceSession(5),
 *     requestBitRateRecommendation(6),
 *     requestDeliveryBoost(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NAOperationType = _enum_for_NAOperationType;

/**
 * @summary NAOperationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAOperationType  ::=  ENUMERATED
 * {
 *     createNetworkAssistanceSession(1),
 *     retrieveNetworkAssistanceSession(2),
 *     updateNetworkAssistanceSession(3),
 *     patchNetworkAssistanceSession(4),
 *     destroyNetworkAssistanceSession(5),
 *     requestBitRateRecommendation(6),
 *     requestDeliveryBoost(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NAOperationType = _enum_for_NAOperationType;

/**
 * @summary NAOperationType_createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_createNetworkAssistanceSession: NAOperationType = NAOperationType.createNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const createNetworkAssistanceSession: NAOperationType = NAOperationType.createNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_retrieveNetworkAssistanceSession: NAOperationType = NAOperationType.retrieveNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const retrieveNetworkAssistanceSession: NAOperationType = NAOperationType.retrieveNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_updateNetworkAssistanceSession: NAOperationType = NAOperationType.updateNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const updateNetworkAssistanceSession: NAOperationType = NAOperationType.updateNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_patchNetworkAssistanceSession: NAOperationType = NAOperationType.patchNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const patchNetworkAssistanceSession: NAOperationType = NAOperationType.patchNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_destroyNetworkAssistanceSession: NAOperationType = NAOperationType.destroyNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const destroyNetworkAssistanceSession: NAOperationType = NAOperationType.destroyNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const NAOperationType_requestBitRateRecommendation: NAOperationType = NAOperationType.requestBitRateRecommendation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const requestBitRateRecommendation: NAOperationType = NAOperationType.requestBitRateRecommendation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const NAOperationType_requestDeliveryBoost: NAOperationType = NAOperationType.requestDeliveryBoost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const requestDeliveryBoost: NAOperationType = NAOperationType.requestDeliveryBoost; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NAOperationType: $.ASN1Decoder<NAOperationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NAOperationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NAOperationType (el: _Element): NAOperationType {
    if (!_cached_decoder_for_NAOperationType) { _cached_decoder_for_NAOperationType = $._decodeEnumerated; }
    return _cached_decoder_for_NAOperationType(el);
}

let _cached_encoder_for_NAOperationType: $.ASN1Encoder<NAOperationType> | null = null;

/**
 * @summary Encodes a(n) NAOperationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAOperationType, encoded as an ASN.1 Element.
 */
export
function _encode_NAOperationType (value: NAOperationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NAOperationType) { _cached_encoder_for_NAOperationType = $._encodeEnumerated; }
    return _cached_encoder_for_NAOperationType(value, elGetter);
}


/* eslint-enable */
