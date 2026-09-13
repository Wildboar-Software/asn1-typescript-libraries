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
 * @summary AbortReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbortReason  ::=  INTEGER {
 *   localSystemProblem(0),
 *   invalidParameter(1), -- reflectedParameter supplied
 *   unrecognizedActivity(2),
 *   temporaryProblem(3),
 *   -- the RTSE cannot accept a session for a period of time
 *   protocolError(4), -- RTSE level protocol error
 *   permanentProblem(5), --provider-abort solely in normal mode
 *   userError(6), -- user-abort solely in normal mode
 *   transferCompleted(7) -- activity can't be discarded--}
 * ```
 */
export
type AbortReason = INTEGER;

/**
 * @summary AbortReason_localSystemProblem
 * @constant
 * @type {number}
 */
export
const AbortReason_localSystemProblem: AbortReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_localSystemProblem
 * @constant
 * @type {number}
 */
export
const localSystemProblem: AbortReason = AbortReason_localSystemProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_invalidParameter
 * @constant
 * @type {number}
 */
export
const AbortReason_invalidParameter: AbortReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_invalidParameter
 * @constant
 * @type {number}
 */
export
const invalidParameter: AbortReason = AbortReason_invalidParameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_unrecognizedActivity
 * @constant
 * @type {number}
 */
export
const AbortReason_unrecognizedActivity: AbortReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_unrecognizedActivity
 * @constant
 * @type {number}
 */
export
const unrecognizedActivity: AbortReason = AbortReason_unrecognizedActivity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_temporaryProblem
 * @constant
 * @type {number}
 */
export
const AbortReason_temporaryProblem: AbortReason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_temporaryProblem
 * @constant
 * @type {number}
 */
export
const temporaryProblem: AbortReason = AbortReason_temporaryProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_protocolError
 * @constant
 * @type {number}
 */
export
const AbortReason_protocolError: AbortReason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_protocolError
 * @constant
 * @type {number}
 */
export
const protocolError: AbortReason = AbortReason_protocolError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_permanentProblem
 * @constant
 * @type {number}
 */
export
const AbortReason_permanentProblem: AbortReason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_permanentProblem
 * @constant
 * @type {number}
 */
export
const permanentProblem: AbortReason = AbortReason_permanentProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_userError
 * @constant
 * @type {number}
 */
export
const AbortReason_userError: AbortReason = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_userError
 * @constant
 * @type {number}
 */
export
const userError: AbortReason = AbortReason_userError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_transferCompleted
 * @constant
 * @type {number}
 */
export
const AbortReason_transferCompleted: AbortReason = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbortReason_transferCompleted
 * @constant
 * @type {number}
 */
export
const transferCompleted: AbortReason = AbortReason_transferCompleted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AbortReason: $.ASN1Decoder<AbortReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbortReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbortReason (el: _Element): AbortReason {
    if (!_cached_decoder_for_AbortReason) { _cached_decoder_for_AbortReason = $._decodeInteger; }
    return _cached_decoder_for_AbortReason(el);
}

let _cached_encoder_for_AbortReason: $.ASN1Encoder<AbortReason> | null = null;

/**
 * @summary Encodes a(n) AbortReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbortReason, encoded as an ASN.1 Element.
 */
export
function _encode_AbortReason (value: AbortReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbortReason) { _cached_encoder_for_AbortReason = $._encodeInteger; }
    return _cached_encoder_for_AbortReason(value, elGetter);
}


/* eslint-enable */
