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
 * @constant
 * @type {number}
 */
export
const CallBarringCause_barringServiceActive: CallBarringCause = CallBarringCause.barringServiceActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barringServiceActive
 * @constant
 * @type {number}
 */
export
const barringServiceActive: CallBarringCause = CallBarringCause.barringServiceActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallBarringCause_operatorBarring
 * @constant
 * @type {number}
 */
export
const CallBarringCause_operatorBarring: CallBarringCause = CallBarringCause.operatorBarring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorBarring
 * @constant
 * @type {number}
 */
export
const operatorBarring: CallBarringCause = CallBarringCause.operatorBarring; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CallBarringCause: $.ASN1Decoder<CallBarringCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarringCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarringCause (el: _Element): CallBarringCause {
    if (!_cached_decoder_for_CallBarringCause) { _cached_decoder_for_CallBarringCause = $._decodeEnumerated; }
    return _cached_decoder_for_CallBarringCause(el);
}

let _cached_encoder_for_CallBarringCause: $.ASN1Encoder<CallBarringCause> | null = null;

/**
 * @summary Encodes a(n) CallBarringCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarringCause, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarringCause (value: CallBarringCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarringCause) { _cached_encoder_for_CallBarringCause = $._encodeEnumerated; }
    return _cached_encoder_for_CallBarringCause(value, elGetter);
}


/* eslint-enable */
