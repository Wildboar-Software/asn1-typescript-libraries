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
 * @summary SM_DeliveryOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryOutcome  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     absentSubscriber  (1),
 *     successfulTransfer  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SM_DeliveryOutcome {
    memoryCapacityExceeded = 0,
    absentSubscriber = 1,
    successfulTransfer = 2,
}

/**
 * @summary SM_DeliveryOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryOutcome  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     absentSubscriber  (1),
 *     successfulTransfer  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type SM_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;

/**
 * @summary SM_DeliveryOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryOutcome  ::=  ENUMERATED {
 *     memoryCapacityExceeded  (0),
 *     absentSubscriber  (1),
 *     successfulTransfer  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const SM_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;

/**
 * @summary SM_DeliveryOutcome_memoryCapacityExceeded
 * @constant
 * @type {number}
 */
export
const SM_DeliveryOutcome_memoryCapacityExceeded: SM_DeliveryOutcome = SM_DeliveryOutcome.memoryCapacityExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary memoryCapacityExceeded
 * @constant
 * @type {number}
 */
export
const memoryCapacityExceeded: SM_DeliveryOutcome = SM_DeliveryOutcome.memoryCapacityExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_DeliveryOutcome_absentSubscriber
 * @constant
 * @type {number}
 */
export
const SM_DeliveryOutcome_absentSubscriber: SM_DeliveryOutcome = SM_DeliveryOutcome.absentSubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absentSubscriber
 * @constant
 * @type {number}
 */
export
const absentSubscriber: SM_DeliveryOutcome = SM_DeliveryOutcome.absentSubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_DeliveryOutcome_successfulTransfer
 * @constant
 * @type {number}
 */
export
const SM_DeliveryOutcome_successfulTransfer: SM_DeliveryOutcome = SM_DeliveryOutcome.successfulTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successfulTransfer
 * @constant
 * @type {number}
 */
export
const successfulTransfer: SM_DeliveryOutcome = SM_DeliveryOutcome.successfulTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SM_DeliveryOutcome: $.ASN1Decoder<SM_DeliveryOutcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_DeliveryOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_DeliveryOutcome (el: _Element): SM_DeliveryOutcome {
    if (!_cached_decoder_for_SM_DeliveryOutcome) { _cached_decoder_for_SM_DeliveryOutcome = $._decodeEnumerated; }
    return _cached_decoder_for_SM_DeliveryOutcome(el);
}

let _cached_encoder_for_SM_DeliveryOutcome: $.ASN1Encoder<SM_DeliveryOutcome> | null = null;

/**
 * @summary Encodes a(n) SM_DeliveryOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_DeliveryOutcome, encoded as an ASN.1 Element.
 */
export
function _encode_SM_DeliveryOutcome (value: SM_DeliveryOutcome, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_DeliveryOutcome) { _cached_encoder_for_SM_DeliveryOutcome = $._encodeEnumerated; }
    return _cached_encoder_for_SM_DeliveryOutcome(value, elGetter);
}


/* eslint-enable */
