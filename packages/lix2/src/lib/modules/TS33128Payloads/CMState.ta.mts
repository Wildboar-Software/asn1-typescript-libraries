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
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CMState {
    idle = 1,
    connected = 2,
}

/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CMState = _enum_for_CMState;

/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CMState = _enum_for_CMState;

/**
 * @summary CMState_idle
 * @constant
 * @type {number}
 */
export
const CMState_idle: CMState = CMState.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: CMState = CMState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CMState_connected
 * @constant
 * @type {number}
 */
export
const CMState_connected: CMState = CMState.connected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected: CMState = CMState.connected; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CMState: $.ASN1Decoder<CMState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CMState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CMState (el: _Element): CMState {
    if (!_cached_decoder_for_CMState) { _cached_decoder_for_CMState = $._decodeEnumerated; }
    return _cached_decoder_for_CMState(el);
}

let _cached_encoder_for_CMState: $.ASN1Encoder<CMState> | null = null;

/**
 * @summary Encodes a(n) CMState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMState, encoded as an ASN.1 Element.
 */
export
function _encode_CMState (value: CMState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CMState) { _cached_encoder_for_CMState = $._encodeEnumerated; }
    return _cached_encoder_for_CMState(value, elGetter);
}


/* eslint-enable */
