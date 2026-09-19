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
 * @summary PTCSessionEndCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEndCause   ::=  ENUMERATED
 * {
 *     initiaterLeavesSession(1),
 *     definedParticipantLeaves(2),
 *     numberOfParticipants(3),
 *     sessionTimerExpired(4),
 *     pTCSpeechInactive(5),
 *     allMediaTypesInactive(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCSessionEndCause {
    initiaterLeavesSession = 1,
    definedParticipantLeaves = 2,
    numberOfParticipants = 3,
    sessionTimerExpired = 4,
    pTCSpeechInactive = 5,
    allMediaTypesInactive = 6,
}

/**
 * @summary PTCSessionEndCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEndCause   ::=  ENUMERATED
 * {
 *     initiaterLeavesSession(1),
 *     definedParticipantLeaves(2),
 *     numberOfParticipants(3),
 *     sessionTimerExpired(4),
 *     pTCSpeechInactive(5),
 *     allMediaTypesInactive(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCSessionEndCause = _enum_for_PTCSessionEndCause;

/**
 * @summary PTCSessionEndCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEndCause   ::=  ENUMERATED
 * {
 *     initiaterLeavesSession(1),
 *     definedParticipantLeaves(2),
 *     numberOfParticipants(3),
 *     sessionTimerExpired(4),
 *     pTCSpeechInactive(5),
 *     allMediaTypesInactive(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCSessionEndCause = _enum_for_PTCSessionEndCause;

/**
 * @summary PTCSessionEndCause_initiaterLeavesSession
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_initiaterLeavesSession: PTCSessionEndCause = PTCSessionEndCause.initiaterLeavesSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initiaterLeavesSession
 * @constant
 * @type {number}
 */
export
const initiaterLeavesSession: PTCSessionEndCause = PTCSessionEndCause.initiaterLeavesSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_definedParticipantLeaves
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_definedParticipantLeaves: PTCSessionEndCause = PTCSessionEndCause.definedParticipantLeaves; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary definedParticipantLeaves
 * @constant
 * @type {number}
 */
export
const definedParticipantLeaves: PTCSessionEndCause = PTCSessionEndCause.definedParticipantLeaves; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_numberOfParticipants
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_numberOfParticipants: PTCSessionEndCause = PTCSessionEndCause.numberOfParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfParticipants
 * @constant
 * @type {number}
 */
export
const numberOfParticipants: PTCSessionEndCause = PTCSessionEndCause.numberOfParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_sessionTimerExpired
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_sessionTimerExpired: PTCSessionEndCause = PTCSessionEndCause.sessionTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTimerExpired
 * @constant
 * @type {number}
 */
export
const sessionTimerExpired: PTCSessionEndCause = PTCSessionEndCause.sessionTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_pTCSpeechInactive
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_pTCSpeechInactive: PTCSessionEndCause = PTCSessionEndCause.pTCSpeechInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSpeechInactive
 * @constant
 * @type {number}
 */
export
const pTCSpeechInactive: PTCSessionEndCause = PTCSessionEndCause.pTCSpeechInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_allMediaTypesInactive
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_allMediaTypesInactive: PTCSessionEndCause = PTCSessionEndCause.allMediaTypesInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allMediaTypesInactive
 * @constant
 * @type {number}
 */
export
const allMediaTypesInactive: PTCSessionEndCause = PTCSessionEndCause.allMediaTypesInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCSessionEndCause: $.ASN1Decoder<PTCSessionEndCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionEndCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionEndCause (el: _Element): PTCSessionEndCause {
    if (!_cached_decoder_for_PTCSessionEndCause) { _cached_decoder_for_PTCSessionEndCause = $._decodeEnumerated; }
    return _cached_decoder_for_PTCSessionEndCause(el);
}

let _cached_encoder_for_PTCSessionEndCause: $.ASN1Encoder<PTCSessionEndCause> | null = null;

/**
 * @summary Encodes a(n) PTCSessionEndCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionEndCause, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionEndCause (value: PTCSessionEndCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionEndCause) { _cached_encoder_for_PTCSessionEndCause = $._encodeEnumerated; }
    return _cached_encoder_for_PTCSessionEndCause(value, elGetter);
}


/* eslint-enable */
