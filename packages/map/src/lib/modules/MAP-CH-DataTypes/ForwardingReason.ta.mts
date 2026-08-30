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
 * @summary ForwardingReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingReason  ::=  ENUMERATED {
 *     notReachable  (0),
 *     busy  (1),
 *     noReply  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ForwardingReason {
    notReachable = 0,
    busy = 1,
    noReply = 2,
}

/**
 * @summary ForwardingReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingReason  ::=  ENUMERATED {
 *     notReachable  (0),
 *     busy  (1),
 *     noReply  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type ForwardingReason = _enum_for_ForwardingReason;

/**
 * @summary ForwardingReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingReason  ::=  ENUMERATED {
 *     notReachable  (0),
 *     busy  (1),
 *     noReply  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const ForwardingReason = _enum_for_ForwardingReason;

/**
 * @summary ForwardingReason_notReachable
 * @constant
 * @type {number}
 */
export
const ForwardingReason_notReachable: ForwardingReason = ForwardingReason.notReachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notReachable
 * @constant
 * @type {number}
 */
export
const notReachable: ForwardingReason = ForwardingReason.notReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingReason_busy
 * @constant
 * @type {number}
 */
export
const ForwardingReason_busy: ForwardingReason = ForwardingReason.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: ForwardingReason = ForwardingReason.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingReason_noReply
 * @constant
 * @type {number}
 */
export
const ForwardingReason_noReply: ForwardingReason = ForwardingReason.noReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReply
 * @constant
 * @type {number}
 */
export
const noReply: ForwardingReason = ForwardingReason.noReply; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ForwardingReason: $.ASN1Decoder<ForwardingReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingReason (el: _Element): ForwardingReason {
    if (!_cached_decoder_for_ForwardingReason) { _cached_decoder_for_ForwardingReason = $._decodeEnumerated; }
    return _cached_decoder_for_ForwardingReason(el);
}

let _cached_encoder_for_ForwardingReason: $.ASN1Encoder<ForwardingReason> | null = null;

/**
 * @summary Encodes a(n) ForwardingReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingReason, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingReason (value: ForwardingReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingReason) { _cached_encoder_for_ForwardingReason = $._encodeEnumerated; }
    return _cached_encoder_for_ForwardingReason(value, elGetter);
}


/* eslint-enable */
