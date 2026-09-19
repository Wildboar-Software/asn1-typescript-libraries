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
 * @summary DisableProfileResponse_disableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileResponse-disableResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DisableProfileResponse_disableResult = INTEGER;

/**
 * @summary DisableProfileResponse_disableResult_ok
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_ok: DisableProfileResponse_disableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_iccidOrAidNotFound: DisableProfileResponse_disableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_profileNotInEnabledState: DisableProfileResponse_disableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_disallowedByPolicy: DisableProfileResponse_disableResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_catBusy
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_catBusy: DisableProfileResponse_disableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_undefinedError: DisableProfileResponse_disableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DisableProfileResponse_disableResult: $.ASN1Decoder<DisableProfileResponse_disableResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableProfileResponse_disableResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableProfileResponse_disableResult (el: _Element): DisableProfileResponse_disableResult {
    if (!_cached_decoder_for_DisableProfileResponse_disableResult) { _cached_decoder_for_DisableProfileResponse_disableResult = $._decodeInteger; }
    return _cached_decoder_for_DisableProfileResponse_disableResult(el);
}

let _cached_encoder_for_DisableProfileResponse_disableResult: $.ASN1Encoder<DisableProfileResponse_disableResult> | null = null;

/**
 * @summary Encodes a(n) DisableProfileResponse_disableResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableProfileResponse_disableResult, encoded as an ASN.1 Element.
 */
export
function _encode_DisableProfileResponse_disableResult (value: DisableProfileResponse_disableResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableProfileResponse_disableResult) { _cached_encoder_for_DisableProfileResponse_disableResult = $._encodeInteger; }
    return _cached_encoder_for_DisableProfileResponse_disableResult(value, elGetter);
}


/* eslint-enable */
