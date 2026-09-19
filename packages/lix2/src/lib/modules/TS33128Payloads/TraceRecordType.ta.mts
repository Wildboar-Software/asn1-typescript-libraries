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
 * @summary TraceRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordType  ::=  ENUMERATED
 * {
 *     traceStart(1),
 *     cellTrafficTrace(2),
 *     traceDataDelivery(3),
 *     traceDeactivation(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TraceRecordType {
    traceStart = 1,
    cellTrafficTrace = 2,
    traceDataDelivery = 3,
    traceDeactivation = 4,
}

/**
 * @summary TraceRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordType  ::=  ENUMERATED
 * {
 *     traceStart(1),
 *     cellTrafficTrace(2),
 *     traceDataDelivery(3),
 *     traceDeactivation(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TraceRecordType = _enum_for_TraceRecordType;

/**
 * @summary TraceRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordType  ::=  ENUMERATED
 * {
 *     traceStart(1),
 *     cellTrafficTrace(2),
 *     traceDataDelivery(3),
 *     traceDeactivation(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TraceRecordType = _enum_for_TraceRecordType;

/**
 * @summary TraceRecordType_traceStart
 * @constant
 * @type {number}
 */
export
const TraceRecordType_traceStart: TraceRecordType = TraceRecordType.traceStart; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary traceStart
 * @constant
 * @type {number}
 */
export
const traceStart: TraceRecordType = TraceRecordType.traceStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceRecordType_cellTrafficTrace
 * @constant
 * @type {number}
 */
export
const TraceRecordType_cellTrafficTrace: TraceRecordType = TraceRecordType.cellTrafficTrace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellTrafficTrace
 * @constant
 * @type {number}
 */
export
const cellTrafficTrace: TraceRecordType = TraceRecordType.cellTrafficTrace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceRecordType_traceDataDelivery
 * @constant
 * @type {number}
 */
export
const TraceRecordType_traceDataDelivery: TraceRecordType = TraceRecordType.traceDataDelivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary traceDataDelivery
 * @constant
 * @type {number}
 */
export
const traceDataDelivery: TraceRecordType = TraceRecordType.traceDataDelivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceRecordType_traceDeactivation
 * @constant
 * @type {number}
 */
export
const TraceRecordType_traceDeactivation: TraceRecordType = TraceRecordType.traceDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary traceDeactivation
 * @constant
 * @type {number}
 */
export
const traceDeactivation: TraceRecordType = TraceRecordType.traceDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TraceRecordType: $.ASN1Decoder<TraceRecordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceRecordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceRecordType (el: _Element): TraceRecordType {
    if (!_cached_decoder_for_TraceRecordType) { _cached_decoder_for_TraceRecordType = $._decodeEnumerated; }
    return _cached_decoder_for_TraceRecordType(el);
}

let _cached_encoder_for_TraceRecordType: $.ASN1Encoder<TraceRecordType> | null = null;

/**
 * @summary Encodes a(n) TraceRecordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceRecordType, encoded as an ASN.1 Element.
 */
export
function _encode_TraceRecordType (value: TraceRecordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceRecordType) { _cached_encoder_for_TraceRecordType = $._encodeEnumerated; }
    return _cached_encoder_for_TraceRecordType(value, elGetter);
}


/* eslint-enable */
