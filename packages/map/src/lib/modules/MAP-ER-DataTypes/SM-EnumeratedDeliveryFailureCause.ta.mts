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
 * Enumerated SM delivery-failure reason on `SM-DeliveryFailureCause` ({CITE}
 * clauses 7.6.1.4 and 17.7.7).
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
 * Enumerated SM delivery-failure reason on `SM-DeliveryFailureCause` ({CITE}
 * clauses 7.6.1.4 and 17.7.7).
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
 * Enumerated SM delivery-failure reason on `SM-DeliveryFailureCause` ({CITE}
 * clauses 7.6.1.4 and 17.7.7).
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
 * @description
 *
 * Memory capacity exceeded (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_memoryCapacityExceeded: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.memoryCapacityExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary memoryCapacityExceeded
 * @description
 *
 * Memory capacity exceeded (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const memoryCapacityExceeded: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.memoryCapacityExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_equipmentProtocolError
 * @description
 *
 * MS protocol error (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_equipmentProtocolError: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentProtocolError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary equipmentProtocolError
 * @description
 *
 * MS protocol error (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const equipmentProtocolError: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentProtocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_equipmentNotSM_Equipped
 * @description
 *
 * MS not equipped (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_equipmentNotSM_Equipped: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentNotSM_Equipped; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary equipmentNotSM_Equipped
 * @description
 *
 * MS not equipped (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const equipmentNotSM_Equipped: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.equipmentNotSM_Equipped; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_unknownServiceCentre
 * @description
 *
 * Unknown service centre (SC) (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_unknownServiceCentre: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.unknownServiceCentre; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownServiceCentre
 * @description
 *
 * Unknown service centre (SC) (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const unknownServiceCentre: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.unknownServiceCentre; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_sc_Congestion
 * @description
 *
 * SC congestion (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_sc_Congestion: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.sc_Congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sc_Congestion
 * @description
 *
 * SC congestion (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const sc_Congestion: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.sc_Congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_invalidSME_Address
 * @description
 *
 * Invalid SME address (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_invalidSME_Address: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.invalidSME_Address; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSME_Address
 * @description
 *
 * Invalid SME address (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const invalidSME_Address: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.invalidSME_Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_EnumeratedDeliveryFailureCause_subscriberNotSC_Subscriber
 * @description
 *
 * Subscriber is not an SC subscriber (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const SM_EnumeratedDeliveryFailureCause_subscriberNotSC_Subscriber: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.subscriberNotSC_Subscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNotSC_Subscriber
 * @description
 *
 * Subscriber is not an SC subscriber (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const subscriberNotSC_Subscriber: SM_EnumeratedDeliveryFailureCause = SM_EnumeratedDeliveryFailureCause.subscriberNotSC_Subscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SM_EnumeratedDeliveryFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_EnumeratedDeliveryFailureCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SM_EnumeratedDeliveryFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_EnumeratedDeliveryFailureCause, encoded as an ASN.1 Element.
 */
export const _encode_SM_EnumeratedDeliveryFailureCause = $._encodeEnumerated;


/* eslint-enable */
