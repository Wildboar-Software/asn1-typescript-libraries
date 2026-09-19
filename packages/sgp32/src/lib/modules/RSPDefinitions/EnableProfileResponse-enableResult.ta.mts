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
 * @summary EnableProfileResponse_enableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileResponse-enableResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EnableProfileResponse_enableResult = INTEGER;

/**
 * @summary EnableProfileResponse_enableResult_ok
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_ok: EnableProfileResponse_enableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_iccidOrAidNotFound: EnableProfileResponse_enableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_profileNotInDisabledState: EnableProfileResponse_enableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_disallowedByPolicy: EnableProfileResponse_enableResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_wrongProfileReenabling
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_wrongProfileReenabling: EnableProfileResponse_enableResult = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_wrongProfileReenabling
 * @constant
 * @type {number}
 */
export
const wrongProfileReenabling: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_wrongProfileReenabling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_catBusy
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_catBusy: EnableProfileResponse_enableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_undefinedError: EnableProfileResponse_enableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EnableProfileResponse_enableResult: $.ASN1Decoder<EnableProfileResponse_enableResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableProfileResponse_enableResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableProfileResponse_enableResult (el: _Element): EnableProfileResponse_enableResult {
    if (!_cached_decoder_for_EnableProfileResponse_enableResult) { _cached_decoder_for_EnableProfileResponse_enableResult = $._decodeInteger; }
    return _cached_decoder_for_EnableProfileResponse_enableResult(el);
}

let _cached_encoder_for_EnableProfileResponse_enableResult: $.ASN1Encoder<EnableProfileResponse_enableResult> | null = null;

/**
 * @summary Encodes a(n) EnableProfileResponse_enableResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableProfileResponse_enableResult, encoded as an ASN.1 Element.
 */
export
function _encode_EnableProfileResponse_enableResult (value: EnableProfileResponse_enableResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableProfileResponse_enableResult) { _cached_encoder_for_EnableProfileResponse_enableResult = $._encodeInteger; }
    return _cached_encoder_for_EnableProfileResponse_enableResult(value, elGetter);
}


/* eslint-enable */
