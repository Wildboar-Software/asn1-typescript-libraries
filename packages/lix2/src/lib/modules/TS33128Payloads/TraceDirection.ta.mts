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
 * @summary TraceDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDirection  ::=  ENUMERATED
 * {
 *     toAMF(1),
 *     fromAMF(2),
 *     toMME(3),
 *     fromMME(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TraceDirection {
    toAMF = 1,
    fromAMF = 2,
    toMME = 3,
    fromMME = 4,
}

/**
 * @summary TraceDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDirection  ::=  ENUMERATED
 * {
 *     toAMF(1),
 *     fromAMF(2),
 *     toMME(3),
 *     fromMME(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TraceDirection = _enum_for_TraceDirection;

/**
 * @summary TraceDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDirection  ::=  ENUMERATED
 * {
 *     toAMF(1),
 *     fromAMF(2),
 *     toMME(3),
 *     fromMME(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TraceDirection = _enum_for_TraceDirection;

/**
 * @summary TraceDirection_toAMF
 * @constant
 * @type {number}
 */
export
const TraceDirection_toAMF: TraceDirection = TraceDirection.toAMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toAMF
 * @constant
 * @type {number}
 */
export
const toAMF: TraceDirection = TraceDirection.toAMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDirection_fromAMF
 * @constant
 * @type {number}
 */
export
const TraceDirection_fromAMF: TraceDirection = TraceDirection.fromAMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromAMF
 * @constant
 * @type {number}
 */
export
const fromAMF: TraceDirection = TraceDirection.fromAMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDirection_toMME
 * @constant
 * @type {number}
 */
export
const TraceDirection_toMME: TraceDirection = TraceDirection.toMME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toMME
 * @constant
 * @type {number}
 */
export
const toMME: TraceDirection = TraceDirection.toMME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDirection_fromMME
 * @constant
 * @type {number}
 */
export
const TraceDirection_fromMME: TraceDirection = TraceDirection.fromMME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromMME
 * @constant
 * @type {number}
 */
export
const fromMME: TraceDirection = TraceDirection.fromMME; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TraceDirection: $.ASN1Decoder<TraceDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceDirection (el: _Element): TraceDirection {
    if (!_cached_decoder_for_TraceDirection) { _cached_decoder_for_TraceDirection = $._decodeEnumerated; }
    return _cached_decoder_for_TraceDirection(el);
}

let _cached_encoder_for_TraceDirection: $.ASN1Encoder<TraceDirection> | null = null;

/**
 * @summary Encodes a(n) TraceDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDirection, encoded as an ASN.1 Element.
 */
export
function _encode_TraceDirection (value: TraceDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceDirection) { _cached_encoder_for_TraceDirection = $._encodeEnumerated; }
    return _cached_encoder_for_TraceDirection(value, elGetter);
}


/* eslint-enable */
