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
 * @summary SM_EnumeratedDeliveryFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-EnumeratedDeliveryFailureCause  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     equipmentProtocolError  (1),
 *     equipmentNotSM-Equipped  (2),
 *     unknownServiceCentre  (3),
 *     sc-Congestion  (4),
 *     invalidSME-Address  (5),
 *     subscriberNotSC-Subscriber  (6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SM_EnumeratedDeliveryFailureCause {
    memoryCapacityExceeded = 0,
    equipmentProtocolError = 1,
    equipmentNotSM_Equipped = 2,
    unknownServiceCentre = 3,
    sc_Congestion = 4,
    invalidSME_Address = 5,
    subscriberNotSC_Subscriber = 6,
}

/**
 * @summary SM_EnumeratedDeliveryFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-EnumeratedDeliveryFailureCause  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     equipmentProtocolError  (1),
 *     equipmentNotSM-Equipped  (2),
 *     unknownServiceCentre  (3),
 *     sc-Congestion  (4),
 *     invalidSME-Address  (5),
 *     subscriberNotSC-Subscriber  (6)}
 * ```
 * 
 * @enum {number}
 */
export
type SM_EnumeratedDeliveryFailureCause = _enum_for_SM_EnumeratedDeliveryFailureCause;

/**
 * @summary SM_EnumeratedDeliveryFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-EnumeratedDeliveryFailureCause  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     equipmentProtocolError  (1),
 *     equipmentNotSM-Equipped  (2),
 *     unknownServiceCentre  (3),
 *     sc-Congestion  (4),
 *     invalidSME-Address  (5),
 *     subscriberNotSC-Subscriber  (6)}
 * ```
 * 
 * @enum {number}
 */
export
const SM_EnumeratedDeliveryFailureCause = _enum_for_SM_EnumeratedDeliveryFailureCause;

/**
 * @summary SM_EnumeratedDeliveryFailureCause_memoryCapacityExceeded
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_memoryCapacityExceeded: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.memoryCapacityExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary memoryCapacityExceeded
 * @constant
 * @type {number}
 */
export
const memoryCapacityExceeded: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.memoryCapacityExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_equipmentProtocolError
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_equipmentProtocolError: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentProtocolError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary equipmentProtocolError
 * @constant
 * @type {number}
 */
export
const equipmentProtocolError: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentProtocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_equipmentNotSM_Equipped
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_equipmentNotSM_Equipped: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentNotSM_Equipped; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary equipmentNotSM_Equipped
 * @constant
 * @type {number}
 */
export
const equipmentNotSM_Equipped: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentNotSM_Equipped; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_unknownServiceCentre
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_unknownServiceCentre: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.unknownServiceCentre; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownServiceCentre
 * @constant
 * @type {number}
 */
export
const unknownServiceCentre: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.unknownServiceCentre; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_sc_Congestion
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_sc_Congestion: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.sc_Congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sc_Congestion
 * @constant
 * @type {number}
 */
export
const sc_Congestion: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.sc_Congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_invalidSME_Address
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_invalidSME_Address: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.invalidSME_Address; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSME_Address
 * @constant
 * @type {number}
 */
export
const invalidSME_Address: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.invalidSME_Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_subscriberNotSC_Subscriber
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_subscriberNotSC_Subscriber: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.subscriberNotSC_Subscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNotSC_Subscriber
 * @constant
 * @type {number}
 */
export
const subscriberNotSC_Subscriber: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.subscriberNotSC_Subscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SM_EnumeratedDeliveryFailureCause: $.ASN1Decoder<SM_EnumeratedDeliveryFailureCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_EnumeratedDeliveryFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_EnumeratedDeliveryFailureCause (el: _Element): SM_EnumeratedDeliveryFailureCause {
    if (!_cached_decoder_for_SM_EnumeratedDeliveryFailureCause) { _cached_decoder_for_SM_EnumeratedDeliveryFailureCause = $._decodeEnumerated; }
    return _cached_decoder_for_SM_EnumeratedDeliveryFailureCause(el);
}

let _cached_encoder_for_SM_EnumeratedDeliveryFailureCause: $.ASN1Encoder<SM_EnumeratedDeliveryFailureCause> | null = null;

/**
 * @summary Encodes a(n) SM_EnumeratedDeliveryFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_EnumeratedDeliveryFailureCause, encoded as an ASN.1 Element.
 */
export
function _encode_SM_EnumeratedDeliveryFailureCause (value: SM_EnumeratedDeliveryFailureCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_EnumeratedDeliveryFailureCause) { _cached_encoder_for_SM_EnumeratedDeliveryFailureCause = $._encodeEnumerated; }
    return _cached_encoder_for_SM_EnumeratedDeliveryFailureCause(value, elGetter);
}


/* eslint-enable */
