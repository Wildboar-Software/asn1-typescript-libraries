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



/**
 * @summary RetryValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetryValue  ::=  CHOICE -- used in RouteSelect Request service
 * {    noListAvailable            [0] IMPLICIT BOOLEAN,
 *     noCountAvailable         [1] IMPLICIT BOOLEAN,
 *     retryCount             [2] IMPLICIT INTEGER }
 * ```
 */
export
type RetryValue =
    { noListAvailable: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { noCountAvailable: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { retryCount: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RetryValue: $.ASN1Decoder<RetryValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetryValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetryValue (el: _Element): RetryValue {
    if (!_cached_decoder_for_RetryValue) { _cached_decoder_for_RetryValue = $._decode_inextensible_choice<RetryValue>({
    "CONTEXT 0": [ "noListAvailable", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 1": [ "noCountAvailable", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 2": [ "retryCount", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_RetryValue(el);
}

let _cached_encoder_for_RetryValue: $.ASN1Encoder<RetryValue> | null = null;

/**
 * @summary Encodes a(n) RetryValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetryValue, encoded as an ASN.1 Element.
 */
export
function _encode_RetryValue (value: RetryValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetryValue) { _cached_encoder_for_RetryValue = $._encode_choice<RetryValue>({
    "noListAvailable": $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER),
    "noCountAvailable": $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER),
    "retryCount": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_RetryValue(value, elGetter);
}


/* eslint-enable */
