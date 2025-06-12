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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION _enum_for_AdministrativeState */
/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```@enum {number}
 */
export
enum _enum_for_AdministrativeState {
    locked = 0,
    unlocked = 1,
    shuttingDown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION AdministrativeState */
/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```@enum {number}
 */
export
type AdministrativeState = _enum_for_AdministrativeState;
/* END_OF_SYMBOL_DEFINITION AdministrativeState */

/* START_OF_SYMBOL_DEFINITION AdministrativeState */
/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```@enum {number}
 */
export
const AdministrativeState = _enum_for_AdministrativeState;
/* END_OF_SYMBOL_DEFINITION AdministrativeState */

/* START_OF_SYMBOL_DEFINITION AdministrativeState_locked */
/**
 * @summary AdministrativeState_locked
 * @constant
 * @type {number}
 */
export
const AdministrativeState_locked: AdministrativeState = AdministrativeState.locked; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrativeState_locked */

/* START_OF_SYMBOL_DEFINITION locked */
/**
 * @summary locked
 * @constant
 * @type {number}
 */
export
const locked: AdministrativeState = AdministrativeState.locked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION locked */

/* START_OF_SYMBOL_DEFINITION AdministrativeState_unlocked */
/**
 * @summary AdministrativeState_unlocked
 * @constant
 * @type {number}
 */
export
const AdministrativeState_unlocked: AdministrativeState = AdministrativeState.unlocked; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrativeState_unlocked */

/* START_OF_SYMBOL_DEFINITION unlocked */
/**
 * @summary unlocked
 * @constant
 * @type {number}
 */
export
const unlocked: AdministrativeState = AdministrativeState.unlocked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unlocked */

/* START_OF_SYMBOL_DEFINITION AdministrativeState_shuttingDown */
/**
 * @summary AdministrativeState_shuttingDown
 * @constant
 * @type {number}
 */
export
const AdministrativeState_shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrativeState_shuttingDown */

/* START_OF_SYMBOL_DEFINITION shuttingDown */
/**
 * @summary shuttingDown
 * @constant
 * @type {number}
 */
export
const shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION shuttingDown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrativeState */
let _cached_decoder_for_AdministrativeState: $.ASN1Decoder<AdministrativeState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION _decode_AdministrativeState */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrativeState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrativeState} The decoded data structure.
 */
export
function _decode_AdministrativeState (el: _Element) {
    if (!_cached_decoder_for_AdministrativeState) { _cached_decoder_for_AdministrativeState = $._decodeEnumerated; }
    return _cached_decoder_for_AdministrativeState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrativeState */
let _cached_encoder_for_AdministrativeState: $.ASN1Encoder<AdministrativeState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION _encode_AdministrativeState */
/**
 * @summary Encodes a(n) AdministrativeState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrativeState, encoded as an ASN.1 Element.
 */
export
function _encode_AdministrativeState (value: AdministrativeState, elGetter: $.ASN1Encoder<AdministrativeState>) {
    if (!_cached_encoder_for_AdministrativeState) { _cached_encoder_for_AdministrativeState = $._encodeEnumerated; }
    return _cached_encoder_for_AdministrativeState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministrativeState */

/* eslint-enable */
