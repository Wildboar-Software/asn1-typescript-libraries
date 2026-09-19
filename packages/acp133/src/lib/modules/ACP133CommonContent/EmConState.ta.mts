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
 * @summary EmConState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConState  ::=  ENUMERATED { enabled(0), receive-only(1), electronic-silence(2), disabled(3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EmConState {
    enabled = 0,
    receive_only = 1,
    electronic_silence = 2,
    disabled = 3,
}

/**
 * @summary EmConState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConState  ::=  ENUMERATED { enabled(0), receive-only(1), electronic-silence(2), disabled(3) }
 * ```
 * 
 * @enum {number}
 */
export
type EmConState = _enum_for_EmConState;

/**
 * @summary EmConState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConState  ::=  ENUMERATED { enabled(0), receive-only(1), electronic-silence(2), disabled(3) }
 * ```
 * 
 * @enum {number}
 */
export
const EmConState = _enum_for_EmConState;

/**
 * @summary EmConState_enabled
 * @constant
 * @type {number}
 */
export
const EmConState_enabled: EmConState = EmConState.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled: EmConState = EmConState.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmConState_receive_only
 * @constant
 * @type {number}
 */
export
const EmConState_receive_only: EmConState = EmConState.receive_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receive_only
 * @constant
 * @type {number}
 */
export
const receive_only: EmConState = EmConState.receive_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmConState_electronic_silence
 * @constant
 * @type {number}
 */
export
const EmConState_electronic_silence: EmConState = EmConState.electronic_silence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary electronic_silence
 * @constant
 * @type {number}
 */
export
const electronic_silence: EmConState = EmConState.electronic_silence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmConState_disabled
 * @constant
 * @type {number}
 */
export
const EmConState_disabled: EmConState = EmConState.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: EmConState = EmConState.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EmConState: $.ASN1Decoder<EmConState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmConState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmConState (el: _Element): EmConState {
    if (!_cached_decoder_for_EmConState) { _cached_decoder_for_EmConState = $._decodeEnumerated; }
    return _cached_decoder_for_EmConState(el);
}

let _cached_encoder_for_EmConState: $.ASN1Encoder<EmConState> | null = null;

/**
 * @summary Encodes a(n) EmConState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmConState, encoded as an ASN.1 Element.
 */
export
function _encode_EmConState (value: EmConState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmConState) { _cached_encoder_for_EmConState = $._encodeEnumerated; }
    return _cached_encoder_for_EmConState(value, elGetter);
}


/* eslint-enable */
