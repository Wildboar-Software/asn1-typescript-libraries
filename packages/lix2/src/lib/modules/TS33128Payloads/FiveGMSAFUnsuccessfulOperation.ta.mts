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
 * @summary FiveGMSAFUnsuccessfulOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulOperation ::=  ENUMERATED
 * {
 *     retrieveServiceAccessInformation(1),
 *     submitConsumptionReport(2),
 *     submitMetricsReport(3),
 *     createDynamicPolicy(4),
 *     retrieveDynamicPolicy(5),
 *     updateDynamicPolicy(6),
 *     patchDynamicPolicy(7),
 *     destroyDynamicPolicy(8),
 *     createNetworkAssistanceSession(9),
 *     retrieveNetworkAssistanceSession(10),
 *     updateNetworkAssistanceSession(11),
 *     patchNetworkAssistanceSession(12),
 *     destroyNetworkAssistanceSession(13),
 *     requestBitRateRecommendation(14),
 *     requestDeliveryBoost(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMSAFUnsuccessfulOperation {
    retrieveServiceAccessInformation = 1,
    submitConsumptionReport = 2,
    submitMetricsReport = 3,
    createDynamicPolicy = 4,
    retrieveDynamicPolicy = 5,
    updateDynamicPolicy = 6,
    patchDynamicPolicy = 7,
    destroyDynamicPolicy = 8,
    createNetworkAssistanceSession = 9,
    retrieveNetworkAssistanceSession = 10,
    updateNetworkAssistanceSession = 11,
    patchNetworkAssistanceSession = 12,
    destroyNetworkAssistanceSession = 13,
    requestBitRateRecommendation = 14,
    requestDeliveryBoost = 15,
}

/**
 * @summary FiveGMSAFUnsuccessfulOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulOperation ::=  ENUMERATED
 * {
 *     retrieveServiceAccessInformation(1),
 *     submitConsumptionReport(2),
 *     submitMetricsReport(3),
 *     createDynamicPolicy(4),
 *     retrieveDynamicPolicy(5),
 *     updateDynamicPolicy(6),
 *     patchDynamicPolicy(7),
 *     destroyDynamicPolicy(8),
 *     createNetworkAssistanceSession(9),
 *     retrieveNetworkAssistanceSession(10),
 *     updateNetworkAssistanceSession(11),
 *     patchNetworkAssistanceSession(12),
 *     destroyNetworkAssistanceSession(13),
 *     requestBitRateRecommendation(14),
 *     requestDeliveryBoost(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMSAFUnsuccessfulOperation = _enum_for_FiveGMSAFUnsuccessfulOperation;

/**
 * @summary FiveGMSAFUnsuccessfulOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulOperation ::=  ENUMERATED
 * {
 *     retrieveServiceAccessInformation(1),
 *     submitConsumptionReport(2),
 *     submitMetricsReport(3),
 *     createDynamicPolicy(4),
 *     retrieveDynamicPolicy(5),
 *     updateDynamicPolicy(6),
 *     patchDynamicPolicy(7),
 *     destroyDynamicPolicy(8),
 *     createNetworkAssistanceSession(9),
 *     retrieveNetworkAssistanceSession(10),
 *     updateNetworkAssistanceSession(11),
 *     patchNetworkAssistanceSession(12),
 *     destroyNetworkAssistanceSession(13),
 *     requestBitRateRecommendation(14),
 *     requestDeliveryBoost(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMSAFUnsuccessfulOperation = _enum_for_FiveGMSAFUnsuccessfulOperation;

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveServiceAccessInformation
 * @constant
 * @type {number}
 */
export
const retrieveServiceAccessInformation: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_submitConsumptionReport
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_submitConsumptionReport: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.submitConsumptionReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitConsumptionReport
 * @constant
 * @type {number}
 */
export
const submitConsumptionReport: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.submitConsumptionReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_submitMetricsReport
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_submitMetricsReport: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.submitMetricsReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitMetricsReport
 * @constant
 * @type {number}
 */
export
const submitMetricsReport: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.submitMetricsReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_createDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.createDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const createDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.createDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const retrieveDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const updateDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const patchDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const destroyDynamicPolicy: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const createNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const retrieveNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const updateNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const patchNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const destroyNetworkAssistanceSession: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const requestBitRateRecommendation: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const requestDeliveryBoost: FiveGMSAFUnsuccessfulOperation = FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FiveGMSAFUnsuccessfulOperation: $.ASN1Decoder<FiveGMSAFUnsuccessfulOperation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFUnsuccessfulOperation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFUnsuccessfulOperation (el: _Element): FiveGMSAFUnsuccessfulOperation {
    if (!_cached_decoder_for_FiveGMSAFUnsuccessfulOperation) { _cached_decoder_for_FiveGMSAFUnsuccessfulOperation = $._decodeEnumerated; }
    return _cached_decoder_for_FiveGMSAFUnsuccessfulOperation(el);
}

let _cached_encoder_for_FiveGMSAFUnsuccessfulOperation: $.ASN1Encoder<FiveGMSAFUnsuccessfulOperation> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFUnsuccessfulOperation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFUnsuccessfulOperation, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFUnsuccessfulOperation (value: FiveGMSAFUnsuccessfulOperation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFUnsuccessfulOperation) { _cached_encoder_for_FiveGMSAFUnsuccessfulOperation = $._encodeEnumerated; }
    return _cached_encoder_for_FiveGMSAFUnsuccessfulOperation(value, elGetter);
}


/* eslint-enable */
