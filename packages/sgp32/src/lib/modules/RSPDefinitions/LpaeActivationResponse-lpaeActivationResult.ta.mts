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
 * @summary LpaeActivationResponse_lpaeActivationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationResponse-lpaeActivationResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type LpaeActivationResponse_lpaeActivationResult = INTEGER;

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const LpaeActivationResponse_lpaeActivationResult_ok: LpaeActivationResponse_lpaeActivationResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const ok: LpaeActivationResponse_lpaeActivationResult = LpaeActivationResponse_lpaeActivationResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const LpaeActivationResponse_lpaeActivationResult_notSupported: LpaeActivationResponse_lpaeActivationResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const notSupported: LpaeActivationResponse_lpaeActivationResult = LpaeActivationResponse_lpaeActivationResult_notSupported; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LpaeActivationResponse_lpaeActivationResult: $.ASN1Decoder<LpaeActivationResponse_lpaeActivationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LpaeActivationResponse_lpaeActivationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LpaeActivationResponse_lpaeActivationResult (el: _Element): LpaeActivationResponse_lpaeActivationResult {
    if (!_cached_decoder_for_LpaeActivationResponse_lpaeActivationResult) { _cached_decoder_for_LpaeActivationResponse_lpaeActivationResult = $._decodeInteger; }
    return _cached_decoder_for_LpaeActivationResponse_lpaeActivationResult(el);
}

let _cached_encoder_for_LpaeActivationResponse_lpaeActivationResult: $.ASN1Encoder<LpaeActivationResponse_lpaeActivationResult> | null = null;

/**
 * @summary Encodes a(n) LpaeActivationResponse_lpaeActivationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LpaeActivationResponse_lpaeActivationResult, encoded as an ASN.1 Element.
 */
export
function _encode_LpaeActivationResponse_lpaeActivationResult (value: LpaeActivationResponse_lpaeActivationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LpaeActivationResponse_lpaeActivationResult) { _cached_encoder_for_LpaeActivationResponse_lpaeActivationResult = $._encodeInteger; }
    return _cached_encoder_for_LpaeActivationResponse_lpaeActivationResult(value, elGetter);
}


/* eslint-enable */
