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



export
enum _enum_for_EndReason {
    undefined = 0,
    regularLogoff = 1,
    connectionLoss = 2,
    connectionTimeout = 3,
    leaseExpired = 4,
}

/**
 * @summary EndReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndReason  ::=  ENUMERATED
 * {
 *     undefined(0),
 *     regularLogoff(1),
 *         -- The target logged off
 *     connectionLoss(2),
 *         -- The connection was lost
 *     connectionTimeout(3),
 *         -- The connection timed-out
 *     leaseExpired(4),
 *         -- The DHCP lease expired
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EndReason = _enum_for_EndReason | ENUMERATED;

/**
 * @summary EndReason_undefined
 * @constant
 * @type {number}
 */
export
const EndReason_undefined: EndReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: EndReason = EndReason_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_regularLogoff
 * @constant
 * @type {number}
 */
export
const EndReason_regularLogoff: EndReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regularLogoff
 * @constant
 * @type {number}
 */
export
const regularLogoff: EndReason = EndReason_regularLogoff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionLoss
 * @constant
 * @type {number}
 */
export
const EndReason_connectionLoss: EndReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionLoss
 * @constant
 * @type {number}
 */
export
const connectionLoss: EndReason = EndReason_connectionLoss; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionTimeout
 * @constant
 * @type {number}
 */
export
const EndReason_connectionTimeout: EndReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionTimeout
 * @constant
 * @type {number}
 */
export
const connectionTimeout: EndReason = EndReason_connectionTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_leaseExpired
 * @constant
 * @type {number}
 */
export
const EndReason_leaseExpired: EndReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leaseExpired
 * @constant
 * @type {number}
 */
export
const leaseExpired: EndReason = EndReason_leaseExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EndReason: $.ASN1Decoder<EndReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EndReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EndReason (el: _Element): EndReason {
    if (!_cached_decoder_for_EndReason) { _cached_decoder_for_EndReason = $._decodeEnumerated; }
    return _cached_decoder_for_EndReason(el);
}

let _cached_encoder_for_EndReason: $.ASN1Encoder<EndReason> | null = null;

/**
 * @summary Encodes a(n) EndReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndReason, encoded as an ASN.1 Element.
 */
export
function _encode_EndReason (value: EndReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EndReason) { _cached_encoder_for_EndReason = $._encodeEnumerated; }
    return _cached_encoder_for_EndReason(value, elGetter);
}


/* eslint-enable */
