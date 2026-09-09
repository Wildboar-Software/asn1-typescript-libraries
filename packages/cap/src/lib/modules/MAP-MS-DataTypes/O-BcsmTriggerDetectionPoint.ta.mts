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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



export
enum _enum_for_O_BcsmTriggerDetectionPoint {
    collectedInfo = 2,
    routeSelectFailure = 4,
}

/**
 * @summary O_BcsmTriggerDetectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-BcsmTriggerDetectionPoint  ::=  ENUMERATED {
 *     collectedInfo (2),
 *     ...,
 *     routeSelectFailure (4) }
 * ```
 * 
 * @enum {number}
 */
export
type O_BcsmTriggerDetectionPoint = _enum_for_O_BcsmTriggerDetectionPoint | ENUMERATED;

/**
 * @summary O_BcsmTriggerDetectionPoint_collectedInfo
 * @constant
 * @type {number}
 */
export
const O_BcsmTriggerDetectionPoint_collectedInfo: O_BcsmTriggerDetectionPoint = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collectedInfo
 * @constant
 * @type {number}
 */
export
const collectedInfo: O_BcsmTriggerDetectionPoint = O_BcsmTriggerDetectionPoint_collectedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary O_BcsmTriggerDetectionPoint_routeSelectFailure
 * @constant
 * @type {number}
 */
export
const O_BcsmTriggerDetectionPoint_routeSelectFailure: O_BcsmTriggerDetectionPoint = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeSelectFailure
 * @constant
 * @type {number}
 */
export
const routeSelectFailure: O_BcsmTriggerDetectionPoint = O_BcsmTriggerDetectionPoint_routeSelectFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_O_BcsmTriggerDetectionPoint: $.ASN1Decoder<O_BcsmTriggerDetectionPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_BcsmTriggerDetectionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_BcsmTriggerDetectionPoint (el: _Element): O_BcsmTriggerDetectionPoint {
    if (!_cached_decoder_for_O_BcsmTriggerDetectionPoint) { _cached_decoder_for_O_BcsmTriggerDetectionPoint = $._decodeEnumerated; }
    return _cached_decoder_for_O_BcsmTriggerDetectionPoint(el);
}

let _cached_encoder_for_O_BcsmTriggerDetectionPoint: $.ASN1Encoder<O_BcsmTriggerDetectionPoint> | null = null;

/**
 * @summary Encodes a(n) O_BcsmTriggerDetectionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_BcsmTriggerDetectionPoint, encoded as an ASN.1 Element.
 */
export
function _encode_O_BcsmTriggerDetectionPoint (value: O_BcsmTriggerDetectionPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_BcsmTriggerDetectionPoint) { _cached_encoder_for_O_BcsmTriggerDetectionPoint = $._encodeEnumerated; }
    return _cached_encoder_for_O_BcsmTriggerDetectionPoint(value, elGetter);
}


/* eslint-enable */
