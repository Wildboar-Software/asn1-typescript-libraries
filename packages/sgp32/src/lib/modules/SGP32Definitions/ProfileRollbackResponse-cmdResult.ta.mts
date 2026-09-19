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
 * @summary ProfileRollbackResponse_cmdResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileRollbackResponse-cmdResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileRollbackResponse_cmdResult = INTEGER;

/**
 * @summary ProfileRollbackResponse_cmdResult_ok
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_ok: ProfileRollbackResponse_cmdResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_rollbackNotAllowed
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_rollbackNotAllowed: ProfileRollbackResponse_cmdResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_rollbackNotAllowed
 * @constant
 * @type {number}
 */
export
const rollbackNotAllowed: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_rollbackNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_catBusy
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_catBusy: ProfileRollbackResponse_cmdResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_commandError
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_commandError: ProfileRollbackResponse_cmdResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ProfileRollbackResponse_cmdResult_undefinedError: ProfileRollbackResponse_cmdResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileRollbackResponse_cmdResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ProfileRollbackResponse_cmdResult = ProfileRollbackResponse_cmdResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProfileRollbackResponse_cmdResult: $.ASN1Decoder<ProfileRollbackResponse_cmdResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileRollbackResponse_cmdResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileRollbackResponse_cmdResult (el: _Element): ProfileRollbackResponse_cmdResult {
    if (!_cached_decoder_for_ProfileRollbackResponse_cmdResult) { _cached_decoder_for_ProfileRollbackResponse_cmdResult = $._decodeInteger; }
    return _cached_decoder_for_ProfileRollbackResponse_cmdResult(el);
}

let _cached_encoder_for_ProfileRollbackResponse_cmdResult: $.ASN1Encoder<ProfileRollbackResponse_cmdResult> | null = null;

/**
 * @summary Encodes a(n) ProfileRollbackResponse_cmdResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileRollbackResponse_cmdResult, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileRollbackResponse_cmdResult (value: ProfileRollbackResponse_cmdResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileRollbackResponse_cmdResult) { _cached_encoder_for_ProfileRollbackResponse_cmdResult = $._encodeInteger; }
    return _cached_encoder_for_ProfileRollbackResponse_cmdResult(value, elGetter);
}


/* eslint-enable */
