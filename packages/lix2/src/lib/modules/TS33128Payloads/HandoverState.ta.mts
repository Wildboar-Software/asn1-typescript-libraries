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
 * @summary HandoverState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverState  ::=  ENUMERATED
 * {
 *     none(1),
 *     preparing(2),
 *     prepared(3),
 *     completed(4),
 *     cancelled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_HandoverState {
    none = 1,
    preparing = 2,
    prepared = 3,
    completed = 4,
    cancelled = 5,
}

/**
 * @summary HandoverState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverState  ::=  ENUMERATED
 * {
 *     none(1),
 *     preparing(2),
 *     prepared(3),
 *     completed(4),
 *     cancelled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HandoverState = _enum_for_HandoverState;

/**
 * @summary HandoverState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverState  ::=  ENUMERATED
 * {
 *     none(1),
 *     preparing(2),
 *     prepared(3),
 *     completed(4),
 *     cancelled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const HandoverState = _enum_for_HandoverState;

/**
 * @summary HandoverState_none
 * @constant
 * @type {number}
 */
export
const HandoverState_none: HandoverState = HandoverState.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: HandoverState = HandoverState.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_preparing
 * @constant
 * @type {number}
 */
export
const HandoverState_preparing: HandoverState = HandoverState.preparing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preparing
 * @constant
 * @type {number}
 */
export
const preparing: HandoverState = HandoverState.preparing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_prepared
 * @constant
 * @type {number}
 */
export
const HandoverState_prepared: HandoverState = HandoverState.prepared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prepared
 * @constant
 * @type {number}
 */
export
const prepared: HandoverState = HandoverState.prepared; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_completed
 * @constant
 * @type {number}
 */
export
const HandoverState_completed: HandoverState = HandoverState.completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @constant
 * @type {number}
 */
export
const completed: HandoverState = HandoverState.completed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_cancelled
 * @constant
 * @type {number}
 */
export
const HandoverState_cancelled: HandoverState = HandoverState.cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: HandoverState = HandoverState.cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_HandoverState: $.ASN1Decoder<HandoverState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandoverState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandoverState (el: _Element): HandoverState {
    if (!_cached_decoder_for_HandoverState) { _cached_decoder_for_HandoverState = $._decodeEnumerated; }
    return _cached_decoder_for_HandoverState(el);
}

let _cached_encoder_for_HandoverState: $.ASN1Encoder<HandoverState> | null = null;

/**
 * @summary Encodes a(n) HandoverState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandoverState, encoded as an ASN.1 Element.
 */
export
function _encode_HandoverState (value: HandoverState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandoverState) { _cached_encoder_for_HandoverState = $._encodeEnumerated; }
    return _cached_encoder_for_HandoverState(value, elGetter);
}


/* eslint-enable */
