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
 * @summary PromptId_enummeratedPrompt_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptId-enummeratedPrompt-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PromptId_enummeratedPrompt_type = INTEGER;

/**
 * @summary PromptId_enummeratedPrompt_type_groupId
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_groupId: PromptId_enummeratedPrompt_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_groupId
 * @constant
 * @type {number}
 */
export
const groupId: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_groupId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_userId
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_userId: PromptId_enummeratedPrompt_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_userId
 * @constant
 * @type {number}
 */
export
const userId: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_userId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_password
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_password: PromptId_enummeratedPrompt_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_password
 * @constant
 * @type {number}
 */
export
const password: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_password; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_newPassword
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_newPassword: PromptId_enummeratedPrompt_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_newPassword
 * @constant
 * @type {number}
 */
export
const newPassword: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_newPassword; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_copyright
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_copyright: PromptId_enummeratedPrompt_type = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_copyright
 * @constant
 * @type {number}
 */
export
const copyright: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_copyright; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_sessionId
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_sessionId: PromptId_enummeratedPrompt_type = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_sessionId
 * @constant
 * @type {number}
 */
export
const sessionId: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_sessionId; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PromptId_enummeratedPrompt_type: $.ASN1Decoder<PromptId_enummeratedPrompt_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptId_enummeratedPrompt_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptId_enummeratedPrompt_type (el: _Element): PromptId_enummeratedPrompt_type {
    if (!_cached_decoder_for_PromptId_enummeratedPrompt_type) { _cached_decoder_for_PromptId_enummeratedPrompt_type = $._decodeInteger; }
    return _cached_decoder_for_PromptId_enummeratedPrompt_type(el);
}

let _cached_encoder_for_PromptId_enummeratedPrompt_type: $.ASN1Encoder<PromptId_enummeratedPrompt_type> | null = null;

/**
 * @summary Encodes a(n) PromptId_enummeratedPrompt_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptId_enummeratedPrompt_type, encoded as an ASN.1 Element.
 */
export
function _encode_PromptId_enummeratedPrompt_type (value: PromptId_enummeratedPrompt_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptId_enummeratedPrompt_type) { _cached_encoder_for_PromptId_enummeratedPrompt_type = $._encodeInteger; }
    return _cached_encoder_for_PromptId_enummeratedPrompt_type(value, elGetter);
}


/* eslint-enable */
