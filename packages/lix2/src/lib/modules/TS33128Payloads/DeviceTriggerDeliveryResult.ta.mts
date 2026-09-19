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
 * @summary DeviceTriggerDeliveryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceTriggerDeliveryResult  ::=  ENUMERATED
 * {
 *     success(1),
 *     unknown(2),
 *     failure(3),
 *     triggered(4),
 *     expired(5),
 *     unconfirmed(6),
 *     replaced(7),
 *     terminate(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DeviceTriggerDeliveryResult {
    success = 1,
    unknown = 2,
    failure = 3,
    triggered = 4,
    expired = 5,
    unconfirmed = 6,
    replaced = 7,
    terminate = 8,
}

/**
 * @summary DeviceTriggerDeliveryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceTriggerDeliveryResult  ::=  ENUMERATED
 * {
 *     success(1),
 *     unknown(2),
 *     failure(3),
 *     triggered(4),
 *     expired(5),
 *     unconfirmed(6),
 *     replaced(7),
 *     terminate(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DeviceTriggerDeliveryResult = _enum_for_DeviceTriggerDeliveryResult;

/**
 * @summary DeviceTriggerDeliveryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceTriggerDeliveryResult  ::=  ENUMERATED
 * {
 *     success(1),
 *     unknown(2),
 *     failure(3),
 *     triggered(4),
 *     expired(5),
 *     unconfirmed(6),
 *     replaced(7),
 *     terminate(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DeviceTriggerDeliveryResult = _enum_for_DeviceTriggerDeliveryResult;

/**
 * @summary DeviceTriggerDeliveryResult_success
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_success: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_unknown
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_unknown: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_failure
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_failure: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_triggered
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_triggered: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.triggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary triggered
 * @constant
 * @type {number}
 */
export
const triggered: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.triggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_expired
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_expired: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_unconfirmed
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_unconfirmed: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.unconfirmed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unconfirmed
 * @constant
 * @type {number}
 */
export
const unconfirmed: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.unconfirmed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_replaced
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_replaced: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.replaced; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary replaced
 * @constant
 * @type {number}
 */
export
const replaced: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.replaced; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_terminate
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_terminate: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.terminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminate
 * @constant
 * @type {number}
 */
export
const terminate: DeviceTriggerDeliveryResult = DeviceTriggerDeliveryResult.terminate; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DeviceTriggerDeliveryResult: $.ASN1Decoder<DeviceTriggerDeliveryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceTriggerDeliveryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceTriggerDeliveryResult (el: _Element): DeviceTriggerDeliveryResult {
    if (!_cached_decoder_for_DeviceTriggerDeliveryResult) { _cached_decoder_for_DeviceTriggerDeliveryResult = $._decodeEnumerated; }
    return _cached_decoder_for_DeviceTriggerDeliveryResult(el);
}

let _cached_encoder_for_DeviceTriggerDeliveryResult: $.ASN1Encoder<DeviceTriggerDeliveryResult> | null = null;

/**
 * @summary Encodes a(n) DeviceTriggerDeliveryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceTriggerDeliveryResult, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceTriggerDeliveryResult (value: DeviceTriggerDeliveryResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceTriggerDeliveryResult) { _cached_encoder_for_DeviceTriggerDeliveryResult = $._encodeEnumerated; }
    return _cached_encoder_for_DeviceTriggerDeliveryResult(value, elGetter);
}


/* eslint-enable */
