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
 * @summary CallBarringCause
 * @description
 * 
 * Indicates either that the call meets a barring condition set by the
 * subscriber or that the call is barred for operator reasons (3GPP TS 29.002
 * V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringCause  ::=  ENUMERATED {
 *     barringServiceActive  (0),
 *     operatorBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallBarringCause {
    barringServiceActive = 0,
    operatorBarring = 1,
}

/**
 * @summary CallBarringCause
 * @description
 * 
 * Indicates either that the call meets a barring condition set by the
 * subscriber or that the call is barred for operator reasons (3GPP TS 29.002
 * V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringCause  ::=  ENUMERATED {
 *     barringServiceActive  (0),
 *     operatorBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type CallBarringCause = _enum_for_CallBarringCause;

/**
 * @summary CallBarringCause
 * @description
 * 
 * Indicates either that the call meets a barring condition set by the
 * subscriber or that the call is barred for operator reasons (3GPP TS 29.002
 * V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringCause  ::=  ENUMERATED {
 *     barringServiceActive  (0),
 *     operatorBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const CallBarringCause = _enum_for_CallBarringCause;

/**
 * @summary CallBarringCause_barringServiceActive
 * @description
 *
 * Call meets a barring condition set by the subscriber (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const CallBarringCause_barringServiceActive: CallBarringCause = CallBarringCause.barringServiceActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barringServiceActive
 * @description
 *
 * Call meets a barring condition set by the subscriber (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const barringServiceActive: CallBarringCause = CallBarringCause.barringServiceActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallBarringCause_operatorBarring
 * @description
 *
 * Call is barred for operator reasons (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const CallBarringCause_operatorBarring: CallBarringCause = CallBarringCause.operatorBarring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorBarring
 * @description
 *
 * Call is barred for operator reasons (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const operatorBarring: CallBarringCause = CallBarringCause.operatorBarring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarringCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallBarringCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CallBarringCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarringCause, encoded as an ASN.1 Element.
 */
export const _encode_CallBarringCause = $._encodeEnumerated;


/* eslint-enable */
