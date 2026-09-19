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
 * @summary DisableProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInEnabledState(2),
 *     disallowedByPolicy(3),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type DisableProfileResult = INTEGER;

/**
 * @summary DisableProfileResult_ok
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_ok: DisableProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DisableProfileResult = DisableProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_iccidOrAidNotFound: DisableProfileResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DisableProfileResult = DisableProfileResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_profileNotInEnabledState: DisableProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableProfileResult = DisableProfileResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_disallowedByPolicy: DisableProfileResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DisableProfileResult = DisableProfileResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_catBusy: DisableProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: DisableProfileResult = DisableProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_undefinedError: DisableProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableProfileResult = DisableProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DisableProfileResult: $.ASN1Decoder<DisableProfileResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableProfileResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableProfileResult (el: _Element): DisableProfileResult {
    if (!_cached_decoder_for_DisableProfileResult) { _cached_decoder_for_DisableProfileResult = $._decodeInteger; }
    return _cached_decoder_for_DisableProfileResult(el);
}

let _cached_encoder_for_DisableProfileResult: $.ASN1Encoder<DisableProfileResult> | null = null;

/**
 * @summary Encodes a(n) DisableProfileResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableProfileResult, encoded as an ASN.1 Element.
 */
export
function _encode_DisableProfileResult (value: DisableProfileResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableProfileResult) { _cached_encoder_for_DisableProfileResult = $._encodeInteger; }
    return _cached_encoder_for_DisableProfileResult(value, elGetter);
}


/* eslint-enable */
