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
 * notReachable, busy, or noReply. Use and presence as in 3GPP TS 23.079 (3GPP
 * TS 29.002 V19.1.0 clauses 10.1.3 and 17.7.3).
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
 * notReachable, busy, or noReply. Use and presence as in 3GPP TS 23.079 (3GPP
 * TS 29.002 V19.1.0 clauses 10.1.3 and 17.7.3).
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
 * notReachable, busy, or noReply. Use and presence as in 3GPP TS 23.079 (3GPP
 * TS 29.002 V19.1.0 clauses 10.1.3 and 17.7.3).
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
 * @description
 *
 * `notReachable (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const ForwardingReason_notReachable: ForwardingReason = ForwardingReason.notReachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notReachable
 * @description
 *
 * `notReachable (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const notReachable: ForwardingReason = ForwardingReason.notReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingReason_busy
 * @description
 *
 * `busy (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const ForwardingReason_busy: ForwardingReason = ForwardingReason.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * `busy (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const busy: ForwardingReason = ForwardingReason.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingReason_noReply
 * @description
 *
 * `noReply (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const ForwardingReason_noReply: ForwardingReason = ForwardingReason.noReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReply
 * @description
 *
 * `noReply (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const noReply: ForwardingReason = ForwardingReason.noReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ForwardingReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ForwardingReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingReason, encoded as an ASN.1 Element.
 */
export const _encode_ForwardingReason = $._encodeEnumerated;


/* eslint-enable */
