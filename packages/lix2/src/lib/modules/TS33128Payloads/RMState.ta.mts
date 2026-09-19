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
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RMState {
    registered = 1,
    deregistered = 2,
}

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RMState = _enum_for_RMState;

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RMState = _enum_for_RMState;

/**
 * @summary RMState_registered
 * @constant
 * @type {number}
 */
export
const RMState_registered: RMState = RMState.registered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registered
 * @constant
 * @type {number}
 */
export
const registered: RMState = RMState.registered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RMState_deregistered
 * @constant
 * @type {number}
 */
export
const RMState_deregistered: RMState = RMState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @constant
 * @type {number}
 */
export
const deregistered: RMState = RMState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RMState: $.ASN1Decoder<RMState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RMState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RMState (el: _Element): RMState {
    if (!_cached_decoder_for_RMState) { _cached_decoder_for_RMState = $._decodeEnumerated; }
    return _cached_decoder_for_RMState(el);
}

let _cached_encoder_for_RMState: $.ASN1Encoder<RMState> | null = null;

/**
 * @summary Encodes a(n) RMState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RMState, encoded as an ASN.1 Element.
 */
export
function _encode_RMState (value: RMState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RMState) { _cached_encoder_for_RMState = $._encodeEnumerated; }
    return _cached_encoder_for_RMState(value, elGetter);
}


/* eslint-enable */
