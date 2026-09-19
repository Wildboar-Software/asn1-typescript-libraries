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
 * @summary CauseProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseProtocol  ::=  ENUMERATED
 * {
 *     transferSyntaxError(1),
 *     abstractSyntaxError-reject(2),
 *     abstractSyntaxErrorIgnoreAndNotify(3),
 *     messageNotCompatibleWithReceiverState(4),
 *     semanticError(5),
 *     abstractSyntaxErrorFalselyConstructedMessage(6),
 *     unspecified(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseProtocol {
    transferSyntaxError = 1,
    abstractSyntaxError_reject = 2,
    abstractSyntaxErrorIgnoreAndNotify = 3,
    messageNotCompatibleWithReceiverState = 4,
    semanticError = 5,
    abstractSyntaxErrorFalselyConstructedMessage = 6,
    unspecified = 7,
}

/**
 * @summary CauseProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseProtocol  ::=  ENUMERATED
 * {
 *     transferSyntaxError(1),
 *     abstractSyntaxError-reject(2),
 *     abstractSyntaxErrorIgnoreAndNotify(3),
 *     messageNotCompatibleWithReceiverState(4),
 *     semanticError(5),
 *     abstractSyntaxErrorFalselyConstructedMessage(6),
 *     unspecified(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseProtocol = _enum_for_CauseProtocol;

/**
 * @summary CauseProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseProtocol  ::=  ENUMERATED
 * {
 *     transferSyntaxError(1),
 *     abstractSyntaxError-reject(2),
 *     abstractSyntaxErrorIgnoreAndNotify(3),
 *     messageNotCompatibleWithReceiverState(4),
 *     semanticError(5),
 *     abstractSyntaxErrorFalselyConstructedMessage(6),
 *     unspecified(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseProtocol = _enum_for_CauseProtocol;

/**
 * @summary CauseProtocol_transferSyntaxError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_transferSyntaxError: CauseProtocol = CauseProtocol.transferSyntaxError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferSyntaxError
 * @constant
 * @type {number}
 */
export
const transferSyntaxError: CauseProtocol = CauseProtocol.transferSyntaxError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxError_reject: CauseProtocol = CauseProtocol.abstractSyntaxError_reject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const abstractSyntaxError_reject: CauseProtocol = CauseProtocol.abstractSyntaxError_reject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorIgnoreAndNotify: CauseProtocol = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorIgnoreAndNotify: CauseProtocol = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const CauseProtocol_messageNotCompatibleWithReceiverState: CauseProtocol = CauseProtocol.messageNotCompatibleWithReceiverState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const messageNotCompatibleWithReceiverState: CauseProtocol = CauseProtocol.messageNotCompatibleWithReceiverState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_semanticError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_semanticError: CauseProtocol = CauseProtocol.semanticError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary semanticError
 * @constant
 * @type {number}
 */
export
const semanticError: CauseProtocol = CauseProtocol.semanticError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage: CauseProtocol = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorFalselyConstructedMessage: CauseProtocol = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_unspecified
 * @constant
 * @type {number}
 */
export
const CauseProtocol_unspecified: CauseProtocol = CauseProtocol.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseProtocol = CauseProtocol.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CauseProtocol: $.ASN1Decoder<CauseProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CauseProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CauseProtocol (el: _Element): CauseProtocol {
    if (!_cached_decoder_for_CauseProtocol) { _cached_decoder_for_CauseProtocol = $._decodeEnumerated; }
    return _cached_decoder_for_CauseProtocol(el);
}

let _cached_encoder_for_CauseProtocol: $.ASN1Encoder<CauseProtocol> | null = null;

/**
 * @summary Encodes a(n) CauseProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_CauseProtocol (value: CauseProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CauseProtocol) { _cached_encoder_for_CauseProtocol = $._encodeEnumerated; }
    return _cached_encoder_for_CauseProtocol(value, elGetter);
}


/* eslint-enable */
